import React from 'react';
import {GeoJSON, Map, Polygon, TileLayer} from 'react-leaflet';

import hash from 'object-hash';
import './map.css';

export default class MapView extends React.Component {

    render() {
        const geoPolygon = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    37.624053955078125,
                                    55.767303495700936
                                ],
                                [
                                    37.58697509765625,
                                    55.75880449639896
                                ],
                                [
                                    37.591094970703125,
                                    55.741027874718164
                                ],
                                [
                                    37.61787414550781,
                                    55.73793546140932
                                ],
                                [
                                    37.6556396484375,
                                    55.74180093975863
                                ],
                                [
                                    37.64739990234375,
                                    55.76382685625667
                                ],
                                [
                                    37.624053955078125,
                                    55.767303495700936
                                ]
                            ]
                        ]
                    }
                }
            ]
        };
        const points = [[55.74, 37.61], [55.76, 37.61], [55.76, 37.63], [55.74, 37.63]]
        return (
            <Map center={[55.75229, 37.61593]} zoom={13} className='map-wrapper'>
                <TileLayer
                    attribution='&copy; <a href="copyright">Openstreetmap</a>'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Polygon
                    positions={points}
                    color={'#e90c0c'}
                />
                <GeoJSON data={geoPolygon} color={"#7608e3"}/> // мб нужен свой ключ: key={hash(geoPolygon)}
            </Map>
        );
    }
}
