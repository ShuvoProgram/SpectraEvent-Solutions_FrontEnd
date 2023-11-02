"use client"
import React from 'react'
import { Button, Input, Select } from 'antd';

interface IFilter {
    setSearchResult: React.Dispatch<React.SetStateAction<string>>;
    onVenueChanged(value: string | number): void;
    Venue: any;
    handleReset(): void;
}

function FilterEvent({setSearchResult, Venue, onVenueChanged, handleReset}: IFilter) {
    const venueOptions = Venue?.map((Or: { title: any; id: any; }) => {
        return {
            label: Or?.title,
            value: Or?.id,
        }
    })
    // console.log(venueOptions)

  return (
    <div>
         <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
              Filter
            </h1>
            <label>Search</label>
            <Input
              size="large"
              placeholder="Search"
              onChange={(e) => setSearchResult(e.target.value)}
              style={{
                marginTop: "5px",
                marginBottom: "10px",
              }}
            />
            <label>Venue Name</label>
            <Select
              style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}
              options={venueOptions}
              placeholder="Select Venue"
              onChange={onVenueChanged}
            />
            {/* <label>Mbps</label>
            <Select
              style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}
              options={mbpsOption}
              placeholder="Select package"
              onChange={onMbChange}
            /> */}
            <Button onClick={handleReset} danger>
              Reset
            </Button>
    </div>
  )
}

export default FilterEvent