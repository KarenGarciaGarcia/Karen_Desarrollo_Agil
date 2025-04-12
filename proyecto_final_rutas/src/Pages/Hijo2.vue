<script setup>
import {ref} from 'vue'

defineProps ({
   edad: String,
})

</script>

<template>
 <h6>Soy el componente hijo2</h6>
 <p>{{ edad }}</p>
</template>

<style scoped>
h6{
   color: rgb(248, 20, 146);
}

</style>