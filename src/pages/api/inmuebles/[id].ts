import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";

export default async (req : NextApiRequest, res: NextApiResponse) => {

    const {query: {id}, method, body} = req;

    switch (method){
        case "GET":
            try {
                const querySql = "SELECT * FROM INMUEBLE WHERE ID_INMUEBLE = $1";
                const values = [id];
                const response = await conn.query(querySql, values);
                return res.status(200).json(response.rows[0]);

            } catch (error: any){
                return res.status(400).json({message: error.message});
            }
        case "PUT":
            try {
                const idPatch = id;
                const querySql =
                    "update inmueble set id_inmueble=$1, direccion=$2, telefono=$3, categoria=$4, propiedad_horizonte=$5, propietario=$6 where id_inmueble=$7 returning *";
                const {id_inmueble,direccion,telefono,categoria,propiedad_horizonte,propietario} = body;
                const values = [id_inmueble,direccion,telefono,categoria,propiedad_horizonte,propietario, idPatch];
                const response = await conn.query(querySql, values);
                console.log(response.rows[0]);
                return res.status(200).json(response.rows[0]);
            } catch (error: any){
                return res.status(400).json({message: error.message});
            }
        case "DELETE":
            try {
                const idPatch = [id];
                const querySql = "delete from inmueble where id_inmueble = $1 returning *";
                const response = await conn.query(querySql, idPatch);
                return res.status(200).json(response.rows[0]);
            } catch (error: any){
                return res.status(400).json({message: error.message});
            }
        default:
            return res.status(400).json({message: "metodo invalido"});
    }

}