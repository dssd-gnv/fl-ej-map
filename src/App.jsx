import {useState} from "react";
import Header from './components/Header';
import Map from './components/Map';


const App = () => {
  const [datasets, updateDatasets] = useState([]);
  return (
    <div className="h-screen flex flex-col">
      <Header datasets={datasets} updateDatasets={updateDatasets} />
      <Map datasets={datasets} />
    </div>
  );
};

export default App;
