import { useEffect, useState } from "react";
import SingleReadBook from "./SingleReadBook";
import { getFromLocalStorage } from "../utils/localStorage";

const ReadBooks = () => {
  const [singleRead, setSingleRead] = useState([]);
  useEffect(() => {
    setSingleRead(getFromLocalStorage);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5 my-8">
      {singleRead.map((bookItem) => (
        <SingleReadBook bookItem={bookItem} key={bookItem.id}></SingleReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;
