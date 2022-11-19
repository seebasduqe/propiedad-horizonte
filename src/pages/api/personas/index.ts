import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const {method, body} = req;

    switch (method){
        case "GET" :
            try {
                const query = "select * from persona";
                const response = await conn.query(query);
                return res.status(200).json(response.rows);
            } catch (error: any){
                return res.status(400).json({message: error.message});
            }

        case "POST" :
            try{
                const query =
                    "INSERT INTO persona (cedula,nombre,no_celular) VALUES ($1,$2,$3) RETURNING *";
                const {cedula,nombre,no_celular} = body;
                const persona = [cedula, nombre, no_celular];
                const response = await conn.query(query, persona);
                return res.status(200).json(response.rows);

            } catch (error: any){
                return res.status(400).json({message: error.message});
            }

        default:
            return res.status(400).json("metodo invalido");
    }
}