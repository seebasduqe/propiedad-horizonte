import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";


export default async (req : NextApiRequest, res : NextApiResponse) => {

    const {method, body} = req;

    switch (method){
        case 'GET':
            try{
                const querySql = "select * from inmueble";
                const response = await conn.query(querySql);
                return res.status(200).json(response.rows);
            } catch (error:any){
                return res.status(400).json({message: error.message});
            }
        case 'POST':
            try{
                const querySql =
                    "INSERT INTO inmueble (id_inmueble,direccion,telefono,categoria,propiedad_horizonte,propietario) VALUES ($1,$2,$3,$4,$5, $6) returning *";
                const {id_inmueble, direccion, telefono, categoria, propiedad_horizonte, propietario} = body;
                const values = [id_inmueble, direccion, telefono, categoria, propiedad_horizonte, propietario];
                const response = await conn.query(querySql, values);
                console.log(response.rows[0]);
                return res.status(200).json(response.rows[0]);
            } catch (error: any){
                return res.status(400).json({message: error.message});
            }
        default:
            return res.status(400).json("metodo invalido");
    }

}