"use client";

import Footer from "@/components/ui/footer/Footer";
import Navbar from "@/components/ui/navSidebar/AllProductSidebar/Navbar/Navbar";
import Sidebar from "@/components/ui/navSidebar/Sidebar";
import store from "@/redux/Store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

function layout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div>
          <Navbar />
          <div className="max-lg:hidden">
            <Sidebar />
          </div>
          <div className="mt-20">{children}</div>
          <Footer />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default layout;
