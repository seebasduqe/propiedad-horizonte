import {NextApiRequest, NextApiResponse} from "next";
import {Vehiculo, Vehiculos} from "../../../interfaces/Vehiculo";
import {conn} from "../../../utils/database";


export const getAllVehiculosService = async (req : NextApiRequest, res: NextApiResponse) => {
    try{
        const responsedb = await conn.query("select * from vehiculo");
        const vehiculos : Vehiculos = responsedb.rows;
        return res.status(200).json(vehiculos);
    } catch (error : any) {
        return res.status(400).json({message : error.message});
    }
}

export const getVehiculoService = async (req : NextApiRequest, res: NextApiResponse) => {
    const {method, query : {id}} = req;
    try{
        const value = [id];
        const querySql = "select * from vehiculo where placa=$1";
        const responsedb = await conn.query(querySql, value);
        const vehiculo : Vehiculo = responsedb.rows[0];
        return res.status(200).json(vehiculo);
    } catch (error : any) {
        return res.status(400).json({message : error.message});
    }
}

export const salvarVehiculoService = async (req : NextApiRequest, res: NextApiResponse) => {
    const { body : {placa, dueño} } = req;
    try{
        const values = [placa, dueño];
        const querySql = "insert into vehiculo(placa, dueño) values($1,$2) RETURNING *";
        const responsedb = await conn.query(querySql,values);
        const vehiculo : Vehiculo = responsedb.rows[0];
        return res.status(200).json(vehiculo);
    } catch (error : any) {
        return res.status(400).json({message : error.message});
    }
}

export const actualizarVehiculoService = async (req : NextApiRequest, res: NextApiResponse) => {
    const { query : {id}, body : {placa,dueño}} = req;
    try{
        const values = [placa,dueño,id];
        const querySql = "update vehiculo set placa=$1, dueño=$2 where placa=$3 returning *";
        const responsedb = await conn.query(querySql,values);
        const vehiculo : Vehiculo = responsedb.rows[0];
        return res.status(200).json(vehiculo);
    } catch (error : any) {
        return res.status(400).json({message : error.message});
    }
}

export const borrarVehiculoService = async (req : NextApiRequest, res: NextApiResponse) => {
    const {query : {id}} = req;
    try{
        const value = [id];
        const querySql = "delete from vehiculo where placa=$1 returning *";
        const responsedb = await conn.query(querySql,value);
        const vehiculo : Vehiculo = responsedb.rows[0];
        return res.status(200).json(vehiculo);
    } catch (error : any) {
        return res.status(400).json({message : error.message});
    }
}

