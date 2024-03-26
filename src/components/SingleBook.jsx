import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleBook = ({ book }) => {
  const { image, bookName, rating, tags, author, category, id } = book || {};
  return (
    <Link to={`/book-details/${id}`}>
      <div className="flex flex-col p-6 space-y-6 overflow-hidden h-full rounded-lg border border-[#13131326] dark:bg-gray-50 dark:text-gray-800">
        <div>
          <div className="bg-[#F3F3F3] rounded-lg">
            <img
              src={image}
              alt=""
              className="object-cover p-4 w-[50%] mb-4 h-auto md:h-52 lg:h-52 mx-auto"
            />
          </div>
          <div className="flex gap-6 mb-6 mt-2">
            {tags.map((tag, idx) => (
              <Button
                size="sm"
                key={idx}
                style={{ color: "#23BE0A", backgroundColor: "#23BE0A0D" }}
              >
                {tag}
              </Button>
            ))}
          </div>
          <h2 className="mb-1 text-xl flex-grow font-semibold">{bookName}</h2>
          <p className="text-sm dark:text-gray-600">By: {author}</p>
        </div>
        <hr />
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <button
              aria-label="Share this post"
              type="button"
              className="p-2 text-center"
            >
              {category}
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm dark:text-gray-600">
            <div className="flex items-center gap-2">
              <h2 className="text-[18px]">{rating}</h2>
              <FaRegStar className="text-[18px]"></FaRegStar>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

SingleBook.propTypes = {
  book: PropTypes.object,
};

export default SingleBook;
