
<template>
    <div class="container">
      <h4 class="mt-4">Horario </h4>
    
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
    {hora: '9:00 - 11:00', lunes: '', martes:'', miercoles: '', jueves: '', viernes: ''},
    {hora: '11:00 - 13:00', lunes: '', martes:'Topicos', miercoles: 'Topicos', jueves: '', viernes: 'Simulación'},
    {hora: '13:00 - 15:00', lunes: 'Software', martes:'', miercoles: '', jueves: 'Base de Datos', viernes: 'Software'},
    {hora: '15:00 - 17:00', lunes: '', martes:'Sistemas Operativos', miercoles: 'Software', jueves: 'Sistemas Operativos', viernes: 'Programación Web'},
    {hora: '17:00 - 19:00', lunes: 'Base de Datos', martes:'', miercoles: '', jueves: '', viernes: ''}
  
  
  ])
  </script>
  
  <style scoped>
 
  </style>