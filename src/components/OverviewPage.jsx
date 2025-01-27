import React from 'react';
import Header from './common/Header';
import Commonsidebar from './common/Commonsidebar';
import AdminFotter from './common/AdminFotter';
import 'bootstrap/dist/css/bootstrap.min.css';
const OverviewPage = () => {
  return (
    <div className="h-screen flex flex-col flex-1 overflow-auto relative z-10">
      <Header title={"Welcome Admin"} />
      
      <div className="flex">
        <Commonsidebar />
        <main className="flex-1 p-4 mt-4 ms-5">
          <div className="container">
            <h2 className="mb-4">Dashboard Overview</h2>

            {/* First Row */}
            <div className="row mb-4">
              {/* Total Users Card */}
              <div className="col-md-4">
                <div className="card text-white bg-primary mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Total Users</h5>
                    <p className="card-text fs-3">1,234</p>
                  </div>
                </div>
              </div>

              {/* Total Categories Card */}
              <div className="col-md-4">
                <div className="card text-white bg-success mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Total Categories</h5>
                    <p className="card-text fs-3">56</p>
                  </div>
                </div>
              </div>

              {/* Total Products Card */}
              <div className="col-md-4">
                <div className="card text-white bg-danger mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Total Products</h5>
                    <p className="card-text fs-3">789</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="row">
              {/* Sales Chart Card */}
              <div className="col-md-4">
                <div className="card bg-light mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Sales Chart</h5>
                    <p>📊 Chart Placeholder</p>
                  </div>
                </div>
              </div>

              {/* Revenue Chart Card */}
              <div className="col-md-4">
                <div className="card bg-light mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Revenue Chart</h5>
                    <p>📈 Chart Placeholder</p>
                  </div>
                </div>
              </div>

              {/* Orders Chart Card */}
              <div className="col-md-4">
                <div className="card bg-light mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Orders Chart</h5>
                    <p>📉 Chart Placeholder</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>   






      </div>
      <AdminFotter/>
    </div>
  );
};

export default OverviewPage;
