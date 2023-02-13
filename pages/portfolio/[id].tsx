import Header from "@/components/Header"
import Footer from "@/components/Footer"
import styles from "@/styles/project.module.scss"
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import Share from "@/components/Share";

const Project = () => {
    //todo: project should be from api
    const project = {
        id: 1,
        date: '22.06.2022',
        title: 'Сайт для сетевого автосервиса «STACHKA»',
        src: '/project1.png'
    }

    return (
        <>
            <section className={styles.project}>
                <Header/>
                <div className={styles.container}>
                    <Breadcrumbs>
                        <Link href='/'>Главная</Link>
                        <Link href='/portfolio'>Портфолио</Link>
                        <p>{project.title}</p>
                    </Breadcrumbs>
                    <div className={styles.project__info}>
                        <p>Опубликовано: <strong>{project.date}</strong></p>
                        <Share />
                    </div>
                    <p className={styles.project__title}>{project.title}</p>
                    <img src={project.src} alt={project.title} className={styles.project__img}/>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Project;