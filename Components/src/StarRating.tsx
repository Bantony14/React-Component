import { useState } from "react";

function StarRating() {
  const [star, setStar] = useState<number[]>(
    Array.from({ length: 5 }, () => 0),
  );

  function ChangeStar(n: number) {
    const newvalue: number[] = [...star];
    for (let i = 0; i <= n; i++) {
      if (newvalue[n - i] === 1) {
        newvalue[n - i] = 0;
      } else {
        newvalue[n - i] = 1;
      }
    }

    for (let i = n; i < star.length - 1; i++) {
      newvalue[i + 1] = 0;
    }
    setStar(newvalue);
  }

  return (
    <>
      {star.map((value, index) => {
        return (
          <button
            onClick={() => ChangeStar(index)}
            className={` ${value && "text-amber-400"} text-2xl `}
          >
            ★
          </button>
        );
      })}
    </>
  );
}

export default StarRating;
