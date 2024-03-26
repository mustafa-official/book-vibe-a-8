import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/localStorage";

const WishList = () => {
    const [book, setBook] = useState([]);
    useEffect(()=>{
        setBook(getFromLocalStorage);
    },[])
console.log(book);
    return (
        <div>
            hello wishlist
        </div>
    );
};

export default WishList;