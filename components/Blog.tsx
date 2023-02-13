import React, {FC} from 'react';
import styles from "@/styles/blog.module.scss";
import Link from "next/link";
import {PostType} from "@/types";
import Post from "@/components/Post";

type BlogProps = {
    posts: PostType[],
    className?: string,
    title: string
}


const Blog: FC<BlogProps> = ({posts, className, title}) => {
    return (
        <section className={`${styles.blog} ${className}`}>
            <div className={styles.container}>
                <div className={styles.blog__title}>
                    <h2>{title}</h2>
                    <Link href='/posts'>
                        Все записи
                        <img src="/title-arrow.svg" alt="arrow"/>
                    </Link>
                </div>
                <div className={styles.blog__wrapper}>
                    {posts.map(post => (
                        <Post post={post}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;