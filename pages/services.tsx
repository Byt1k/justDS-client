import Header from "@/components/Header"
import styles from '@/styles/services.module.scss'
import Cases from "@/components/Cases";
import Footer from "@/components/Footer";

const Services = () => {
    return (
        <>
            <main className={styles.servicesMain}>
                <Header/>
                <div className={styles.container}>
                    <h1>Создаем, развиваем и поддерживаем веб-сайты</h1>
                    <div className={styles.servicesMain__advantages}>
                        <div>20 штатных сотрудников</div>
                        <div>MYSQL</div>
                        <div>JS</div>
                        <div>React</div>
                    </div>
                    <p className={styles.servicesMain__text}>Обеспечиваем весь цикл разработки от прототипа до поддержки
                        готового продукта. Расширяем команды для долгосрочных проектов.</p>
                </div>
            </main>
            <section className={styles.work}>
                <div className={`${styles.container} ${styles.wrapper}`}>
                    <div className={styles.left}>
                        <h2>Что мы делаем?</h2>
                    </div>
                    <div className={styles.right}>
                        <p>Используя современные технологии и фреймворки, мы реализуем проекты любой сложности и
                            масштаба: посадочные страницы, корпоративные сайты, интернет-магазины, высоконагруженные
                            масштабируемые web-сервисы и порталы.</p>
                    </div>
                </div>
            </section>
            <section className={styles.stages}>
                <div className={`${styles.container} ${styles.wrapper}`}>
                    <div className={styles.left}>
                        <h2>Ключевые этапы</h2>
                    </div>
                    <div className={styles.right}>
                        <p className={styles.title}>Простота и открытость - это про нас</p>
                        <p>
                            Используя современные технологии и фреймворки, мы реализуем проекты любой сложности и
                            масштаба: посадочные страницы, корпоративные сайты, интернет-магазины, высоконагруженные
                            масштабируемые web-сервисы и порталы.
                            <br/><br/>
                            Используя современные технологии и фреймворки, мы реализуем проекты любой сложности и
                            масштаба: посадочные страницы, корпоративные сайты, интернет-магазины, высоконагруженные
                            масштабируемые web-сервисы и порталы.
                            <br/><br/>
                            Используя современные технологии и фреймворки, мы реализуем проекты любой сложности и
                            масштаба: посадочные страницы, корпоративные сайты, интернет-магазины, высоконагруженные
                            масштабируемые web-сервисы и порталы. Используя современные технологии и фреймворки, мы
                            реализуем проекты любой сложности и масштаба: посадочные страницы, корпоративные сайты,
                            интернет-магазины, высоконагруженные масштабируемые web-сервисы и порталы. проекты любой
                            сложности и масштаба: посадочные страницы, корпоративные сайты, интернет-магазины,
                            высоконагруженные масштабируемые web-сервисы и порталы.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.services}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <h2>Услуги</h2>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <p className={styles.title}>Разработка сайтов <br/>и сервисов</p>
                        </div>
                        <div className={styles.right}>
                            <p>Используя современные технологии и фреймворки, мы реализуем проекты любой сложности и
                                масштаба: посадочные страницы, корпоративные сайты, интернет-магазины, высоконагруженные
                                масштабируемые web-сервисы и порталы.</p>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <p className={styles.title}>Адаптивная<br/> верстка</p>
                        </div>
                        <div className={styles.right}>
                            <p>Используя современные технологии и фреймворки, мы реализуем проекты любой сложности и
                                масштаба: посадочные страницы, корпоративные сайты, интернет-магазины, высоконагруженные
                                масштабируемые web-сервисы и порталы.</p>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <p className={styles.title}>Технический<br/> аудит</p>
                        </div>
                        <div className={styles.right}>
                            <p>Используя современные технологии и фреймворки, мы реализуем проекты любой сложности и
                                масштаба: посадочные страницы, корпоративные сайты, интернет-магазины, высоконагруженные
                                масштабируемые web-сервисы и порталы.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.inclusivePrice}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <h2>Что входит в стоимость?</h2>
                        </div>
                        <div className={styles.right}>
                            <p className={styles.title}>Каждый этап разработки является самостоятельным</p>
                            <p className={styles.text}>Результат каждого из этапов - шаг в сторону реализованного продукта, который можно будет
                                использовать без ограничений</p>
                        </div>
                    </div>
                    <div className={styles.inclusivePrice__wrapper}>
                        <div className={styles.inclusivePrice__item}>
                            <img src="/check.svg" alt="check"/>
                            <div>
                                <p>UX-аналитика</p>
                                <span>Стильный, современный и продуманный дизайн с правильными акцентами</span>
                            </div>
                        </div>
                        <div className={styles.inclusivePrice__item}>
                            <img src="/check.svg" alt="check"/>
                            <div>
                                <p>Дизайн</p>
                                <span>Стильный, современный и продуманный дизайн с правильными акцентами</span>
                            </div>
                        </div>
                        <div className={styles.inclusivePrice__item}>
                            <img src="/check.svg" alt="check"/>
                            <div>
                                <p>Верстка</p>
                                <span>Стильный, современный и продуманный дизайн с правильными акцентами</span>
                            </div>
                        </div>
                        <div className={styles.inclusivePrice__item}>
                            <img src="/check.svg" alt="check"/>
                            <div>
                                <p>Front-End</p>
                                <span>Стильный, современный и продуманный дизайн с правильными акцентами</span>
                            </div>
                        </div>
                        <div className={styles.inclusivePrice__item}>
                            <img src="/check.svg" alt="check"/>
                            <div>
                                <p>Back-End</p>
                                <span>Стильный, современный и продуманный дизайн с правильными акцентами</span>
                            </div>
                        </div>
                        <div className={styles.inclusivePrice__item}>
                            <img src="/check.svg" alt="check"/>
                            <div>
                                <p>Тестирование</p>
                                <span>Стильный, современный и продуманный дизайн с правильными акцентами</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Cases className={styles.portfolio}/>
            <section className={styles.team}>
                <div className={styles.container}>
                    <p className={styles.team__title}>В любой момент можем расширять свою команду</p>
                    <div className={styles.team__wrapper}>
                        <div className={styles.team__item}>
                            <label>
                                <input type="checkbox"/>
                            </label>
                            <p>UX-аналитика</p>
                        </div>
                        <div className={styles.team__item}>
                            <label>
                                <input type="checkbox"/>
                            </label>
                            <p>Мобильная разработка</p>
                        </div>
                        <div className={styles.team__item}>
                            <label>
                                <input type="checkbox"/>
                            </label>
                            <p>Инструменты</p>
                        </div>
                        <div className={styles.team__item}>
                            <label>
                                <input type="checkbox"/>
                            </label>
                            <p>Копирайтинг</p>
                        </div>
                        <div className={styles.bg}>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Services;