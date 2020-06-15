import axios from "axios";

//Move fetchShow into that new file and export it (fetchShow is in the useEffect - pay attention to how this was setting state. You will still need to set state in this effect hook the exact same way...)

//return the axios.get call, and the data inside your .then(). This is necessary because when you call fetchShow in your useEffect, you need to chain off the promise for a new .then(), then you need the data to be returned once the promise is resolved

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
};
