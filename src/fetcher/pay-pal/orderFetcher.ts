import DataType from '@/types/order-create-response';

import ApiClient from '../../lib/axios';

// import initAxiosInterceptors from '../utils/init-intereceptor-with-access-token';

const getOrder = async () => {
  // initAxiosInterceptors(axios);
  const order = await ApiClient.get<DataType>('/paypal/get-order');
  return {
    data: order.data,
  };
};

export default getOrder;
