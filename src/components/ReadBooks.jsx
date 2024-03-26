import { Button } from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";

const ReadBooks = () => {
  return (
    <div className="grid gap-6 grid-cols-12 py-2 border border-[#13131326] p-5 rounded-lg mt-10 items-center">
      <div className="flex h-56  col-span-4 bg-[#1313130D] justify-center rounded-lg">
        <img src="" alt="" />
      </div>
      <div className="flex col-span-8 space-y-3 flex-col p-2 justify-center text-center rounded-sm lg:text-left">
        <h1 className="text-2xl font-bold leading-none lg:text-3xl"></h1>
        <p className="font-bold text-xl">Hello title</p>
        <p>By: omuk</p>
        <p className="text-[18px]"></p>
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
          <h2 className="flex items-center gap-1">
            <CiLocationOn className="text-xl"></CiLocationOn> Year of
            Publishing: 1924
          </h2>
        </div>

        <div className="flex gap-4">
          <p className="flex items-center gap-1">
            <IoPeopleOutline className="text-xl mt-3"></IoPeopleOutline>{" "}
            Publisher
          </p>
          <p className="flex items-center gap-1">
            <RiPagesLine className="text-xl"></RiPagesLine> Page
          </p>
        </div>
        <hr className="my-4" />
        <div className="flex gap-3 mt-3">
          <Button
            style={{
              color: "#328EFF",
              backgroundColor: "#328EFF26",
              borderRadius: "50px",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "normal",
            }}
          >
            Category
          </Button>
          <Button
            style={{
              color: "#FFAC33",
              backgroundColor: "#FFAC3326",
              borderRadius: "50px",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "normal",
            }}
          >
            Rating
          </Button>
          <Button
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
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
