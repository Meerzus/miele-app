import React, {useRef} from 'react';
import {Link} from 'react-router-dom'

import {motion, useInView} from "framer-motion";
import {horizontalAppearance, transition} from "../Variables/animations";

function ServiceCard({data, service}) {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })

    return (
        <motion.div className='service-card' ref={ref}
                    initial={isInView && {transform: 'translateX(-100px)', opacity: '0'}}
                    animate={isInView && {transform: 'translateX(0)', opacity: '1'}}
                    transition={{
                        ...transition,
                        type: 'linear',
                        delay: 0,
                        duration: 1,
                    }}
        >
            <img src={data.image} alt=""/>
            <Link to={service.slug}>{service.type}</Link>
            <span>{data.service_name}</span>
            <span>{data.complexity}</span>
            <span>От {data.service_price} руб.</span>
        </motion.div>
    );
}

export default ServiceCard;