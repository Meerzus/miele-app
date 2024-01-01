import React from 'react'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'

import {verticalAppearance, transition} from "../Variables/animations";

import {navigateTo} from "../Variables/functions";

function Header() {

    const navigate = useNavigate()

    return (
        <header>
            <motion.div className="container"
                        variants={verticalAppearance}
                        initial='initialY'
                        animate='animateY'
                        transition={{
                            ...transition,
                            type: 'linear',
                            delay: -.25,
                            duration: 2,
                            staggerChildren: .2,
                        }}
            >
                <motion.img variants={verticalAppearance} src={require('../Images/MieleLogo.png')} alt="" onClick={() => navigate('/')}/>
                <nav>
                    <motion.button onClick={() => navigateTo('appliances')} variants={verticalAppearance}>
                        Виды техники
                    </motion.button>

                    <motion.button onClick={() => navigateTo('faq')} variants={verticalAppearance}>
                        Гарантии
                    </motion.button>

                    <motion.button onClick={() => navigateTo('map')} variants={verticalAppearance}>
                        Контакты
                    </motion.button>

                    <motion.button onClick={() => navigate('/')} variants={verticalAppearance}>
                        Каталог устройств
                    </motion.button>
                </nav>
                <motion.a variants={verticalAppearance} href="tel:+71234567890">Звонок бесплатный</motion.a>
            </motion.div>
        </header>
    );
}

export default Header;