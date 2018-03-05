import React from 'react';
import loadingImage from '../images/loading.svg';
import LocationResults from './LocationResults';

const RoomResults = ({ openings, loading }) => {
  if (loading) {
    return (
      <div>
        <h3>
          <img src={loadingImage} width="50" height="50" alt="Loading"/>
        </h3>
      </div>
    );
  }

  if (openings.length) {
    // Build openings map
    const openingsMap = {};

    openings.forEach(opening => {
      const roomName = opening.room.name.split(' ')[0];
      if (roomName in openingsMap) {
        openingsMap[roomName].push(opening);
      } else {
        openingsMap[roomname] = [opening];
      }
    });

    const openingsList = Object.keys(openingsMap).map(k => openingsMap[k]);

    openingsList.forEach(opening => {
      // Sort by number
      opening.sort((a, b) => {
        const x = a.room.name.split(' ')[1];
        const y = b.room.name.split(' ')[1];
        return parseInt(x) - parseInt(y);
      });
    });

    return (
      <div>
        {openingsList.map(locationList => <LocationResults locations={locationList} />)}
      </div>
    );
  }
};

export default RoomResults;
