import styles from '@/styles/footer.module.scss'
import Link from "next/link";
import {Link as ScrollTo} from "react-scroll/modules";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Api} from "@/api";
import {ContactForm, ContactsType} from "@/types";
import {sendContactForm} from "@/api/contact"

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

    const initFormState: ContactForm = {
        values: {
            project: "",
            tel: ""
        },
        isSubmitting: false
    }

    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formState, setFormState] = useState<ContactForm>(initFormState)
    const {values, isSubmitting} = formState

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [e.target.name]: e.target.value
            }
        }))
    }

    const formSubmittedListener = () => {
        const interval = setInterval(() => {
            setFormSubmitted(false)
            clearInterval(interval)
        }, 5000)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormState((prev) => ({
            ...prev,
            isSubmitting: true
        }))

        await sendContactForm(values)

        setFormState(initFormState)
        setFormSubmitted(true)
        formSubmittedListener()
    }

    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.action}>
                <div className={styles.container}>
                    <div>
                        <h2><strong>??????????????????</strong> ?? ????????</h2>
                        <p>
                            ?????????????????????? ?????????? ?????? ???????????????? ?????? ???? ?????????? &nbsp;
                            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                        </p>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <p className={styles.form__title}>?????????????? ???????????? ???????????? ????????????!</p>
                        <div className={styles.form__fields}>
                            <input type="text" placeholder="???????????????? ??????????????" required={true} name="project"
                                   value={values.project} onChange={handleChange} autoComplete="off"/>
                            <input type="text" placeholder="?????????? ????????????????" required={true} name="tel"
                                   value={values.tel} onChange={handleChange} autoComplete="off"/>
                        </div>
                        <p className={styles.form__info}>?????????????????? ??????????, ???? ???????????????????????? ???? ?????????????????? ???????????????????????? ????????????</p>
                        <button disabled={isSubmitting}>??????????????????</button>
                        <div className={`${styles.form__submitted} ${formSubmitted && styles.active}`}>
                            <img src="/yes.png" alt="success"/>
                            <p>?????????? ????????????????????! ???? ???????????????? ?? ???????? ?? ?????????????????? ??????????.</p>
                        </div>
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
                        <p>??????????????</p>
                        <a href={`tel:${contacts.tel}`}>{contacts.tel}</a>
                    </div>
                </div>
            </div>
            <div className={styles.nav}>
                <div className={styles.container}>
                    <nav>
                        <Link href="/portfolio">???????? ??????????</Link>
                        <Link href="/services">????????????</Link>
                        <ScrollTo to="footer" smooth={true} duration={800} className={styles.header__btn}>
                        ????????????????</ScrollTo>
                        <Link href="/posts">????????</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;