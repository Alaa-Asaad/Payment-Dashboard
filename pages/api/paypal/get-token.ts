// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function GetAccessToken() {
  const data = 'grant_type=client_credentials';
  const url = process.env.PayPal_SandBox_CreateToken;
  const auth = {
    username: process.env.PAYPAL_CLIENT_ID || 'undefined',
    password: process.env.PayPal_Client_SECRET || 'undefined',
  };
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  try {
    const response = await axios({
      method: 'post',
      url,
      data,
      auth,
      headers,
    });
    const { access_token: accessToken } = await response.data;
    return {
      accessToken,
    };
  } catch (error) {
    return {
      message: 'Token not generated Error',
      error,
    };
  }
}
