import React from "react";

const AdminSidebar = () => (
  <aside id="sidebar" className="sidebar fixed left-0 top-16 h-full bg-blue-900 text-white w-64 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40">
    <div className="p-4">
      <nav className="space-y-2">
        <a href="#" id="dashboard-link" className="nav-item active flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-800 transition-colors">
          <i className="fas fa-tachometer-alt text-lg"></i>
          <span>Dashboard</span>
        </a>
        <a href="#" id="donations-link" className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-800 transition-colors">
          <i className="fas fa-hand-holding-usd text-lg"></i>
          <span>Donations</span>
        </a>
        <a href="#" id="contact-link" className="nav-item flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-800 transition-colors">
          <i className="fas fa-envelope text-lg"></i>
          <span>Contact</span>
        </a>
      </nav>
    </div>
  </aside>
);

export default AdminSidebar;
