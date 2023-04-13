// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

import PayPalOrder from '@/types/paypal-order-type';

import GetAccessToken from './getToken';

export default async function CreateOrder() {
  const { accessToken } = await GetAccessToken();
  const url = process.env.PayPal_SandBox_CreateOrder || 'undefined';
  // console.log(accessToken);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  const data = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        items: [
          {
            name: 'T-Shirt',
            description: 'Green XL',
            quantity: '1',
            unit_amount: {
              currency_code: 'USD',
              value: '10.00',
            },
          },
        ],
        amount: {
          currency_code: 'USD',
          value: '10.00',
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: '10.00',
            },
          },
        },
      },
    ],
    application_context: {
      return_url: process.env.PayPal_Return_URL, // this url when buyer approve the order
      cancel_url: process.env.PayPal_Cancel_URL, // this url when buyer cancel the order
    },
  };

  const response = await axios({
    method: 'post',
    url,
    headers,
    data,
  });
  const res: PayPalOrder = await response.data;

  return res;
}
