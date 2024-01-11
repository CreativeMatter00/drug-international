"use client";

import DashboardNavbar from "@/components/ui/navSidebar/DashboardNavSidebar/DashboardNavbar";
import DashboardSidebar from "@/components/ui/navSidebar/DashboardNavSidebar/DashboardSidebar";
import store from "@/redux/Store/store";
import React, { ReactNode, useState } from "react";
import { Provider } from "react-redux";

function Layout({ children }: { children: ReactNode }) {
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true);

  return (
    <Provider store={store}>
      <div className="flex relative overflow-x-hidden bg-[#F3F4F6]">
        <DashboardSidebar isSidebarVisible={isSidebarVisible} />

        <div
          className={`${
            isSidebarVisible
              ? "ease-in-out duration-500 pl-72 max-md:pl-0"
              : " ease-in-out duration-500 pl-0"
          } h-screen w-full relative`}
        >
          <DashboardNavbar
            isSidebarVisible={isSidebarVisible}
            setSidebarVisible={setSidebarVisible}
          />
          <div className="pt-14">
            <div className="p-4">{children}</div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Layout;
// "use client";

// import DashboardNavbar from "@/components/ui/navSidebar/DashboardNavSidebar/DashboardNavbar";
// import DashboardSidebar from "@/components/ui/navSidebar/DashboardNavSidebar/DashboardSidebar";
// import store from "@/redux/Store/store";
// import React, { ReactNode, useState } from "react";
// import { Provider } from "react-redux";

// function layout({ children }: { children: ReactNode }) {
//   return (
//     <Provider store={store}>
//       <div className="flex relative overflow-x-hidden bg-[#F3F4F6]">
//         <DashboardSidebar />
//         <div>
//           <DashboardNavbar />

//           <div className="pt-14">
//             <div className="p-4">{children}</div>
//           </div>
//         </div>
//       </div>
//     </Provider>
//     // <Provider store={store}>
//     //   <div className="flex relative overflow-x-hidden bg-[#F3F4F6]">
//     //     <DashboardSidebar isSidebarVisible={isSidebarVisible} />
//     //     <div
//     //       className={`${
//     //         isSidebarVisible
//     //           ? "ease-in-out duration-500 pl-72 max-md:pl-0"
//     //           : " ease-in-out duration-500 pl-0"
//     //       } h-screen w-full relative`}
//     //     >
//     //       <DashboardNavbar
//     //         isSidebarVisible={isSidebarVisible}
//     //         setSidebarVisible={setSidebarVisible}
//     //       />

//     //       <div className="pt-14">
//     //         <div className="p-4">{children}</div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </Provider>
//   );
// }

// export default layout;
