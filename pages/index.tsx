import styles from '@/styles/home.module.scss'
import Header from '@/components/Header'
import Link from 'next/link'
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {useEffect, useState} from "react"
import Footer from '@/components/Footer'
import {Link as ScrollTo, animateScroll as scroll} from "react-scroll";
import Cases from "@/components/Cases";
import Blog from "@/components/Blog";

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
            backgroundColor: 'linear-gradient(110.56deg, #54E29E0 0%, #C42AFB 70.99%)',
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

    //todo: posts should be from api
    const posts = [
        {
            id: 1,
            img: '/post1.png',
            title: 'Создаем визуал для проектов любого объема и сложности',
            text: 'История о человеке, который смертельно боялся пуговиц. Не в силах жить с этим недугом, решает покончить жизнь самоубийством. Но это ему не удаётся.',
            tags: ['consult'],
            views: 10
        },
        {
            id: 2,
            img: '/post2.png',
            title: 'Создаем визуал для проектов любого объема и сложности',
            text: 'История о человеке, который смертельно боялся пуговиц. Не в силах жить с этим недугом, решает покончить жизнь самоубийством. Но это ему не удаётся.',
            tags: ['consult'],
            views: 10
        },
        {
            id: 3,
            img: '/post3.png',
            title: 'Создаем визуал для проектов любого объема и сложности',
            text: 'История о человеке, который смертельно боялся пуговиц. Не в силах жить с этим недугом, решает покончить жизнь самоубийством. Но это ему не удаётся.',
            tags: ['design'],
            views: 10
        }
    ]

    return (
        <>
            <main className={styles.main} style={{background: slides[activeSlideIndex].backgroundColor}}>
                <Header/>
                <div className={styles.menu}>
                    <Link href='/portfolio' className={styles.link}>
                        <p>Проекты</p>
                    </Link>
                </div>
                <ScrollTo to="main-services" smooth={true} duration={800} className={styles.scroll}>
                    <img src="/scroll-down.svg" alt="scroll-down"/>
                </ScrollTo>

                <p className={styles.backgroundTitle}>{slides[activeSlideIndex].backgroundText}</p>
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
                        <div className={styles.slider__linearProgressbar}>
                            <div style={{width: `${valueProgressbar * 5}%`}}/>
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
            <section id="main-services" className={styles.services}
                     style={{background: '#f5f5f5 url(/services0.png) no-repeat center top / cover'}}>
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
            <Cases className={styles.portfolio}/>
            <Blog posts={posts} className={styles.blog} title="Блог"/>
            <Footer />
        </>
    )
}

export default Home
