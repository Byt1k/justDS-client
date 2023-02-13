import React, {FC} from 'react';
import Link from "next/link";
import styles from "@/styles/post.module.scss";
import {PostType} from "@/types";

const Post: FC<{post: PostType}> = ({post}) => {
    //todo: tags should be from api
    const AllTags = [
        {key: 'consult', value: '#it_консалтинг'},
        {key: 'webDev', value: '#web_разработка'},
        {key: 'mobileDev', value: '#мобильная_разработка'},
        {key: 'design', value: '#web_дизайн'}
    ]

    return (
        <Link href={`/posts/${post.id}`} className={styles.post}>
            <div className={styles.post__img}>
                <img src={post.img} alt={post.title}/>
                <div/>
                <div/>
            </div>
            <div className={styles.post__info}>
                <div className={styles.tags}>
                    {post.tags?.map(key => (
                        <span key={key}>{AllTags.map(tag => (
                            tag.key === key && tag.value
                        ))}</span>
                    ))}
                </div>
                <div className={styles.views}>
                    <img src="/eye.svg" alt="eye"/>
                    {post.views}
                </div>
            </div>
            <p className={styles.post__title}>{post.title}</p>
            <p className={styles.post__text}>{post.text}</p>
        </Link>
    );
};

export default Post;