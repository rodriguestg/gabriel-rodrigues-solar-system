import React from 'react';
import Header from './Header';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Header />
        <Title />
      </div>
    );
  }
}

export default SolarSystem;
