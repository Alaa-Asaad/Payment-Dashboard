// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import OrderResponseType from '@/types/order-create-response';

import CreateOrder from './createOrder';

type Error = {
  error: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrderResponseType | Error>,
) {
  const order = await CreateOrder();
  // console.log(order);
  if (req.method === 'GET') {
    return res.status(200).json(order);
  }
  return res.status(500).json({ error: 'internal Error Server' });
}
