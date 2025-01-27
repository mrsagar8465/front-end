import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import AdminFooter from './common/AdminFotter';
import Commonsidebar from './common/Commonsidebar';

const AdminAnalytics = () => {
  // State to store analytics data
  const [analyticsData, setAnalyticsData] = useState([]);
  
  // Fetch the data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/analytics'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch analytics data');
        }
        const data = await response.json();
        setAnalyticsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="h-screen flex flex-col">
      <Header title={"Analytics"}/>

      <div className="flex">
        <Commonsidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Advanced Analytics</h2>

          {/* Analytics Table */}
          <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
            <table className="min-w-full table-auto bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">ID</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Name</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Value</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Change</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Social Links</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-3 text-gray-700 dark:text-gray-300">Loading data...</td>
                  </tr>
                ) : (
                  analyticsData.map((data) => (
                    <tr key={data.id} className="border-t hover:bg-gray-100 dark:hover:bg-gray-600">
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{data.id}</td>
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{data.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{data.value}</td>
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{data.change}</td>
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {/* Social media links */}
                        <div className="flex space-x-3">
                          <a href={data.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300">
                            Instagram
                          </a>
                          <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300">
                            LinkedIn
                          </a>
                          <a href={data.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300">
                            Twitter
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <AdminFooter />
    </div>
  );
};

export default AdminAnalytics;
