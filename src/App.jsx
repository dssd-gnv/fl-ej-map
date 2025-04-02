import {useState} from "react";
import Map from './components/Map';
import Panel from './components/Panel';

const App = () => {
  const [data, setData] = useState([]);
  return (
    <div className="h-screen flex flex-col flex-grow">
        <div className="flex flex-grow">
            <Panel setData={setData}/>
            <div className="flex-grow">
                <Map data={data} />
            </div>
        </div>
    </div>
  );
};

export default App;
