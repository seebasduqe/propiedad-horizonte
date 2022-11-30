export interface Parqueadero {
    id_parqueadero : number;
    quien_lo_usa : string;
    id_inmueble : string;
}

export interface Parqueaderos {
    parqueaderos : Parqueadero[];
}