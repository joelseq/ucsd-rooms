import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoomForm extends Component {
  static propTypes = {
    handleFormSubmit: PropTypes.func,
  };

  static defaultProps = {
    handleFormSubmit() {}
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const period = this.period.value;
    const mins = parseInt(this.mins.value, 10);
    let hour = parseInt(this.hour.value, 10);
    // If hour is 12, make it 0
    hour = hour === 12 ? 0 : hour;

    let time;

    if (period === 'am') {
      time = (60 * hour) + mins;
    }
    else {
      time = 720 + (60 * hour) + mins;
    }

    this.props.handleFormSubmit(this.day.value, time);
  }

  render() {
    return (
      <div className="RoomForm">
        <form onSubmit={this.onFormSubmit} className="RoomForm__form">
          <div className="row">
            <div className="col-xs-12">
              <label>
                Day
                <select ref={(input) => { this.day = input; }}>
                  <option value="M">Monday</option>
                  <option value="Tu">Tuesday</option>
                  <option value="W">Wednesday</option>
                  <option value="Th">Thursday</option>
                  <option value="F">Friday</option>
                </select>
              </label>
            </div>
            <div className="col-xs-4">
              <label>
                Hour
                <select ref={(input) => { this.hour = input; }}>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </label>
            </div>
            <div className="col-xs-4">
              <label>
                Minutes
                <select ref={(input) => { this.mins = input; }}>
                  <option value="0">00</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                </select>
              </label>
            </div>
            <div className="col-xs-4">
              <label>
                AM / PM
                <select ref={(input) => { this.period = input;}}>
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              </label>
            </div>
            <div className="col-xs-12">
              <button type="submit" className="RoomForm__form-button">Find Rooms!</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RoomForm;
