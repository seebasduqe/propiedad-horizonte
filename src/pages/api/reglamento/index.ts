import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";


export default async (req: NextApiRequest, res: NextApiResponse) => {

    const {method, body} = req;

    switch (method){
        case "GET":
            try {
                const querySql = "select * from reglamento";
                const response = await conn.query(querySql);
                return res.status(200).json(response.rows);
            } catch (error: any){
                return res.status(500).json({message: error.message});
            }
        case "POST":
            try {
                const querySql = "insert into reglamento(id_reglamento, titulo, descripcion) values($1,$2,$3) returning *";
                const {id_reglamento, titulo, descripcion} = body;
                const values = [id_reglamento, titulo, descripcion];
                const response = await conn.query(querySql, values);
                console.log(response.rows[0]);
                return res.status(200).json(response.rows[0]);
            } catch (error: any){
                return res.status(500).json({message: error.message});
            }
        default:
            return res.status(400).json({message: "metodo invalido"});
    }

}