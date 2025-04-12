import {createRouter, createWebHashHistory} from "vue-router";

//Agregando paginas de la aplicación

import Horario2 from "../Pages/Horario2.vue";
import Eventos from "../Pages/Eventos.vue";
import Listas from "../Pages/Listas.vue";
import CalculadoraV1 from "../Pages/CalculadoraV1.vue";
import Horario1 from "../Pages/Horario1.vue";
import Listas1 from "../Pages/Listas1.vue";
import CalculadoraV2 from "../Pages/CalculadoraV2.vue";
import Padre from "../Pages/Padre.vue";
import Login from "../Pages/Login.vue";
import Registro from "../Pages/Registro.vue";




const routes =[
    {
        path: "/calculadorav2",
        name: "calculadorav2",
        component: CalculadoraV2,
    },
    {
        path: "/horario2",
        name: "horario2",
        component: Horario2,
    },
    {
        path: "/eventos",
        name: "eventos",
        component: Eventos,
    },
    {
        path: "/listas",
        name: "listas",
        component: Listas,
    },
    {
        path: "/calculadorav1",
        name: "calculadorav1",
        component: CalculadoraV1,
    },
    {
        path: "/horario1",
        name: "horario1",
        component: Horario1,
    },
    {
        path: "/listas1",
        name: "listas1",
        component: Listas1,
    },
    {
        path: "/padre",
        name: "padre",
        component: Padre,
    },
    {
        path: "/login",
        name : "login",
        component: Login,
    },
    {
        path: "/registro",
        name : "registro",
        component: Registro,
    }



]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;




