import React, { Component } from 'react';
import RoomForm from './RoomForm';
import RoomResults from './RoomResults';
import EndOfQuarter from './EndOfQuarter';
import GithubRibbon from './GithubRibbon';
import API from '../api';

class Home extends Component {
  state = {
    openings: [],
    loading: false,
  };

  handleFormSubmit = (day, time) => {
    $(".Home").animate({ // eslint-disable-line
      "padding-top": "4vh",
      "padding-bottom": "4vh",
      "height": "75%",
    }, "slow");
    this.setState({
      loading: true,
    });

    API.getRooms(day, time)
      .then(res => {
        this.setState({
          openings: res.data,
          loading: false,
        });
      })
      .catch(err => console.log(err));

    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const eventString = `${day} - ${hours}:${minutes}`;

    ga('send', 'event', 'Form', 'submit', eventString); // eslint-disable-line
  }

  render() {
    // Put this to true if it's the end of the quarter
    const eoq = false;

    if (eoq) {
      return <EndOfQuarter />;
    }

    const { loading, openings } = this.state;

    return (
      <div className="Wrapper">
        <div className="Home container-fluid">
          <div className="Home--content">
            <GithubRibbon />
            <h2>Find empty classrooms at UCSD!</h2>
            <h4>Pick a Day and Time</h4>
            <h5>Currently Serving: Winter 2018</h5>
            <p className="Home__disclaimer">*Rooms are not guaranteed to be empty.</p>
            <div className="row">
              <div className="col-lg-8 col-sm-10 col-sm-offset-1 col-lg-offset-2">
                <RoomForm handleFormSubmit={this.handleFormSubmit} />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-sm-10 col-lg-offset-2 col-sm-offset-1">
              <RoomResults loading={loading} openings={openings} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
