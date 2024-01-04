"use client";

import styles from "@/styles/Global.module.css";
import Image from "next/image";
import { useState } from "react";

const FlagPart = () => {
  const [selectedImage, setSelectedImage] = useState<string>("Bangladesh");
  const [countryMap, setCountryMap] = useState<string>(
    "/assets/images/global/Map/bd.png"
  );
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-[#014F70]">
        <div className="container p-8 flex justify-center items-center flex-col">
          <div className="uppercase text-2xl flex justify-center text-white font-medium w-full items-center">
            Global Operation
          </div>
          <div className="h-[550px] w-[1000px] max-lg:h-[360px] max-md:h-[200px] relative">
            {loading && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-300 bg-opacity-70 border-8 border-red-600">
                Loading... Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Distinctio corporis, deleniti illum iusto quibusdam
                possimus quae quas ullam mollitia dolor perspiciatis non quaerat
                officiis consectetur explicabo exercitationem molestiae tempora
                accusantium! Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Distinctio corporis, deleniti illum iusto quibusdam
                possimus quae quas ullam mollitia dolor perspiciatis non quaerat
                officiis consectetur explicabo exercitationem molestiae tempora
                accusantium! Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Distinctio corporis, deleniti illum iusto quibusdam
                possimus quae quas ullam mollitia dolor perspiciatis non quaerat
                officiis consectetur explicabo exercitationem molestiae tempora
                accusantium! Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Distinctio corporis, deleniti illum iusto quibusdam
                possimus quae quas ullam mollitia dolor perspiciatis non quaerat
                officiis consectetur explicabo exercitationem molestiae tempora
                accusantium! Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Distinctio corporis, deleniti illum iusto quibusdam
                possimus quae quas ullam mollitia dolor perspiciatis non quaerat
                officiis consectetur explicabo exercitationem molestiae tempora
                accusantium! Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Distinctio corporis, deleniti illum iusto quibusdam
                possimus quae quas ullam mollitia dolor perspiciatis non quaerat
                officiis consectetur explicabo exercitationem molestiae tempora
                accusantium!
              </div>
            )}
            <Image
              src={countryMap}
              width={1074}
              height={621}
              alt="map"
              className={`m-auto h-auto w-[1074px] max-lg:w-[650px] max-md:w-[390px] max-lg:h-[360px] max-md:h-[200px] cursor-pointer  p-2`}
              onLoad={handleImageLoad}
            />
            <div
              className={`animate-ping absolute inline-flex h-1.5 w-1.5 top-0 right-0 rounded-full bg-[#6CFE13] opacity-75 border border-[#FFFFFF] max-lg:hidden ${
                selectedImage === "Bangladesh" && "top-[294px] right-[297px]"
              }
              ${selectedImage === "USA" && "top-64 left-64"}
              ${
                selectedImage === "United kingdom" && "top-[212px] left-[475px]"
              }
              ${selectedImage === "Venezuela" && "top-[337px] left-[322px]"}
              ${selectedImage === "Yemen" && "top-[315px] left-[595px]"}
              ${selectedImage === "Sierra-Leone" && "top-[334px] left-[450px]"}
              ${selectedImage === "Vietnam" && "top-[324px] left-[741px]"}
              ${selectedImage === "Ukraine" && "top-[225px] left-[550px]"}
              ${selectedImage === "Uganda" && "top-[350px] left-[560px]"}
              ${selectedImage === "srilanka" && "top-[337px] left-[676px]"}
              ${selectedImage === "phillipine" && "top-[328px] left-[780px]"}
              ${selectedImage === "thailand" && "top-[318px] left-[725px]"}
              ${selectedImage === "Togo" && "top-[335px] left-[482px]"}
              ${selectedImage === "Moldova" && "top-[230px] left-[542px]"}
              ${selectedImage === "Myanmar" && "top-[300px] left-[712px]"}
              ${selectedImage === "nepal" && "top-[283px] left-[680px]"}
              ${selectedImage === "somalia" && "top-[345px] left-[590px]"}
              ${selectedImage === "Somaliland" && "top-[332px] left-[592px]"}
              ${selectedImage === "South-africa" && "top-[430px] left-[533px]"}
              ${selectedImage === "ghana" && "top-[335px] left-[476px]"}
              ${selectedImage === "Georgia" && "top-[244px] left-[578px]"}
              ${selectedImage === "El_salvador" && "top-[321px] left-[264px]"}
              ${selectedImage === "Kenya" && "top-[353px] left-[570px]"}
              ${selectedImage === "Colombia" && "top-[345px] left-[305px]"}
              ${selectedImage === "Bahamas" && "top-[290px] left-[300px]"}
              ${selectedImage === "Belarus" && "top-[208px] left-[540px]"}
              ${selectedImage === "Bhutan" && "top-[284px] left-[695px]"}
              ${selectedImage === "Botswana" && "top-[410px] left-[535px]"}
              ${selectedImage === "afghanistan" && "top-[267px] left-[635px]"}
              ${selectedImage === "combodia" && "top-[324px] left-[735px]"}
              ${
                selectedImage === "Dominican-republic" &&
                "top-[308px] left-[310px]"
              }
              ${selectedImage === "honduras" && "top-[318px] left-[270px]"}
              ${selectedImage === "Hungary" && "top-[230px] left-[522px]"}
              ${selectedImage === "malawi" && "top-[390px] left-[562px]"}
              ${selectedImage === "Nicaragua" && "top-[324px] left-[274px]"}

              ${selectedImage === "nigeria" && "top-[332px] left-[499px]"}
              ${selectedImage === "Oman" && "top-[305px] left-[614px]"}
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

          <div className="px-16 max-md:px-4">
            <div
              className={`${styles.mapShadow} border border-[#E4E4E6] rounded-lg py-6 px-12 2xl:px-28 max-md:py-4 max-md:px-2`}
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
