<template>
    <div class="container">
        <div class="row mt-4">
            <div>
                <h4>Evento Click</h4>
                <button @click="clic" class="btn btn-danger" type="button">Dale clic</button>
                <button @click="soyButon" class="btn btn-warning mx-2" type="button">Dale clic 2</button>
            </div>
            <div>
                <h4>Evento Change</h4>
                <label class="input-group-text" for="">Ingresa tu nombre</label>
                <input class="form-control mt-2" type="text" id="nombre" @change="nombreE">
                <p>el nombre ingresado es: <strong>{{ nombre }}</strong> </p>
            </div>
            <div>
                <h3>Evento de mouseenter y mouseleave</h3>
                <div style="color:#ffff; width: 300px;height: 200px; background-color: black;text-align: center; padding: 15px; border-radius: 15px;"
                    @mouseenter="mostrarMensaje" @mouseleave="ocultarMensaje">
                    <p>pase el mouse</p>
                    <p>{{ mensaje }}</p>

                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            nombre: '',
            mensaje: '',
        }
    },
    methods: {
        clic() {
            alert("gracias por darle clic")
        },
        soyButon() {
            alert("soy un boton")
        },
        nombreE(event) {
            this.nombre = event.target.value

        },
        mostrarMensaje() {
            this.mensaje = "El mouse esta dentro del rectangulo"
        },
        ocultarMensaje() {
            this.mensaje = "El mouse esta fuera del rectangulo"
        }

    }
}
</script>

<style scoped>
/* Estilos generales */
.container {
    max-width: 600px;
    margin: auto;
}

/* Botones */
.btn {
    padding: 10px 15px;
    font-size: 16px;
}
</style>