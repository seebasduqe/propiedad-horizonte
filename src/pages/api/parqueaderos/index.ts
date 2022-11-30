import {NextApiRequest, NextApiResponse} from "next";
import {getAllParqueaderosService, salvarParqueaderoService} from "./service";


export default async (req : NextApiRequest, res : NextApiResponse) => {

    const {method} = req;

    switch (method){
        case "GET":
            return getAllParqueaderosService(req,res);
        case "POST":
            return salvarParqueaderoService(req,res);
        default:
            return res.status(400).json({message : "metodo invalido"});
    }
}