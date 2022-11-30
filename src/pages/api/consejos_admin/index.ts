import {NextApiRequest, NextApiResponse} from "next";
import {getAllConsejos_adminService, salvarConsejo_adminService} from "./service";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req;

    switch (method){
        case "GET":
            return getAllConsejos_adminService(req,res);
        case "POST":
            return salvarConsejo_adminService(req,res)
        default:
            return res.status(400).json({message: "metodo invalido"});
    }
}