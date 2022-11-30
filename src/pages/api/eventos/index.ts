import {NextApiRequest, NextApiResponse} from "next";
import {getAllEventosService, salvarEventoService} from "./service";

export default (req : NextApiRequest, res : NextApiResponse) => {
    const { method } = req;

    switch (method){
        case "GET":
            return getAllEventosService(req,res);
        case "POST":
            return salvarEventoService(req,res);
        default:
            return res.status(400).json({message :"metodo invalido"});
    }
}