import type { NextApiRequest, NextApiResponse } from 'next';

import OrderResponseType from '@/types/order-create-response';

import CreateOrder from './create-order';

type Error = {
  error: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrderResponseType | Error>,
) {
  // console.log(order);
  if (req.method === 'GET') {
    console.log('inside GET get-order');
    try {
      const order = await CreateOrder();
      return res.status(200).json(order);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
  // return res.status(500).json({ error: 'internal Error Server' });
}
