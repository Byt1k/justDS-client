import styles from '@/styles/footer.module.scss'
import Link from "next/link";
import {Link as ScrollTo} from "react-scroll/modules";
import {useEffect, useState} from "react";
import {Api} from "@/api";
import {ContactsType} from "@/types";

const Footer = () => {
    const [contacts, setContacts] = useState<ContactsType>({email: '', tel: ''})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const contacts = await Api().interface.getContacts()
                setContacts(contacts)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.action}>
                <div className={styles.container}>
                    <div>
                        <h2><strong>Связаться</strong> с нами</h2>
                        <p>
                            Используйте форму или напишите нам на почту &nbsp;
                            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
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
                    <Link href='/' className={styles.contacts__logo}>
                        <img src="/logo-white.svg" alt="Just DS"/>
                    </Link>
                    <div className={styles.contacts__item}>
                        <p>E-mail</p>
                        <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                    </div>
                    <div className={styles.contacts__item}>
                        <p>Телефон</p>
                        <a href={`tel:${contacts.tel}`}>{contacts.tel}</a>
                    </div>
                </div>
            </div>
            <div className={styles.nav}>
                <div className={styles.container}>
                    <nav>
                        <Link href="/portfolio">Наши кейсы</Link>
                        <Link href="/services">Услуги</Link>
                        <ScrollTo to="footer" smooth={true} duration={800} className={styles.header__btn}>
                        Контакты</ScrollTo>
                        <Link href="/posts">Блог</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;