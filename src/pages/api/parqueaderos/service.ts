import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";
import {Parqueadero, Parqueaderos} from "../../../interfaces/Parqueadero";

export const getAllParqueaderosService = async (req : NextApiRequest, res : NextApiResponse) => {
    try{
        const responsedb = await conn.query("select * from parqueadero");
        const parqueaderos : Parqueaderos = responsedb.rows;
      return res.status(200).json(parqueaderos);
    } catch (error: any){
        return res.status(400).json({message : error.message});
    }
}

export const getParqueaderoService = async (req : NextApiRequest, res : NextApiResponse) => {
    const { query : {id} } = req;
    try{
        const value = [id];
        const querySql = "select * from parqueadero where id_parqueadero=$1";
        const responsedb = await conn.query(querySql,value);
        const parqueadero : Parqueadero = responsedb.rows[0];
        return res.status(200).json(parqueadero);
    } catch (error: any){
        return res.status(400).json({message : error.message});
    }
}

export const salvarParqueaderoService = async (req : NextApiRequest, res : NextApiResponse) => {
    const { body : {id_parqueadero,quien_lo_usa, id_inmueble} } = req;
    try{
        const values = [id_parqueadero,quien_lo_usa, id_inmueble];
        const querySql = "insert into parqueadero(id_parqueadero,quien_lo_usa, id_inmueble) values($1,$2,$3) returning *";
        const responsedb = await conn.query(querySql,values);
        const parqueadero : Parqueadero = responsedb.rows[0];
        return res.status(200).json(parqueadero);
    } catch (error: any){
        return res.status(400).json({message : error.message});
    }
}

export const actualizarParqueaderoService = async (req : NextApiRequest, res : NextApiResponse) => {
    const { query : {id}, body : {id_parqueadero,quien_lo_usa, id_inmueble} } = req;
    try{
        const idPatch : number = Number(id);
        const values = [id_parqueadero,quien_lo_usa, id_inmueble, idPatch];
        const querySql = "update parqueadero set id_parqueadero=$1, quien_lo_usa=$2, id_inmueble=$3 where id_parqueadero=$4 returning *";
        const responsedb = await conn.query(querySql, values);
        const parqueadero : Parqueadero = responsedb.rows[0];
        return res.status(200).json(parqueadero);
    } catch (error: any){
        return res.status(400).json({message : error.message});
    }
}

export const borrarParqueaderoService = async (req : NextApiRequest, res : NextApiResponse) => {
    const { query : {id} } = req;
    try{
        const value = [id];
        const querySql = "delete from parqueadero where id_parqueadero=$1 returning *";
        const responsedb = await conn.query(querySql,value);
        const parqueadero : Parqueadero = responsedb.rows[0];
        return res.status(200).json(parqueadero);
    } catch (error: any){
        return res.status(400).json({message : error.message});
    }
}