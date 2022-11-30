export interface Area_comun {
    id_area : number;
    nombre_area_comun: string;
    ubicacion: string;
    capacidad: number;
    horario: string;
    propiedad_horizonte: string;
}

export interface Areas_comunes {
    areas_comunes : Area_comun[];
}