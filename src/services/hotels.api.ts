import buildClient from './client';
import config from '../config';
import { Hotel } from '../types';

export const getHotels = async (): Promise<Hotel[] | Error> => {
  const client = buildClient({
    baseURL: config.apiUrl
  });

  try {
    const response = await client.get(`/hotels`);
    return response.data;
  } catch (error) {
    throw new Error('There was an error retrieving this data right now');
  }
};
