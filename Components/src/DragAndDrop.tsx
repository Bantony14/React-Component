import { useState, useRef } from "react";

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
  const [dragItem, setDragItem] = useState<string[]>([
    "Apple",
    "Mango",
    "Banana",
  ]);

  const [droppedItem, setDroppedItem] = useState<string[]>([]);

  const dragValue = useRef<string>("");
  const mousePosition = useRef<"upper" | "lower">("upper");
  const targetItem = useRef<string>("");

  function setDragValue(value: string) {
    dragValue.current = value;
  }

  // Items → Drop Zone
  function drop(): void {
    setDroppedItem((prev) => [...prev, dragValue.current]);

    setDragItem((prev) => prev.filter((value) => value !== dragValue.current));
  }

  // Drop Zone → Items ke empty area
  function dropReverse(): void {
    setDragItem((prev) => [...prev, dragValue.current]);

    setDroppedItem((prev) =>
      prev.filter((value) => value !== dragValue.current),
    );
  }

  // Items ke andar reorder
  function handleReorder(): void {
    const draggedValue = dragValue.current;
    const targetValue = targetItem.current;

    // Same item par drop kiya
    if (draggedValue === targetValue) return;

    const newItems = [...dragItem];

    const draggedIndex = newItems.indexOf(draggedValue);
    const targetIndex = newItems.indexOf(targetValue);

    // Drop Zone se item Items me aa raha hai
    if (draggedIndex === -1) {
      const insertIndex =
        mousePosition.current === "upper" ? targetIndex : targetIndex + 1;

      newItems.splice(insertIndex, 0, draggedValue);

      setDragItem(newItems);

      setDroppedItem((prev) => prev.filter((value) => value !== draggedValue));

      return;
    }

    // Items ke andar existing item reorder
    newItems.splice(draggedIndex, 1);

    // Remove ke baad target ka naya index
    const updatedTargetIndex = newItems.indexOf(targetValue);

    const insertIndex =
      mousePosition.current === "upper"
        ? updatedTargetIndex
        : updatedTargetIndex + 1;

    newItems.splice(insertIndex, 0, draggedValue);

    setDragItem(newItems);
  }

  return (
    <div className="flex min-h-screen items-center justify-center gap-10 bg-gray-100">
      {/* Items */}
      <div
        className="w-64 rounded-xl bg-white p-5 shadow-md"
        onDragOver={(e) => e.preventDefault()}
        onDrop={dropReverse}
      >
        <h2 className="mb-4 text-lg font-semibold">Items</h2>

        <div className="space-y-3">
          {dragItem.map((value) => (
            <div
              key={value}
              draggable
              onDragStart={() => setDragValue(value)}
              onDragOver={(e) => {
                e.preventDefault();

                targetItem.current = value;

                const rect = e.currentTarget.getBoundingClientRect();

                const middle = rect.top + rect.height / 2;

                mousePosition.current = e.clientY > middle ? "lower" : "upper";
              }}
              onDrop={(e) => {
                e.stopPropagation();
                handleReorder();
              }}
              className="cursor-grab rounded-lg bg-blue-500 p-4 text-center text-white"
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      {/* Drop Zone */}
      <div
        className="flex h-80 w-80 items-center justify-center rounded-xl border-2 border-dashed border-gray-400 bg-white"
        onDragOver={(e) => e.preventDefault()}
        onDrop={drop}
      >
        <div className="flex flex-col gap-1.5">
          {droppedItem.length > 0 ? (
            droppedItem.map((value) => (
              <p
                key={value}
                draggable
                onDragStart={() => setDragValue(value)}
                className="h-15 w-50 cursor-grab rounded-2xl bg-blue-600 p-4 text-center text-white"
              >
                {value}
              </p>
            ))
          ) : (
            <p>DropHere</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DragState;

export { DragAndDrop, DragState };
