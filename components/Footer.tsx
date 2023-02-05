import styles from '@/styles/footer.module.scss'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.action}>
                <div className={styles.container}>
                    <div>
                        <h2><strong>Связаться</strong> с нами</h2>
                        <p>
                            Используйте форму или напишите нам на почту
                            <a href="mailto:just@ds.ru"> just@ds.ru</a>
                        </p>
                    </div>
                    <form className={styles.form}>
                        <p className={styles.form__title}>Давайте начнем проект вместе!</p>
                        <div className={styles.form__fields}>
                            <input type="text" placeholder="Описание проекта"/>
                            <input type="text" placeholder="Номер телефона"/>
                        </div>
                        <p className={styles.form__info}>Отправляя форму, вы соглашаетесь на обработку персональных данных</p>
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
            <div className={styles.contacts}>
                <div className={styles.container}>
                    <Link href='/'>
                        <img src="/logo-white.svg" alt="Just DS"/>
                    </Link>
                    <div className={styles.contacts__item}>
                        <p>E-mail</p>
                        <a href="mailto:just@ds.ru">just@ds.ru</a>
                    </div>
                    <div className={styles.contacts__item}>
                        <p>Телефон</p>
                        <a href="tel:+7 954 954 43-23">+7 954 954 43-23</a>
                    </div>
                </div>
            </div>
            <div className={styles.nav}>
                <div className={styles.container}>
                    <nav>
                        <Link href="/portfolio">Наши кейсы</Link>
                        <Link href="/services">Услуги</Link>
                        <Link href="/contacts">Контакты</Link>
                        <Link href="/blog">Блог</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;