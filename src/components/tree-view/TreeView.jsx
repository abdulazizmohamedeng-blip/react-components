import { useState } from "react";
const data = [
  {
    id: 1,
    name: "Home",
    type: "folder",
    children: [
      {
        id: 2,
        name: "components",
        type: "folder",
        children: [
          { id: 3, name: "Button.js", type: "file" },
          { id: 4, name: "Input.js", type: "file" },
        ],
      },
      { id: 5, name: "App.js", type: "file" },
    ],
  },
  {
    id: 1,
    name: "Folder1",
    type: "folder",
    children: [
      {
        id: 2,
        name: "Home",
        type: "folder",
        children: [
          {
            id: 3,
            name: "Folder2",
            type: "folder",
            children: [
              { id: 4, name: "folder3", type: "folder" },
              { id: 4, name: "folder4", type: "folder" },
            ],
          },
          { id: 4, name: "Input.js", type: "file" },
        ],
      },
      { id: 5, name: "App.js", type: "file" },
    ],
  },
];

function TreeNode({ node }) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ marginLeft: "15px" }}>
      <p onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        {node.type == "folder" ? "📂" : "📄"}
        {node.name}
      </p>
      {isOpen &&
        node.children &&
        node.children.map((item) => <TreeNode node={item} />)}
    </div>
  );
}

export default function TreeView() {
  return (
    <div>
      {data.map((item) => (
        <TreeNode node={item} />
      ))}
    </div>
  );
}
