import React from 'react';
import {YMaps, Map, GeoObject, Placemark} from "@pbe/react-yandex-maps";

function YMap({data}) {
    return (
        <YMaps>
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
        </YMaps>
    );
}

export default YMap;