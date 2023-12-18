import Footer from "@/components/ui/footer/Footer";
import Navbar from "@/components/ui/navSidebar/Navbar";
import Sidebar from "@/components/ui/navSidebar/Sidebar";
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
