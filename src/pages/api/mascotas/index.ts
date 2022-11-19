import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";

export default async (req : NextApiRequest, res : NextApiResponse) => {

    const query = "select * from mascotas";
    const response = await conn.query(query);
    return res.status(200).json(response.rows);

};