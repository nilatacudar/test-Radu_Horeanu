import { connect } from 'react-redux';
import Page3 from '../component/Page3';
import { setAppointment } from '../redux/actions';

const mapStateToProps = (state) => ({
  address: state.basket.address,
  appointment: state.basket.appointment,
  prestations: state.basket.prestations,
});

const mapDispatchToProps = (dispatch) => ({
  setAppointment: (date) => (dispatch(setAppointment(date))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page3);
