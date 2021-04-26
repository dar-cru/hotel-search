import Axios, { AxiosInstance } from 'axios';

export type ClientConfig = {
  baseURL?: string;
  additionalHeaders?: {
    name: string;
    value: string;
  }[];
};

const buildClient = (config?: ClientConfig): AxiosInstance => {
  const baseURL = config?.baseURL || '';

  const client: AxiosInstance = Axios.create({
    baseURL,
    responseType: 'json'
  });

  if (config?.additionalHeaders) {
    config?.additionalHeaders.map((header) => (client.defaults.headers[header.name] = header.value));
  }
  return client;
};

export default buildClient;
