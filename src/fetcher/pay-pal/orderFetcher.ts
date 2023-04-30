import axios from 'axios';

import DataType from '@/types/order-create-response';

// import initAxiosInterceptors from '../utils/init-intereceptor-with-access-token';

const getOrder = async () => {
  // initAxiosInterceptors(axios);
  const order = await axios.get<DataType>('/api/paypal/get-order');
  return {
    data: order.data,
  };
};

export default getOrder;
