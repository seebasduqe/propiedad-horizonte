import {NextApiRequest, NextApiResponse} from "next";
import {getAllVehiculosService, salvarVehiculoService} from "./service";



export default async (req : NextApiRequest, res : NextApiResponse) => {

    const { method } = req;

    switch (method){
        case "GET":
                return getAllVehiculosService(req,res);
        case "POST":
                return salvarVehiculoService(req,res);
        default:
            return res.status(400).json({message : "metodo invalido"});
    }
}