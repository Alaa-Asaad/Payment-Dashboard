import ApiClient from '@/src/lib/axios';

const getPaymentIntent = async () => {
  const res = await ApiClient.post('/stripe/payment-intent');
  return res;
};

export default getPaymentIntent;
