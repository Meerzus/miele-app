import React, {useRef} from 'react';

import {cubicBezier, motion} from 'framer-motion'

import {navigateTo, navigateToHorizontal} from "../Variables/functions";

function ApplianceCard({data, x, id}) {

    return (
        <motion.div id={`appliance-${id}`} className='appliance' style={{x}}>
            {data.type}
        </motion.div>
    );
}

export default ApplianceCard;