import styles from '@/styles/home.module.scss'
import Header from '@/components/Header'
import Link from 'next/link'
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {useEffect, useState} from "react"
import Footer from '@/components/Footer'



const Home = () => {

    const [rotationProgressbar, setRotationProgressbar] = useState(-0.5)
    const [valueProgressbar, setValueProgressbar] = useState(0)
    const [transitionProgressbar, setTransitionProgressbar] = useState(0.5)

    const [activeSlideIndex, setActiveSlideIndex] = useState(0)


    useEffect(() => {
        let value = valueProgressbar
        const intervalId = setInterval(() => {
            value = value + 0.1
            setValueProgressbar(() => {
                if (value <= 20) {
                    setTransitionProgressbar(0.5)
                    return value
                } else {
                    setTransitionProgressbar(0)
                    setRotationProgressbar(rotationProgressbar + 0.2 < 0.5 ? rotationProgressbar + 0.2 : -0.5)
                    return 0
                }
            })
        }, 100)
        return () => clearInterval(intervalId)
    }, [valueProgressbar])

    useEffect(() => {
        setTransitionProgressbar(0)
        setValueProgressbar(0)
        setActiveSlideIndex(getActiveSlide() as number)
    }, [rotationProgressbar])

    const slides = [
        {
            backgroundColor: 'linear-gradient(110.56deg, #54E97E 0%, #6A9BFB 70.99%)',
            backgroundText: 'Дизайн и разработка'
        },
        {
            backgroundColor: 'linear-gradient(110.56deg, #54E9E0 0%, #C46AFB 70.99%)',
            backgroundText: 'Технический аудит'
        },
        {
            backgroundColor: 'linear-gradient(110.56deg, #54E97E 0%, #6A9BFB 70.99%)',
            backgroundText: 'Дизайн и разработка'
        },
        {
            backgroundColor: 'linear-gradient(110.56deg, #54E9E0 0%, #C46AFB 70.99%)',
            backgroundText: 'Технический аудит'
        },
        {
            backgroundColor: 'linear-gradient(110.56deg, #54129E0 0%, #C42AFB 70.99%)',
            backgroundText: 'аудит'
        }
    ]

    const getActiveSlide = () => {
        if (rotationProgressbar >= -0.5 && rotationProgressbar < -0.3) {
            return 0
        }
        if (rotationProgressbar >= -0.3 && rotationProgressbar < -0.1) {
            return 1
        }
        if (rotationProgressbar >= -0.1 && rotationProgressbar < 0.1) {
            return 2
        }
        if (rotationProgressbar >= 0.1 && rotationProgressbar < 0.3) {
            return 3
        }
        if (rotationProgressbar >= 0.3 && rotationProgressbar < 0.5) {
            return 4
        }
    }

    return (
        <>
            <main className={styles.main} style={{background: slides[activeSlideIndex].backgroundColor}}>
                <Header/>
                <div className={styles.menu}>
                    <Link href='/portfolio' className={styles.link}>
                        <p>Проекты</p>
                    </Link>
                </div>
                <a href="#" className={styles.scroll}>
                    <img src="/scroll-down.svg" alt="scroll-down"/>
                </a>
                <p className={styles.backgroundTitle}>Дизайн и разработка</p>
                <div className={styles.container}>
                    <div className={styles.slider}>
                        <CircularProgressbar value={valueProgressbar} className={styles.slider__progressbar}
                                             strokeWidth={0.2} styles={buildStyles({
                            rotation: rotationProgressbar,
                            pathTransitionDuration: transitionProgressbar,
                            pathColor: `#fff`,
                            trailColor: 'rgba(255, 255, 255, 0.5)',
                            backgroundColor: '#3e98c7',
                        })}
                        />;
                        <div className={styles.dots}>
                            <div className={`${styles.dots__item} ${getActiveSlide() === 0 && styles.active}`}
                                 onClick={() => setRotationProgressbar(-0.5)}
                            />
                            <div className={`${styles.dots__item} ${getActiveSlide() === 1 && styles.active}`}
                                 onClick={() => setRotationProgressbar(-0.3)}
                            />
                            <div className={`${styles.dots__item} ${getActiveSlide() === 2 && styles.active}`}
                                 onClick={() => setRotationProgressbar(-0.1)}
                            />
                            <div className={`${styles.dots__item} ${getActiveSlide() === 3 && styles.active}`}
                                 onClick={() => setRotationProgressbar(0.1)}
                            />
                            <div className={`${styles.dots__item} ${getActiveSlide() === 4 && styles.active}`}
                                 onClick={() => setRotationProgressbar(0.3)}
                            />
                        </div>
                        <div className={styles.slider__content}>
                            <p className={styles.type}>LANDING</p>
                            <p className={styles.title}>Сайт к юбилею компании</p>
                            <div className={styles.rigla}>
                                <img src="/1.png" alt="medicine" className={styles.rigla__main}/>
                                <img src="/pill1.png" alt="pill" className={styles.pill1}/>
                                <img src="/pill2.png" alt="pill" className={styles.pill2}/>
                                <img src="/pill3.png" alt="pill" className={styles.pill3}/>
                                <img src="/pill4.png" alt="pill" className={styles.pill4}/>
                                <img src="/pill5.png" alt="pill" className={styles.pill5}/>
                            </div>
                            <Link href='#' className={styles.link}>
                                Аптека «Ригла»
                                <img src="/arrow-go.svg" alt="arrow"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <section className={styles.services} style={{background: '#f5f5f5 url(/services0.png) no-repeat center top / cover'}}>
                <div className={styles.container}>
                    <div className={styles.services__item}>
                        <p>web-разработка & дизайн</p>
                        <div>
                            <a href="#">Написать нам</a>
                            <Link href="/portfolio">Портфолио</Link>
                        </div>
                    </div>
                    <div className={styles.services__item}>
                        <p>мобильная разработка</p>
                        <div>
                            <a href="#">Написать нам</a>
                            <Link href="/portfolio">Портфолио</Link>
                        </div>
                    </div>
                    <div className={styles.services__item}>
                        <p>ит-консалтинг</p>
                        <div>
                            <a href="#">Написать нам</a>
                            <Link href="/portfolio">Портфолио</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.portfolio}>
                <div className={styles.container}>
                    <h2>Наши <strong>кейсы</strong></h2>
                    <div className={styles.portfolio__grid}>
                        <div className={styles.portfolio__item} style={{backgroundImage: 'url(/p1.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </div>
                        <div className={styles.portfolio__item} style={{backgroundImage: 'url(/p2.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </div>
                        <div className={styles.portfolio__item} style={{backgroundImage: 'url(/p3.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </div>
                        <div className={styles.portfolio__item} style={{backgroundImage: 'url(/p4.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </div>
                        <div className={styles.portfolio__item}>
                            <h3>Единая платформа</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Quis dolor libero semper tempus cursus dapibus morbi amet feugiat. Elementum nulla adipiscing.</p>
                            <Link href='/#'>
                                <img src="/portfolio-arrow.svg" alt="arrow"/>
                            </Link>
                        </div>
                        <div className={styles.portfolio__item} style={{backgroundImage: 'url(/p6.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </div>
                        <div className={styles.portfolio__item}>
                            <h3>Единая платформа</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Quis dolor libero semper tempus cursus dapibus morbi amet feugiat. Elementum nulla adipiscing.</p>
                            <Link href='/#'>
                                <img src="/portfolio-arrow.svg" alt="arrow"/>
                            </Link>
                        </div>
                        <div className={styles.portfolio__item} style={{backgroundImage: 'url(/p8.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </div>
                        <div className={styles.portfolio__item} style={{backgroundImage: 'url(/p9.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </div>
                        <div className={styles.portfolio__item}>
                            <h3>Единая платформа</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <Link href='/#'>
                                <img src="/portfolio-arrow.svg" alt="arrow"/>
                            </Link>
                        </div>
                        <div className={styles.portfolio__item} style={{backgroundImage: 'url(/p11.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </div>
                        <div className={styles.portfolio__item} style={{backgroundImage: 'url(/p12.png)'}}>
                            <p>Кейс</p>
                            <h3>Сайт для сетевого автосервиса «STACHKA»</h3>
                        </div>
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
            <section className={styles.blog}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h2>Блог</h2>
                        <Link href='/blog'>
                            Все записи
                            <img src="/title-arrow.svg" alt="arrow"/>
                        </Link>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.blog__item}>
                            <div className={styles.blog__item__img}>
                                <img src="/post1.png" alt="post1"/>
                                <div/>
                                <div/>
                            </div>
                            <div className={styles.blog__item__info}>
                                <div className={styles.hashtags}>
                                    <span>#it_консалтинг</span>
                                    <span>#web_дизайн</span>
                                </div>
                                <div className={styles.views}>
                                    <img src="/eye.svg" alt="eye"/>
                                    20
                                </div>
                            </div>
                            <p className={styles.blog__item__title}>Создаем визуал для проектов любого объема и сложности </p>
                            <p className={styles.blog__item__text}>История о человеке, который смертельно боялся пуговиц. Не в силах жить с этим недугом, решает покончить жизнь самоубийством. Но это ему не удаётся.</p>
                        </div>
                        <div className={styles.blog__item}>
                            <div className={styles.blog__item__img}>
                                <img src="/post2.png" alt="post2"/>
                                <div/>
                                <div/>
                            </div>
                            <div className={styles.blog__item__info}>
                                <div className={styles.hashtags}>
                                    <span>#it_консалтинг</span>
                                    <span>#web_дизайн</span>
                                </div>
                                <div className={styles.views}>
                                    <img src="/eye.svg" alt="eye"/>
                                    20
                                </div>
                            </div>
                            <p className={styles.blog__item__title}>Создаем визуал для проектов любого объема и сложности </p>
                            <p className={styles.blog__item__text}>История о человеке, который смертельно боялся пуговиц. Не в силах жить с этим недугом, решает покончить жизнь самоубийством. Но это ему не удаётся.</p>
                        </div>
                        <div className={styles.blog__item}>
                            <div className={styles.blog__item__img}>
                                <img src="/post3.png" alt="post3"/>
                                <div/>
                                <div/>
                            </div>
                            <div className={styles.blog__item__info}>
                                <div className={styles.hashtags}>
                                    <span>#it_консалтинг</span>
                                    <span>#web_дизайн</span>
                                </div>
                                <div className={styles.views}>
                                    <img src="/eye.svg" alt="eye"/>
                                    20
                                </div>
                            </div>
                            <p className={styles.blog__item__title}>Создаем визуал для проектов любого объема и сложности </p>
                            <p className={styles.blog__item__text}>История о человеке, который смертельно боялся пуговиц. Не в силах жить с этим недугом, решает покончить жизнь самоубийством. Но это ему не удаётся.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home
