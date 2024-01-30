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

    <div className="relative">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          poster="your-poster-image.jpg"
        >
          <source src="/assets/videoes/capsule.mp4" type="video/mp4" />
          {/* Add other video sources for different formats if needed */}
        </video>
      </div>
      <div className="relative z-10 p-6 bg-white opacity-80">
        {/* Your content goes here */}
        <h1 className="text-4xl font-bold">Your Title</h1>
        <p className="mt-2">Your text content here.</p>
      </div>
    </div>
  );
};

export default Test;
