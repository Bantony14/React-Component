import { useRef, useState } from "react";

function StarRating() {
  const [star, setStar] = useState<number[]>(
    Array.from({ length: 5 }, () => 0),
  );

  const rating = useRef<number>(0);

  function ChangeStar(n: number) {
    const newvalue: number[] = [...star];

    if (rating.current === n + 1) {
      for (let i = 0; i <= n; i++) {
        newvalue[n - i] = 0;
      }
      rating.current = 0;
      setStar(newvalue);
      return;
    }
    newvalue.fill(0);
    for (let i = 0; i <= n; i++) {
      newvalue[n - i] = 1;
    }

    rating.current = newvalue.filter((value) => value === 1).length;

    setStar(newvalue);
  }

  function mouseHoverEffect(n: number) {
    const newvalue: number[] = [...star];

    newvalue.fill(0);
    for (let i = 0; i < rating.current; i++) {
      newvalue[i] = 1;
    }

    for (let i = rating.current; i <= n; i++) {
      newvalue[i] = 1;
    }

    setStar(newvalue);
  }

  function mouseleaveEffect() {
    const newvalue: number[] = [...star];

    newvalue.fill(0);
    for (let i = 0; i < rating.current; i++) {
      newvalue[i] = 1;
    }

    setStar(newvalue);
  }

  return (
    <>
      {star.map((value, index) => {
        return (
          <button
            onMouseLeave={mouseleaveEffect}
            onMouseEnter={() => mouseHoverEffect(index)}
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
