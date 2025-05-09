import React, { useState } from 'react'
import { useRef } from 'react';
import DailyTracker from './DailyTracker';

function Tracker1() {
  const date = useRef();
  const [dateChosen, setDateChosen] = useState(false);
  const [dateToTrack, setDateToTrack] = useState();

  function onTrackHandler(dateToTrackHabit) {
    if (dateToTrackHabit === '') {
      return;
    }
    setDateChosen(true);
    setDateToTrack(date.current.value);
  }

  return (
    <>
      <div>
        <input type="date" ref={date}></input>
        <button onClick={() => onTrackHandler(date.current.value)}>Track</button>
      </div>
      {dateChosen
        &&
        <DailyTracker date={dateToTrack} />
      }
    </>

  )
}

export default Tracker1
