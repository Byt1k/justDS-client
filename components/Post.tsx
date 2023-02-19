import React, {FC, useEffect, useState} from 'react';
import Link from "next/link";
import styles from "@/styles/post.module.scss";
import {PostType, TagType} from "@/types";
import {Api, serverUrl} from "@/api";

const Post: FC<{post: PostType}> = ({post}) => {
    const [allTags, setAllTags] = useState<TagType[] | []>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tags = await Api().posts.getTags()
                setAllTags(tags)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    return (
        <Link href={`/posts/${post.id}`} className={styles.post}>
            <div className={styles.post__img}>
                <img src={serverUrl + post.attributes.cover.data.attributes.url} alt={post.attributes.title}/>
                <div/>
                <div/>
            </div>
            <div className={styles.post__info}>
                <div className={styles.tags}>
                    {post.attributes.tags.data?.map(({attributes}) => (
                        <span key={attributes.key}>{allTags.map(tag => (
                            tag.attributes.key === attributes.key && tag.attributes.value
                        ))}</span>
                    ))}
                </div>
                <div className={styles.views}>
                    <img src="/eye.svg" alt="eye"/>
                    {/*{post.attributes.views}*/}
                    20
                </div>
            </div>
            <p className={styles.post__title}>{post.attributes.title}</p>
            <p className={styles.post__text}>{post.attributes.previewText}</p>
        </Link>
    );
};

export default Post;