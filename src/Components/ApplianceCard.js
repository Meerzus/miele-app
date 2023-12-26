import React, {useEffect, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {cubicBezier, motion, useScroll, useTransform} from 'framer-motion'

import {navigateTo} from "../Variables/functions";

function ApplianceCard({data, x, id}) {

    const navigate = useNavigate()

    const applianceHandler = () => {
        const el = document.getElementById(`appliance-${id}`)
        setTimeout(() => {
            console.log(`appliance-${id}`);
            el.scrollIntoView({behavior: "smooth", block: "nearest"});
        }, 100);
    }

    return (
        <motion.div id={`appliance-${id}`} className='appliance' style={{x}} onClick={() => applianceHandler(data.slug)}>
            <h4>{data.type}<span style={{color: 'rgb(190, 38, 76)', marginLeft: 'calc((1vw + 1vh) * .5)'}}>Miele</span></h4>

            <div className="container">
                <div className="item">
                    {
                        data.product_models.slice(0,10).map((model, i) => {
                            return <span key={i}>{model}</span>
                        })
                    }
                    <h5>Больше моделей</h5>
                </div>

                <motion.div className="item"
                     // style={{backgroundImage: `url(${data.image})`, backgroundPosition: `${aX} center`}}
                >
                    {/*<div style={{backgroundImage: `url(${data.image})`, backgroundSize: 'cover'}}>123</div>*/}
                    <motion.img src={data.image} alt={data.type}/>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default ApplianceCard;