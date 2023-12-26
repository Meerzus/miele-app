import React, {useRef} from 'react';
import {motion, useInView} from "framer-motion";
import {transition} from "../Variables/animations";

function Guarantee({data}) {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })

    return (
        <motion.div className='guarantee'
                    ref={ref}
                    style={{transition: 'all 2s cubic-bezier(.6, .01, .05, .9) .25s'}}
                    initial={isInView && {transform: 'translateY(-250px)', opacity: '0'}}
                    animate={isInView && {transform: 'translateY(0)', opacity: '1'}}
                    transition={{
                        ...transition,
                        type: 'linear',
                        delay: 0,
                        duration: 2,
                    }}
        >
            <img src={data.icon} alt={data.name}/>
            <h5>{data.name}</h5>
            <p>{data.description}</p>
        </motion.div>
    );
}

export default Guarantee;