import React from "react";
import NewsCard from "./cards/NewsCard";

function Unani() {
	return (
		<div>
			<div className="flex flex-col gap-4 max-h-[1000px] overflow-y-auto">
				<NewsCard
					src="/assets/images/news/3.jpg"
					title="Revolutionizing Pain Relief"
					detail="Unveiling a new pharmaceutical innovation offering hope in advanced cancer care."
				/>
				<NewsCard
					src="/assets/images/news/1.jpg"
					title="Breakthrough in Cancer Treatment"
					detail="Unveiling a new pharmaceutical innovation offering hope in advanced cancer care."
				/>
				<NewsCard
					src="/assets/images/news/2.jpg"
					title="Breakthrough in Cancer Treatment"
					detail="Unveiling a new pharmaceutical innovation offering hope in advanced cancer care."
				/>
			</div>
		</div>
	);
}

export default Unani;
