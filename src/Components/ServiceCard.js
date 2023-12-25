import React from 'react';
import {Link} from 'react-router-dom'

function ServiceCard({data, service}) {
    return (
        <div className='service-card'>
            <img src={data.image} alt=""/>
            <Link to={service.slug}>{service.type}</Link>
            <span>{data.service_name}</span>
            <span>{data.complexity}</span>
            <span>От {data.service_price} руб.</span>
        </div>
    );
}

export default ServiceCard;