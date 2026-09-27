import { useState } from "react";

function DragAndDrop() {
  const [dragItem, setDragItem] = useState<string>();
  const handleDragStart = (params: string): void => {
    setDragItem(params);
  };

  const handleDragOver = (params: string | undefined): void => {
    console.log(params);
  };

  return (
    <>
      <div
        className="w-100 h-100 bg-amber-400"
        draggable
        onDragStart={() => handleDragStart("apple")}
      >
        Apple
      </div>

      <div
        className=" ml-100 w-100 h-100 bg-amber-400 text-5xl text-center"
        onDrop={() => handleDragOver(dragItem)}
        onDragOver={(e) => e.preventDefault()}
      >
        Drop Here
      </div>
    </>
  );
}

function DragState() {
  const [dragItem, setDragItem] = useState<string>();
  const [droppedItem, setDroppedItem] = useState<string>();

  function dragStart(params: string): void {
    setDragItem(params);
  }

  function drop(): void {
    setDroppedItem(dragItem);
  }

  return (
    <div className="min-h-screen flex items-center justify-center gap-10 bg-gray-100">
      {/* Drag Items */}
      <div className="w-64 rounded-xl bg-white p-5 shadow-md">
        <h2 className="mb-4 text-lg font-semibold">Items</h2>

        <div className="space-y-3">
          <div
            draggable
            onDragStart={() => dragStart("Apple")}
            className="cursor-grab rounded-lg bg-blue-500 p-4 text-center text-white"
          >
            Apple
          </div>

          <div
            draggable
            onDragStart={() => dragStart("Banana")}
            className="cursor-grab rounded-lg bg-green-500 p-4 text-center text-white"
          >
            Banana
          </div>

          <div
            draggable
            onDragStart={() => dragStart("Mango")}
            className="cursor-grab rounded-lg bg-purple-500 p-4 text-center text-white"
          >
            Mango
          </div>
        </div>
      </div>

      {/* Drop Zone */}
      <div
        className="flex h-80 w-80 items-center justify-center rounded-xl border-2 border-dashed border-gray-400 bg-white"
        onDragOver={(e) => e.preventDefault()}
        onDrop={drop}
      >
        <p className="text-gray-500">{droppedItem || "Drop Here"}</p>
      </div>
    </div>
  );
}

export { DragAndDrop, DragState };
