import Header from "@/components/Header";
import styles from "@/styles/portfolio.module.scss"
import Footer from "@/components/Footer";
import Link from "next/link";

const Portfolio = () => {
    //todo: id should be from api
    const id = 1;
    return (
        <>
            <div className={styles.portfolio}>
                <Header/>
                <div className={styles.container}>
                    <h2>Наши <strong>кейсы</strong></h2>
                    <div className={styles.portfolio__grid}>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p1.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p2.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p3.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p4.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p6-1.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p9.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p8.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p4.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p10.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p1.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p2.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p3.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p4.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p6-1.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p9.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p8.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p4.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                        <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p10.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Portfolio;