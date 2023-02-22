import styles from "@/styles/cases.module.scss"
import {useEffect, useState} from "react";
import {Api} from "@/api";
import {CommonBlock, ProjectType} from "@/types";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

const Cases = ({className = ''}) => {
    const [items, setItems] = useState<Array<any>>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let items: Array<ProjectType | CommonBlock> = []
                const {data: projects} = await Api().projects.getPopularProjects()
                const {data: blocks} = await Api().projects.getCommonBlocks()

                items = projects.map(p => ({
                    ...p,
                    type: 'project'
                }))
                items.splice(4, 0, blocks[0])
                items.splice(6, 0, blocks[1])
                items.splice(9, 0, blocks[2])
                items.splice(12, 0, blocks[3])

                setItems(items)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    return (
        <section className={`${styles.portfolio} ${className}`}>
            <div className={styles.container}>
                <h2>Наши <strong>кейсы</strong></h2>
                <div className={styles.portfolio__grid}>
                    {items.map((item, index) => (
                        item.type === 'project'
                            ? <React.Fragment key={index}>
                                <ProjectCard project={item} className={styles.portfolio__item}/>
                            </React.Fragment>
                            : (
                                <div key={index} className={styles.portfolio__item}>
                                    <h3>{item.attributes.title}</h3>
                                    <p>{item.attributes.description}</p>
                                    <Link href={item.attributes.link}>
                                        <img src="/portfolio-arrow.svg" alt="arrow"/>
                                    </Link>
                                </div>
                            )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cases;