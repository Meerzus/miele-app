import React from 'react';

import {motion} from "framer-motion";
import {transition, verticalAppearance} from "../Variables/animations";

function Advantages({data}) {
    return (
        <motion.div className='advantages'
                    variants={verticalAppearance}
                    initial='initialY'
                    animate='animateY'
                    transition={{
                        // ...transition,
                        type: 'linear',
                        delay: .25,
                        duration: 2,
                        staggerChildren: .2,
                    }}
        >
            <h5>
                <span>НАШИ</span>
                <span>ПРЕИМУЩЕСТВА</span>
            </h5>
            {data.advantages.map((advantage) => {
                return <div className='advantage' key={advantage.id}>
                    <strong>{advantage.name}</strong>
                    <img src={advantage.icon} alt={advantage.name}/>
                    <p>{advantage.description}</p>
                </div>
            })}
            {/*<img src={data.advantages[0].icon} alt=""/>*/}
        </motion.div>
    );
}

export default Advantages;