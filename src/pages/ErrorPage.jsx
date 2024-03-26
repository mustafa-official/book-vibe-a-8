import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <h2 className="text-6xl lg:text-9xl font-black">404</h2>
      <p className="text-xs lg:text-[14px]">Page not found</p>
      <Link className="mt-0 lg:mt-4" to="/">
        <Button size="sm">Go to Home</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
