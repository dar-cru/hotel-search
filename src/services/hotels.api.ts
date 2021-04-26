import axios from 'axios';
import config from '../config';
import { Hotel } from '../types';

export const getHotels = async (): Promise<Hotel[] | Error> => {
  try {
    const response = await axios.get(`${config.apiUrl}/hotels`);
    return response.data;
  } catch (error) {
    throw new Error('There was an error while processing your request. Please try again later.');
  }
};
