import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from '@/styles/single.module.scss'
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import Share from "@/components/Share";
import Blog from "@/components/Blog";
import Cases from "@/components/Cases";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IParams, PostType} from "@/types";
import {Api, serverUrl} from "@/api";
import dateToString from "@/utils/dateToString";
import ReactMarkdown from 'react-markdown';

type SingleProps = {
    posts: PostType[],
    currentPost: PostType
}

const Single:NextPage<SingleProps> = ({posts, currentPost}) => {
    return (
        <>
            <section className={styles.single}>
                <Header/>
                <div className={styles.container}>
                    <Breadcrumbs>
                        <Link href='/'>Главная</Link>
                        <Link href='/posts'>Блог</Link>
                        <p>{currentPost.attributes.title}</p>
                    </Breadcrumbs>
                    <div className={styles.single__info}>
                        <div className={styles.top}>
                            <p>Автор: {currentPost.attributes.author.data.attributes.fullName}</p>
                            <p>Время чтения <strong>{currentPost.attributes.readingTime}</strong>.</p>
                        </div>
                        <p className={styles.single__title}>{currentPost.attributes.title}</p>
                        <div className={styles.bottom}>
                            <p className={styles.single__date}>
                                Опубликовано: <strong>{dateToString(currentPost.attributes.publishedAt)}</strong></p>
                            <p className={styles.single__views}>Просмотры: <strong>{20}</strong></p>
                            <Share className={styles.single__share}/>
                        </div>
                    </div>
                    <div className={styles.single__source}>
                        <img src={serverUrl + currentPost.attributes.cover.data.attributes.url} alt="Cover"/>
                        {currentPost.attributes.source && <p>Источник: {currentPost.attributes.source}</p>}
                    </div>
                    <ReactMarkdown children={currentPost.attributes.content} className={styles.single__content}/>
                    <Blog posts={posts} title="Другие статьи" className={styles.blog}/>
                    <Cases className={styles.portfolio}/>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const {data: posts} = await Api().posts.getPosts()

        const paths = posts?.map(post => ({
            params: {id: post.id.toString()}
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
        const {data: currentPost} = await Api().posts.getPost(id)
        const {data: posts} = await Api().posts.getPopularPosts()

        return {
            props: {currentPost, posts}
        }
    } catch (e) {
        console.log(e)
        return {props: { currentPost: {}, posts: [] }}
    }
}

export default Single