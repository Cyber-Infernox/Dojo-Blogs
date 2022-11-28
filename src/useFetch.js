// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const abortCont = new AbortController();

//     setTimeout(() => {
//       fetch(url, { signal: abortCont.signal })
//         .then((res) => {
//           console.log(res);
//           if (!res.ok) {
//             throw Error("!!MISSION UNSUCCESSFUL!!");
//           }
//           return res.json();
//         })
//         .then((data) => {
//           console.log(data);
//           setData(data);
//           setIsPending(false);
//           setError(null);
//         })
//         .catch((err) => {
//           // console.log(err.message);
//           if (err.name === "AbortError") {
//             console.log("Fetch aborted");
//           } else {
//             setError(err.message);
//             setIsPending(false);
//           }
//         });
//     }, 4000);

//     // return () => console.log("Clean Up");
//     return () => abortCont.abort();
//   }, [url]);

//   return { data, isPending, error };
// };

// export default useFetch;

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
