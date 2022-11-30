import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";
import {actulizarMascotaService, eliminarMascotaService, getMascotaService} from "./service/service";


export default async (req : NextApiRequest, res: NextApiResponse) => {

    const {method} = req;

    switch (method){
        case "GET" :
            return getMascotaService(req,res);
        case "PUT" :
            return actulizarMascotaService(req,res);
        case "DELETE" :
            return eliminarMascotaService(req,res);
        default:
            return res.status(400).json({message: "metodo invalido"});
    }
}