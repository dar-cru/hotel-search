import { ChangeEvent, useEffect, useState } from 'react';
import Header from './components/Header';
import HotelCard from './components/HotelCard';
import { getHotels } from './services/hotels.api';
import { Hotel } from './types/hotel';
import { SortCategory, sortHotelsBy, SortOrder } from './utils/sortyHotelsBy';

enum SortValues {
  PRICE_HIGH_TO_LOW = 'PRICE_HIGH_LOW',
  PRICE_LOW_TO_HIGH = 'PRICE_LOW_HIGH'
}

const App = () => {
  const [hotels, setHotels] = useState<Hotel[] | undefined>();
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const hotelData = (await getHotels()) as Hotel[];
        setHotels(hotelData);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    };

    fetchHotels();
  }, []);

  const onHotelsSort = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (!hotels) {
      return;
    }
    const hotelsToSort = [...hotels];
    let sortedValues = hotelsToSort;

    switch (value) {
      case SortValues.PRICE_LOW_TO_HIGH: {
        sortedValues = sortHotelsBy(hotelsToSort, SortCategory.DISPLAY_PRICE, SortOrder.ASCENDING);
        break;
      }
      case SortValues.PRICE_HIGH_TO_LOW: {
        sortedValues = sortHotelsBy(hotelsToSort, SortCategory.DISPLAY_PRICE, SortOrder.DESCENDING);
        break;
      }
      default:
        break;
    }
    setHotels(sortedValues);
  };

  return (
    <div
      style={{
        width: '70%',
        margin: '0 auto'
      }}
    >
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ padding: '10px', width: '50%' }}>
          <b>{hotels?.length}</b> <i>hotels in</i> <b>Sydney</b>
        </div>
        <div style={{ padding: '10px', width: '50%', justifyContent: 'flex-end', display: 'flex' }}>
          Sort by:
          <select defaultValue="default" onChange={onHotelsSort}>
            <option value="default" disabled={true} hidden={true}>
              Default
            </option>
            <option value={SortValues.PRICE_LOW_TO_HIGH}>Price low-high</option>
            <option value={SortValues.PRICE_HIGH_TO_LOW}>Price high-low</option>
          </select>
        </div>
      </div>
      <div>
        {hotels?.map((hotel) => {
          return <HotelCard key={`hotel-${hotel.id}`} property={hotel.property} offer={hotel.offer} />;
        })}
      </div>
    </div>
  );
};

export default App;
