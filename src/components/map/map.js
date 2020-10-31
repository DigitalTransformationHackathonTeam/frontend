import React from 'react';
import {GeoJSON, Map, TileLayer} from 'react-leaflet';
import './map.css';

export default class MapView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            geoJSON: {}
        };
    }

    componentDidMount() {
        fetch('http://0.0.0.0:8091/api/location_optimizer/find_best_district')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        geoJSON: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    render() {
        const onPolygonClick = (properties) => {
            // console.log(properties);
            this.props.setChosenCard(properties);
        }

        const {error, isLoaded, geoJSON} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Map center={[55.75229, 37.61593]} zoom={13} className='map-wrapper' zoomControl={false}>
                    <TileLayer
                        attribution='&copy; <a href="copyright">Openstreetmap</a>'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <GeoJSON data={geoJSON} color={"#35ab03"} weight={2} fillOpacity={0.5}
                             onEachFeature={(feature, layer) => {
                                 layer.on('click', () => {
                                     onPolygonClick(feature.properties)
                                 });
                             }}/>
                </Map>
            );
        }
    }
}
