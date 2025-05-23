import React, { useEffect } from 'react';

function Timer({ dispatch, remaningSecond }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "tiktok" });
    }, 1000);

    // ✅ Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

  return (
    <div className='timer'>{remaningSecond}</div>
  );
}

export default Timer;
