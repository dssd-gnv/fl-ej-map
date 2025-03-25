import {useState} from "react";
import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Panel from './components/Panel';

const App = () => {
  const datasetToFilenameMapping = {
    'Hazardous Waste Sites': './data/hazardous_sites_small.csv',
    'Superfund Sites': './data/superfund_sites.csv',
  }
  const [datasets, updateDatasets] = useState([]);
  return (
    <div className="h-screen flex flex-col">
      <Header datasets={datasets} updateDatasets={updateDatasets}/>
      <div className="flex flex-grow">
        <Panel />
        <div className="flex-grow">
          <Map datasetFilenames={datasets.map((dataset) => datasetToFilenameMapping[dataset])} />
        </div>
      </div>
    </div>
  );
};

export default App;
