const axios = require("axios");
require("dotenv").config();
const { API_END_POINT, API_KEY } = process.env;

exports.handler = async function (event) {
  const options = JSON.parse(event.body);
  const { url = "", method, body } = options;

  console.log(`${API_END_POINT}?apikey=${API_KEY}&${url}`);
  const res = await axios({
    url: `${API_END_POINT}?apikey=${API_KEY}&${url}`,
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(res.data),
  };
};
