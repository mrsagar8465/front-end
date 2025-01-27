import React from 'react';
 // Import motion for animations
 // Update path if necessary
import Header from './common/Header';

import Commonsidebar from './common/Commonsidebar';

const AdminPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header title={"admin page"}/>
      
     
      <div className="flex">
        <Commonsidebar />
        
        {/* Main Content Area */}
        <main className="flex-1"> 
         <div>
       
        
        </div>
        </main>
      </div>
  </div>
  );
};

export default AdminPage;
