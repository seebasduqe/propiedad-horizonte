import {Persona} from "./Persona";
import {Inmueble} from "./Inmueble";
import {Propiedad_horizonte} from "./propiedad_horizonte";
import {Reglamento} from "./Reglamento";
import {Mascota} from "./Mascota";
import {Vehiculo} from "./Vehiculo";
import {Parqueadero} from "./Parqueadero";
import {Area_comun} from "./Area_comun";
import {Evento} from "./Evento";
import {Consejo_admin} from "./Consejo_admin";

export interface Props {
    personas : Persona[],
    inmuebles : Inmueble[],
    propiedades_horizonte : Propiedad_horizonte[],
    reglamentos : Reglamento[],
    mascotas : Mascota[],
    vehiculos : Vehiculo[],
    parqueaderos : Parqueadero[],
    areas_comunes : Area_comun[],
    eventos : Evento[],
    consejos_admin : Consejo_admin[]
}
