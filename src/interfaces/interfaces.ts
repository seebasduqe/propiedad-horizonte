export interface Propiedad_horizonte {
    nit: string;
    razon_social: string;
    direccion : string;
    reglamento : string;
};

export interface Inmueble {
    id_inmueble: string;
    direccion: string;
    telefono: string;
    categoria: string;
    propiedad_horizonte: string;
    propietario: string;
};

export interface Reglamento {
    id_reglamento: string;
    titulo : string;
    descripcion : string;
};

export interface Persona {
    cedula: string;
    nombre: string;
    no_celular: string;
};

export interface Mascota {
    id_mascota: string;
    nombre: string;
    tipo: string;
    raza: string;
}
