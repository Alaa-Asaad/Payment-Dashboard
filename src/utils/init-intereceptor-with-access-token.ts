/* eslint-disable import/no-extraneous-dependencies */
import { AxiosInstance } from 'axios';

const initAxiosInterceptors = async (ApiClient: AxiosInstance) => {
  ApiClient.interceptors.request.use((config: any) => {
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      foo: JSON.stringify({ hello: 'hello my name is Alaa Asaad' }),
    };
    return config;
  });
};

export default initAxiosInterceptors;
