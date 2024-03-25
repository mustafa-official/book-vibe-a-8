import { useEffect, useState } from "react";

const useBooksLoad = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setBooks(data);
    };
    fetchData();
  }, []);
  return { books };
};

export default useBooksLoad;
