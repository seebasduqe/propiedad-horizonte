// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {conn} from "../../utils/database";



type Data = {
  name: string,
  time: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await conn.query('SELECT NOW()');
  res.status(200).json({ name: 'John Doe', time: response.rows[0].now })
}
