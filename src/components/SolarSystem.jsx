import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class ReactClass extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Header />

      </div>
    );
  }
}

ReactClass.protoTypes = {
  testidh: PropTypes.string.isRequired,
};

export default ReactClass;
