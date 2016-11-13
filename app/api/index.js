const axios = require('axios');

function getRooms(day, time) {
  const requestUrl = `/api/rooms?day=${day}&time=${time}`;

  return axios.get(requestUrl)
    .then(res => res.data)
    .catch(err => console.log(err));
}

export default { getRooms };
