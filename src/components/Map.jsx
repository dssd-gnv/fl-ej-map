import * as d3 from "d3";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useState} from "react";

const Map = ({ datasetFilenames }) => {
  const [siteLocations, setSiteLocations] = useState([]);
  useEffect(() => {
    datasetFilenames?.forEach(async (datasetFilename) => {
      const data = await d3.csv(datasetFilename);
      if (datasetFilename.search(/hazardous_sites/g)) {
        setSiteLocations((prevState) => {
          const newData = data.map((site) => {
            return {
              'coordinates': [parseFloat(site.X_Coordinate), parseFloat(site.Y_Coordinate)],
              'type': 'Hazardous Waste Site'
            }
          });
          return [...prevState, ...newData];
        });
      } else {
        setSiteLocations((prevState) => {
          const newData = data.map((site) => {
            return {
              'coordinates':[parseFloat(site.X_Coordinate), parseFloat(site.Y_Coordinate)],
              'type': 'Superfund Site'
            }
          });
          return [...prevState, ...newData];
        });
      }
    });
  }, [datasetFilenames]);
  return (
    <MapContainer className="h-full z-0" center={[28.54, -81.65]} zoom={7} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
