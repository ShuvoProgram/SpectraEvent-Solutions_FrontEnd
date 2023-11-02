import React from 'react';
import { Button, Input, Select } from 'antd';

interface IFilter {
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
  // onVenueChanged: (value: string | number) => void;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  Venue: Array<{ title: string; id: number }>;
  maxPrice: number;
  minPrice: number;
  handleReset: () => void;
}

function FilterEvent({
  setSearchResult,
  Venue,
  // onVenueChanged,
  handleReset,
  setMaxPrice,
  setMinPrice,
  minPrice,
  maxPrice
}: IFilter) {
  const venueOptions = Venue.map((item) => ({
    label: item.title,
    value: item.id,
  }));

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Filter</h1>
      <label>Search</label>
      <Input
        size="large"
        placeholder="Search"
        onChange={(e) => setSearchResult(e.target.value)}
        style={{ marginTop: '5px', marginBottom: '10px' }}
      />
      <label>Venue Name</label>
      <Select
        style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
        options={venueOptions}
        placeholder="Select Venue"
        // onChange={onVenueChanged}
      />
      <div className='flex items-center gap-4'>
        <div>
        <label>Min Price</label>
        <Input
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          // placeholder="Min Price"
        />
        </div>
        <div>
        <label>Max Price</label>
        <Input
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          // placeholder="Max Price"
        />
        </div>
      </div>
      <Button onClick={handleReset} danger style={{
        marginTop: '10px',
      }}>
        Reset
      </Button>
    </div>
  );
}

export default FilterEvent;
