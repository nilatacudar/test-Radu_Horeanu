import React from 'react';
import PropTypes from 'prop-types';

class Basket extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  affichegePrix(num) {
    return (num === 0) ? 0 : num / 100;
  }

  affichageHeure(num) {
    const min = num % 60;
    const heure = Math.floor(num / 60);
    return `${heure.toString()}h${min.toString()}`;
  }

  render() {
    const { totalPrice, totalDuration } = this.props;
    return (
      <div>
        <div>{`Prix: ${this.affichegePrix(totalPrice)} €`}</div>
        <div>{`Durée totale: ${this.affichageHeure(totalDuration)}`}</div>
      </div>
    );
  }
}

Basket.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalDuration: PropTypes.number.isRequired,
};

export default Basket;
