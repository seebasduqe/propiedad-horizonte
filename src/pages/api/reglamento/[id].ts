import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";


export default async (req : NextApiRequest, res : NextApiResponse) => {

    const {query: {id}, method, body} = req;

    switch (method){
        case "GET":
            try {
                const querySql = "select * from reglamento where id_reglamento=$1";
                const values = [id];
                const response = await conn.query(querySql,values);
                return res.status(200).json(response.rows[0]);
            } catch (error : any){
                return res.status(500).json({message: error.message});
            }
        case "PUT":
            try {
                const querySql =
                    "update reglamento set id_reglamento=$1, titulo=$2, descripcion=$3 where id_reglamento=$4 returning *";
                const idPatch = id;
                const {id_reglamento, titulo, descripcion} = body;
                const values = [id_reglamento, titulo, descripcion, idPatch];
                const response = await conn.query(querySql,values);
                return res.status(200).json(response.rows[0]);
            } catch (error : any){
                return res.status(500).json({message: error.message});
            }
        case "DELETE":
            try {
                const values = [id];
                const querySql = "delete from reglamento where id_reglamento=$1 returning *";
                const response = await conn.query(querySql, values);
                return res.status(200).json(response.rows[0]);
            } catch (error : any){
                return res.status(500).json({message: error.message});
            }
        default:
            return res.status(400).json({message: "metodo invalido"});
    }

}