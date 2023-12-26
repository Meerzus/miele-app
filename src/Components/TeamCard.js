import React, {useRef} from 'react';

import {motion, useInView} from "framer-motion";
import {transition} from "../Variables/animations";

function TeamCard({data}) {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })

    return (
        <motion.div className='team-card'
                    ref={ref}
                    style={{transition: 'all 2s cubic-bezier(.6, .01, .05, .9) .25s'}}
                    initial={isInView && {transform: 'translateY(-100px)', opacity: '0'}}
                    animate={isInView && {transform: 'translateY(0)', opacity: '1'}}
                    transition={{
                        ...transition,
                        type: 'linear',
                        delay: 0,
                        duration: 2,
                    }}
        >
            <img src={data.photo} alt=""/>
            <h5><strong>{data.name}</strong></h5>
            <p>{data.position}, {data.experience} лет опыта</p>
        </motion.div>
    );
}

export default TeamCard;