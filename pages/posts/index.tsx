import React, {useState} from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/posts.module.scss"
import Post from "@/components/Post";
import {GetStaticProps, NextPage} from "next";
import {PaginationType, PostType, TagType} from "@/types";
import {Api} from "@/api";

type PostsProps = {
    posts: PostType[],
    meta: {
        pagination: PaginationType
    },
    tags: TagType[]
}

const Posts: NextPage<PostsProps> = ({posts, meta, tags}) => {
    const [filterValue, setFilterValue] = useState<string[]>([])

    const changeFilterValue = (tag: string) => {
        if (filterValue.some(item => item === tag)) {
            setFilterValue(() => (
                filterValue.filter(item => item !== tag)
            ))
        } else {
            setFilterValue([
                ...filterValue,
                tag
            ])
        }
    }

    return (
        <>
            <section className={styles.posts}>
                <Header/>
                <div className={styles.container}>
                    <div className={styles.posts__title}>
                        <h2>Все статьи</h2>
                        <div className={styles.posts__filter}>
                            {tags?.map(tag => (
                                <button key={tag.attributes.key}
                                        className={filterValue.some(item => item === tag.attributes.key) ? styles.active : ''}
                                        onClick={() => changeFilterValue(tag.attributes.key)}>{tag.attributes.value}</button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.posts__grid}>
                        {posts?.map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const {data, meta} = await Api().posts.getPosts()
        const tags = await Api().posts.getTags()
        return {props: {posts: data, meta, tags}}
    } catch (e) {
        console.log(e)
        return {props: {posts: []}}
    }
}

export default Posts;