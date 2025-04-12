<script setup>
import {ref} from 'vue'

defineProps ({
   edad: String,
})

</script>

<template>
 <h6>Soy el componente hijo1</h6>
 <p>{{ edad }}</p>
</template>

<style scoped>
h6{
   color: rgb(238, 11, 11);
}

</style>
