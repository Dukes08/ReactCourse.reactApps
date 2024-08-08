import { useState, useEffect } from "react";

export function useFetch({ url }) {
  const [data, setData] = useState({});
  useEffect(() => {
    if(!url) return
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "real-time-finance-data.p.rapidapi.com",
        "x-rapidapi-key": "b30b9a93d8msh3b1e568067808eep13e28djsn701d06c93422",
      },
    })
      .then((res) => res.json())
      .then((dat) => {
        console.log(dat);

        setData(dat);
      });
    console.log(data)
  }, [url]);
  return {data};
}
