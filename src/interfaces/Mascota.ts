export interface Mascota {
    id_mascota : number;
    nombre : string;
    dueño : string;
    tipo : string;
    raza : string;
};

export interface Mascotas {
    mascotas : Mascota[];
}
