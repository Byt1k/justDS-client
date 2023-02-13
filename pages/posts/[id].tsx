import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from '@/styles/single.module.scss'
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import Share from "@/components/Share";
import Blog from "@/components/Blog";
import Cases from "@/components/Cases";

const Single = () => {
    //todo: post should be from api
    const post = {
        id: 1,
        img: '/post1.png',
        title: 'Создаем визуал для проектов любого объема и сложности',
        text: 'История о человеке, который смертельно боялся пуговиц. Не в силах жить с этим недугом, решает покончить жизнь самоубийством. Но это ему не удаётся.',
        tags: ['consult'],
        views: 20,
        author: 'Марина Колашникова',
        readingTime: '10 мин',
        date: '22.06.2022'
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
            tags: ['consult', 'design'],
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
            <section className={styles.single}>
                <Header/>
                <div className={styles.container}>
                    <Breadcrumbs>
                        <Link href='/'>Главная</Link>
                        <Link href='/posts'>Блог</Link>
                        <p>{post.title}</p>
                    </Breadcrumbs>
                    <div className={styles.single__info}>
                        <div className={styles.top}>
                            <p>Автор: {post.author}</p>
                            <p>Время чтения <strong>{post.readingTime}</strong>.</p>
                        </div>
                        <p className={styles.single__title}>{post.title}</p>
                        <div className={styles.bottom}>
                            <p className={styles.single__date}>Опубликовано: <strong>{post.date}</strong></p>
                            <p className={styles.single__views}>Просмотры: <strong>{post.views}</strong></p>
                            <Share className={styles.single__share}/>
                        </div>
                    </div>

                    {/* todo: strapi */}
                    <strong style={{color: 'red'}}>Разметка статьи</strong>

                    <Blog posts={posts} title="Другие статьи" className={styles.blog}/>
                    <Cases className={styles.portfolio}/>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Single