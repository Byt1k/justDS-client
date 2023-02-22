import Header from "@/components/Header";
import styles from "@/styles/portfolio.module.scss"
import Footer from "@/components/Footer";
import Link from "next/link";
import {Api, serverUrl} from "@/api";
import {GetStaticProps, NextPage} from "next";
import {PaginationType, ProjectType} from "@/types";
import ProjectCard from "@/components/ProjectCard";

type PortfolioProps = {
    projects: ProjectType[],
    meta: {
        pagination: PaginationType
    }
}

const Portfolio: NextPage<PortfolioProps> = ({projects, meta}) => {

    return (
        <>
            <div className={styles.portfolio}>
                <Header/>
                <div className={styles.container}>
                    <h2>Наши <strong>кейсы</strong></h2>
                    <div className={styles.portfolio__grid}>
                        {projects?.map(project => (
                            <ProjectCard project={project} className={styles.portfolio__item} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const {data, meta} = await Api().projects.getAllProjects()
        return {props: {projects: data, meta}}
    }
    catch (e) {
        console.log(e)
        return {props: {projects: [], meta: {}}}
    }
}

export default Portfolio;