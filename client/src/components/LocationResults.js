import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import RoomResult from './RoomResult';

class LocationResults extends Component {
  state = {
    hidden: true,
  };

  handleShow = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  reportProblem = (roomName, start, end) => {
    const confirmation = confirm('You are about to report this room as not being empty.'); // eslint-disable-line

    if (confirmation) {
      const reportString = `${roomName}: ${start}-${end}`;
      ga('send', 'event', 'Result', 'report', reportString); // eslint-disable-line

      alert('Your report has been sent. Sorry for the inconvenience!');
    }
  }

  render() {
    const hidden = (this.state.hidden) ? "hidden" : "";
    const fa_name = (this.state.hidden) ? "caret-down": "times-circle-o";
    const { locations } = this.props;

    return (
      <div key={locations[0]._id} 
        className="Results"
      >
        <div 
          className="RoomResult RoomName"
          onClick={() => this.handleShow()}
        >
          <h3>{
            locations[0].room.building ?
            locations[0].room.building.name :
            locations[0].room.name.split(' ')[0]
          }</h3>
          <p>{locations.length} {locations.length === 1 ? 'room' : 'rooms'} available</p>

          <div className="RoomName--right">
            <FontAwesome name={fa_name} />
          </div>
        </div>
        <div className={hidden}>
          <div className="RoomResult RoomResult--header">
            <span className="left">
              Room
            </span>
          </div>
          {locations.map(opening => (
            <RoomResult
              key={opening._id}
              opening={opening}
              onReportButton={this.reportProblem}
            />
          ))}
          <div 
            className="RoomResult RoomResult--end hover-pointer"
            onClick={() => this.handleShow()}
          >
            <div className="Center">
              <FontAwesome name="times-circle-o" />
              &nbsp;Close
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationResults;
