import { ChangeEvent, useState } from 'react';
import HotelCard from '../../components/HotelCard';
import { Hotel } from '../../types/hotel';
import { sortHotelsBy, SortValues } from '../../utils/sortyHotelsBy';

type HotelsListProps = {
  hotels: Hotel[];
};

const HotelsList = ({ hotels }: HotelsListProps) => {
  const [sortedHotels, setSortedHotels] = useState<Hotel[]>(hotels);

  const onHotelsSort = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const sortedValues = sortHotelsBy([...sortedHotels], value as SortValues);
    setSortedHotels(sortedValues);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div data-testid="hotel-results-summary" style={{ padding: '10px', width: '50%' }}>
          <b>{sortedHotels?.length}</b> <i>hotels in</i> <b>Sydney</b>
        </div>

        <div style={{ padding: '10px', width: '50%', justifyContent: 'flex-end', display: 'flex' }}>
          <p style={{ margin: 0, paddingRight: '4px' }}>Sort by</p>

          <select data-testid="hotel-sort-selector" defaultValue="default" onChange={onHotelsSort}>
            <option value="default" disabled={true} hidden={true}>
              Default
            </option>
            <option data-testid={SortValues.PRICE_LOW_TO_HIGH} value={SortValues.PRICE_LOW_TO_HIGH}>
              Price low-high
            </option>
            <option data-testid={SortValues.PRICE_HIGH_TO_LOW} value={SortValues.PRICE_HIGH_TO_LOW}>
              Price high-low
            </option>
          </select>
        </div>
      </div>

      {sortedHotels?.map((hotel) => {
        return <HotelCard key={`hotel-${hotel.id}`} property={hotel.property} offer={hotel.offer} />;
      })}
    </>
  );
};

export default HotelsList;
