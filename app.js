const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion para obtener el clima',
        demand: true
    }
}).argv;



// lugar.getLugarLatLng(argv.direccion)
//     .then( console.log);


// clima.getClima()
//     .then()
//     .catch()


const getInfo = async(direccion) => {
    try {
        const lugarTMP = await lugar.getLugarLatLng(direccion);
        const climaTMP = await clima.getClima(lugarTMP.lat,lugarTMP.lng);
        console.log(`El clima de ${direccion} es de ${climaTMP}º`);  
    } catch (error) {
        console.log(`No se puedo determinar el clima de ${direccion}`)
    }

}


getInfo(argv.direccion);



