import {NextApiRequest, NextApiResponse} from "next";
import {actualizarEventoService, borrarEventoService, getEventoService} from "./service";

export default (req : NextApiRequest, res : NextApiResponse) => {
    const { method } = req;

    switch (method){
        case "GET":
            return getEventoService(req,res);
        case "PUT":
            return actualizarEventoService(req,res);
        case "DELETE":
            return borrarEventoService(req,res);
        default:
            return res.status(400).json({message :"metodo invalido"});
    }
}