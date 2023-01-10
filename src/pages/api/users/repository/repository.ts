import {Propiedad_horizonte} from "../../../../interfaces/interfaces";
import {conn} from "../../../../utils/database";

interface Propiedades_horizonte {
  propiedades_horizonte: Propiedad_horizonte[];
};


export const repositoryGetAll = async () : Propiedades_horizonte => {

    const querySql = "select * from propiedad_horizonte";
    const {rows} = await conn.query(querySql);
    const propiedades_horizonte : Propiedades_horizonte = rows;
    return propiedades_horizonte;
}

