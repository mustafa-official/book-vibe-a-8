import { useEffect, useState } from "react";
import { getFromLocalStorageWishList } from "../utils/localStorage";
import SingleWishList from "./SingleWishList";

const WishList = () => {
  const [wishList, setwishList] = useState([]);
  useEffect(() => {
    setwishList(getFromLocalStorageWishList);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5 my-8">
      {wishList.map((wishItem) => (
        <SingleWishList
          wishListItem={wishItem}
          key={wishItem.id}
        ></SingleWishList>
      ))}
    </div>
  );
};

export default WishList;
