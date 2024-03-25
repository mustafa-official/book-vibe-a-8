import { Button } from "@material-tailwind/react";

const ReadBooks = () => {
  return (
    <div className="grid gap-6 grid-cols-12 py-2 border border-[#13131326] p-5 rounded-lg mt-10 items-center">
      <div className="flex items-center col-span-4 bg-[#1313130D] justify-center rounded-lg">
        <img
          src=""
          alt=""
          className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        />
      </div>
      <div className="flex col-span-8 flex-col justify-center text-center rounded-sm lg:text-left">
        <h1 className="text-2xl font-bold leading-none lg:text-3xl"></h1>
        <p className="mt-3">By:</p>
        <hr className="my-3" />
        <p className="text-[18px]"></p>
        <hr className="my-3" />
        <p className="text-lg mb-4 lg:mb-8">
          <span className="font-bold">Review: </span>
        </p>
        <div className="flex items-center gap-4">
          <h2 className="font-bold">Tag</h2>
          {/* {allTags.map((tag, idx) => (
              <Button
                size="sm"
                key={idx}
                style={{ color: "#23BE0A", backgroundColor: "#23BE0A0D" }}
              >
                #{tag}
              </Button>
            ))} */}
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
            <h2 className="font-bold mt-2"></h2>
            <h2 className="font-bold mt-2"></h2>
            <h2 className="font-bold mt-2"></h2>
            <h2 className="font-bold mt-2"></h2>
          </div>
        </div>
        <div className="flex lg:justify-start justify-center gap-4 mt-4">
          <Button
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
  );
};

export default ReadBooks;
