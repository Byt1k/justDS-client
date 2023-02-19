import Header from "@/components/Header"
import Footer from "@/components/Footer"
import styles from "@/styles/project.module.scss"
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import Share from "@/components/Share";
import {Api, serverUrl} from "@/api";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IParams, ProjectType} from "@/types";
import dateToString from "@/utils/dateToString";

type ProjectProps = {
    project: ProjectType
}

const Project: NextPage<ProjectProps> = ({project}) => {

    return (
        <>
            <section className={styles.project}>
                <Header/>
                <div className={styles.container}>
                    <Breadcrumbs>
                        <Link href='/'>Главная</Link>
                        <Link href='/portfolio'>Портфолио</Link>
                        <p>{project.attributes.title}</p>
                    </Breadcrumbs>
                    <div className={styles.project__info}>
                        <p>Опубликовано: <strong>{dateToString(project.attributes.publishedAt)}</strong></p>
                        <Share/>
                    </div>
                    <p className={styles.project__title}>{project.attributes.title}</p>
                    <img src={serverUrl + project.attributes.presentation.data.attributes.url}
                         alt={project.attributes.title} className={styles.project__img}/>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const {data: projects} = await Api().projects.getAllProjects()

        const paths = projects?.map(project => ({
            params: {id: project.id.toString()}
        }))

        return {paths, fallback: false}
    } catch (e) {
        console.log(e)
        return {paths: [], fallback: false}
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    try {
        const {id} = params as IParams
        const {data: project} = await Api().projects.getProject(id)

        return {
            props: {project}
        }
    } catch (e) {
        console.log(e)
        return {props: { project: [] }}
    }
}

export default Project;