import React from "react";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import "../../components/AdminDashboard/admin-style.css";

const AdminDashboard = () => (
  <>
    <AdminNavbar />
    <AdminSidebar />
    <main className="main-content ml-0 lg:ml-64 mt-16 p-4 pb-20">
      {/* Dashboard View */}
      <div id="dashboard-view" className="view active">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome to Aaradhya Trust Admin Panel</p>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="stat-card bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Donations</p>
                <p className="text-2xl font-bold text-green-600">₹<span id="total-donations">0</span></p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <i className="fas fa-hand-holding-usd text-green-600 text-xl"></i>
              </div>
            </div>
          </div>
          <div className="stat-card bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Donors</p>
                <p className="text-2xl font-bold text-blue-600"><span id="total-donors">0</span></p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-users text-blue-600 text-xl"></i>
              </div>
            </div>
          </div>
          <div className="stat-card bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Enquiries</p>
                <p className="text-2xl font-bold text-purple-600"><span id="total-enquiries">0</span></p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <i className="fas fa-envelope text-purple-600 text-xl"></i>
              </div>
            </div>
          </div>
          <div className="stat-card bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Admins</p>
                <p className="text-2xl font-bold text-yellow-600"><span id="active-admins">0</span></p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <i className="fas fa-user-shield text-yellow-600 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
        {/* Add more dashboard content here */}
      </div>
    </main>
  </>
);

export default AdminDashboard;
