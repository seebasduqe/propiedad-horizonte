import {NextApiRequest, NextApiResponse} from "next";
import {actualizarConsejo_adminService, borrarConsejo_adminService, getConsejo_adminService} from "./service";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req;

    switch (method) {
        case "GET":
            return getConsejo_adminService(req,res);
        case "PUT":
            return actualizarConsejo_adminService(req,res);
        case "DELETE":
            return borrarConsejo_adminService(req,res);
        default:
            return res.status(400).json({message: "metodo invalido"});
    }
}