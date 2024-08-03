<template>
  <div class="container">

    <table>
      <thead>
        <tr>
          <th>Placa</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Accion</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(vehiculo, index) in vehiculos" :key="index">
          <td>{{ vehiculo.placa }}</td>
          <td>{{ vehiculo.marca }}</td>
          <td>{{ vehiculo.modelo }}</td>
          <td><button @click="editarVehiculo(index)">Ver</button></td>
          <td><button @click="eliminarVehiculo(index)">Borrar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vehiculos: [
        { placa: 'ABC123', marca: 'Toyota', modelo: 'Corolla' },
        { placa: 'XYZ789', marca: 'Honda', modelo: 'Civic' },
        // Agrega más vehículos según sea necesario
      ],
    };
  },
  methods: {
    editarVehiculo(index) {
      // Lógica para editar el vehículo
    },
    eliminarVehiculo(index) {
      // Lógica para eliminar el vehículo
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}


</style>
