import { connect } from 'react-redux';
import { setAddress } from '../redux/actions';
import Page2 from '../component/Page2';

const mapDispatchToProps = (dispatch) => ({
  setAddress: (address) => (dispatch(setAddress(address))),
});

export default connect(null, mapDispatchToProps)(Page2);
