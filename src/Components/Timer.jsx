import React, { useEffect, useState } from "react";

function Timer({ dispatch, totalSeconds }) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

  const min = Math.floor(secondsLeft / 60);
  const sec = Math.floor(secondsLeft % 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          dispatch({ type: "finish" }); // Dispatch only when time ends
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId); // Clean up
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min} : {sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;




// import React, { useEffect } from "react";

// function Timer({ dispatch, remaningSecond }) {
//   const min = Math.floor(remaningSecond / 60);
//   const sec = Math.floor(remaningSecond % 60);
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       dispatch({ type: "tiktok" });
//     }, 1000);

//     // ✅ Cleanup function
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [dispatch]);

//   return (
//     <div className="timer">
//       {min < 10 && 0}
//       {min} : {sec < 10 && 0}
//       {sec}{" "}
//     </div>
//   );
// }

// export default Timer;
