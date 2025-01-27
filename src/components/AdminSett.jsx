import React from 'react';
 // Import motion for animations
 // Update path if necessary
import Header from './common/Header';
import AdminFooter from './common/AdminFotter'; 
import Commonsidebar from './common/Commonsidebar';

const AdminSetting = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header title={"setting"}/>
     
      <div className="flex">
        <Commonsidebar />
        
        {/* Main Content Area */}
        <main className="flex-1"> 
          <p>Setting</p>
        </main>


        
      </div>
      <AdminFooter/>
  </div>
  );
};

export default AdminSetting;
