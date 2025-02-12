import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Panel from './components/Panel';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <Panel />
        <div className="flex-grow">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default App;
