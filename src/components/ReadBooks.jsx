import { useEffect, useState } from "react";
import SingleReadBook from "./SingleReadBook";
import { getFromLocalStorage } from "../utils/localStorage";
import { Option, Select } from "@material-tailwind/react";

const ReadBooks = () => {
  const [singleRead, setSingleRead] = useState([]);
  const [displaySorted, setDisplaySorted] = useState([]);
  useEffect(() => {
    const LocalStorageData = getFromLocalStorage();
    setSingleRead(LocalStorageData);
    setDisplaySorted(LocalStorageData);
  }, []);

  const handleSortedData = (value) => {
    const sortedItem = [...singleRead];
    if (value === "rating") {
      const a = sortedItem.sort((a, b) => b.rating - a.rating);
      setDisplaySorted(a);
    } else if (value === "pages") {
      const b = sortedItem.sort((a, b) => b.totalPages - a.totalPages);
      setDisplaySorted(b);
    } else if (value === "year") {
      const c = sortedItem.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setDisplaySorted(c);
    }
  };
  return (
    <div>
      <div className="max-w-20 flex justify-center mt-5 mx-auto">
        <Select
          onClick={() => {
            handleSortedData("sorted");
          }}
          label="Sort By"
        >
          <Option
            onClick={() => {
              handleSortedData("rating");
            }}
          >
            Rating
          </Option>
          <Option
            onClick={() => {
              handleSortedData("pages");
            }}
          >
            Number of pages
          </Option>
          <Option
            onClick={() => {
              handleSortedData("year");
            }}
          >
            Publisher year
          </Option>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-5 my-8">
        {displaySorted.map((bookItem) => (
          <SingleReadBook
            bookItem={bookItem}
            key={bookItem.id}
          ></SingleReadBook>
        ))}
      </div>
    </div>
  );
};

export default ReadBooks;
