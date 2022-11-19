import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";

export default async (req : NextApiRequest, res: NextApiResponse) => {

    const {query : {id}, method, body} = req;

    switch (method){
        case "GET":
            try {
                const querySql = "SELECT * FROM PERSONA WHERE CEDULA = $1";
                const values = [id];
                const response = await conn.query(querySql, values);
                res.status(200).json(response.rows[0]);

            } catch (error : any){
                res.status(400).json({message: error.message});
            }

        case "PUT":

            try {
                const cedulaPath = id;
                const querySql = "update persona set cedula=$1, nombre=$2, no_celular=$3 where cedula=$4 returning *";
                const {cedula,nombre,celular} = body;
                const personaUpdated = [cedula,nombre,celular,cedulaPath];
                const response = await conn.query(querySql,personaUpdated);
                res.status(200).json(response.rows[0]);

            } catch (error:any){
                res.status(400).json({message: error.message});
            }


        case "DELETE":
            try{
                const cedulaPath = [id];
                const querySql = "delete from persona where cedula=$1 returning *";
                const response = await conn.query(querySql,cedulaPath);
                res.status(200).json(response.rows[0]);

            } catch (error:any){
                return res.status(400).json({message: error.message});
            }
        default:
            return res.status(400).json("metodo invalido");
    }
}