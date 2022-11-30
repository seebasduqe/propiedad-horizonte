import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../../utils/database";

export const getAllMascotasService = async (req : NextApiRequest, res: NextApiResponse) => {
    try{
        const response = await conn.query("select * from mascotas");
        return res.status(200).json(response.rows);
    } catch (error : any){
        return res.status(200).json({message : error.message});
    }
}

export const salvarMascotaService = async (req : NextApiRequest, res: NextApiResponse) => {
    const {body} = req;
    const {nombre, dueño, tipo, raza} = body;
    try{
        const query = "INSERT INTO mascotas(nombre,dueño,tipo,raza) VALUES($1,$2,$3,$4) RETURNING *";
        const values = [nombre, dueño, tipo, raza];
        const response = await conn.query(query, values);
        return res.status(200).json(response.rows[0]);

    } catch (error : any){
        return res.status(200).json({message : error.message});
    }
}

export const getMascotaService = async (req : NextApiRequest, res: NextApiResponse) => {
    const { query : {id} } = req;

    try{
        const value = [id];
        const querySql = "select * from mascotas where nombre=$1";
        const response =  await conn.query(querySql, value);
        return res.status(200).json(response.rows[0]);
    } catch (error: any){
        return res.status(400).json({message: error.message});
    }
}

export const actulizarMascotaService = async (req : NextApiRequest, res: NextApiResponse) => {
    const {query : {id}, body} = req;
    try{
        const querySql = "update mascotas set nombre=$1, dueño=$2, tipo=$3, raza=$4 WHERE nombre=$5 RETURNING *";
        const {nombre, dueño, tipo, raza} = body;
        const values = [nombre, dueño, tipo, raza, id];
        const response = await conn.query(querySql, values);
        return res.status(200).json(response.rows[0]);
    } catch (error: any){
        return res.status(400).json({message: error.message});
    }
}

export const eliminarMascotaService = async (req : NextApiRequest, res: NextApiResponse) => {
    const { query : {id} } = req;
    try{
        const value = [id];
        const querySql = "delete from mascotas where nombre=$1 RETURNING *";
        const response = await conn.query(querySql, value);
        return res.status(200).json(response.rows[0]);
    } catch (error: any){
        return res.status(400).json({message: error.message});
    }
}

