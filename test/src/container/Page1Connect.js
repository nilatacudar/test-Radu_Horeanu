import { connect } from 'react-redux';
import Page1 from '../component/Page1';
import { addCatalog, addToBasket, removeFromBasket } from '../redux/actions';

const mapStateToProps = (state) => ({
  catalog: state.catalog,
  notEmptyBasket: state.basket.totalPrice !== 0,
});
const mapDispatchToProps = (dispatch) => ({
  addCatalog: (catalog) => dispatch(addCatalog(catalog)),
  addToBasket: (prestation) => dispatch(addToBasket(prestation)),
  removeFromBasket: (prestation) => dispatch(removeFromBasket(prestation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
