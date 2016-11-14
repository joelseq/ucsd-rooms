import React, { Component } from 'react';
import RoomForm from './RoomForm.jsx';
import RoomResults from './RoomResults.jsx';
import API from '../api';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openings: [],
      loading: false,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(day, time) {
    this.setState({
      loading: true,
    });

    API.getRooms(day, time)
      .then(openings => {
        this.setState({
          openings,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Home">
        <h2>Find empty classrooms at UCSD!</h2>
        <h4>Pick a Day and Time</h4>
        <div className="row">
          <div className="medium-8 small-10 columns medium-offset-2 small-offset-1">
            <RoomForm handleFormSubmit={this.handleFormSubmit} />
          </div>
        </div>
        <div className="row">
          <div className="medium-8 small-10 columns medium-offset-2 small-offset-1">
            <RoomResults loading={this.state.loading} openings={this.state.openings} />
          </div>
        </div>
      </div>
    );
  }
}
