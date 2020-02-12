import {useState, useEffect} from 'react';

function useEdit(url) {
    const [idData, setIdData] = useState([]);
    async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();
      setIdData(json);
    }
    useEffect(() => {
      fetchUrl();
    }, []);
    return [idData];
  }
  export { useEdit };