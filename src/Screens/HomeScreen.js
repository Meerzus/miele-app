import React, {useEffect, useState, useRef} from 'react';

import Banner from "../Components/Banner";
import ApplianceCard from "../Components/ApplianceCard";
import appData from "../Data/appData";

import {motion, useAnimation, inView, useInView, useTransform, useScroll} from 'framer-motion'
// import useInView
import {transition} from "../Variables/animations";


function HomeScreen() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const city = 'msc'

    const data = appData.find((Data) => Data.city.toUpperCase() === city.toUpperCase())

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        const lines = document.querySelectorAll('hr')
    }, [])

    // console.log(data.appliances.length)
    // console.log(window.location.host)

    const x = useTransform(scrollYProgress, [0, 1], ["0%", `${(data.appliances.length * -102.5) + 102.5}%`])

    return (
        <div id='homeScreen'>
            <section>
                <Banner data={data}/>
            </section>

            <section id='appliances'>
                <h2>МЫ РЕМОНТИРУЕМ</h2>
                <div className="lines">
                    <motion.hr ref={ref}
                               style={{transition: 'all 2s cubic-bezier(.6, .01, .05, .9) .25s'}}
                               initial={isInView && {width: '1%'}}
                               animate={isInView && {width: '15%'}}
                               transition={{
                                    ...transition,
                                    type: 'linear',
                                    delay: 10,
                                    duration: 50,
                               }}
                    />
                    <motion.hr ref={ref}
                               style={{transition: 'all 2s cubic-bezier(.6, .01, .05, .9) .25s'}}
                               initial={isInView && {width: '98%'}}
                               animate={isInView && { width: '1%' }}
                               transition={{
                                    ...transition,
                                    type: 'linear',
                                    delay: 10,
                                    duration: 50,
                               }}
                    />
                </div>
                <div className="container" ref={ref} style={{minHeight: `calc(100vh * ${data.appliances.length})`}}>
                    <div className="appliances">
                        {data.appliances.map((appliance) => {
                            return <ApplianceCard data={appliance} key={appliance.id} x={x} id={appliance.id}/>
                        })}
                    </div>
                </div>
            </section>

            <section>
                <h3>123waedWEWh3</h3>
                <div className="container">
                    <span>qwerty</span>
                    <span>qwerty</span>
                    <span>qwerty</span>
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