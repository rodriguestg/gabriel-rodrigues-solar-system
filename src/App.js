import React from 'react';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <>
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
