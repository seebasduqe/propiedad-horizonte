export interface Consejo_admin {
    id_cargo: number;
    cargo: string;
    cedula: string;
    año: number;
}

export interface Consejos_admin {
    concejos_admin : Consejo_admin[];
}