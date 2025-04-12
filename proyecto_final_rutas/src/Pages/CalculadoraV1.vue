<script>
export default{
    data() {
        return {
            numero1: 0,
            numero2: 0,
            resultado: 0,
            
        }
    },
    methods: {
        sumar(){
            this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
        },
        resta(){
            this.resultado = parseFloat(this.numero1) - parseFloat(this.numero2);
        },
        multiplicar(){
            this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);
        },
        dividir(){
            this.resultado = parseFloat(this.numero1) / parseFloat(this.numero2);
        }
    },
}
</script>
<template>
    <div class="container mt-5">
        <div class="card shadow p-4">
            <h1 class="text-center">Calculadora V1</h1>

            <div class="mb-3">
            <label for="">Numero 1</label>
            <input type="number" class="form-control" v-model="numero1">
        </div>
        <div class="mb-3">
            <label for="">Numero 2</label>
            <input type="number" class="form-control" v-model="numero2">
        </div>
        <div class="d-flex justify-content-center gap-2">
            <button @click="sumar"class="btn btn-danger">Sumar</button>
            <button @click="resta"class="btn btn-warning">Resta</button>
            <button @click="multiplicar"class="btn btn-dark">Multiplicación</button>
            <button @click="dividir"class="btn btn-danger">División</button>
        </div>
        <h2 class="text-center mt-4">Resultado: {{ resultado }}</h2>
    </div>
    </div>

</template>
<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.card {
    border-radius: 15px;
    background: #97cfe9;
}
button {
    transition: 0.3s;
}
button:hover {
    transform: scale(1.05);
}
</style>


