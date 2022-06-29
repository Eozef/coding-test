import React, { useEffect, useState } from "react";

export default function App() {
  const [number, setNumber] = useState(null);
  useEffect(() => {
    fetch("https://join.reckon.com/test1/rangeInfo")
      .then((res) => res.json())
      .then((number) => console.log(number))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (!number) {
    return <div></div>;
  }

  return <App number={number} />;
}
