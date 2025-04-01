import Header from "@/components/header/Header";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

function DashboardLayout({ children }) {
  return (
    <>
      <ProtectedRoutes>
        <Sidebar />

        {children}
      </ProtectedRoutes>
    </>
  );
}

export default DashboardLayout;
