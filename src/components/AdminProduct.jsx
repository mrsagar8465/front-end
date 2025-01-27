import React from 'react';
 // Import motion for animations
 // Update path if necessary
import Header from './common/Header';
import AdminFooter from './common/AdminFotter';
import Commonsidebar from './common/Commonsidebar';

const AdminProduct = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header title={"product"}/>
      
      
      <div className="flex">
        <Commonsidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 p-6">
          {/* Grid layout: 4 rows, 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Product 1</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">Product description goes here.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Product 2</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">Product description goes here.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Product 3</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">Product description goes here.</p>
            </div>

            {/* Row 2 */}
           
            {/* Row 4 */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Product 10</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">Product description goes here.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Product 11</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">Product description goes here.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Product 12</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">Product description goes here.</p>
            </div>
          </div>
        
        </main>
       
      </div>
      <AdminFooter/>
  </div>
  );
};

export default AdminProduct;
