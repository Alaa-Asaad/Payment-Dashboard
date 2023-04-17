// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

import ApiClient from '@/src/lib/axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const url = process.env.STRIPE_BASE_URL || undefined;
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const auth = {
    username: process.env.STRIPE_SK || 'undefined',
    password: '' || 'undefined',
  };
  const data = {
    amount: 1000,
    currency: 'usd',
    payment_method_types: ['card'],
  };
  if (req.method === 'POST') {
    try {
      const response = await ApiClient({
        method: 'post',
        url,
        headers,
        data,
        auth,
      });
      const { client_secret: clientSecret } = await response.data;
      return res.send({ clientSecret });
    } catch (error) {
      return res.send({ error });
    }
  }
  return res.send({ hello: 'nothing' });
}
