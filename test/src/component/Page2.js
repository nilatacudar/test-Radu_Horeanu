import React from 'react';
import PropTypes from 'prop-types';
import BasketConnect from '../container/BasketConnect';

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ address: event.target.value });
    event.preventDefault();
  }

  handleSubmit() {
    const { address } = this.state;
    const { setAddress } = this.props;
    if (address.length) {
      setAddress(address);
    }
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} />
        <button type="button" onClick={this.handleSubmit}>Suivant</button>
        <BasketConnect />
      </div>
    );
  }
}

Page2.propTypes = {
  setAddress: PropTypes.func.isRequired,
};

export default Page2;
