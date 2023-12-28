import Footer from "@/components/ui/footer/Footer";
import NavSidebar from "@/components/ui/navSidebar/AllProductSidebar/Navbar/NavSidebar";
import Navbar from "@/components/ui/navSidebar/AllProductSidebar/Navbar/Navbar";
import Sidebar from "@/components/ui/navSidebar/Sidebar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
<<<<<<< HEAD
  return (
    <div>
      <Navbar />
      <div className="max-lg:hidden">
        <Sidebar />
      </div>

      <div className="mt-16">{children}</div>
      <Footer />
    </div>
  );
=======
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div className="mt-20">{children}</div>
			<Footer />
		</div>
	);
>>>>>>> c46700995310becc2537c07600bcbc6b5b8cb288
}

export default layout;
