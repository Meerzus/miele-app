import React, {useEffect, useState, useRef} from 'react';

import Banner from "../Components/Banner";
import ApplianceCard from "../Components/ApplianceCard";
import ServiceCard from "../Components/ServiceCard";
import Lines from "../Components/Lines";
import FAQ from "../Components/FAQ";
import appData from "../Data/appData";

import {motion, useAnimation, inView, useInView, useTransform, useScroll} from 'framer-motion'
import {transition} from "../Variables/animations";
import applianceCard from "../Components/ApplianceCard";


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
                <Lines/>
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
                <Lines/>
                <div className="services">
                    {data.appliances.map((service) => {
                        return <ServiceCard data={service.services[0]} service={service}/>
                    })}
                </div>
            </section>

            <section>
                <small style={{color: 'rgb(190, 38, 76)', marginBottom: 'calc((1vw + 1vh) * -.5)'}}>FAQ</small>
                <h2 style={{marginTop: '0'}}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
                <div className="container">
                    <FAQ/>
                </div>
            </section>

            <section>
                <h4>123waedWEWh4</h4>
                <div className="container">
                    <span>qwerty</span>
                    <span>qwerty</span>
                    <span>qwerty</span>
                </div>
            </section>

            <section>
                <h5>123waedWEWh5</h5>
                <div className="container">
                    <span>qwerty</span>
                    <span>qwerty</span>
                    <span>qwerty</span>
                </div>
            </section>

            <section>
                <small>123waedWEWsmall</small>
                <div className="container">
                    <span>qwerty</span>
                    <span>qwerty</span>
                    <span>qwerty</span>
                </div>
            </section>

        </div>
    );
}

export default HomeScreen;