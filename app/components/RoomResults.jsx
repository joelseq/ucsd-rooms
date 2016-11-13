import React from 'react';

function RoomResults({ openings }) {
  if (openings.length) {
    return (
      <div>
        {
          openings.map(opening =>
            <div key={opening._id} className="RoomResult">
              <h3>{opening.room.name}</h3>
              <p>Free from {formatTime(opening.start)} to {formatTime(opening.end)}</p>
            </div>
          )
        }
      </div>
    );
  }
  return null;
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

export default RoomResults;
