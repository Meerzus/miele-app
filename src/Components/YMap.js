import React, {useRef} from 'react';
import {YMaps, Map, GeoObject, Placemark} from "@pbe/react-yandex-maps";

import {motion, useInView} from "framer-motion";
import {transition} from "../Variables/animations";

function YMap({data}) {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })

    return (
        <YMaps>
            <motion.div className="map"
                        ref={ref}
                        style={{transition: 'all 2s cubic-bezier(.6, .01, .05, .9) .25s'}}
                        initial={isInView && {transform: 'translateX(100px)', opacity: '0'}}
                        animate={isInView && {transform: 'translateX(0)', opacity: '1'}}
                        transition={{
                            ...transition,
                            type: 'linear',
                            delay: 0,
                            duration: 2,
                        }}
            >
                <Map
                    width="1000px" height="500px"
                    defaultState={{
                        center: data.coordinates.center,
                        zoom: 9,
                        controls: ["fullscreenControl"],
                    }}
                    modules={["control.FullscreenControl"]}
                >
                    <GeoObject
                        geometry={{
                            type: "LineString",
                            coordinates: data.coordinates.coordinates,
                        }}
                        options={{
                            geodesic: true,
                            strokeWidth: 5,
                            strokeColor: "#0E4678FF",
                        }}
                    />

                    <Placemark geometry={[59.938784, 30.314997]} />
                </Map>
            </motion.div>
        </YMaps>
    );
}

export default YMap;