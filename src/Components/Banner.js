import React from 'react';

import Advantages from "./Advantages";

import appData from "../Data/appData";

function Banner({data}) {

    return (
        <div className='container'>
            <div className="item">
                <h1>РЕМОНТ ТЕХНИКИ MIELE В городе {data && data.city}</h1>
                <div className="container">
                    <a href={`tel:+${data && data.phoneNumber}`}>
                        <span>Вызвать мастера</span>
                        <span>+{data && data.phoneNumber.slice(0, 1)} {data && data.phoneNumber.slice(1, 4)} {data && data.phoneNumber.slice(4, 7)} {data && data.phoneNumber.slice(7, 9)} {data && data.phoneNumber.slice(9, 11)}</span>
                    </a>
                    <a href={`https://wa.me/${data && data.phoneNumber}`}><i id='whatsApp' className="fa-brands fa-whatsapp"></i></a>
                    <span>или</span>
                    <a href={`https://t.me/+${data && data.phoneNumber}`}><i id='telegram' className="fa-brands fa-telegram"></i></a>
                </div>
                <a href={`tel:+${data && data.phoneNumber}`} className='call-btn'>
                    Узнать стоимость
                    <i className="fa-solid fa-arrow-right-long"></i>
                </a>
            </div>

            <div className="item">
                <img src={data && data.bannerImage} alt=""/>
            </div>

            <Advantages data={data}/>
        </div>
    );
}

export default Banner;