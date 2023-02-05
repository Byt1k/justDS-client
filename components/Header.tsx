import styles from '@/styles/header.module.scss'
import Link from "next/link"
import {useRouter} from "next/router";
import {useState} from "react";

const Header = () => {

    const router = useRouter()
    const isHomePage = router.asPath === '/'

    const [menuIsActive, setMenuIsActive] = useState(false)

    return (
        <header className={`${styles.header} ${styles.home}`}>
            <div className={styles.container}>
                <Link href='/'>
                    <img src={isHomePage ? '/logo-white.svg' : '/logo.svg'} alt="JUST DS"/>
                </Link>
                <button className={styles.header__btn}>Начать проект</button>
                <div className={styles.header__burger}>
                    <img src={isHomePage ? '/burger-white.svg' : '/burger.svg'}
                         onClick={() => setMenuIsActive(true)}
                         alt="burger"/>
                </div>
            </div>
            <div className={`${styles.overflow} ${menuIsActive && styles.overflow_active}`}>
                <nav className={`${styles.menu} ${menuIsActive && styles.menu_active}`}>
                    <div className={styles.menu__close}>
                        <img src="/close-menu.svg" onClick={() => setMenuIsActive(false)} alt="close"/>
                    </div>
                    <div className={styles.menu__basicItem}>
                        <Link href='/portfolio'>Портфолио</Link>
                        <p>наши работы</p>
                    </div>
                    <div className={styles.menu__basicItem}>
                        <Link href='/services'>Услуги</Link>
                        <p>что мы делаем</p>
                    </div>
                    <div className={styles.menu__basicItem}>
                        <Link href='/blog'>Блог</Link>
                        <p>мы пишем</p>
                    </div>
                    <div className={styles.menu__basicItem}>
                        <Link href='/contacts'>Контакты</Link>
                        <p>как нас найти</p>
                    </div>
                    <Link href='/services' className={styles.menu__additionalItem}>Разработка сайтов</Link>
                    <Link href='/services' className={styles.menu__additionalItem}>Управление продуктом</Link>
                    <Link href='/services' className={styles.menu__additionalItem}>Аналитика</Link>
                    <button className={styles.menu__btn}>Оставить заявку</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;