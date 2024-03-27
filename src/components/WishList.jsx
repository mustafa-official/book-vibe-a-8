import { useEffect, useState } from "react";
import { getFromLocalStorageWishList } from "../utils/localStorage";
import SingleWishList from "./SingleWishList";
import { Option, Select } from "@material-tailwind/react";

const WishList = () => {
  const [wishList, setwishList] = useState([]);
  const [displaySorted, setDisplaySorted] = useState([]);
  useEffect(() => {
    const localData = getFromLocalStorageWishList()
    setwishList(localData);
    setDisplaySorted(localData)
  }, []);
  const handleSortedData = (value) => {
    const sortedItem = [...wishList];
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
      {displaySorted.map((wishItem) => (
        <SingleWishList
          wishListItem={wishItem}
          key={wishItem.id}
        ></SingleWishList>
      ))}
    </div>
    </div>
  );
};

export default WishList;
