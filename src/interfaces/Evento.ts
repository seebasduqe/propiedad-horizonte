export interface Evento {
    id_evento : number;
    id_area: number;
    fecha: Date;
    titulo : string;
    descripcion : string;
}

export interface Eventos {
    eventos: Evento[];
}