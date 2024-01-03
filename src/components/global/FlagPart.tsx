"use client";

import styles from "@/styles/Global.module.css";
import Image from "next/image";
import { useState } from "react";

const FlagPart = () => {
  const [selectedImage, setSelectedImage] = useState<string>("Bangladesh");
  const [countryMap, setCountryMap] = useState<string>(
    "/assets/images/global/Map/bd.png"
  );

  const imageArray = [
    {
      slNo: 1,
      name: "Bangladesh",
      path: "/assets/images/global/Flags/Bangladesh.png",
      mapImage: "/assets/images/global/Map/bd.png",
    },
    {
      slNo: 2,
      name: "USA",
      path: "/assets/images/global/Flags/usa.png",
      mapImage: "/assets/images/global/Map/usa.png",
    },
    {
      slNo: 3,
      name: "United kingdom",
      path: "/assets/images/global/Flags/United-kingdom.png",
      mapImage: "/assets/images/global/Map/United kingdom.png",
    },
    {
      slNo: 4,
      name: "Venezuela",
      path: "/assets/images/global/Flags/Venezuela.png",
      mapImage: "/assets/images/global/Map/Venezuela.png",
    },
    {
      slNo: 5,
      name: "Yemen",
      path: "/assets/images/global/Flags/Yemen.png",
      mapImage: "/assets/images/global/Map/Yemen.png",
    },
    {
      slNo: 6,
      name: "Sierra-Leone",
      path: "/assets/images/global/Flags/Sierra-Leone.png",
      mapImage: "/assets/images/global/Map/Sierra-Leone.png",
    },
    {
      slNo: 7,
      name: "Vietnam",
      path: "/assets/images/global/Flags/Vietnam.png",
      mapImage: "/assets/images/global/Map/Vietnam.png",
    },
    {
      slNo: 8,
      name: "Ukraine",
      path: "/assets/images/global/Flags/Ukraine.png",
      mapImage: "/assets/images/global/Map/Ukraine.png",
    },
    {
      slNo: 9,
      name: "Uganda",
      path: "/assets/images/global/Flags/Uganda.png",
      mapImage: "/assets/images/global/Map/Uganda.png",
    },
    {
      slNo: 10,
      name: "srilanka",
      path: "/assets/images/global/Flags/srilanka.png",
      mapImage: "/assets/images/global/Map/srilanka.png",
    },
    {
      slNo: 11,
      name: "phillipine",
      path: "/assets/images/global/Flags/phillipine.png",
      mapImage: "/assets/images/global/Map/phillipine.png",
    },
    {
      slNo: 12,
      name: "thailand",
      path: "/assets/images/global/Flags/thailand.png",
      mapImage: "/assets/images/global/Map/thailand.png",
    },
    {
      slNo: 13,
      name: "Togo",
      path: "/assets/images/global/Flags/Togo.png",
      mapImage: "/assets/images/global/Map/Togo.png",
    },
    {
      slNo: 14,
      name: "Moldova",
      path: "/assets/images/global/Flags/Moldova.png",
      mapImage: "/assets/images/global/Map/Moldova.png",
    },
    {
      slNo: 15,
      name: "Myanmar",
      path: "/assets/images/global/Flags/Myanmar.png",
      mapImage: "/assets/images/global/Map/Myanmar.png",
    },
    {
      slNo: 16,
      name: "nepal",
      path: "/assets/images/global/Flags/nepal.png",
      mapImage: "/assets/images/global/Map/nepal.png",
    },
    {
      slNo: 17,
      name: "somalia",
      path: "/assets/images/global/Flags/somalia.png",
      mapImage: "/assets/images/global/Map/somalia.png",
    },
    {
      slNo: 18,
      name: "Somaliland",
      path: "/assets/images/global/Flags/Somaliland.png",
      mapImage: "/assets/images/global/Map/Somaliland.png",
    },
    {
      slNo: 19,
      name: "South-africa",
      path: "/assets/images/global/Flags/South-africa.png",
      mapImage: "/assets/images/global/Map/South-africa.png",
    },
    {
      slNo: 20,
      name: "ghana",
      path: "/assets/images/global/Flags/ghana.png",
      mapImage: "/assets/images/global/Map/ghana.png",
    },
    {
      slNo: 21,
      name: "Georgia",
      path: "/assets/images/global/Flags/Georgia.png",
      mapImage: "/assets/images/global/Map/Georgia.png",
    },
    {
      slNo: 22,
      name: "El_salvador",
      path: "/assets/images/global/Flags/El_salvador.png",
      mapImage: "/assets/images/global/Map/El_salvador.png",
    },
    {
      slNo: 23,
      name: "Kenya",
      path: "/assets/images/global/Flags/Kenya.png",
      mapImage: "/assets/images/global/Map/Kenya.png",
    },
    {
      slNo: 24,
      name: "Colombia",
      path: "/assets/images/global/Flags/Colombia.png",
      mapImage: "/assets/images/global/Map/Colombia.png",
    },
    {
      slNo: 25,
      name: "Bahamas",
      path: "/assets/images/global/Flags/Bahamas.png",
      mapImage: "/assets/images/global/Map/Bahamas.png",
    },
    {
      slNo: 26,
      name: "Belarus",
      path: "/assets/images/global/Flags/Belarus.png",
      mapImage: "/assets/images/global/Map/Belarus.png",
    },
    {
      slNo: 27,
      name: "Bhutan",
      path: "/assets/images/global/Flags/Bhutan.png",
      mapImage: "/assets/images/global/Map/Bhutan.png",
    },
    {
      slNo: 28,
      name: "Botswana",
      path: "/assets/images/global/Flags/Botswana.png",
      mapImage: "/assets/images/global/Map/Botswana.png",
    },
    {
      slNo: 29,
      name: "afghanistan",
      path: "/assets/images/global/Flags/afghanistan.png",
      mapImage: "/assets/images/global/Map/afghanistan.png",
    },
    {
      slNo: 30,
      name: "combodia",
      path: "/assets/images/global/Flags/combodia.png",
      mapImage: "/assets/images/global/Map/combodia.png",
    },

    {
      slNo: 31,
      name: "Dominican-republic",
      path: "/assets/images/global/Flags/Dominican-republic.png",
      mapImage: "/assets/images/global/Map/Dominican-republic.png",
    },
    {
      slNo: 32,
      name: "honduras",
      path: "/assets/images/global/Flags/honduras.png",
      mapImage: "/assets/images/global/Map/honduras.png",
    },
    {
      slNo: 33,
      name: "Hungary",
      path: "/assets/images/global/Flags/Hungary.png",
      mapImage: "/assets/images/global/Map/Hungary.png",
    },
    {
      slNo: 34,
      name: "malawi",
      path: "/assets/images/global/Flags/malawi.png",
      mapImage: "/assets/images/global/Map/malawi.png",
    },
    {
      slNo: 35,
      name: "Nicaragua",
      path: "/assets/images/global/Flags/Nicaragua.png",
      mapImage: "/assets/images/global/Map/Nicaragua.png",
    },
    {
      slNo: 36,
      name: "nigeria",
      path: "/assets/images/global/Flags/nigeria.png",
      mapImage: "/assets/images/global/Map/nigeria.png",
    },
    {
      slNo: 37,
      name: "Oman",
      path: "/assets/images/global/Flags/Oman.png",
      mapImage: "/assets/images/global/Map/oman.png",
    },
  ];

  const handleImageClick = (name: string, mapImage: string) => {
    setSelectedImage(name);
    setCountryMap(mapImage);
  };

  // const bg1 = {
  //   backgroundImage: "url(map.png)",
  //   height: "572px",
  //   width: "1221px",
  //   transition: "transform 0.75s ease-in-out",
  // };

  // if (selectedCountry === "Bangladesh") {
  //   bg1.transform = "translateY(-0.25rem) translateX(-10rem)";
  // } else if (selectedCountry === "USA") {
  //   bg1.transform = "translateY(-2.25rem) translateX(-47.5rem)";
  // }

  return (
    <div>
      <div className="flex justify-center items-center bg-[#014F70]">
        <div className="container p-8 flex justify-center items-center flex-col">
          <div className="uppercase text-2xl flex justify-center text-white font-medium w-full items-center">
            Global Operation
          </div>
          <div className="h-[550px] w-[1000px] relative border-4 border-red-600">
            <Image
              src={countryMap}
              width={1000}
              height={621}
              alt="map"
              className={`m-auto h-auto w-[1000px] cursor-pointer  p-2 `}
            />
            <div
              className={`animate-ping absolute inline-flex h-3 w-3 top-0 right-0 rounded-full bg-[#6CFE13] opacity-75 border-2 border-red-500 ${
                selectedImage === "Bangladesh" && "top-72 right-[290px]"
              }
              ${selectedImage === "USA" && "top-64 left-64"}
              `}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-6">
        <div className="container">
          <div
            className={`  uppercase mb-8 py-6 rounded-md flex items-center justify-center gap-4 w-full `}
          >
            <div className="border border-t-primaryShade w-[20%]" />
            <div className="text-2xl font-medium text-center uppercase">
              {selectedImage}
            </div>
            <div className="border border-t-primaryShade w-[20%]" />
          </div>

          <div className="px-16">
            <div
              className={`${styles.mapShadow} border border-[#E4E4E6] rounded-lg py-6 px-12 2xl:px-28`}
            >
              <div className="flex flex-wrap gap-4">
                {imageArray.map(({ name, path, mapImage }, index) => (
                  <Image
                    key={index}
                    src={path}
                    width={52}
                    height={30}
                    alt={name}
                    className={`m-auto h-11 w-16 cursor-pointer   ${
                      selectedImage !== name &&
                      "scale-100 hover:scale-125 duration-300 p-2"
                    }   ${
                      selectedImage === name &&
                      "border-2 border-[#DF343A] rounded scale-125 p-1"
                    }`}
                    onClick={() => handleImageClick(name, mapImage)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagPart;
