import { useState } from "react";

export default function FolderExplore() {
  interface FileItem {
    id: string;
    name: string;
    type: "file" | "folder";
    children?: FileItem[];
  }

  const files: FileItem[] = [
    {
      id: "folder-1",
      name: "src",
      type: "folder",
      children: [
        {
          id: "folder-2",
          name: "components",
          type: "folder",
          children: [
            {
              id: "file-1",
              name: "Button.jsx",
              type: "file",
            },
            {
              id: "file-2",
              name: "Navbar.jsx",
              type: "file",
            },
          ],
        },
        {
          id: "file-3",
          name: "App.jsx",
          type: "file",
        },
      ],
    },

    {
      id: "folder-3",
      name: "public",
      type: "folder",
      children: [
        {
          id: "file-4",
          name: "logo.png",
          type: "file",
        },
      ],
    },

    {
      id: "file-5",
      name: "package.json",
      type: "file",
    },
  ];
  return (
    <>
      {files.map((item) => (
        <Folder item={item} />
      ))}
    </>
  );
}

interface FileItem {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileItem[];
}

function Folder({ item }: { item: FileItem }) {
  const [open, setOpen] = useState(false);

  if (item.type === "file") {
    return <div>{item.name}</div>;
  }
  return (
    <>
      <div onClick={() => setOpen((prev) => !prev)}>
        {open ? "📂" : "📁"} {item.name}
      </div>

      {open && (
        <div className="ml-5">
          {item.children?.map((child) => (
            <Folder key={child.id} item={child} />
          ))}
        </div>
      )}
    </>
  );
}
