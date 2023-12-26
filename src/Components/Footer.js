import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {motion, useInView} from "framer-motion";
import {transition, verticalAppearance} from "../Variables/animations";

import appData from "../Data/appData";
import {navigateTo} from "../Variables/functions";

function Footer() {

    const navigate = useNavigate()

    const data = appData[0]

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })

    return (
        <footer>
            <div className="container">
                <motion.div className="item"
                            ref={ref}
                            style={{transition: 'all 2s cubic-bezier(.6, .01, .05, .9) .25s'}}
                            initial={isInView && {transform: 'translateX(-100px)', opacity: '0'}}
                            animate={isInView && {transform: 'translateX(0)', opacity: '1'}}
                            transition={{
                                ...transition,
                                type: 'linear',
                                delay: 0,
                                duration: 2,
                            }}
                >
                    <img src={require('../Images/MieleLogo.png')} alt="" onClick={() => navigate('/')}/>
                    <p>
                        "Service-Miele" не является официальным представителем. Оставляя на сайте свои персональные
                        данные вы принимаете <Link to={'/'}>Соглашение об обработке персональных данных.</Link>
                    </p>
                </motion.div>

                <motion.div className="contact-info"
                            ref={ref}
                            style={{transition: 'all 2s cubic-bezier(.6, .01, .05, .9) .25s'}}
                            initial={isInView && {transform: 'translateX(-100px)', opacity: '0'}}
                            animate={isInView && {transform: 'translateX(0)', opacity: '1'}}
                            transition={{
                                ...transition,
                                type: 'linear',
                                delay: 0,
                                duration: 2,
                            }}
                >
                    <h5>Контактная информация</h5>

                    <p>ФИО: {data.fio}</p>

                    <p>Номер телефона: {data.phoneNumber}</p>

                    <p>Эл. почта: {data.email}</p>

                    <p>ИНН: {data.inn}</p>
                </motion.div>

                <motion.div className="navigation"
                            ref={ref}
                        style={{transition: 'all 2s cubic-bezier(.6, .01, .05, .9) .25s'}}
                        initial={isInView && {transform: 'translateX(100px)', opacity: '0'}}
                        animate={isInView && {transform: 'translateX(0)', opacity: '1'}}
                        transition={{
                            ...transition,
                            type: 'linear',
                            delay: 0,
                            duration: 2,
                        }}
                >
                    <h5>Навигация</h5>

                    <nav>
                        <motion.button onClick={() => navigateTo('appliances')} variants={verticalAppearance}>
                            Виды техники</motion.button>

                        <motion.button onClick={() => navigateTo('faq')} variants={verticalAppearance}>
                            Гарантии</motion.button>

                        <motion.button onClick={() => navigateTo('map')} variants={verticalAppearance}>
                            Контакты</motion.button>
                    </nav>
                </motion.div>

                <motion.div className="info"
                            ref={ref}
                        style={{transition: 'all 2s cubic-bezier(.6, .01, .05, .9) .25s'}}
                        initial={isInView && {transform: 'translateX(100px)', opacity: '0'}}
                        animate={isInView && {transform: 'translateX(0)', opacity: '1'}}
                        transition={{
                            ...transition,
                            type: 'linear',
                            delay: 0,
                            duration: 1,
                        }}
                >
                    <h5>Информация о сервисном центре</h5>

                    <nav>
                        <motion.button onClick={() => navigateTo('miele-description')} variants={verticalAppearance}>
                            О нас</motion.button>

                        <motion.button onClick={() => navigateTo('faq')} variants={verticalAppearance}>
                            Отзывы клиентов</motion.button>
                    </nav>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;