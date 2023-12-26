"use client";

import { useState } from "react";
import Manufacturing from "./Manufacturing";
import Research from "./Research";
import Oncology from "./Oncology";
import Warehouse from "./Warehouse";

import styles from "@/styles/Facilities.module.css";

function Facilities() {
	const [activeFacility, setActiveFacility] = useState<number>(0);

	return (
		<div className="relative mt-[-100px] w-full mb-10">
			<div className="container mx-auto bg-white px-4 md:px-12 rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)]">
				<div
					// className="px-12 grid gap-16"
					// style={{ gridTemplateColumns: "1fr 3fr" }}
					className={styles.facilitiesContainer}
				>
					<div className="bg-[#DF343A] py-24 rounded-b-md font-medium text-lg text-white h-fit uppercase">
						<p
							className={`p-3 cursor-pointer hover:bg-white hover:text-primary ${
								activeFacility === 0 && "bg-white text-primary"
							}`}
							onClick={() => setActiveFacility(0)}
						>
							Manufacturing Facility
						</p>
						<p
							className={`p-3 cursor-pointer hover:bg-white hover:text-primary ${
								activeFacility === 1 && "bg-white text-primary"
							}`}
							onClick={() => setActiveFacility(1)}
						>
							Research & Development
						</p>
						<p
							className={`p-3 cursor-pointer hover:bg-white hover:text-primary ${
								activeFacility === 2 && "bg-white text-primary"
							}`}
							onClick={() => setActiveFacility(2)}
						>
							Oncology
						</p>
						<p
							className={`p-3 cursor-pointer hover:bg-white hover:text-primary ${
								activeFacility === 3 && "bg-white text-primary"
							}`}
							onClick={() => setActiveFacility(3)}
						>
							Warehouse
						</p>
					</div>

					<div className="py-12">
						{activeFacility === 0 && <Manufacturing />}
						{activeFacility === 1 && <Research />}
						{activeFacility === 2 && <Oncology />}
						{activeFacility === 3 && <Warehouse />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Facilities;
