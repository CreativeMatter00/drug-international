"use client";

import styles from "@/styles/Achievements.module.css";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const images = [
  {
    sl: 1,
    name: "name1",
    logo: "/assets/images/home/achievements/certificate-01.jpg",
    certificate: "/assets/images/home/achievements/1.png",
  },
  {
    sl: 2,
    name: "name2",
    logo: "/assets/images/home/achievements/certificate-02.jpg",
    certificate: "/assets/images/home/achievements/2.png",
  },
  {
    sl: 3,
    name: "name3",
    logo: "/assets/images/home/achievements/certificate-04.jpg",
    certificate: "/assets/images/home/achievements/3.png",
  },
  {
    sl: 4,
    name: "name4",
    logo: "/assets/images/home/achievements/certificate-05.jpg",
    certificate: "/assets/images/home/achievements/4.png",
  },
  {
    sl: 5,
    name: "name5",
    logo: "/assets/images/home/achievements/certificate-06.jpg",
    certificate: "/assets/images/home/achievements/5.png",
  },
  {
    sl: 6,
    name: "name6",
    logo: "/assets/images/home/achievements/certificate-07.jpg",
    certificate: "/assets/images/home/achievements/6.png",
  },
  {
    sl: 7,
    name: "name7",
    logo: "/assets/images/home/achievements/certificate-08.jpg",
    certificate: "/assets/images/home/achievements/7.png",
  },
  {
    sl: 8,
    name: "name8",
    logo: "/assets/images/home/achievements/certificate-09.jpg",
    certificate: "/assets/images/home/achievements/8.png",
  },
  {
    sl: 9,
    name: "name9",
    logo: "/assets/images/home/achievements/certificate-10.jpg",
    certificate: "/assets/images/home/achievements/9.png",
  },
];

function Achievements() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    name: "",
    certificate: "",
  });

  const handleImageClick = (name: string, certificate: string) => {
    setSelectedImage({ name, certificate });
    setModalOpen(true);
  };

  return (
    <div className={` mb-8 py-12`}>
      <div className={`px-4 z-10 relative m-auto`}>
        <p className="text-center font-semibold text-4xl pb-8 uppercase">
          Achievements
        </p>
        <p className="text-center font-semibold text-xl pb-20 uppercase">
          Drug International has earned certificates for outstanding medicine
          quality
        </p>
        <div className="container mx-auto flex flex-wrap justify-center gap-y-8">
          {images.map((image) => (
            <div
              className="flex items-center justify-center w-1/2 md:w-1/5 h-[200px] transition-all duration-300 hover:shadow-xl"
              onClick={() => handleImageClick(image.name, image.certificate)}
              key={image.sl}
            >
              <Image
                src={image.logo}
                width={365}
                height={365}
                alt="achievement"
                className="h-[200px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="z-[10000000000]">
        <input
          type="checkbox"
          id="my_modal_7"
          className="modal-toggle"
          checked={modalOpen}
          onChange={(e) =>
            e.target.checked ? setModalOpen(false) : setModalOpen(true)
          }
        />
        <div className="modal">
          <div className="modal-box w-10/12 max-w-4xl">
            <button
              onClick={() => setModalOpen(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg text-center">
              {selectedImage.name}
            </h3>
            <div className="py-4 border border-red-400 flex justify-center items-center">
              <Image
                src={selectedImage.certificate}
                width={290}
                height={400}
                alt="achievement"
                className="h-full w-auto"
              />
            </div>
          </div>
          <label
            className="modal-backdrop"
            htmlFor="my_modal_7"
            onClick={() => setModalOpen(false)}
          >
            Close
          </label>
        </div>
      </div>
      {/* <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Achievements;
