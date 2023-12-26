"use client";

import Image from "next/image";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { PiRadioButtonDuotone } from "react-icons/pi";
import { PiRadioButtonFill } from "react-icons/pi";
import Pharmaceuticals from "./Pharmaceuticals";
import Oncology from "./Oncology";
import Herbal from "./Herbal";
import Unani from "./Unani";

function AllProducts() {
	const [medicineType, setMedicineType] = useState<number>(0);
	const [nameType, setNameType] = useState<number>(0);
	const [letter, setLetter] = useState<string>("a");

	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	const handleLetterClick = (selectedLetter: string) => {
		setLetter(selectedLetter);
	};

	return (
		<div className="container mx-auto">
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
				<button className="font-medium text-2xl uppercase p-3 bg-textPrimary text-white rounded-md">
					<FaFilter />
				</button>
			</div>

			<div className="flex flex-col items-center justify-around gap-4 border-2 border-primaryShade p-3 rounded-md font-medium text-textPrimary mb-9 mx-4 md:flex-row md:mx-auto">
				<button
					className={`text-base flex items-center uppercase gap-3 ${
						nameType === 0 && "text-primary"
					}`}
					onClick={() => setNameType(0)}
				>
					{nameType === 0 ? <PiRadioButtonFill /> : <PiRadioButtonDuotone />}
					Product by brand name
				</button>
				<button
					className={`text-base flex items-center uppercase gap-3 ${
						nameType === 1 && "text-primary"
					}`}
					onClick={() => setNameType(1)}
				>
					{nameType === 1 ? <PiRadioButtonFill /> : <PiRadioButtonDuotone />}
					Product by generic name
				</button>
				<button
					className={`text-base flex items-center uppercase gap-3 ${
						nameType === 2 && "text-primary"
					}`}
					onClick={() => setNameType(2)}
				>
					{nameType === 2 ? <PiRadioButtonFill /> : <PiRadioButtonDuotone />}
					Product by therapeutic class
				</button>
			</div>

			<div className="flex flex-wrap mx-4 items-center justify-around mb-10">
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

			{medicineType === 0 && <Pharmaceuticals />}
			{medicineType === 1 && <Oncology />}
			{medicineType === 2 && <Herbal />}
			{medicineType === 3 && <Unani />}
		</div>
	);
}

export default AllProducts;
