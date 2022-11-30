import {NextApiRequest, NextApiResponse} from "next";
import {getAllAreas_comunesService, salvarArea_comunService} from "./service";

export default (req : NextApiRequest, res : NextApiResponse) => {
    const {method} = req;

    switch (method){
        case "GET":
            return getAllAreas_comunesService(req,res);
        case "POST":
            return salvarArea_comunService(req,res);
        default:
            return res.status(400).json({message: "metodo invalido"});
    }
}