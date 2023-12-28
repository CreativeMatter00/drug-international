import Footer from "@/components/ui/footer/Footer";
import NavSidebar from "@/components/ui/navSidebar/AllProductSidebar/Navbar/NavSidebar";
import Navbar from "@/components/ui/navSidebar/AllProductSidebar/Navbar/Navbar";
import Sidebar from "@/components/ui/navSidebar/Sidebar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="max-lg:hidden">
        <Sidebar />
      </div>

      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
}

export default layout;
