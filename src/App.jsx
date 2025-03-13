import {useState} from "react";
import Header from './components/Header';
import Map from './components/Map';

const App = () => {
  const datasetToFilenameMapping = {
    'Hazardous Waste Sites': './data/hazardous_sites_small.csv',
    'Superfund Sites': './data/superfund_sites.csv',
  }
  const [datasets, updateDatasets] = useState([]);
  return (
    <div className="h-screen flex flex-col">
      <Header datasets={datasets} updateDatasets={updateDatasets} />
      <Map datasetFilenames={datasets.map((dataset) => datasetToFilenameMapping[dataset])} />
    </div>
  );
};

export default App;
