import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      <h2 className="text-4xl font-bold">Oops!</h2>
      <Link to="/">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
