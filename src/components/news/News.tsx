"use client";

import { useState } from "react";

function News() {
	const [active, setActive] = useState("drug");

	return (
		<div className="relative mt-[-100px] w-full mb-10">
			<div className="container mx-auto bg-white rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)] font-medium ">
				<div className="flex">
					<div className="w-1/2 p-10">
						<p className="text-3xl uppercase mb-24">News & Insights</p>

						<div className="py-5">
							<div className="flex items-center justify-between">
								<div
									className={`cursor-pointer ${
										active === "drug" ? "text-primaryShade" : "text-textPrimary"
									}`}
									onClick={() => setActive("drug")}
								>
									Drug Discoveries
								</div>
								<div
									className={`cursor-pointer ${
										active === "herbal"
											? "text-primaryShade"
											: "text-textPrimary"
									}`}
									onClick={() => setActive("herbal")}
								>
									Herbal & Unani Insights
								</div>
								<div
									className={`cursor-pointer ${
										active === "unani"
											? "text-primaryShade"
											: "text-textPrimary"
									}`}
									onClick={() => setActive("unani")}
								>
									Success Stories
								</div>
							</div>
						</div>
					</div>

					<div className="bg-[#F2F2F2] w-1/2 rounded-r-2xl">abc</div>
				</div>
			</div>
		</div>
	);
}

export default News;
