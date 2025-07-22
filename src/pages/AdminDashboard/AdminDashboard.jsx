import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import "../../components/AdminDashboard/admin-style.css";


const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalDonations: 0,
    totalDonors: 0,
    totalEnquiries: 0,
    activeAdmins: 0,
  });
  const [animatedStats, setAnimatedStats] = useState({
    totalDonations: 0,
    totalDonors: 0,
    totalEnquiries: 0,
    activeAdmins: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      // Donations
      const donationsSnap = await getDocs(collection(db, "donations"));
      let totalDonations = 0;
      const donorSet = new Set();
      donationsSnap.forEach(doc => {
        const data = doc.data();
        if (data.amount) totalDonations += Number(data.amount);
        if (data.donor) donorSet.add(data.donor);
      });

      // Donors: fallback to doc count if no donor field
      const totalDonors = donorSet.size > 0 ? donorSet.size : donationsSnap.size;

      // Enquiries
      const contactsSnap = await getDocs(collection(db, "contacts"));
      const totalEnquiries = contactsSnap.size;

      // Admins
      const adminsSnap = await getDocs(collection(db, "login"));
      const activeAdmins = adminsSnap.size;

      setStats({
        totalDonations,
        totalDonors,
        totalEnquiries,
        activeAdmins,
      });
    };
    fetchStats();
  }, []);

  // Animate numbers when stats change
  useEffect(() => {
    const duration = 1000; // ms
    const frameRate = 30; // fps
    const steps = Math.round(duration / (1000 / frameRate));
    const animate = (key, endValue) => {
      let startValue = animatedStats[key];
      let step = 0;
      if (startValue === endValue) return;
      const increment = (endValue - startValue) / steps;
      const interval = setInterval(() => {
        step++;
        startValue += increment;
        if (step >= steps) {
          setAnimatedStats(prev => ({ ...prev, [key]: endValue }));
          clearInterval(interval);
        } else {
          setAnimatedStats(prev => ({ ...prev, [key]: Math.round(startValue) }));
        }
      }, 1000 / frameRate);
    };
    Object.keys(stats).forEach(key => {
      animate(key, stats[key]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats]);

  return (
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
                  <p className="text-2xl font-bold text-green-600 transition-all duration-500">₹<span id="total-donations">{animatedStats.totalDonations}</span></p>
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
                  <p className="text-2xl font-bold text-blue-600 transition-all duration-500"><span id="total-donors">{animatedStats.totalDonors}</span></p>
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
                  <p className="text-2xl font-bold text-purple-600 transition-all duration-500"><span id="total-enquiries">{animatedStats.totalEnquiries}</span></p>
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
                  <p className="text-2xl font-bold text-yellow-600 transition-all duration-500"><span id="active-admins">{animatedStats.activeAdmins}</span></p>
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
};

export default AdminDashboard;
