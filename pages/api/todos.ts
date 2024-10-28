import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../db';
import { todos } from '../../db/schema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const result = await db.select().from(todos);
    return res.status(200).json(result);
  }
  // Implement POST, PUT, DELETE methods here
}