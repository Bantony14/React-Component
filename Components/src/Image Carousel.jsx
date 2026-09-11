import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
function ImageCarousel() {
  const imagesData = [
    "https://picsum.photos/id/1015/800/500",
    "https://picsum.photos/id/1016/800/500",
    "https://picsum.photos/id/1018/800/500",
    "https://picsum.photos/id/1025/800/500",
    "https://picsum.photos/id/1035/800/500",
  ];

  const [imagePreview, setImagePreView] = useState(0);
  const [direction, SetDirection] = useState(null);
  return (
    <>
      <div>
        <div className="relative w-fit overflow-hidden">
          <img
            key={imagePreview}
            src={imagesData[imagePreview]}
            alt=""
            className={
              direction === "next"
                ? "animate-slide-left"
                : direction === "prev"
                  ? "animate-slide-right"
                  : ""
            }
          />
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-amber-300 rounded-2xl "
            onClick={() => {
              setImagePreView((prev) =>
                prev > 0 ? prev - 1 : imagesData.length - 1,
              );
              SetDirection("prev");
            }}
          >
            <ChevronLeft size={20} />{" "}
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-300 rounded-2xl"
            onClick={() => {
              setImagePreView((prev) =>
                prev < imagesData.length - 1 ? prev + 1 : 0,
              );
              SetDirection("next");
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;
