import React, {useRef} from 'react';
import {motion, useInView} from "framer-motion";
import {transition} from "../Variables/animations";

function Lines({color}) {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })

    return (
        <div className="lines">
            <motion.hr ref={ref}
                       style={{transition: 'all 2s cubic-bezier(.6, .01, .05, .9) .25s', background: `${color}`}}
                       initial={isInView && {width: '1%'}}
                       animate={isInView && {width: '15%'}}
                       transition={{
                           ...transition,
                           type: 'linear',
                           delay: 1,
                           duration: 5,
                       }}
            />
            <motion.hr ref={ref}
                       style={{transition: 'all 2s cubic-bezier(.6, .01, .05, .9) .25s', background: `${color}`}}
                       initial={isInView && {width: '98%'}}
                       animate={isInView && { width: '1%' }}
                       transition={{
                           ...transition,
                           type: 'linear',
                           delay: 1,
                           duration: 5,
                       }}
            />
        </div>
    );
}

export default Lines;