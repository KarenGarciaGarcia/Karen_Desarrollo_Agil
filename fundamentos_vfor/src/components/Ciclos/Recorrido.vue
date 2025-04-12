<script>
export default {
    data() {
        return{
            //DATOS DE ALUMNOS
            alumnos:[
            { nc: 21620140, nombre: 'Karen Garcia Garcia', carrera: 'ISC', materia: 'Programación' },
                { nc: 21620141, nombre: 'Luis Pérez López', carrera: 'ISC', materia: 'Bases de Datos' },
                { nc: 21620142, nombre: 'María González Ruiz', carrera: 'ITC', materia: 'Redes' },
                { nc: 21620143, nombre: 'Juan Torres Martínez', carrera: 'IIA', materia: 'Automatización' },
                { nc: 21620144, nombre: 'Ana Herrera Díaz', carrera: 'ISC', materia: 'Inteligencia Artificial' },
                { nc: 21620145, nombre: 'Carlos López Fernández', carrera: 'ITC', materia: 'Ciberseguridad' }
                
            ]
        }
    },
}
</script>
<template>
    <div class="container">
        <h3>Lista de alumnos</h3>
        <ul>
            <li v-for="alumno in alumnos" :key="alumno.nc">
                <strong>{{ alumno.nc }}</strong> -
                <strong>{{ alumno.nombre }} </strong> -
                <strong>{{ alumno.carrera }} </strong> -
                <strong>{{ alumno.materia }}</strong>

            </li>
        </ul>

    </div>

</template>

<style >
h3{
    color: rgb(15, 15, 15);
    background-color: rgb(34, 162, 236);
    border-radius: 15px;
    padding: 10px;
    text-align: center;
}


ul{
    list-style-type: none;
    padding: 0%;
}
li{
    color: rgb(15, 15, 15);
    background-color: rgb(230, 210, 210);
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    text-align: center;
    margin-bottom: 10px; 

}
</style>