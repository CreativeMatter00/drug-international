"use client";

import CapsuleButton from "@/components/share/CapsuleButton";
import Link from "next/link";
import { motion } from "framer-motion";

const page = () => {
  const img = 'url("gif/ERxI.gif")';

  return (
    <div className=" bg-[#E4E4E6] futura">
      <div className="h-screen overflow-hidden">
        <div
          className="bg-clip-text bg-cover text-transparent flex h-full w-full uppercase"
          style={{ backgroundImage: img }}
        >
          <div className="h-full w-3/6 text-[75vh] text-right">
            <p className="leading-[49vh] mb-[2vh] tracking-[-0.1em]">19</p>
            <p className="leading-[49vh] tracking-[-0.15em]">74</p>
          </div>
          <div className="h-full w-3/6">
            <div className="h-[51vh]"></div>
            <div className="h-[49vh]">
              <div className="h-[30vh] overflow-hidden ml-[5vh]">
                <motion.div
                  initial={{ x: -320 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <p className="text-[#C4161C] font-bold text-[5vh] leading-[5vh] ">
                    First-ever company <br />
                    to formulate <br />
                    medicines <br />
                    in
                    <br />
                    soft capsule
                    <br />
                  </p>
                </motion.div>
              </div>
              <div className="h-[29vh] ml-[18vh] mt-[3vh]">
                <Link href="/home">
                  <CapsuleButton buttonName="Enter" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
