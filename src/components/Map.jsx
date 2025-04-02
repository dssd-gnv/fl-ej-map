import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/styles';
import {useEffect, useState} from "react";

const Map = ({data}) => {
    const [siteLocations, setSiteLocations] = useState([]);
    useEffect(() => {
        setSiteLocations(() => {
            return data.map((site) => {
                return {
                    'coordinates': [parseFloat(site['Latitude']), parseFloat(site['Longitude'])],
                    'location': site['Location'],
                    'type': 'Hazardous Waste Site'
                }
            });
        });
    }, [data]);
    return (
        <MapContainer className="h-full z-0" center={[28.54, -81.65]} zoom={6}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
                {
                    siteLocations.map((site, index) => {
                        if (!isNaN(site.coordinates[0]) && !isNaN(site.coordinates[1])) {
                            return (
                                <Marker key={index} position={site.coordinates}>
                                    <Popup>
                                        {site.location}
                                    </Popup>
                                </Marker>
                            )
                        }
                    })
                }
            </MarkerClusterGroup>
        </MapContainer>
    );
};

export default Map;
