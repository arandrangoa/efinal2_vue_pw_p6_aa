<template>
  <div class="container">
    <div class="formulario">
        <header>Crear Nuevo Vehiculo</header>
        <form class="form">
            <p class="formatoP" type="Placa">
                <input v-model="placa" type="text">
            </p>
             <p type="Marca">
                <input v-model="marca" type="text">
            </p>
             <p type="Modelo">
                <input v-model="modelo" type="text">
            </p>
             <p type="Color">
                <input v-model="color" type="text">
            </p>
             <p type="Precio">
                <input v-model="precio" type="text">
            </p>
            <button type="button" v-on:click="guardarVehiculo">GUARDAR</button>
        </form>
    </div>

  </div>
</template>

<script>

import {guardarVehiculoFachada} from '../assets/clients/cliente'

export default {
    data(){
        return{
            placa:'',
            marca:'',
            modelo:'',
            color:'',
            precio:''
        }
    },
    methods:{
        async guardarVehiculo(){
            const vehiculoBody={
                placa: this.placa,
                marca: this.marca,
                modelo:this.modelo,
                color:this.color,
                precio:this.precio
            }
            await guardarVehiculoFachada(vehiculoBody);
            alert("Vehiculo guardado exitosamente");
            console.log(data);
        }
    }

}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}


p:before {
  content: attr(type);
  display: block;
  margin: 5px;
  font-size: 15px;
  color: black;
}


input {
  width: 200px;
  border: none;
  border-bottom: 2px solid #bebed2;
  padding: 5px;
  font-size: 14px;
  margin-bottom: 10px;
}

input:focus {
  outline: none;
  border-bottom: 2px solid #78788c;
}

.form {
  width: 300px;
  background-color: #e6e6e6;
  border-radius: 10px;
  padding: 25px 35px;
  margin: 25px;
  box-shadow: 0px 0px 30px 5px #000;
}


.botonCrear {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 25px;
  padding: 12px;
}
</style>