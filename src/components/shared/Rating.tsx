import React, { useEffect } from 'react'
import { Rate } from 'antd';

export const RatingValue = () => {
  const [value, setValue] = React.useState(3);
  
  return (
    <div>
       <Rate value={value} onHoverChange={() => setValue(value)}/>
    </div>
  )
}

export const Rating = () => {
  return (
    <div>
      <Rate disabled defaultValue={2} />
    </div>
  )
}
