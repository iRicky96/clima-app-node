const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=ba4fb61666811648bf9698c036ea58ff`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}