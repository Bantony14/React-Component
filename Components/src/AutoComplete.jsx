import { useEffect, useState } from "react";

function AutoComplete() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, SetSuggestion] = useState([]);
  const [selectindex, setSelectIndex] = useState(-1);
  const data = [
    "shoes",
    "bike",
    "watch",
    "laptop",
    "mobile",
    "headphones",
    "keyboard",
    "mouse",
    "bag",
    "jacket",
    "camera",
    "wallet",
    "sunglasses",
    "books",
    "bottle",
  ];

  useEffect(() => {
    if (!searchQuery) {
      setSelectIndex(-1);
    }
    const filterData = data.filter((value) => {
      if (searchQuery) {
        return (
          value.toLowerCase().includes(searchQuery.toLowerCase()) &&
          value.startsWith(searchQuery[0])
        );
      }
    });
    SetSuggestion(filterData);
  }, [searchQuery]);

  const handleWithKeys = (e) => {
    if (e.key === "ArrowDown") {
      setSelectIndex((prev) => (prev < suggestion.length - 1 ? prev + 1 : 0));
    }

    if (e.key === "ArrowUp") {
      setSelectIndex((prev) => (prev > 0 ? prev - 1 : suggestion.length - 1));
    }

    if (e.key === "Escape") {
      setSuggestion([]);
      setSelectIndex(-1);
    }
    if (e.key === "Enter" && selectindex >= 0) {
      e.preventDefault();
      setSearchQuery(suggestion[selectindex]);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col">
          <input
            type="text"
            className="w-1/2 h-10 border border-amber-400 rounded-2xl "
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleWithKeys}
          />
          {suggestion.length > 0 &&
            suggestion.map((value, index) => {
              return (
                <div keys={value} className=" flex flex-col">
                  <button
                    className={`w-1/2 h-20 bg-amber-300 hover:bg-amber-400 ${index === selectindex && "bg-amber-400"}`}
                    onClick={() => setSearchQuery(value)}
                  >
                    {value}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default AutoComplete;
