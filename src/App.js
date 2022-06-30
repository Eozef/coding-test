import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://join.reckon.com/test1/rangeInfo")
      .then((Response) => Response.json())
      .then((Response) => console.log(Response))
      .then(
        fetch("https://join.reckon.com/test1/divisorInfo")
          .then((Response) => Response.json())
          .then((Response) => console.log(Response))
      );
  }, []);

  return <div className="App">App</div>;
}

// export default function App() {
//   let endPoint1 = fetch("https://join.reckon.com/test1/rangeInfo");
//   let endPoint2 = fetch("https://join.reckon.com/test1/divisorInfo");
//   useEffect(() => {
//     Promise.all([endPoint1, endPoint2])
//       .then((numbers) => Promise.all(numbers.map((number) => number.json())))
//       .then((totalNumber) => {
//         let endPoint1Resp = totalNumber[0];
//         let endPoint2Resp = totalNumber[1];
//         let totalEndPointResp = endPoint1Resp + endPoint2Resp;
//         return totalEndPointResp;
//       });
//   }, [endPoint1, endPoint2]);

//   return <App totalEndPointResp />;
// }
