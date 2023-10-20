/* eslint-disable react-hooks/rules-of-hooks */
import { IEvent } from '@/types'
import React, { useState } from 'react'

function eventDetails({event}: {event: IEvent}) {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
  return (
    <div>eventDetails</div>
  )
}

export default eventDetails