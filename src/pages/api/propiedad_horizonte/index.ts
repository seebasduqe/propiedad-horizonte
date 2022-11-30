import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";
import {getAllPropiedadHorizonte} from "./service/service";
import {Propiedades_horizonte} from "../../../interfaces/propiedad_horizonte";

export default async (req : NextApiRequest, res : NextApiResponse) => {

    const {method, body} = req;

    switch (method){
        case "GET":
            try {
                const propidades_horizonte : Propiedades_horizonte =  await getAllPropiedadHorizonte();
                return res.status(200).json(propidades_horizonte);
            } catch (error:any){
                return res.status(400).json({message: error.message});
            }
        case "POST":
            try {
                const querySql = "insert into propiedad_horizonte (nit,razon_social,direccion,reglamento) values($1,$2,$3,$4)  returning *";
                const {nit,razon_social,direccion,reglamento} = body;
                const values = [nit,razon_social,direccion,reglamento];
                const response = await conn.query(querySql, values);
                console.log(response.rows[0]);
                return res.status(200).json(response.rows[0]);
            } catch (error:any){
                return res.status(400).json({message: error.message});
            }
        default:
            res.status(400).json({message: "metodo invalido"});
    }

}