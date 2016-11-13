import React, { Component } from 'react';

export default class RoomForm extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    let { day, hour, mins, period } = this.refs;
    period = period.value;
    // Convert time strings into int
    hour = parseInt(hour.value);
    mins = parseInt(mins.value);
    // If hour is 12, make it 0
    hour = hour === 12 ? 0 : hour;

    let time;

    if (period === 'am') {
      time = (60 * hour) + mins;
    }
    else {
      time = 720 + (60 * hour) + mins;
    }

    this.props.handleFormSubmit(day.value, time);
  }

  render() {
    return (
      <div className="RoomForm">
        <form onSubmit={this.onFormSubmit} className="RoomForm__form">
          <div className="row">
            <div className="small-12 columns">
              <label>
                Day
                <select ref="day">
                  <option value="M">Monday</option>
                  <option value="Tu">Tuesday</option>
                  <option value="W">Wednesday</option>
                  <option value="Th">Thursday</option>
                  <option value="F">Friday</option>
                </select>
              </label>
            </div>
            <div className="small-4 columns">
              <label>
                Hour
                <select ref="hour">
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
            <div className="small-4 columns">
              <label>
                Minutes
                <select ref="mins">
                  <option value="0">00</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                </select>
              </label>
            </div>
            <div className="small-4 columns">
              <label>
                AM / PM
                <select ref="period">
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              </label>
            </div>
            <div className="small-12 columns">
              <button type="submit" className="RoomForm__form-button">Find Rooms!</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
