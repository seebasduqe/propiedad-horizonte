import {NextApiRequest, NextApiResponse} from "next";
import {getAllMascotasService, salvarMascotaService} from "./service/service";
import {Propiedad_horizonte} from "../../../interfaces/propiedad_horizonte";

interface Propiedades_horizonte {
    propiedades_horizonte : Propiedad_horizonte[]
}

export default async (req : NextApiRequest, res : NextApiResponse) => {
    const {method} = req;
    switch (method) {
        case "GET":
            return getAllMascotasService(req,res);
        case "POST":
          return salvarMascotaService(req,res);
        default:
            return res.status(200).json("metodo invalido");
    }
}