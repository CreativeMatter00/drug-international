import Navbar from "@/components/navbar/Navbar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="mt-16">{children}</div>
    </div>
  );
}

export default layout;
