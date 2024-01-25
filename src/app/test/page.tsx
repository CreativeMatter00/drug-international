/* eslint-disable react/no-unescaped-entities */
"use client";

import Loader from "@/components/ui/loader/Loader";

const Test = () => {
  return (
    // <div className="relative overflow-hidden">
    //   <video className="w-full h-full object-cover" autoPlay loop muted>
    //     <source src="/assets/videoes/capsule.mp4" type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    //   <div className="absolute inset-0 bg-black opacity-50">gggggggggg</div>
    // </div>

    <div className="relative overflow-hidden">
      <div className="w-full h-full rounded-full overflow-hidden">
        <video
          className="w-48 h-48 object-cover rounded-full"
          autoPlay
          loop
          muted
        >
          74
          <source src="/assets/videoes/capsule.mp4" type="video/mp4" />
        </video>
      </div>
      {/* <div className="absolute inset-0 bg-black opacity-0 rounded-full"></div> */}
    </div>
  );
};

export default Test;
