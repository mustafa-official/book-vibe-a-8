import { Button, Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      

      <div className="navbar container px-10  mx-auto mt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="flex lg:justify-normal justify-center lg:flex-row flex-col lg:mt-0 mt-4 items-center gap-3">
                <NavLink
                  style={{ padding: "5px 12px" }}
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-[#23BE0A] rounded-md text-[#23BE0A] font-bold"
                      : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  style={{ padding: "5px 12px" }}
                  to="/books"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-[#23BE0A] px-3 rounded-md text-[#23BE0A] font-bold"
                      : ""
                  }
                >
                  Listed Books
                </NavLink>
                <NavLink
                  style={{ padding: "5px 12px" }}
                  to="/read"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-[#23BE0A] px-3 rounded-md text-[#23BE0A] font-bold"
                      : ""
                  }
                >
                  Pages to Read
                </NavLink>
                <NavLink
                  style={{ padding: "5px 12px" }}
                  to="/buffet"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-[#23BE0A] px-3 rounded-md text-[#23BE0A] font-bold"
                      : ""
                  }
                >
                  Top Book Buffet
                </NavLink>
                <NavLink
                  style={{ padding: "5px 12px" }}
                  to="/buy"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-[#23BE0A] px-3 rounded-md text-[#23BE0A] font-bold"
                      : ""
                  }
                >
                  Buy Now
                </NavLink>
              </div>
            </ul>
          </div>
          <Typography className="cursor-pointer">
            <Link to="/" className="text-xl lg:text-3xl font-bold">
              Book Vibe
            </Link>
          </Typography>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="">
            <div className="flex lg:justify-normal justify-center lg:flex-row flex-col lg:mt-0 mt-4 items-center gap-3">
              <NavLink
                style={{ padding: "5px 12px" }}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] rounded-md text-[#23BE0A] font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                style={{ padding: "5px 12px" }}
                to="/books"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] px-3 rounded-md text-[#23BE0A] font-bold"
                    : ""
                }
              >
                Listed Books
              </NavLink>
              <NavLink
                style={{ padding: "5px 12px" }}
                to="/read"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] px-3 rounded-md text-[#23BE0A] font-bold"
                    : ""
                }
              >
                Pages to Read
              </NavLink>
              <NavLink
                style={{ padding: "5px 12px" }}
                to="/buffet"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] px-3 rounded-md text-[#23BE0A] font-bold"
                    : ""
                }
              >
                Top Book Buffet
              </NavLink>
              <NavLink
                style={{ padding: "5px 12px" }}
                to="/buy"
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] px-3 rounded-md text-[#23BE0A] font-bold"
                    : ""
                }
              >
                Buy Now
              </NavLink>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="hidden gap-2 lg:flex">
            <Button
              style={{
                backgroundColor: "#23BE0A",
                textTransform: "capitalize",
                fontSize: "16px",
              }}
              size="md"
            >
              Sign In
            </Button>
            <Button
              style={{
                backgroundColor: "#59C6D2",
                textTransform: "capitalize",
                fontSize: "16px",
              }}
              size="md"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
