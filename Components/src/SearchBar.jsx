import { useEffect } from "react";
import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [filterUserByName, setFilterByName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let timer;
    let ismount = true;
    setLoading(true);
    async function callApi() {
      timer = setTimeout(async () => {
        try {
          const res = await fetch("https://dummyjson.com/users");
          if (ismount) {
            const data = await res.json();
            const filteredUsers = data.users.filter((value) =>
              value.firstName.toLowerCase().includes(query.toLowerCase()),
            );
            setLoading(false);
            setFilterByName(filteredUsers);
          } else {
            return;
          }
        } catch (error) {
          if (ismount) {
            setError("give serach not found");
          }
        } finally {
          setLoading(false);
        }
      }, 5000);
    }

    callApi();
    return () => {
      clearTimeout(timer);
      ismount = false;
    };
  }, [query]);

  console.log(filterUserByName);

  return (
    <>
      <div className="listbox">
        <input
          type="text"
          className="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        {!loading ? (
          filterUserByName.length > 0 ? (
            filterUserByName.map((value) => (
              <div>
                <p>{value.firstName}</p>
                <p>{value.lastName}</p>
                <p>{value.maidenName}</p>
                <p>{value.age}</p>
              </div>
            ))
          ) : (
            <p>{error ? error : "user not found"} </p>
          )
        ) : (
          <h1>loading.....</h1>
        )}
      </div>
    </>
  );
}

export default SearchBar;
