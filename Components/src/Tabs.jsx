import { useState } from "react";

function Tabs() {
  const [tabs, SetTabs] = useState("");

  return (
    <div className="flex items-center justify-center bg-amber-800 h-screen">
      <div className="md:max-w-lg w-full bg-amber-200 h-40">
        <div className="flex gap-2.5 justify-around bg-amber-50 p-2">
          <button
            className="cursor-pointer bg-green-200 flex-1"
            onClick={() => SetTabs("Car")}
          >
            Car
          </button>

          <button
            className="cursor-pointer bg-green-200 flex-1"
            onClick={() => SetTabs("Bike")}
          >
            Bike
          </button>

          <button
            className="cursor-pointer bg-green-200 flex-1"
            onClick={() => SetTabs("Home")}
          >
            Home
          </button>
        </div>

        <div className="flex justify-center items-center bg-amber-50 p-3  h-20 mx-2 my-5">
          {tabs === "Car" && <p>Car is good for comfort</p>}
          {tabs === "Bike" && <p>Bike is good for comfort</p>}
          {tabs === "Home" && <p>Home is good for comfort</p>}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
