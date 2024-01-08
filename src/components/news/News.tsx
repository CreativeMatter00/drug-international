"use client";

import React, { useState } from "react";
import Drug from "./Drug";
import Herbal from "./Herbal";
import Unani from "./Unani";

function News() {
	const [active, setActive] = useState("drug");
	return (
		<div>
			<div>
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
								active === "herbal" ? "text-primaryShade" : "text-textPrimary"
							}`}
							onClick={() => setActive("herbal")}
						>
							Herbal & Unani Insights
						</div>
						<div
							className={`cursor-pointer ${
								active === "unani" ? "text-primaryShade" : "text-textPrimary"
							}`}
							onClick={() => setActive("unani")}
						>
							Success Stories
						</div>
					</div>
				</div>
			</div>
			{active === "drug" && <Drug />}
			{active === "herbal" && <Herbal />}
			{active === "unani" && <Unani />}
		</div>
	);
}

export default News;
