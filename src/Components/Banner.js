import React, {useRef} from 'react';

import Advantages from "./Advantages";
import {useInView} from "framer-motion";
import {motion} from "framer-motion";
import {horizontalAppearance, transition} from "../Variables/animations";


function Banner({data}) {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })

    return (
        <div className='container'>
            <motion.div className="item"
                        variants={horizontalAppearance}
                        initial='initialX'
                        animate='animateX'
                        transition={{
                            // ...transition,
                            type: 'linear',
                            delay: .25,
                            duration: 1,
                            staggerChildren: .25,
                            delayChildren: 0
                        }}
            >
                <motion.h1 variants={horizontalAppearance}>РЕМОНТ ТЕХНИКИ MIELE В городе {data && data.city}</motion.h1>
                <motion.div className="container" variants={horizontalAppearance}>
                    <a href={`tel:+${data && data.phoneNumber}`}>
                        <span>Вызвать мастера</span>
                        <span>+{data && data.phoneNumber.slice(0, 1)} {data && data.phoneNumber.slice(1, 4)} {data && data.phoneNumber.slice(4, 7)} {data && data.phoneNumber.slice(7, 9)} {data && data.phoneNumber.slice(9, 11)}</span>
                    </a>
                    <a href={`https://wa.me/${data && data.phoneNumber}`}><i id='whatsApp' className="fa-brands fa-whatsapp"></i></a>
                    <span>или</span>
                    <a href={`https://t.me/+${data && data.phoneNumber}`}><i id='telegram' className="fa-brands fa-telegram"></i></a>
                </motion.div>
                <motion.a href={`tel:+${data && data.phoneNumber}`} className='call-btn' variants={horizontalAppearance}>
                    Узнать стоимость
                    <i className="fa-solid fa-arrow-right-long"></i>
                </motion.a>
            </motion.div>

            <motion.div className="item"
                        variants={horizontalAppearance}
                        initial='initialReverseX'
                        animate='animateReverseX'
                        transition={{
                            // ...transition,
                            type: 'linear',
                            delay: .5,
                            duration: 2,
                            staggerChildren: .2,
                        }}
            >
                <img src={data && data.bannerImage} alt=""/>
            </motion.div>

            <Advantages data={data}/>
        </div>
    );
}

export default Banner;