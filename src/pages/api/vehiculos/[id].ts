import {NextApiRequest, NextApiResponse} from "next";
import {actualizarVehiculoService, borrarVehiculoService, getVehiculoService} from "./service";
import {actulizarMascotaService} from "../mascotas/service/service";


export default (req : NextApiRequest, res : NextApiResponse) => {

    const {method, body, query : {id} } = req;

    switch (method){
        case "GET":
            return getVehiculoService(req,res);
        case "PUT":
            return actualizarVehiculoService(req,res);
        case "DELETE":
            return borrarVehiculoService(req,res);
        default:
            return res.status(404).json({mensaje : "metodo invalido"});
    }

}