import React, {useEffect, useState} from 'react';

import Banner from "../Components/Banner";
import ApplianceCard from "../Components/ApplianceCard";
import appData from "../Data/appData";


function HomeScreen() {

    const city = prompt('City').toUpperCase()

    const data = appData.find((Data) => Data.city.toUpperCase() === city)

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        console.log(data)
    }, [])

    return (
        <div id='homeScreen'>
            <section>
                <Banner data={data}/>
            </section>

            <section>
                <h2>МЫ РЕМОНТИРУЕМ</h2>
                <div className="appliances">
                    {data.appliances.map((appliance) => {
                        return <ApplianceCard data={appliance}/>
                    })}
                </div>
            </section>

            <section>
                <h3>123waedWEWh3</h3>
                <div className="container">
                    <span>qwerty</span>
                    <span>qwerty</span>
                    <span>qwerty</span>
                </div>
            </section>

            <section>
                <h4>123waedWEWh4</h4>
                <div className="container">
                    <span>qwerty</span>
                    <span>qwerty</span>
                    <span>qwerty</span>
                </div>
            </section>

            <section>
                <h5>123waedWEWh5</h5>
                <div className="container">
                    <span>qwerty</span>
                    <span>qwerty</span>
                    <span>qwerty</span>
                </div>
            </section>

            <section>
                <small>123waedWEWsmall</small>
                <div className="container">
                    <span>qwerty</span>
                    <span>qwerty</span>
                    <span>qwerty</span>
                </div>
            </section>

        </div>
    );
}

export default HomeScreen;