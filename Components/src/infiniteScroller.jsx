import { useEffect, useRef, useState } from "react";

function InfiniteScroll() {
  const elementRef = useRef(null);

  const data = Array.from({ length: 100 }, (_, index) => index + 1);

  const [showData, setShowData] = useState(data.slice(0, 10));

  const limit = useRef(10);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        limit.current = limit.current + 10;

        setShowData(data.slice(0, limit.current));
      }
    });

    obs.observe(elementRef.current);

    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {showData.map((value) => {
        return (
          <p key={value} className="h-10 bg-amber-300 text-2xl">
            {value}
          </p>
        );
      })}

      <h1 ref={elementRef}>loading...</h1>
    </>
  );
}

export default InfiniteScroll;
