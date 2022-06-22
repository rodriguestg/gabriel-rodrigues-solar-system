import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';
import PropTypes from 'prop-types';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map((mission) => {
            const { name, year, country, destination } = mission;
            return (
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
                key={ name }
              />
            );
          })
        }
      </div>
    );
  }
}

// Missions.propTypes = {
//   name: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
//   country: PropTypes.string.isRequired,
//   destination: PropTypes.string.isRequired,
// }

export default Missions;
