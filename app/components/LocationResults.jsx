// Results for a specific area (ie CENTR)

import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class LocationResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
    this.handleShow = this.handleShow.bind(this);
  }
  handleShow () {
    this.setState({
      hidden: !this.state.hidden
    })
  }
  render () {
    let tmp = [];
    let hidden = (this.state.hidden) ? "hidden" : "";
    let fa_name = (this.state.hidden) ? "caret-down": "times-circle-o";
    // Order by room
    this.props.locations.map(opening => {
      tmp.push(
        <div key={opening._id} className="RoomResult">
          <h4>{opening.room.name}</h4>
          <p>Free from {formatTime(opening.start)} to {formatTime(opening.end)}</p>
        </div>
      )
    });
    return (
      <div key={this.props.locations[0]._id} 
        className="Results"
        onClick={() => this.handleShow()}
      >
        <div className="RoomResult RoomName">
          <h3>{this.props.locations[0].room.name.split(' ')[0]}</h3>
          <p>{this.props.locations.length} rooms available</p>

          <div className="Center">
            <FontAwesome name={fa_name} />
          </div>
        </div>

        <div className={hidden}>
          {tmp}
        </div>
      </div>
    )
  }
}

function formatTime(time) {
  let timeInt = parseInt(time);

  if (timeInt >= 720) {
    timeInt = timeInt - 720;

    let hours = Math.floor(timeInt / 60);
    let minutes = timeInt % 60;

    hours = hours === 0 ? 12 : hours;

    hours = formatNumber(hours);
    minutes = formatNumber(minutes);

    return `${hours}:${minutes} pm`;
  }
  else {
    let hours = Math.floor(timeInt / 60);
    let minutes = timeInt % 60;

    hours = hours === 0 ? 12 : hours;

    hours = formatNumber(hours);
    minutes = formatNumber(minutes);

    return `${hours}:${minutes} am`;
  }
}

function formatNumber(number) {
  return number > 9 ? "" + number: "0" + number;
}