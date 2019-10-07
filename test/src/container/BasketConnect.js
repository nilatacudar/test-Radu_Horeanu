import { connect } from 'react-redux';
import Basket from '../component/Basket';

const mapStateToProps = (state) => ({
  totalPrice: state.basket.totalPrice,
  totalDuration: state.basket.totalDuration,
});

export default connect(mapStateToProps, null)(Basket);
