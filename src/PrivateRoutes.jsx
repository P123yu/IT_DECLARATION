// import dateTime from "date-time";
// import React, { useEffect, useState } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useInterval } from "react-use";
// function PrivateRoutes() {
//   const [count, setCount] = useState(0);
//   const [delay, setDelay] = useState(1000);
//   const [restrict, setRestrict] = useState(false);

//   useInterval(
//     () => {
//       setCount(count + 1);
//     },
//     true ? delay : null
//   );

//   useEffect(() => {
//     if (dateTime().split(" ")[0] === "2024-05-31") {
//       setRestrict(true);
//     } else {
//       setRestrict(false);
//     }
//   }, [dateTime().split(" ")[1]]);

//   console.log(dateTime().split(" ")[0]);
//   console.log(restrict, "restrict");

//   return <div>{restrict ? <Navigate to="/a" /> : <Outlet />}</div>;
// }

// export default PrivateRoutes;

import isAfter from "date-fns/isAfter";
import dateTime from "date-time";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useInterval, useLocalStorage } from "react-use";
function PrivateRoutes() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [restrict, setRestrict, remove] = useLocalStorage("restrict", "false");
  // const [restrict, setRestrict] = useState(false);

  useInterval(
    () => {
      setCount(count + 1);
    },
    true ? delay : null
  );

  useEffect(() => {
    if (isAfter(dateTime().split(" ")[0], "2023-01-30")) {
      setRestrict(true);
    } else {
      setRestrict(false);
    }
  }, [dateTime().split(" ")[1]]);

  // console.log(dateTime().split(" ")[0]);
  // console.log(restrict, "restrict");

  return <div>{restrict ? <Navigate to="/home" /> : <Outlet />}</div>;
}

export default PrivateRoutes;
