import {useState} from "react";
import Map from './components/Map';
import Panel from './components/Panel';
import Header from './components/Header';

const App = () => {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="h-screen flex flex-col flex-grow">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-grow">
            <Panel collapsed={collapsed} setData={setData}/>
            <div className="flex-grow mt-14">
                <Map data={data} />
            </div>
        </div>
    </div>
  );
};

export default App;
