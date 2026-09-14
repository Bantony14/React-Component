import { useEffect, useState } from "react";

function FileUpload() {
  const [storage, setStorage] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  console.log(storage);

  useEffect(() => {
    if (!imagePreview) {
      setPreviewUrl("");
      return;
    }

    const url = URL.createObjectURL(imagePreview);
    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [imagePreview]);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-amber-400">
        <div className="w-100 h-100 bg-amber-900 overflow-auto">
          <label htmlFor="imageUpload">
            <img
              src={previewUrl}
              alt=""
              className="w-40 h-50 rounded-full border-4 border-amber-100"
            />

            <input
              id="imageUpload"
              type="file"
              className="hidden"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setImagePreview(e.target.files?.[0] ?? null)
              }
            />
          </label>

          {imagePreview && (
            <button
              className="w-30 h-10 bg-amber-200"
              onClick={() => {
                setStorage((prev) => [...prev, imagePreview]);
                setImagePreview(null);
              }}
            >
              upload
            </button>
          )}

          <div className="flex gap-2 flex-wrap">
            {storage.map((value, index) => (
              <img
                key={index}
                src={URL.createObjectURL(value)}
                alt=""
                className="w-50 h-50"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FileUpload;
