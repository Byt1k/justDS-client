import React, {useState} from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/posts.module.scss"
import Post from "@/components/Post";

const Posts = () => {

    //todo: tags should be from api
    const tags = [
        {key: 'consult', value: '#it_консалтинг'},
        {key: 'webDev', value: '#web_разработка'},
        {key: 'mobileDev', value: '#мобильная_разработка'},
        {key: 'design', value: '#web_дизайн'}
    ]

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

    //todo: posts should be from api
    const posts = [
        {
            id: 1,
            img: '/post1.png',
            title: 'Создаем визуал для проектов любого объема и сложности',
            text: 'История о человеке, который смертельно боялся пуговиц. Не в силах жить с этим недугом, решает покончить жизнь самоубийством. Но это ему не удаётся.',
            tags: ['consult'],
            views: 20
        },
        {
            id: 2,
            img: '/post2.png',
            title: 'Создаем визуал для проектов любого объема и сложности',
            text: 'История о человеке, который смертельно боялся пуговиц. Не в силах жить с этим недугом, решает покончить жизнь самоубийством. Но это ему не удаётся.',
            tags: ['consult', 'design'],
            views: 20
        },
        {
            id: 3,
            img: '/post3.png',
            title: 'Создаем визуал для проектов любого объема и сложности',
            text: 'История о человеке, который смертельно боялся пуговиц. Не в силах жить с этим недугом, решает покончить жизнь самоубийством. Но это ему не удаётся.',
            tags: ['design'],
            views: 20
        },
        {
            id: 4,
            img: '/post3.png',
            title: 'Создаем визуал для проектов любого объема и сложности',
            text: 'История о человеке, который смертельно боялся пуговиц. Не в силах жить с этим недугом, решает покончить жизнь самоубийством. Но это ему не удаётся.',
            tags: ['consult', 'design'],
            views: 20
        },
        {
            id: 5,
            img: '/post1.png',
            title: 'Создаем визуал для проектов любого объема и сложности',
            text: 'История о человеке, который смертельно боялся пуговиц. Не в силах жить с этим недугом, решает покончить жизнь самоубийством. Но это ему не удаётся.',
            tags: ['design'],
            views: 20
        }
    ]

    return (
        <>
            <section className={styles.posts}>
                <Header/>
                <div className={styles.container}>
                    <div className={styles.posts__title}>
                        <h2>Все статьи</h2>
                        <div className={styles.posts__filter}>
                            {tags.map(tag => (
                                <button key={tag.key}
                                        className={filterValue.some(item => item === tag.key) ? styles.active : ''}
                                        onClick={() => changeFilterValue(tag.key)}>{tag.value}</button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.posts__grid}>
                        {posts.map(post => (
                            <Post post={post} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Posts;