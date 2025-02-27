import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Panel from './components/Panel';
// import Button_abt from './components/aboutButton';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <Panel />
        <div className="flex-grow">
          <Map />
          {/* look at style choices in TailwindCSS to define className for Button*/}
          {/* <div className="flex flex-grow">
            <Button_abt />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
