<script setup>
import { ref } from 'vue'
import Hijo1 from './Hijo1.vue';
import Hijo2 from './Hijo2.vue';



defineProps({
nombre: String,
})

</script>

<template>
    <div class="container ">
    <h1> Soy el componente padre</h1>
    <Hijo1 class="mt-4" edad="10"/>
    <Hijo2 class="mt-4" edad="4"/>
    </div>
    
  
</template>

<style scoped>
.container{
    color: rgb(24, 23, 23);
}
h1{
    color: blueviolet;
}
</style>

