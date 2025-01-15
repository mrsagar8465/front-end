import React from 'react';
 // Import motion for animations
 // Update path if necessary
import Header from './common/Header';

import Commonsidebar from './common/Commonsidebar';

const OverviewPage = () => {
  return (
    <div className="h-screen flex flex-col flex-1 overflow-auto relative z-10">
      <Header title={"admin"}/>
      
      <Commonsidebar/>
      
      
      
    <div className="container mx-auto ">
     
      {/* This is where the main content will go */}
     
      
      {/* You can add more sections here like stats, charts, tables, etc. */}
    </div>
  </div>
  );
};

export default OverviewPage;
