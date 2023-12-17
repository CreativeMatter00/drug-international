import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navSidebar/Navbar";
import Sidebar from "@/components/navSidebar/Sidebar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="mt-16">{children}</div>
      <Footer />
    </div>
  );
}

export default layout;
