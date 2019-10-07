import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setHours, setMinutes } from 'date-fns/esm';
import axios from 'axios';
import moment from 'moment';
import BasketConnect from '../container/BasketConnect';

class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  handleSubmit() {
    const { startDate } = this.state;
    const { address, prestations, setAppointment } = this.props;
    if (startDate) {
      setAppointment(startDate);
      axios.post('https://www.wecasa.fr/api/techtest/booking/',
        { prestations, appointment: moment(startDate).format(), address },
        { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } })

        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => (error));
    }
  }

  render() {
    const { startDate } = this.state;
    return (
      <div>
        <DatePicker
          placeholderText="Click to select a date"
          selected={startDate}
          onChange={this.handleChange}
          showTimeSelect
          minTime={setHours(setMinutes(new Date(), 0), 7)}
          maxTime={setHours(setMinutes(new Date(), 0), 22)}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <button type="button" onClick={this.handleSubmit}>Suivant</button>
        <BasketConnect />
      </div>
    );
  }
}

Page3.propTypes = {
  address: PropTypes.string.isRequired,
  setAppointment: PropTypes.func.isRequired,
  prestations: PropTypes.array.isRequired,
};

export default Page3;
