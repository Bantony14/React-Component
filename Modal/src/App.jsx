import { useState } from "react";

function Modal() {
  const [value, setValue] = useState("");
  const [popUp, setPopUp] = useState(false);
  return (
    <>
      {/* card */}
      <div className="flex items-center justify-center min-h-screen p-10 ">
        {/* pop up */}
        {popUp && (
          <div
            className="flex items-center justify-center bg-black/30 backdrop-blur z-40 fixed inset-0 "
            onClick={() => setPopUp(false)}
          >
            <div
              className=" flex items-center justify-center w-50 h-30 bg-amber-50 rounded-2xl gap-4 "
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <button
                className="w-20 h-10 bg-yellow-500 rounded-xl"
                onClick={() => {
                  setPopUp(false);
                }}
              >
                cancel
              </button>
              <button className="w-20 h-10 bg-yellow-500 rounded-xl">
                {value}
              </button>
            </div>
          </div>
        )}
        <div className=" flex flex-col items-center justify-center  gap-5  w-50 h-90 bg-amber-800 rounded p-3  ">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
            alt=""
            className=" rounded-full w-40 h-40 "
          />
          <div>
            <h1 className="text-lg ">Name: Bantony</h1>
            <h1 className="text-lg"> Age: 24</h1>
          </div>
          <div className="flex gap-2">
            <button
              className="w-20 h-10 bg-yellow-500 rounded-xl"
              onClick={() => {
                setValue("follow");
                setPopUp(true);
              }}
            >
              Follow
            </button>
            <button
              className="w-20 h-10 bg-yellow-500 rounded-xl"
              onClick={() => {
                setValue("Unfollow");
                setPopUp(true);
              }}
            >
              Unfollow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
