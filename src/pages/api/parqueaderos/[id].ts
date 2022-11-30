import {NextApiRequest, NextApiResponse} from "next";
import {actualizarParqueaderoService, borrarParqueaderoService, getParqueaderoService} from "./service";

export default async (req : NextApiRequest, res : NextApiResponse) => {

    const {method} = req;

    switch (method){
        case "GET":
            return getParqueaderoService(req,res);
        case "PUT":
            return actualizarParqueaderoService(req,res);
        case "DELETE":
            return borrarParqueaderoService(req,res);
        default:
            return res.status(400).json({message : "metodo invalido"});
    }
}