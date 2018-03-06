const axios = require('axios');

const getRooms = (day, time) => {
  // URL for AWS Lambda
  const requestUrl = `https://l6ei41zyp0.execute-api.us-west-1.amazonaws.com/dev/rooms?day=${day}&time=${time}`;

  return axios.get(requestUrl)
    .then(res => res.data)
    .catch(err => console.log(err));
}

export default { getRooms };
