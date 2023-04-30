// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

import PayPalOrder from '@/types/paypal-order-type';

import GetAccessToken from './get-token';

export default async function CreateOrder() {
  const { accessToken } = await GetAccessToken();
  const url = process.env.PayPal_SandBox_CreateOrder || 'undefined';
  // console.log(`Bearer ${accessToken}`);

  const headers = {
    Authorization:
      'Bearer A21AAIG5-oxifG0fz4RWOr3VIRTvVVzlkjxl3DFD64wfySpKtOpQg073T8Z8-jbmgaRKlBtwtUfAQ8uoWu68bKVoS3fdS36Nw',
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

  try {
    const response = await axios({
      method: 'post',
      url,
      data,
      headers,
    });
    const res: PayPalOrder = await response.data;

    return res;
  } catch (error) {
    return {
      message: 'we are in order',
      tkk: accessToken,
      error,
    };
  }
}
