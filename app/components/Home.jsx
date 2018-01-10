import React, { Component } from 'react';
import RoomForm from './RoomForm.jsx';
import RoomResults from './RoomResults.jsx';
import EndOfQuarter from './EndOfQuarter.jsx';
import GithubRibbon from './GithubRibbon.jsx';
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
    $(".Home").animate({
      "padding-top": "6vh",
      "padding-bottom": "6vh"
    }, "slow");
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

    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const eventString = `${day} - ${hours}:${minutes}`;  

    ga('send', 'event', 'Form', 'submit', eventString);
  }

  render() {
    // Put this to true if it's the end of the quarter
    const eoq = false;

    if (eoq) {
      return <EndOfQuarter />;
    }

    return (
      <div className="Wrapper">
        <div className="Home">
          <div className="Home--content">
            <GithubRibbon />
            <h2>Find empty classrooms at UCSD!</h2>
            <h4>Pick a Day and Time</h4>
            <h5>Currently Serving: Winter 2018</h5>
            <p className="Home__disclaimer">*Rooms are not guaranteed to be empty.</p>
            <div className="row">
              <div className="large-8 medium-10 small-10 columns medium-offset-1 large-offset-2 small-offset-1">
                <RoomForm handleFormSubmit={this.handleFormSubmit} />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="large-8 medium-10 small-12 columns medium-offset-1 large-offset-2">
            <RoomResults loading={this.state.loading} openings={this.state.openings} />
          </div>
        </div>
      </div>
    );
  }
}
