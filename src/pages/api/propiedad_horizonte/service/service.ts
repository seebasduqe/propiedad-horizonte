import {Propiedad_horizonte} from "../../../../interfaces/propiedad_horizonte";
import {conn} from "../../../../utils/database";
import {Propiedades_horizonte} from "../../../../interfaces/propiedad_horizonte";

export const getAllPropiedadHorizonte = async () : Promise<Propiedades_horizonte> => {

    const querySql = "select * from propiedad_horizonte";
    const response = await conn.query(querySql);
    const propiedades_horizonte : Propiedades_horizonte = response.rows;
    return propiedades_horizonte;
}