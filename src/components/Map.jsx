import * as d3 from "d3";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/styles';
import {useEffect, useState} from "react";

const Map = ({datasetFilenames}) => {
    const [siteLocations, setSiteLocations] = useState([]);
    useEffect(() => {
        datasetFilenames?.forEach(async (datasetFilename) => {
            const data = await d3.csv(datasetFilename);
            if (datasetFilename.search(/hazardous_sites/g)) {
                setSiteLocations(() => {
                    return data.map((site) => {
                        return {
                            'coordinates': [parseFloat(site.X_Coordinate), parseFloat(site.Y_Coordinate)],
                            'location': site.Location,
                            'type': 'Hazardous Waste Site'
                        }
                    });
                });
            } else {
                setSiteLocations(() => {
                    return data.map((site) => {
                        return {
                            'coordinates': [parseFloat(site.X_Coordinate), parseFloat(site.Y_Coordinate)],
                            'location': site.Location,
                            'type': 'Superfund Site'
                        }
                    });
                });
            }
        });
    }, [datasetFilenames]);
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
