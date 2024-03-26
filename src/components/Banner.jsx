import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.png";
const Banner = () => {
  return (
    <section className="bg-[#1313130D] rounded-lg dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-8 lg:py-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left">
          <h1 className="lg:text-5xl font-bold text-2xl">
            <span className="block mb-3">Books to freshen</span>
            up your bookshelf
          </h1>
          <div className="flex mt-10 flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <div>
              <Link to="/books">
                <Button
                  size="lg"
                  style={{
                    backgroundColor: "#23BE0A",
                    textTransform: "capitalize",
                    fontSize: "16px",
                  }}
                >
                  View The List
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={banner}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
