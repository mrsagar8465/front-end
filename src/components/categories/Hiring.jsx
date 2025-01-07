import React from 'react';

const hiringData = [
    {
        category: "Web Development",
        description: "We are looking for skilled web developers proficient in React, Angular, and Node.js. Experience with modern web standards and responsive design is a plus.",
        color: "from-green-400 to-blue-500",
    },
    {
        category: "Mobile Development",
        description: "Join our team to create innovative mobile apps using Flutter, React Native, or Swift. Experience in deploying apps to App Store or Google Play is preferred.",
        color: "from-purple-500 to-indigo-600",
    },
    {
        category: "Data Science",
        description: "We are hiring data scientists with expertise in Python, R, and data visualization tools. Machine learning and statistical analysis experience is a must.",
        color: "from-orange-400 to-red-500",
    },
    {
        category: "Game Development",
        description: "Looking for passionate game developers experienced in Unity or Unreal Engine. Knowledge of 3D modeling and multiplayer game development is a bonus.",
        color: "from-yellow-400 to-green-500",
    },
    {
        category: "AI & Machine Learning",
        description: "Join our AI team to work on innovative projects in deep learning, natural language processing, and computer vision. Proficiency in TensorFlow or PyTorch is required.",
        color: "from-indigo-500 to-pink-500",
    },
    {
        category: "Cloud Computing",
        description: "We are hiring cloud engineers with expertise in AWS, Azure, or Google Cloud. Experience in DevOps and infrastructure automation is a plus.",
        color: "from-blue-400 to-purple-600",
    },
];

function Hiring() {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">
                    Hiring for Development
                </h1>
                <p className="text-center text-gray-600 mb-10">
                    Explore the roles we're hiring for and become part of our innovative team.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hiringData.map((field, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-lg shadow-lg bg-gradient-to-r ${field.color} text-white transition-transform transform hover:scale-105 hover:shadow-2xl duration-300`}
                        >
                            <h3 className="text-2xl font-bold mb-4">
                                {field.category}
                            </h3>
                            <p className="mb-6">
                                {field.description}
                            </p>
                            <button className="px-4 py-2 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100 transition duration-300">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hiring;
