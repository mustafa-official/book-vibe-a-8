import { Button, Navbar, Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="mx-auto shadow-none mt-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography className=" cursor-pointer py-1.5 lg:ml-2">
          <Link to="/" className="text-2xl font-bold">
            Book Vibe
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <div className="flex gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border border-[#23BE0A] px-3 rounded-md" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? "border border-[#23BE0A] px-3 rounded-md" : ""
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/read"
              className={({ isActive }) =>
                isActive ? "border border-[#23BE0A] px-3 rounded-md" : ""
              }
            >
              Pages to Read
            </NavLink>
          </div>
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button style={{ backgroundColor: "#23BE0A" }} size="md">
            Sign In
          </Button>
          <Button style={{ backgroundColor: "#59C6D2" }} size="md">
            Sign Up
          </Button>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
