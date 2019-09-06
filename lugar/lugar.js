const axios = require('axios');


const getLugarLatLng = async( dir ) => {

    const encoderURL = encodeURI(dir);
  
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderURL}`,
        timeout: 1000,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key' : '9592c64d91mshac9818904da39e9p1c1525jsn15dfd98e6d3e'
        }
    });
    
    const resp = await instance.get() //se espera a que tenga datos con await

    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dir} \n\n\n`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}    


module.exports = {
    getLugarLatLng
}