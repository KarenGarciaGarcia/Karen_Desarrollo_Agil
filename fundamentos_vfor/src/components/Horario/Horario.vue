<template>
  <div class="container">
    <h3 class="mt-4">Horario de clases de Karen</h3>
  
  <table class="table ">
<thead>
  <tr>
    <th scope="col">Hora</th>
    <th scope="col">Lunes</th>
    <th scope="col">Martes</th>
    <th scope="col">Miercoles</th>
    <th scope="col">Jueves</th>
    <th scope="col">Viernes</th>
  </tr>
</thead>
<tbody>
  <tr v-for="(h, index) in horario" :key="index">
  <td>{{ h.hora }}</td>
  <td>{{ h.lunes }}</td>
  <td>{{ h.martes }}</td>
  <td>{{ h.miercoles }}</td>
  <td>{{ h.jueves }}</td>
  <td>{{ h.viernes }}</td>

  </tr>

 
</tbody>
</table>
  </div>
  


</template>
<script setup>
import {ref} from 'vue';
const horario = ref ([
  {hora: '7:00 - 9:00', lunes: 'Simulación', martes:'', miercoles: 'Desarrollo Ágil', jueves: 'Simulación', viernes: ''},
  {hora: '9:00 - 11:00', lunes: 'Desarrollo Ágil', martes:'', miercoles: '', jueves: '', viernes: 'Desarrollo Ágil'},
  {hora: '11:00 - 13:00', lunes: '', martes:'Topicos', miercoles: 'Topicos', jueves: '', viernes: 'Simulación'},
  {hora: '13:00 - 15:00', lunes: 'Software', martes:'', miercoles: 'Programación Web', jueves: 'Base de Datos', viernes: 'Software'},
  {hora: '15:00 - 17:00', lunes: 'Programación Web', martes:'Sistemas Operativos', miercoles: 'Software', jueves: 'Sistemas Operativos', viernes: 'Programación Web'},
  {hora: '17:00 - 19:00', lunes: 'Base de Datos', martes:'', miercoles: '', jueves: '', viernes: ''}


])
</script>

<style scoped>
/* Contenedor principal */
.container {
  max-width: 900px;
  background: #e4bdda;
  padding: 20px;
  border-radius: 10px;
}

/* Tabla */
table {
  border-radius: 10px;
 
}

/* Bordes y separación de filas */
td, th {
  padding: 10px;
  border: 1px solid #0d0d0e;
}
th:first-child, td:first-child {
  min-width: 150px;  /* Aumenta el tamaño según necesites */
  text-align: center;
  vertical-align: middle;
}
</style>
