import { Button, Navbar, Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="mx-auto shadow-none mt-4">
      <div className="flex lg:flex-row flex-col items-center justify-between text-blue-gray-900">
        <Typography className=" cursor-pointer py-1.5 lg:ml-2">
          <Link to="/" className="text-2xl font-bold">
            Book Vibe
          </Link>
        </Typography>
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
              Buy
            </NavLink>
          </div>
        </div>
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
    </Navbar>
  );
};

export default NavBar;
