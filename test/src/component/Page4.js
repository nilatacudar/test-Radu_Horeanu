import React from 'react';
import PropType from 'prop-types';

export default function Page4({ setEmptyBasket, history }) {
  return (
    <div>
      <p>Réservation enregistrée</p>
      <button type="button" onClick={() => { setEmptyBasket(); history.push('/'); }}>Nouvelle réservation</button>
    </div>
  );
}

Page4.propTypes = {
  setEmptyBasket: PropType.func.isRequired,
  history: PropType.func.isRequired,
};
