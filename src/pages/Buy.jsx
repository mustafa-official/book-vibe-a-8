import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Buy = () => {
  const handleSubmit = () => {
    Swal.fire({
      title: "Good job!",
      text: "Submitted Successfully",
      icon: "success",
    });
  };
  return (
    <section className="p-6 px-14  text-gray-50">
      <form action="" className="container flex flex-col mx-auto space-y-12">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Throw Information</p>
            <p className="text-xs">
              To quickly get your book give us proper information.This feature
              seamlessly integrates products or services directly onto the
              online order form, serving as a mini-catalog.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">First name</label>
              <input
                required
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full pl-3 py-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-rose-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Last name</label>
              <input
                id="lastname"
                type="text"
                placeholder="Last name"
                className="w-full pl-3 py-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-rose-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full pl-3 py-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-rose-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Book Name</label>
              <input
                required
                id="email"
                type="text"
                placeholder="Book Name"
                className="w-full pl-3 py-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-rose-400 border-gray-700"
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm">Address</label>
              <input
                id="address"
                type="text"
                placeholder=""
                className="w-full pl-3 py-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-rose-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">City</label>
              <input
                id="city"
                type="text"
                placeholder=""
                className="w-full pl-3 py-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-rose-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">State / Province</label>
              <input
                id="state"
                type="text"
                placeholder=""
                className="w-full pl-3 py-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-rose-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">ZIP / Postal</label>
              <input
                required
                id="zip"
                type="text"
                placeholder=""
                className="w-full pl-3 py-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-rose-400 border-gray-700"
              />
            </div>
            <div>
              <Button
                onClick={() => handleSubmit()}
                style={{ backgroundColor: "#23BE0A" }}
              >
                Submit
              </Button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Buy;
