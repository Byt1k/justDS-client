import styles from '@/styles/home.module.scss'
import Header from '@/components/Header'
import Link from 'next/link'
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {useEffect, useState} from "react"
import Footer from '@/components/Footer'
import {Link as ScrollTo} from "react-scroll";
import Cases from "@/components/Cases";
import Blog from "@/components/Blog";
import {GetStaticProps, NextPage} from "next";
import {PostType} from "@/types";
import {Api} from "@/api";

type HomeProps = {
    posts: PostType[]
}

const Home:NextPage<HomeProps> = ({posts}) => {
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
            background: '/bg0.png',
            backgroundText: 'Дизайн и разработка',
            type: 'LANDING',
            title: 'Сайт к юбилею компании',
            url: '',
            linkText: 'Аптека «Ригла»',
            menuColor: 'rgba(106, 155, 251, .6)'
        },
        {
            background: '/bg1.png',
            backgroundText: 'Дизайн и разработка',
            type: 'LANDING',
            title: 'ДИЗАЙН И РАЗРАБОТКА',
            url: '',
            linkText: 'МТС',
            menuColor: 'rgba(227, 93, 91, .6)'
        },
        {
            background: '/bg2.png',
            backgroundText: 'Дизайн и разработка',
            type: 'WEBSITE',
            title: 'ДИЗАЙН И РАЗРАБОТКА',
            url: '',
            linkText: 'Made in Russia',
            menuColor: 'rgba(236, 56, 188, .5)'
        },
        {
            background: '/bg3.png',
            backgroundText: 'Дизайн и разработка',
            type: 'MOBILE',
            title: 'ДИЗАЙН И РАЗРАБОТКА',
            url: '',
            linkText: 'Happy Delivery',
            menuColor: 'rgba(219, 153, 81, .6)'
        },
        {
            background: '/bg4.png',
            backgroundText: 'Дизайн и разработка',
            type: 'ИТ-КОНСАЛТИНГ',
            title: 'Стратегия Цифровой трансформации',
            url: '',
            linkText: 'Проект',
            menuColor: 'rgba(113, 172, 128, .6)'
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
            <main className={styles.wrapper} style={{background: `#f5f5f5 url(${slides[activeSlideIndex].background})`}}>
                <section className={styles.main}>
                    <Header/>
                    <div className={styles.menu} style={{background: slides[activeSlideIndex].menuColor}}>
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
                                <p className={styles.type}>{slides[activeSlideIndex].type}</p>
                                <p className={styles.title}>{slides[activeSlideIndex].title}</p>
                                {activeSlideIndex === 0 && <div className={styles.rigla}>
                                    <img src="/1.png" alt="medicine" className={styles.rigla__main}/>
                                    <img src="/pill1.png" alt="pill" className={styles.pill1}/>
                                    <img src="/pill2.png" alt="pill" className={styles.pill2}/>
                                    <img src="/pill3.png" alt="pill" className={styles.pill3}/>
                                    <img src="/pill4.png" alt="pill" className={styles.pill4}/>
                                    <img src="/pill5.png" alt="pill" className={styles.pill5}/>
                                </div>}
                                {activeSlideIndex === 1 && <div className={styles.mts}>
                                    <img src="/2.png" alt="mockup" className={styles.mts__main}/>
                                    <img src="/ball2-1.png" alt="ball" className={styles.mts__ball1}/>
                                    <img src="/ball2-2.png" alt="ball" className={styles.mts__ball2}/>
                                    <img src="/ball2-3.png" alt="ball" className={styles.mts__ball3}/>
                                </div>}
                                {activeSlideIndex === 2 && <div className={styles.mir}>
                                    <img src="/3.png" alt="mockup" className={styles.mir__main}/>
                                    <img src="/3-1.png" alt="item" className={styles.mir__item1}/>
                                    <img src="/3-2.png" alt="item" className={styles.mir__item2}/>
                                    <img src="/3-3.png" alt="item" className={styles.mir__item3}/>
                                </div>}
                                {activeSlideIndex === 3 && <div className={styles.hd}>
                                    <img src="/4.png" alt="mockup" className={styles.hd__main}/>
                                    <img src="/4-1.png" alt="item" className={styles.hd__item1}/>
                                    <img src="/4-2.png" alt="item" className={styles.hd__item2}/>
                                    <img src="/4-3.png" alt="item" className={styles.hd__item3}/>
                                </div>}
                                {activeSlideIndex === 4 && <div className={styles.fit}>
                                    <img src="/5.png" alt="mockup" className={styles.fit__main}/>
                                    <img src="/ball5-1.png" alt="ball" className={styles.fit__ball1}/>
                                    <img src="/ball5-2.png" alt="ball" className={styles.fit__ball2}/>
                                    <img src="/ball5-3.png" alt="ball" className={styles.fit__ball3}/>
                                    <img src="/ball5-4.png" alt="ball" className={styles.fit__ball4}/>
                                </div>}
                                <Link href={slides[activeSlideIndex].url} className={styles.link}>
                                    {slides[activeSlideIndex].linkText}
                                    <img src="/arrow-go.svg" alt="arrow"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.services} id="main-services">
                    <div className={styles.container}>
                        <div className={styles.services__item}>
                            <p>web-разработка & дизайн</p>
                            <div>
                                <ScrollTo to="footer" smooth={true} duration={800}>Написать нам</ScrollTo>
                                <Link href="/portfolio">Портфолио</Link>
                            </div>
                        </div>
                        <div className={styles.services__item}>
                            <p>мобильная разработка</p>
                            <div>
                                <ScrollTo to="footer" smooth={true} duration={800}>Написать нам</ScrollTo>
                                <Link href="/portfolio">Портфолио</Link>
                            </div>
                        </div>
                        <div className={styles.services__item}>
                            <p>ит-консалтинг</p>
                            <div>
                                <ScrollTo to="footer" smooth={true} duration={800}>Написать нам</ScrollTo>
                                <Link href="/portfolio">Портфолио</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Cases className={styles.portfolio}/>
            <Blog posts={posts} className={styles.blog} title="Блог"/>
            <Footer/>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const {data: posts} = await Api().posts.getPopularPosts()
        return {props: {posts}}
    } catch (e) {
        console.log(e)
        return {props: {posts: []}}
    }
}

export default Home
