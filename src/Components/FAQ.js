import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {motion, useInView} from "framer-motion";
import {transition} from "../Variables/animations";

function FAQ({data}) {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })

    return (
        <motion.div className='faq-item'
                    ref={ref}
                    style={{transition: 'all 2s cubic-bezier(.6, .01, .05, .9) .25s'}}
                    initial={isInView && {transform: 'translateX(-100px)', opacity: '0'}}
                    animate={isInView && {transform: 'translateX(0)', opacity: '1'}}
                    transition={{
                        ...transition,
                        type: 'linear',
                        delay: 0,
                        duration: 2,
                    }}
        >
            <div className="container">
                <h5>{data.question}</h5>
                <p>{data.answer}</p>
                <Link to={'/faq'}>Все вопросы <i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>
            <div className="container">
                <img src={data.image} alt=""/>
            </div>
        </motion.div>
    );
}

export default FAQ;