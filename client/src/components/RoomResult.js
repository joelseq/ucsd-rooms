import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class RoomResult extends Component {
  static propTypes = {
    opening: PropTypes.shape({
      room: PropTypes.shape({
        name: PropTypes.string,
      }),
      start: PropTypes.string,
      end: PropTypes.string,
    }),
    onReportButton: PropTypes.func,
  };

  static defaultProps = {
    opening: {
      room: {
        name: 'Default',
      },
      start: '0',
      end: '0',
    },
    onReportButton() {},
  };

  static formatTime(time) {
    let timeInt = parseInt(time, 10);
  
    if (timeInt >= 720) {
      timeInt = timeInt - 720;
  
      let hours = Math.floor(timeInt / 60);
      let minutes = timeInt % 60;
  
      hours = hours === 0 ? 12 : hours;
  
      hours = RoomResult.formatNumber(hours);
      minutes = RoomResult.formatNumber(minutes);
  
      return `${hours}:${minutes} pm`;
    }
    else {
      let hours = Math.floor(timeInt / 60);
      let minutes = timeInt % 60;
  
      hours = hours === 0 ? 12 : hours;
  
      hours = RoomResult.formatNumber(hours);
      minutes = RoomResult.formatNumber(minutes);
  
      return `${hours}:${minutes} am`;
    }
  };
  
  static formatNumber(number) {
    return number > 9 ? "" + number: "0" + number;
  };


  render() {
    const { opening, onReportButton } = this.props;

    return (
      <div className="RoomResult RoomResult--individual">
        <div className="RoomResult--title">
          <h4>{opening.room.name}</h4>
        </div>
        <div className="RoomResult--report">
          <button
            onClick={() => onReportButton(opening.room.name, opening.start, opening.end)}
          >
            <FontAwesome name="flag" /> Report
          </button>
        </div>
        <div className="RoomResult--time">
          <p>
            <span className="emphasis">{RoomResult.formatTime(opening.start)}</span>
            to
            <span className="emphasis">{RoomResult.formatTime(opening.end)}</span>
          </p>
        </div>
      </div>
    );
  }
};



export default RoomResult;
