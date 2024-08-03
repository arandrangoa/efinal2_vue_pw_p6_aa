import { createRouter, createWebHashHistory } from 'vue-router';

import IngresarVehiculo from '../pages/IngresarVehiculo.vue';
import ConsultarVehiculoGeneral from '../pages/ConsultarVehiculoGeneral.vue';

const routes = [
    {
        path: '/vehiculos/ingresar',
        component: IngresarVehiculo
    },
    {
        path: '/vehiculos/consultar',
        component: ConsultarVehiculoGeneral
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;


