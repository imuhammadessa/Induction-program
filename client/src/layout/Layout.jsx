"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import Topbar from "../components/Topbar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar />
      <Topbar setSidebarOpen={setSidebarOpen} />

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
