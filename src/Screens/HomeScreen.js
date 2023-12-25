import React, {useEffect, useState, useRef} from 'react';

import Banner from "../Components/Banner";
import ApplianceCard from "../Components/ApplianceCard";
import ServiceCard from "../Components/ServiceCard";
import Lines from "../Components/Lines";
import FAQ from "../Components/FAQ";
import Guarantee from "../Components/Guarantee";
import TeamCard from "../Components/TeamCard";
import YMap from "../Components/YMap";

import appData from "../Data/appData";

import {motion, useAnimation, inView, useInView, useTransform, useScroll} from 'framer-motion'
import {transition} from "../Variables/animations";
import applianceCard from "../Components/ApplianceCard";
import teamCard from "../Components/TeamCard";


function HomeScreen() {

    const ref = useRef(null)

    const {scrollY, scrollYProgress } = useScroll({
        target: ref,
    })

    const city = 'msc'

    const data = appData.find((Data) => Data.city.toUpperCase() === city.toUpperCase())

    let x = useTransform(scrollYProgress, [0, 1], ["0%", `${(data.appliances.length * -102.5) + 102.5}%`])

    useEffect(() => {
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [])

    return (
        <div id='homeScreen'>
            <section>
                <Banner data={data}/>
            </section>

            <section id='appliances'>
                <h2>МЫ РЕМОНТИРУЕМ</h2>
                <Lines color={'rgb(190, 38, 76)'}/>
                <div className="container" ref={ref} style={{minHeight: `calc(100vh * ${data.appliances.length})`}}>
                    <div className="appliances">
                        {data.appliances.map((appliance, i) => {
                            return <ApplianceCard
                                data={appliance}
                                key={i}
                                x={x}
                                id={i}
                            />
                        })}
                    </div>
                </div>
                <h2>ПРИМЕРЫ РАБОТ</h2>
                <Lines color={'rgb(190, 38, 76)'}/>
                <div className="services">
                    {data.appliances.map((service, i) => {
                        return <ServiceCard data={service.services[0]} service={service} key={i}/>
                    })}
                </div>
            </section>

            <section id='faq'>
                <small style={{color: 'rgb(190, 38, 76)', marginBottom: 'calc((1vw + 1vh) * -.5)'}}>FAQ</small>
                <h2 style={{marginTop: '0'}}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
                <div className="container" style={{minHeight: `calc(90vh * ${data.faq.length})`}}>
                    {
                        data.faq.map((item, i) => {
                            return <FAQ data={item} key={i}/>
                        })
                    }
                </div>
                <div className="guarantees">
                    {
                        data.guarantee.map((guarantee, i) => {
                            return <Guarantee data={guarantee} key={i}/>
                        })
                    }
                </div>
            </section>

            <section id='team'>
                <small style={{color: 'rgb(190, 38, 76)', marginBottom: 'calc((1vw + 1vh) * -.5)'}}>Наша</small>
                <h2 style={{marginTop: '0'}}>Команда</h2>
                <Lines color={'rgb(190, 38, 76)'}/>
                <div className="team">
                    {
                        data.team.map((item, i) => {
                            return <TeamCard data={item} key={i}/>
                        })
                    }
                </div>
            </section>

            <section id='map'>
                <h2>Зона выезда</h2>
                <div className="container">
                    <div className="item">
                        <h4>Контактная информация</h4>
                        <a href={`tel:+${data.phoneNumber}`}><i className="fa-solid fa-phone"></i>
                            +{data.phoneNumber.slice(0, 1)} {data.phoneNumber.slice(1, 4)} {data.phoneNumber.slice(4, 7)}
                            {' '} {data.phoneNumber.slice(7, 9)} {data.phoneNumber.slice(9, 11)}</a>
                        <a href={`mailto:${data.email}`}><i className="fa-solid fa-at"></i>{data.email}</a>
                        <a href={`https://wa.me/${data.phoneNumber}`}><i id='whatsApp' className="fa-brands fa-whatsapp"></i>
                            +{data.phoneNumber.slice(0, 1)} {data.phoneNumber.slice(1, 4)} {data.phoneNumber.slice(4, 7)}
                            {' '} {data.phoneNumber.slice(7, 9)} {data.phoneNumber.slice(9, 11)}</a>
                        <a href={`https://t.me/+${data.phoneNumber}`}><i id='telegram' className="fa-brands fa-telegram"></i>
                            +{data.phoneNumber.slice(0, 1)} {data.phoneNumber.slice(1, 4)} {data.phoneNumber.slice(4, 7)}
                            {' '} {data.phoneNumber.slice(7, 9)} {data.phoneNumber.slice(9, 11)}</a>
                    </div>

                    <div className="item">
                        <YMap data={data}/>
                    </div>
                </div>

                <div className="contact">
                    <div className="item">
                        <h4>Оставьте заявку</h4>
                    </div>

                    <div className="item">
                        <p>Если у вас нет возможности позвонить - всегда есть возможность оставить заявку для обратного
                            звонка!</p>
                        <div className="contact-us">
                            <input type='number' placeholder='+7 999 999 99 99'/>
                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id='miele-description'>
                <h2>Пару слов о сервисном центре</h2>

                <p>{data.description.first_line}</p>

                <p>{data.description.second_line}</p>

                <h5>Ремонт в сервисе Миле</h5>

                <p>{data.description.list_line}</p>

                <ul>
                    {
                        data.description.list.map((desc, i) => {
                            return <li key={i}>{desc}</li>
                        })
                    }
                </ul>

                <h5>Одно из главных преимуществ обращения к нам:</h5>

                <p>{data.description.advantage}</p>

                <h5>А также:</h5>

                {
                    data.description.more.map((item, i) => {
                        return <p key={i} style={{marginBottom: 'calc((1vw + 1vh) * .25)'}}>{item}</p>
                    })
                }
            </section>

        </div>
    );
}

export default HomeScreen;