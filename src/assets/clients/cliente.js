import axios from "axios";

//metodos api

const guardarVehiculo= async (vehiculoBody)=>{
    const data= await axios.post(`http://localhost:8081/API/v1.0/Concesionario/vehiculos`,vehiculoBody)
    .then(r=>r.data);
    return data;
}

const buscarPorPlaca= async(placa)=>{
    const data= await axios.get(``)
}



//metodos fachada

export const guardarVehiculoFachada= async (vehiculoBody)=>{
    return guardarVehiculo(vehiculoBody);
}
