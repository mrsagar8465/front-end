import React from 'react';
 // Import motion for animations
 // Update path if necessary
import Header from './common/Header';

import Commonsidebar from './common/Commonsidebar';

const AdminProduct = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header title={"product"}/>
      
      <Commonsidebar/>
      
      
      
    <div className="container mx-auto ">
     
      {/* This is where the main content will go */}
     
      
      {/* You can add more sections here like stats, charts, tables, etc. */}
    </div>
  </div>
  );
};

export default AdminProduct;
