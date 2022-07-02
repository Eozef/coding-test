import React from "react";

export default async function App() {
  {
    let endPoint1 = await fetch("https://join.reckon.com/test1/rangeInfo");
    let response1 = await endPoint1.json();
    let endPoint2 = await fetch("https://join.reckon.com/test1/divisorInfo");
    let response2 = await endPoint2.json();
    let { lower, upper } = response1;
    let { outputDetails } = response2;

    for (let i = lower + 1; i <= upper; i++) {
      if (
        i % outputDetails[0].divisor === 0 &&
        i % outputDetails[1].divisor === 0
      ) {
        console.log(
          `${i}: ${outputDetails[0].output} ${outputDetails[1].output}`
        );
      } else if (i % outputDetails[0].divisor === 0) {
        console.log(`${i}: ${outputDetails[0].output}`);
      } else if (i % outputDetails[1].divisor === 0) {
        console.log(`${i}: ${outputDetails[1].output}`);
      } else {
        console.log(`${i}:`);
      }
    }
  }

  return <div className="App">App</div>;
}
