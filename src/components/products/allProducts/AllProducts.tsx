"use client";

import { useState } from "react";
import { PiRadioButtonDuotone } from "react-icons/pi";
import { PiRadioButtonFill } from "react-icons/pi";
import Pharmaceuticals from "./Pharmaceuticals";
import Oncology from "./Oncology";
import Herbal from "./Herbal";
import Unani from "./Unani";
import styles from "@/styles/NavSidebar.module.css";
import { useQuery } from "@tanstack/react-query";
import {
  getGenericProducts,
  getProductByLetter,
  getTherapeuticProducts,
} from "@/api/api";
import Loader from "@/components/ui/loader/Loader";
import Image from "next/image";
import GenericProducts from "./GenericProducts";
import TherapeuticDataProducts from "./TherapeuticDataProducts";

interface visibleProps {
  setIsAllSidebarVisible: Function;
  isAllSidebarVisible: boolean;
  isOverlayVisible: boolean;
  setIsOverlayVisible: Function;
  therapeuticId: string;
  medicineTypeId: number;
}

const AllProducts: React.FC<visibleProps> = ({
  setIsAllSidebarVisible,
  isAllSidebarVisible,
  isOverlayVisible,
  setIsOverlayVisible,
  therapeuticId,
  medicineTypeId,
}) => {
  const [medicineType, setMedicineType] = useState<number>(0 || medicineTypeId);
  const [nameType, setNameType] = useState<number>(0);
  const [letter, setLetter] = useState<string>("a");
  const [letterGeneric, setLetterGeneric] = useState<string>("a");

  const handleNameType = (name: number) => {
    if (name === 2) {
      setNameType(name);
      handleAllSidebarToggle();
    } else {
      setNameType(name);
    }
  };

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
    setIsAllSidebarVisible(!isAllSidebarVisible);
  };

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const handleLetterClick = (selectedLetter: string) => {
    setLetter(selectedLetter);
  };
  const handleGenericLetterClick = (selectedLetter: string) => {
    setLetterGeneric(selectedLetter);
  };

  const handleAllSidebarToggle = () => {
    setIsAllSidebarVisible(!isAllSidebarVisible);
    setIsOverlayVisible(true);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["productByLetter", letter],
    queryFn: ({ queryKey }) => getProductByLetter(queryKey[1]),
  });

  const {
    isLoading: genericIsLoading,
    error: genericError,
    data: genericData,
  } = useQuery({
    queryKey: ["productByLetterGeneric", letterGeneric],
    queryFn: ({ queryKey }) => getGenericProducts(queryKey[1]),
  });

  const {
    isLoading: therapeuticIsLoading,
    error: therapeuticError,
    data: therapeuticData,
  } = useQuery({
    queryKey: ["therapeuticProducts", therapeuticId],
    queryFn: ({ queryKey }) => getTherapeuticProducts(queryKey[1]),
  });

  return (
    <div className="container mx-auto">
      {isOverlayVisible && (
        <div
          className={`${styles.overlay} cursor-pointer`}
          onClick={toggleOverlay}
        ></div>
      )}
      <div className="flex flex-col items-center justify-around gap-4 mb-9 md:flex-row">
        <button
          className={`font-medium text-2xl uppercase p-3 rounded-md ${
            medicineType === 0
              ? "bg-primaryShade text-white"
              : "bg-white text-textPrimary"
          }`}
          onClick={() => setMedicineType(0)}
        >
          Pharmaceutical
        </button>
        <button
          className={`font-medium text-2xl uppercase p-3 rounded-md ${
            medicineType === 1
              ? "bg-primaryShade text-white"
              : "bg-white text-textPrimary"
          }`}
          onClick={() => setMedicineType(1)}
        >
          Oncology Products
        </button>
        <button
          className={`font-medium text-2xl uppercase p-3 rounded-md ${
            medicineType === 2
              ? "bg-[#CC7A2D] text-white"
              : "bg-white text-textPrimary"
          }`}
          onClick={() => setMedicineType(2)}
        >
          Herbal
        </button>
        <button
          className={`font-medium text-2xl uppercase p-3 rounded-md ${
            medicineType === 3
              ? "bg-[#159A48] text-white"
              : "bg-white text-textPrimary"
          }`}
          onClick={() => setMedicineType(3)}
        >
          Unani
        </button>
      </div>

      {medicineType === 0 ? (
        <div>
          <div className="flex flex-col items-center justify-around gap-4 border-2 border-primaryShade p-3 rounded-md font-medium text-textPrimary mb-9 mx-4 md:flex-row lg:mx-auto">
            <button
              className={`text-base flex items-center uppercase gap-3 ${
                nameType === 0 && "text-primary"
              }`}
              onClick={() => handleNameType(0)}
            >
              {nameType === 0 ? (
                <PiRadioButtonFill />
              ) : (
                <PiRadioButtonDuotone />
              )}
              Product by brand name
            </button>

            <button
              className={`text-base flex items-center uppercase gap-3 ${
                nameType === 1 && "text-primary"
              }`}
              onClick={() => handleNameType(1)}
            >
              {nameType === 1 ? (
                <PiRadioButtonFill />
              ) : (
                <PiRadioButtonDuotone />
              )}
              Product by generic name
            </button>

            <button
              className={`text-base flex items-center uppercase gap-3 ${
                nameType === 2 && "text-primary"
              }`}
              onClick={() => handleNameType(2)}
            >
              {nameType === 2 ? (
                <PiRadioButtonFill />
              ) : (
                <PiRadioButtonDuotone />
              )}
              Product by therapeutic class
            </button>
          </div>

          {nameType === 0 && (
            <div className="flex flex-wrap mx-4 items-center gap-4 justify-center mb-10">
              {alphabet.split("").map((char) => (
                <button
                  key={char}
                  className={`letterBtn ${letter === char && "btnActive"}`}
                  onClick={() => handleLetterClick(char)}
                >
                  {char}
                </button>
              ))}
            </div>
          )}

          {nameType === 1 && (
            <div className="flex flex-wrap mx-4 items-center gap-4 justify-center mb-10">
              {alphabet.split("").map((char) => (
                <button
                  key={char}
                  className={`letterBtn ${
                    letterGeneric === char && "btnActive"
                  }`}
                  onClick={() => handleGenericLetterClick(char)}
                >
                  {char}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : null}

      {medicineType === 0 && (
        <div>
          {nameType === 0 && (
            <div>
              {isLoading ? (
                <div className="flex justify-center items-center p-12 h-[400px]">
                  <Image
                    src="/assets/images/loader/loader.png"
                    height={200}
                    width={200}
                    alt="loader"
                    className="animate-ping"
                  />
                </div>
              ) : (
                <Pharmaceuticals error={error} pharmaceuticalData={data} />
              )}
            </div>
          )}

          {nameType === 1 && (
            <div>
              {genericIsLoading ? (
                <div className="flex justify-center items-center p-12 h-[400px]">
                  <Image
                    src="/assets/images/loader/loader.png"
                    height={200}
                    width={200}
                    alt="loader"
                    className="animate-ping"
                  />
                </div>
              ) : (
                <GenericProducts
                  error={genericError}
                  genericData={genericData}
                />
              )}
            </div>
          )}
          {nameType === 2 && (
            <div>
              {therapeuticIsLoading ? (
                <div className="flex justify-center items-center p-12 h-[400px]">
                  <Image
                    src="/assets/images/loader/loader.png"
                    height={200}
                    width={200}
                    alt="loader"
                    className="animate-ping"
                  />
                </div>
              ) : (
                <TherapeuticDataProducts
                  error={therapeuticError}
                  therapeuticData={therapeuticData}
                />
              )}
            </div>
          )}
        </div>
      )}
      {medicineType === 1 && <Oncology />}
      {medicineType === 2 && <Herbal />}
      {medicineType === 3 && <Unani />}
    </div>
  );
};

export default AllProducts;
