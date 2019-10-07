import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import BaskrtConnect from '../container/BasketConnect';

class Page1 extends React.Component {
  componentDidMount() {
    const { catalog, addCatalog } = this.props;
    if (Object.keys(catalog).length === 0) {
      axios.get('https://www.wecasa.fr/api/techtest/universe/', { headers: { Accept: 'application/json' } })
        .then((response) => {
          addCatalog(response.data);
        })
        .catch((error) => (error));
    }
  }

  render() {
    const { catalog = {}, addToBasket, removeFromBasket } = this.props;
    return (
      <div>
        {Object.keys(catalog).length !== 0 && (
          <div>
            {`Categorie: ${catalog.title}`}
            {catalog.categories.map(
              (categorie) => (
                <ul key={categorie.reference}>
                  <b>{`${categorie.title}:`}</b>
                  {categorie.prestations.map(
                    (prestation) => (
                      <li key={prestation.reference}>
                        {`${prestation.title} -> Prix: ${prestation.price}; Duration: ${prestation.duration}`}
                        <button type="button" onClick={() => addToBasket(prestation)}>+</button>
                        <button type="button" onClick={() => removeFromBasket(prestation)}>-</button>
                      </li>
                    ),
                  )}
                </ul>
              ),
            )}
          </div>
        )}
        <BaskrtConnect />
      </div>
    );
  }
}


Page1.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  addCatalog: PropTypes.func.isRequired,
  catalog: PropTypes.object,
};

export default Page1;
