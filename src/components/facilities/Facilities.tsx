"use client";

import styles from "@/styles/Facilities.module.css";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Banner from "../ui/Banner";
import Manufacturing from "./Manufacturing";
import Oncology from "./Oncology";
import Research from "./Research";
import Unit1 from "./Unit1";
import Unit2 from "./Unit2";
import Unit3 from "./Unit3";
import Warehouse from "./Warehouse";

function Facilities() {
	const [activeFacility, setActiveFacility] = useState<number>(0);
	const t = useTranslations("Facilities");
	const locale = useLocale();

	return (
		<div>
			<div className="relative">
				<Banner
					src="/assets/images/facilities/banner.jpg"
					title={locale === "cn" ? "设施" : "Facilities"}
				/>
				<div className="relative mt-[-100px] w-full mb-10">
					<div className="container mx-auto bg-white px-4 md:px-12 rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)] overflow-hidden">
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
									{t("facilities")}
								</p>
								<p
									className={`p-3 cursor-pointer flex items-center gap-2 hover:bg-white hover:text-primary ${
										activeFacility === 1 && "bg-white text-primary"
									}`}
									onClick={() => setActiveFacility(1)}
								>
									<span className="text-2xl">
										<MdOutlineKeyboardArrowRight />{" "}
									</span>
									{t("unit1")}
								</p>
								<p
									className={`p-3 cursor-pointer flex items-center gap-2 hover:bg-white hover:text-primary ${
										activeFacility === 2 && "bg-white text-primary"
									}`}
									onClick={() => setActiveFacility(2)}
								>
									<span className="text-2xl">
										<MdOutlineKeyboardArrowRight />
									</span>
									{t("unit2")}
								</p>
								<p
									className={`p-3 cursor-pointer flex items-center gap-2 hover:bg-white hover:text-primary ${
										activeFacility === 3 && "bg-white text-primary"
									}`}
									onClick={() => setActiveFacility(3)}
								>
									<span className="text-2xl">
										<MdOutlineKeyboardArrowRight />
									</span>
									{t("unit3")}
								</p>
								<p
									className={`p-3 cursor-pointer hover:bg-white hover:text-primary ${
										activeFacility === 4 && "bg-white text-primary"
									}`}
									onClick={() => setActiveFacility(4)}
								>
									{t("rnd")}
								</p>
								<p
									className={`p-3 cursor-pointer hover:bg-white hover:text-primary ${
										activeFacility === 5 && "bg-white text-primary"
									}`}
									onClick={() => setActiveFacility(5)}
								>
									{t("oncology")}
								</p>
								<p
									className={`p-3 cursor-pointer hover:bg-white hover:text-primary ${
										activeFacility === 6 && "bg-white text-primary"
									}`}
									onClick={() => setActiveFacility(6)}
								>
									{t("warehouse")}
								</p>
							</div>

							<div className="py-12">
								{activeFacility === 0 && <Manufacturing />}
								{activeFacility === 1 && <Unit1 />}
								{activeFacility === 2 && <Unit2 />}
								{activeFacility === 3 && <Unit3 />}
								{activeFacility === 4 && <Research />}
								{activeFacility === 5 && <Oncology />}
								{activeFacility === 6 && <Warehouse />}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Facilities;
