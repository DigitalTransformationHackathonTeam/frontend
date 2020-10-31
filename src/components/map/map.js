// import React from 'react'
// import {Map, TileLayer} from 'react-leaflet';
//
// // const position = [51.505, -0.09]
// // export default class MyMap extends React.Component {
// //
// //
// //     render() {
// //         return (
// //             <Map center={position} zoom={13}>
// //                 <TileLayer
// //                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //                     attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
// //                 />
// //                 <Marker position={position}>
// //                     <Popup>A pretty CSS3 popup.<br/>Easily customizable.</Popup>
// //                 </Marker>
// //             </Map>
// //         )
// //     }
// // }
//
// const MyMap = () => {
//     const initState = {
//         lat: 55.75229,
//         lng: 37.61593,
//         zoom: 15,
//     };
//     const [state] = React.useState(initState);
//     const position = [state.lat, state.lng];
//
//     return (
//         <Map center={position} zoom={state.zoom} className='map-wrapper'>
//             <TileLayer
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
//             />
//         </Map>
//     )
//
// }
//
// export default MyMap;


import React from 'react';
import {Map, TileLayer} from 'react-leaflet';

import './map.css';

export default class MapView extends React.Component {
    render() {
        return (
            <Map center={[55.75229, 37.61593]} zoom={13} className='map-wrapper'>
                <TileLayer
                    attribution='&copy; <a href="copyright">Openstreetmap</a>'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
            </Map>
        );
    }
}
