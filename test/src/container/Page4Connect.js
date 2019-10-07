import { connect } from 'react-redux';
import Page4 from '../component/Page4';
import { setEmptyBasket } from '../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  setEmptyBasket: () => (dispatch(setEmptyBasket())),
});

export default connect(null, mapDispatchToProps)(Page4);
