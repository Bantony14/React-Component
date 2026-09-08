import { useEffect, useRef, useState } from "react";

function Pagination() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [noOfPage, setNoOfPages] = useState([]);
  const limit = 10;

  //    calling api
  useEffect(() => {
    setData(Array.from({ length: 100 }, (_, index) => index + 1));
  }, []);

  useEffect(() => {
    setNoOfPages(
      Array.from(
        { length: Math.ceil(data.length / limit) },
        (_, index) => index + 1,
      ),
    );
  }, [data]);

  useEffect(() => {
    const getDataShow = data.slice(
      currentPage === 1 ? 0 : currentPage * limit - 10,
      currentPage * limit,
    );

    setShowData(getDataShow);
  }, [currentPage, data]);

  console.log("hello");

  return (
    <>
      <div>
        {showData.map((value) => (
          <h1 key={value}>{value}</h1>
        ))}

        {noOfPage.map((value) => (
          <button
            key={value}
            className=" w-30 h-10 bg-amber-400 "
            style={{ backgroundColor: currentPage === value && "red" }}
            onClick={() => {
              setCurrentPage(value);
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
