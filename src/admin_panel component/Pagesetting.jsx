import React, { useState } from "react";

function MenuSettings() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Contact", link: "/contact" },
  ]);
  const [newMenuItem, setNewMenuItem] = useState({ name: "", link: "" });

  // Handle adding a new menu item
  const handleAddMenuItem = () => {
    if (newMenuItem.name && newMenuItem.link) {
      setMenuItems([
        ...menuItems,
        { id: Date.now(), name: newMenuItem.name, link: newMenuItem.link },
      ]);
      setNewMenuItem({ name: "", link: "" });
    }
  };

  // Handle deleting a menu item
  const handleDeleteMenuItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  // Handle rearranging menu items
  const handleRearrange = (index, direction) => {
    const newMenu = [...menuItems];
    const [movedItem] = newMenu.splice(index, 1);
    const newIndex = direction === "up" ? index - 1 : index + 1;
    newMenu.splice(newIndex, 0, movedItem);
    setMenuItems(newMenu);
  };

  return (
    <div className=" pt-8 p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Menu Settings</h1>

        {/* Existing Menu Items */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Current Menu Items</h2>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-md"
              >
                <div>
                  <span className="font-medium text-gray-800">{item.name}</span>
                  <span className="text-gray-500 ml-2">({item.link})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-3 py-1 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded"
                    onClick={() => handleRearrange(index, "up")}
                    disabled={index === 0}
                  >
                    Move Up
                  </button>
                  <button
                    className="px-3 py-1 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded"
                    onClick={() => handleRearrange(index, "down")}
                    disabled={index === menuItems.length - 1}
                  >
                    Move Down
                  </button>
                  <button
                    className="px-3 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded"
                    onClick={() => handleDeleteMenuItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Add New Menu Item */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Add New Menu Item</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Menu Name"
              value={newMenuItem.name}
              onChange={(e) =>
                setNewMenuItem({ ...newMenuItem, name: e.target.value })
              }
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Menu Link"
              value={newMenuItem.link}
              onChange={(e) =>
                setNewMenuItem({ ...newMenuItem, link: e.target.value })
              }
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md"
              onClick={handleAddMenuItem}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuSettings;
