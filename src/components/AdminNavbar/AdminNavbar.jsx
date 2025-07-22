import React from "react";
const logo = "/assets/images/logo-Aaradhya_trust.png";

const AdminNavbar = () => (
  <nav className="navbar fixed top-0 left-0 right-0 bg-white shadow-lg z-50 h-16">
    <div className="flex items-center justify-between px-4 h-full">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <button id="sidebar-toggle" className="lg:hidden text-blue-900 hover:text-blue-700">
          <i className="fas fa-bars text-xl"></i>
        </button>
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Aaradhya Trust Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-blue-900">Aaradhya Trust Admin</span>
        </div>
      </div>
      {/* Right side */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button id="profile-btn" className="text-gray-600 hover:text-blue-900">
            <i className="fas fa-user-circle text-xl"></i>
          </button>
          {/* Profile dropdown (hidden by default) */}
          <div id="profile-dropdown" className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default AdminNavbar;
