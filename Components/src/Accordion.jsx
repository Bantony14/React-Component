import { useState } from "react";

function Accordion() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p>What is React ?</p>

      {open && <p>React is a JavaScript library for building UI.</p>}
      <button onClick={() => setOpen(!open)}>
        {!open ? "Get More Details" : "Less Details"}
      </button>
    </div>
  );
}

export default Accordion;
