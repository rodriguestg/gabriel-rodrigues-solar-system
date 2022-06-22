import React from 'react';
import Header from './Header';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Header />
        <Title headline="Planetas" />
        {
          planets.map((planet) => {
            const { name, image } = planet;
            return (
              <PlanetCard planetName={ name } planetImage={ image } key={ name } />
            );
          })
        }

      </div>
    );
  }
}

export default SolarSystem;
