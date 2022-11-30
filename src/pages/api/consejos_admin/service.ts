import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";
import {Consejo_admin, Consejos_admin} from "../../../interfaces/Consejo_admin";

export const getAllConsejos_adminService = async (req: NextApiRequest, res: NextApiResponse) => {
    try{
        const responsedb = await conn.query("select * from consejo_admin");
        const consejos_admin : Consejos_admin = responsedb.rows;
        return res.status(200).json(consejos_admin);
    } catch (error : any){
        return res.status(400).json({message : error.message});
    }
}

export const getConsejo_adminService = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query : {id} } = req;
    try{
        const value : number[] = [Number(id)];
        const querySql = "select * from consejo_admin where id_cargo=$1";
        const responsedb = await conn.query(querySql,value);
        const consejo_admin : Consejo_admin = responsedb.rows[0];
        return res.status(200).json(consejo_admin);
    } catch (error : any){
        return res.status(400).json({message : error.message});
    }
}

export const salvarConsejo_adminService = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body: {id_cargo, cargo, cedula, año} } = req;
    try{
        const values : Array<Consejo_admin> = [id_cargo, cargo, cedula, año];
        const querySql = "insert into consejo_admin(id_cargo, cargo, cedula, año) values($1,$2,$3,$4) returning *";
        const responsedb = await conn.query(querySql, values);
        const consejo_admin : Consejo_admin = responsedb.rows[0];
        return res.status(200).json(consejo_admin);
    } catch (error : any){
        return res.status(400).json({message : error.message});
    }
}

export const actualizarConsejo_adminService = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query : {id}, body : {id_cargo, cargo, cedula, año} } = req;
    try{
        const values = [id_cargo, cargo, cedula, año, Number(id)];
        const querySql = "update consejo_admin set id_cargo=$1, cargo=$2, cedula=$3, año=$4 where id_cargo=$5 returning *";
        const responsedb = await conn.query(querySql,values);
        const consejo_admin : Consejo_admin = responsedb.rows[0];
        return res.status(200).json(consejo_admin);
    } catch (error : any){
        return res.status(400).json({message : error.message});
    }
}

export const borrarConsejo_adminService = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query : {id} } = req;
    try{
        const value : number[] = [Number(id)];
        const querySql = "delete from consejo_admin where id_cargo=$1 returning *";
        const responsedb = await conn.query(querySql,value);
        const consejo_admin : Consejo_admin = responsedb.rows[0];
        return res.status(200).json(consejo_admin);
    } catch (error : any){
        return res.status(400).json({message : error.message});
    }
}