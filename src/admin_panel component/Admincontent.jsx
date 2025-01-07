import React, { useState } from 'react';

function Admincontent() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [categories, setCategories] = useState([
        { id: 1, title: "Category 1", subCategories: ["Subcategory 1", "Subcategory 2"] },
        { id: 2, title: "Category 2", subCategories: ["Subcategory 3", "Subcategory 4"] },
    ]);

    const handleAction = (action, categoryId) => {
        // Handle actions like Edit, Delete, Disable
        console.log(action, categoryId);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md">
                <div className="p-4 border-b border-indigo-400">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                </div>
                <nav className="mt-4">
                    <ul>
                        <li className="py-2 px-4 hover:bg-indigo-700 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
                            Dashboard
                        </li>
                        <li className="py-2 px-4 hover:bg-indigo-700 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
                            Categories
                        </li>
                        <li className="py-2 px-4 hover:bg-indigo-700 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
                            Sub Categories
                        </li>
                        <li className="py-2 px-4 hover:bg-indigo-700 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
                            Add New Page
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md px-6 py-4 animate-pulse">
                    <div>
                        <span className="text-xl font-semibold">Welcome to Admin Panel</span>
                    </div>
                    <div className="relative">
                        <div
                            className="flex items-center space-x-4 cursor-pointer"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                className="h-10 w-10 rounded-full border-2 border-white"
                            />
                            <button className="px-4 py-2 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100 transition duration-300">
                                Account
                            </button>
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 animate-fade-in">
                                <ul>
                                    <li className="px-4 py-2 hover:bg-indigo-100 text-indigo-600 transition duration-300 cursor-pointer">My Profile</li>
                                    <li className="px-4 py-2 hover:bg-indigo-100 text-indigo-600 transition duration-300 cursor-pointer">Sign Out</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </header>

                {/* Categories Section */}
                <main className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
                    
                    <div className="space-y-4">
                        {categories.map(category => (
                            <div
                                key={category.id}
                                className="p-6 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg flex justify-between items-center hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                <div>
                                    <h3 className="text-xl font-bold">{category.title}</h3>
                                    <div className="mt-2">
                                        {category.subCategories.map((subCategory, index) => (
                                            <span
                                                key={index}
                                                className="text-sm bg-indigo-500 text-white px-2 py-1 rounded-md mr-2 mt-1 inline-block"
                                            >
                                                {subCategory}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-x-4">
                                    <button
                                        onClick={() => handleAction('Edit', category.id)}
                                        className="px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-300"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleAction('Disable', category.id)}
                                        className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition duration-300"
                                    >
                                        Disable
                                    </button>
                                    <button
                                        onClick={() => handleAction('Delete', category.id)}
                                        className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition duration-300"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add New Page Button */}
                    <div className="mt-6">
                        <button
                            onClick={() => console.log('Add New Page')}
                            className="px-6 py-3 bg-gradient-to-br from-blue-500 to-teal-500 text-white font-bold rounded-md shadow-md hover:bg-teal-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            Add New Page
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Admincontent;
