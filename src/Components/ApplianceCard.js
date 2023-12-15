import React from 'react';

import {cubicBezier, motion} from 'framer-motion'

function ApplianceCard({data, x, id}) {

    const appliance = 1

    const applianceHandler = (e) => {
        const multiplier = Number(e.id)
        // const parent = e.parentElement
        const arr = document.querySelectorAll('.appliance')
        // for (let i in e.parentElement) {
        //     console.log(i)
        // }
        const animationOptions = {
            duration: 500,
            ease: [.6, .01, .05, .9]
        };
        arr.forEach(async (el) => {
            // el.style.transition = "all 2s cubic-bezier(.6, .01, .05, .9) .25s"
            // el.style = `transform: translateX(calc(${multiplier * (-102.5)}% + 102.5%)) translateZ(0px);`
            el.animate({
                transform: `translateX(calc(${multiplier * (-102.5)}% + 102.5%)) translateZ(0px)`
            }, animationOptions)
            console.log(el)
            setTimeout(() => {el.style.transform = `translateX(calc(${multiplier * (-102.5)}% + 102.5%)) translateZ(0px)`}, 450)
        })
        // arr[0].style.transform = 'translateX(-7.08253%) translateZ(0px)'
        // console.log()
        console.log(multiplier)
    }

    return (
        <motion.div id={id} className='appliance' style={{x}} onClick={(e) => applianceHandler(e.target)}>
            {data.id}
        </motion.div>
    );
}

export default ApplianceCard;