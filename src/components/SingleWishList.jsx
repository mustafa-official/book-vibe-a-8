import { Button } from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SingleWishList = ({ wishListItem }) => {
  const {
    id,
    bookName,
    rating,
    image,
    tags,
    author,
    category,
    totalPages,
    publisher,
    yearOfPublishing,
  } = wishListItem || {};
  const allTags = tags || [];
  return (
    <div className="grid lg:gap-6 grid-cols-12 py-2 border border-[#13131326] p-2 lg:p-5 rounded-lg items-center">
      <div className="flex h-44 lg:h-56 col-span-12 lg:col-span-4 bg-[#1313130D] justify-center rounded-lg">
        <img className="py-6" src={image} alt="" />
      </div>
      <div className="flex col-span-12 lg:col-span-8 space-y-3 flex-col  justify-center text-center rounded-sm lg:text-left">
        <h1 className="text-2xl font-bold leading-none lg:text-3xl"></h1>
        <p className="font-bold text-xl">{bookName}</p>
        <p>By: {author}</p>
        <div className="flex flex-wrap items-center gap-3">
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
          <h2 className="flex items-center gap-1">
            <CiLocationOn className="text-xl"></CiLocationOn> Year of
            Publishing: {yearOfPublishing}
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          <p className="flex flex-wrap  items-center gap-1">
            <IoPeopleOutline className="text-xl"></IoPeopleOutline>
            <span className="flex flex-wrap">Publisher: {publisher}</span>
          </p>
          <p className="flex items-center gap-1">
            <RiPagesLine className="text-xl"></RiPagesLine> Page: {totalPages}
          </p>
        </div>
        <hr className="my-4" />
        <div className="flex flex-wrap gap-3 mt-3">
          <Button
            size="sm"
            style={{
              color: "#328EFF",
              backgroundColor: "#328EFF26",
              borderRadius: "50px",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "normal",
            }}
          >
            Category: {category}
          </Button>
          <Button
            size="sm"
            style={{
              color: "#FFAC33",
              backgroundColor: "#FFAC3326",
              borderRadius: "50px",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "normal",
            }}
          >
            Rating: {rating}
          </Button>
          <Link to={`/book-details/${id}`}>
            <Button
              size="sm"
              style={{
                color: "#FFFFFF",
                backgroundColor: "#23BE0A",
                borderRadius: "50px",
                textTransform: "capitalize",
                fontSize: "16px",
                fontWeight: "normal",
              }}
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SingleWishList.propTypes = {
  wishListItem: PropTypes.object,
};
export default SingleWishList;
