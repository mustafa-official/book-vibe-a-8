import { useParams } from "react-router-dom";
import useBooksLoad from "../Hooks/useBooksLoad";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";
import { toast } from "react-toastify";

const BookDetails = () => {
  const { books } = useBooksLoad();
  const { id } = useParams();
  const [data, seData] = useState({});
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const findBook = books.find((book) => book.id === +id);
    seData(findBook);

    setWishList(getFromLocalStorage);
  }, [books, id]);

  const loadFromLocal = () => {
    setWishList(getFromLocalStorage);
  };
  const {
    bookName,
    rating,
    tags,
    author,
    category,
    image,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = data || {};

  const allTags = tags || [];

  const handleReadBtn = () => {
    saveToLocalStorage(data);
  };

  // console.log(wishList);
  const handleWishlistBtn = (id) => {
    const exist = wishList.find((item) => item.id === +id);
    if (exist) {
      toast.warning("Already Read");
    } else {
      console.log(exist);
    }
  };
console.log(id);
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 container mx-auto px-5 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2  py-2 items-center">
        <div className="flex items-center bg-[#1313130D] justify-center py-16 rounded-lg">
          <img
            src={image}
            alt=""
            className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
          <h1 className="text-2xl font-bold leading-none lg:text-3xl">
            {bookName}
          </h1>
          <p className="mt-3">By: {author}</p>
          <hr className="my-3" />
          <p className="text-[18px]">{category}</p>
          <hr className="my-3" />
          <p className="text-lg mb-4 lg:mb-8">
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <div className="flex items-center gap-4">
            <h2 className="font-bold">Tag</h2>
            {allTags.map((tag, idx) => (
              <Button
                size="sm"
                key={idx}
                style={{ color: "#23BE0A", backgroundColor: "#23BE0A0D" }}
              >
                #{tag}
              </Button>
            ))}
          </div>
          <hr className="my-6" />
          <div className="flex lg:flex-row flex-col gap-8">
            <div>
              <p className="text-[#131313B3] font-medium mt-2">
                Number of Pages:
              </p>
              <p className="text-[#131313B3] font-medium mt-2">Publisher: </p>
              <p className="text-[#131313B3] font-medium mt-2">
                Year of Publishing:
              </p>
              <p className="text-[#131313B3] font-medium mt-2">Rating: </p>
            </div>
            <div>
              <h2 className="font-bold mt-2">{totalPages}</h2>
              <h2 className="font-bold mt-2">{publisher}</h2>
              <h2 className="font-bold mt-2">{yearOfPublishing}</h2>
              <h2 className="font-bold mt-2">{rating}</h2>
            </div>
          </div>
          <div className="flex lg:justify-start justify-center gap-4 mt-4">
            <Button
              onClick={() => {
                handleReadBtn();
                loadFromLocal();
              }}
              style={{
                backgroundColor: "transparent",
                color: "black",
                textTransform: "capitalize",
                border: "2px solid #1313134D",
              }}
            >
              Read
            </Button>
            <Button
              onClick={() => handleWishlistBtn(id)}
              style={{
                backgroundColor: "#50B1C9",
                textTransform: "capitalize",
              }}
            >
              Wishlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
