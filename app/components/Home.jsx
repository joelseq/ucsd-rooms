import React, { Component } from 'react';
import RoomForm from './RoomForm.jsx';
import API from '../api';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(day, time) {
    API.getRooms(day, time)
      .then(rooms => {
        this.setState({
          rooms,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Home">
        <h2>Find empty classrooms at UCSD!</h2>
        <div className="row">
          <div className="medium-8 small-10 columns medium-offset-2 small-offset-1">
            <RoomForm handleFormSubmit={this.handleFormSubmit} />
          </div>
        </div>
      </div>
    );
  }
}
