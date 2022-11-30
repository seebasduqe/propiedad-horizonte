import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";
import {Area_comun, Areas_comunes} from "../../../interfaces/Area_comun";

export const getAllAreas_comunesService = async (req : NextApiRequest,res : NextApiResponse) => {
    try{
        const responsedb = await conn.query("select * from areas_comunes");
        const areas_comunes : Areas_comunes = responsedb.rows;
        return res.status(200).json(areas_comunes);
    } catch (error : any) {
        return res.status(400).json({message: error.message});
    }
}

export const getArea_comunService = async (req : NextApiRequest,res : NextApiResponse) => {
    const { query : {id} } = req;
    try{
        const value : number[] = [Number(id)];
        const querySql = "select * from areas_comunes where id_area=$1";
        const responsedb = await conn.query(querySql,value);
        const area_comun : Area_comun = responsedb.rows[0];
        return res.status(200).json(area_comun);
    } catch (error : any) {
        return res.status(400).json({message: error.message});
    }
}

export const salvarArea_comunService = async (req : NextApiRequest,res : NextApiResponse) => {
    const { body : {id_area,nombre_area_comun,ubicacion,capacidad,horario,propiedad_horizonte} } = req;
    try{
        const values = [id_area,nombre_area_comun,ubicacion,capacidad,horario,propiedad_horizonte];
        const querySql = "insert into areas_comunes(id_area,nombre_area_comun,ubicacion,capacidad,horario,propiedad_horizonte) values($1,$2,$3,$4,$5,$6) returning *";
        const responsedb = await conn.query(querySql,values);
        const area_comun : Area_comun = responsedb.rows[0];
        return res.status(200).json(area_comun);
    } catch (error : any) {
        return res.status(400).json({message: error.message});
    }
}

export const actualizarArea_comunService = async (req : NextApiRequest,res : NextApiResponse) => {
    const { query : {id}, body : {id_area,nombre_area_comun,ubicacion,capacidad,horario,propiedad_horizonte} } = req;
    try{
        const values = [id_area,nombre_area_comun,ubicacion,capacidad,horario,propiedad_horizonte, Number(id)];
        const querySql = "update areas_comunes set id_area=$1, nombre_area_comun= $2, ubicacion=$3 ,capacidad =$4, horario=$5 ,propiedad_horizonte=$6 where id_area=$7 returning *";
        const responsedb = await conn.query(querySql,values);
        const area_comun : Area_comun = responsedb.rows[0];
        return res.status(200).json(area_comun);
    } catch (error : any) {
        return res.status(400).json({message: error.message});
    }
}

export const borrarArea_comunService = async (req : NextApiRequest,res : NextApiResponse) => {
    const { query : {id} } = req;
    try{
        const value : Number[] = [Number(id)];
        const querySql = "delete from areas_comunes where id_area=$1 returning *";
        const responsedb = await conn.query(querySql,value);
        const area_comun : Area_comun = responsedb.rows[0];
        return res.status(200).json(area_comun);
    } catch (error : any) {
        return res.status(400).json({message: error.message});
    }
}

