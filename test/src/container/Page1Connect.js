import { connect } from 'react-redux';
import Page1 from '../component/Page1';
import { addCatalog, addToBasket } from '../redux/actions';

const mapStateToProps = (state) => ({
  catalog: state.catalog,
});
const mapDispatchToProps = (dispatch) => ({
  addCatalog: (catalog) => dispatch(addCatalog(catalog)),
  addToBasket: (prestation) => dispatch(addToBasket(prestation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
