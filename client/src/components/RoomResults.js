import React from 'react';
import loadingImage from '../images/loading.svg';
import LocationResults from './LocationResults';

const RoomResults = ({ openings, loading }) => {
  if (loading) {
    return (
      <div className="ResultsWrapper">
        <h3 className="loading-text">
          <img src={loadingImage} width="50" height="50" alt="Loading"/>
        </h3>
      </div>
    );
  }

  if (!openings.length) {
    return null;
  }

  // Build openings map
  const openingsMap = {};

  openings.forEach(opening => {
    const roomName = opening.room.name.split(' ')[0];
    if (roomName in openingsMap) {
      openingsMap[roomName].push(opening);
    } else {
      openingsMap[roomName] = [opening];
    }
  });

  const openingsList = Object.keys(openingsMap).map(k => openingsMap[k]);

  openingsList.forEach(opening => {
    // Sort by number
    opening.sort((a, b) => {
      const x = a.room.name.split(' ')[1];
      const y = b.room.name.split(' ')[1];
      return parseInt(x, 10) - parseInt(y, 10);
    });
  });

  return (
    <div className="ResultsWrapper">
      {openingsList.map(locationList => 
        <LocationResults
          key={locationList[0].room.name.split(' ')[0]}
          locations={locationList}
        />)}
    </div>
  );
};

export default RoomResults;
