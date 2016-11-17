import React from 'react';

import LocationResults from './LocationResults';

function RoomResults({ openings, loading }) {
  if (loading) {
    return (
      <div className="ResultsWrapper">
        <h3 className="loading-text">
          <img 
            src="/public/img/loading.svg" 
            width="50"
            height="50"
          />
        </h3>
      </div>
    );
  }

  if (openings.length) {
    // Build openings map
    let openings_map = {};

    openings.forEach(function(opening) {
      let roomname = opening.room.name.split(' ')[0];
      if (roomname in openings_map) {
        openings_map[roomname].push(opening);
      } else {
        openings_map[roomname] = [opening];
      }
    });

    let openings_list = Object.keys(openings_map).map(key => openings_map[key]);

    let res = [];

    openings_list.map(location_list => {
      res.push(<LocationResults locations={location_list} />);
    });

    return (
      <div className="ResultsWrapper">{res}</div>
    );

  }

  return null;
}


export default RoomResults;
