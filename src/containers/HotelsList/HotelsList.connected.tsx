import { useEffect, useState } from 'react';
import HotelsList from './HotelsList';
import { getHotels } from '../../services/hotels.api';
import { Hotel } from '../../types';

const Connected = () => {
  const [hotels, setHotels] = useState<Hotel[] | undefined>();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setError('');
        const hotelData = (await getHotels()) as Hotel[];
        setHotels(hotelData);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div>{error ? <div style={{ color: 'red' }}>{error}</div> : <>{hotels && <HotelsList hotels={hotels} />}</>}</div>
  );
};

export default Connected;
