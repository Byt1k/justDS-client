import styles from "@/styles/cases.module.scss"
import Link from "next/link"

const Cases = ({className = ''}) => {
    //todo: id should be from api
    const id = 1;

    return (
        <section className={`${styles.portfolio} ${className}`}>
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
                    <div className={styles.portfolio__item}>
                        <h3>Единая платформа</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Quis dolor libero semper tempus cursus dapibus morbi amet feugiat. Elementum nulla adipiscing.</p>
                        <Link href='/#'>
                            <img src="/portfolio-arrow.svg" alt="arrow"/>
                        </Link>
                    </div>
                    <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p6.png)'}}>
                        <p>Кейс</p>
                        <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                    </Link>
                    <div className={styles.portfolio__item}>
                        <h3>Единая платформа</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Quis dolor libero semper tempus cursus dapibus morbi amet feugiat. Elementum nulla adipiscing.</p>
                        <Link href='/#'>
                            <img src="/portfolio-arrow.svg" alt="arrow"/>
                        </Link>
                    </div>
                    <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p8.png)'}}>
                        <p>Кейс</p>
                        <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                    </Link>
                    <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p9.png)'}}>
                        <p>Кейс</p>
                        <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                    </Link>
                    <div className={styles.portfolio__item}>
                        <h3>Единая платформа</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <Link href='/#'>
                            <img src="/portfolio-arrow.svg" alt="arrow"/>
                        </Link>
                    </div>
                    <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p11.png)'}}>
                        <p>Кейс</p>
                        <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                    </Link>
                    <Link href={`/portfolio/${id}`} className={styles.portfolio__item} style={{backgroundImage: 'url(/p12.png)'}}>
                        <p>Кейс</p>
                        <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                    </Link>
                    <div className={styles.portfolio__item}>
                        <h3>Единая платформа</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Quis dolor libero semper tempus cursus dapibus morbi amet feugiat. Elementum nulla adipiscing.</p>
                        <Link href='/#'>
                            <img src="/portfolio-arrow.svg" alt="arrow"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cases;