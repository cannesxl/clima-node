const axios = require('axios');


const getClima = async(lat ,lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4c71911d1f289cbbe51839d9121ef945&units=metric`);
    return resp.data.main.temp;

    
}


module.exports = {
    getClima
}