import { useState } from "react";

function Toast() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleShowToast}>Show Toast</button>

      {showToast && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            padding: "14px 20px",
            backgroundColor: "#222",
            color: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          Successfully completed! 🎉
        </div>
      )}
    </div>
  );
}

export default Toast;
