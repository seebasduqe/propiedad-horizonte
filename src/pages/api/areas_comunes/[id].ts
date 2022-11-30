import {NextApiRequest, NextApiResponse} from "next";
import {actualizarArea_comunService, borrarArea_comunService, getArea_comunService} from "./service";

export default (req : NextApiRequest, res : NextApiResponse) => {
    const {method} = req;

    switch (method){
        case "GET":
            return getArea_comunService(req,res);
        case "PUT":
            return actualizarArea_comunService(req,res);
        case "DELETE":
            return borrarArea_comunService(req,res);
        default:
            return res.status(400).json({message: "metodo invalido"});
    }
}