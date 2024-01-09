"use client";

import Footer from "@/components/ui/footer/Footer";
import Navbar from "@/components/ui/navSidebar/AllProductSidebar/Navbar/Navbar";
import Sidebar from "@/components/ui/navSidebar/Sidebar";
import store from "@/redux/Store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

function layout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div className="max-lg:hidden">
          <Sidebar />
        </div>
        <div className="mt-20">{children}</div>
        <Footer />
      </div>
    </Provider>
  );
}

export default layout;
