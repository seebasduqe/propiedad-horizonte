import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";


export default async (req : NextApiRequest, res : NextApiResponse) => {

    const {query : {id}, method, body} = req;

    switch (method){
        case "GET":
            try {
                const querySql = "select * from propiedad_horizonte where nit =$1";
                const values = [id];
                const response = await conn.query(querySql, values);
                return res.status(200).json(response.rows[0]);
            } catch (error: any){
                return res.status(400).json({message: error.message});
            }
        case "PUT":
            try {
                const querySql =
                    "update propiedad_horizonte set nit=$1,razon_social=$2, direccion=$3, reglamento=$4 where nit=$5returning *";
                const {nit,razon_social, direccion, reglamento} = body;
                const idPatch = id;
                const values = [nit,razon_social, direccion, reglamento, idPatch];
                const response = await conn.query(querySql, values);
                return res.status(200).json(response.rows[0]);
            } catch (error: any){
                return res.status(400).json({message: error.message});
            }
        case "DELETE":
            try {
                const querySql = "delete from propiedad_horizonte where nit=$1 returning *";
                const values = [id];
                const response = await conn.query(querySql, values);
                console.log(response.rows[0]);
                return res.status(200).json(response.rows[0]);
            } catch (error: any){
                return res.status(400).json({message: error.message});
            }
        default:
            return res.status(400).json({message: "metodo invalido"});

    }

}