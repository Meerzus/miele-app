import React, {useRef} from 'react';

import {motion, useInView} from "framer-motion";
import {horizontalAppearance, transition} from "../Variables/animations";
import ServiceCard from "./ServiceCard";

function Services({data}) {

    return (
            <div className="services"
            >
                {data.appliances.map((service, i) => {
                    return <ServiceCard
                        data={service.services[0]}
                        service={service}
                        key={i}
                    />
                })}
            </div>
    );
}

export default Services;