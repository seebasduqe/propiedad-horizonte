import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";
import {Evento} from "../../../interfaces/Evento";


export const getAllEventosService = async (req : NextApiRequest, res : NextApiResponse) => {
    try {
        const responsedb = await conn.query("select * from eventos");
        const eventos : Evento = responsedb.rows;
        return res.status(200).json(eventos);
    } catch (error: any) {
        return res.status(400).json({message : error.message});
    }
}

export const getEventoService = async (req : NextApiRequest, res : NextApiResponse) => {
    const { query : {id} } = req;
    try {
        const value : Number[] = [Number(id)];
        const querySql = "select * from eventos where id_evento=$1";
        const responsedb = await conn.query(querySql,value);
        const evento : Evento = responsedb.rows[0];
        return res.status(200).json(evento);
    } catch (error: any) {
        return res.status(400).json({message : error.message});
    }
}

export const salvarEventoService = async (req : NextApiRequest, res : NextApiResponse) => {
    const { body : {id_evento, id_area, fecha, titulo, descripcion} } = req;
    try {
        const values = [id_evento, id_area, fecha, titulo, descripcion];
        const querySql = "insert into eventos(id_evento, id_area, fecha, titulo, descripcion) values($1,$2,$3,$4,$5) returning *";
        const responsedb = await conn.query(querySql,values);
        const evento : Evento = responsedb.rows[0];
        return res.status(200).json(evento);
    } catch (error: any) {
        return res.status(400).json({message : error.message});
    }
}

export const actualizarEventoService = async (req : NextApiRequest, res : NextApiResponse) => {
    const { query : {id}, body : {id_evento, id_area, fecha, titulo, descripcion} } = req;
    try {
        const values = [id_evento, id_area, fecha, titulo, descripcion, Number(id)];
        const querySql = "update eventos set id_evento=$1, id_area=$2, fecha=$3, titulo=$4, descripcion=$5 where id_evento=$6 returning *";
        const responsedb = await conn.query(querySql,values);
        const evento : Evento = responsedb.rows[0];
        return res.status(200).json(evento);
    } catch (error: any) {
        return res.status(400).json({message : error.message});
    }
}

export const borrarEventoService = async (req : NextApiRequest, res : NextApiResponse) => {
    const { query : {id} } = req;
    try {
        const value : Number[] = [Number(id)];
        const querySql = "delete from eventos where id_evento=$1 returning *";
        const responsedb = await conn.query(querySql, value);
        const evento : Evento = responsedb.rows[0];
        return res.status(200).json(evento);
    } catch (error: any) {
        return res.status(400).json({message : error.message});
    }
}
