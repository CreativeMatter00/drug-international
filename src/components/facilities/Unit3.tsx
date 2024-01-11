import Image from "next/image";
import React from "react";

function Unit3() {
	return (
		<div>
			<p className="font-medium text-3xl uppercase text-primary mb-10">
				Unit - 3
			</p>

			<div className="mb-8">
				<Image
					src="/assets/images/facilities/manufacture.jpg"
					width={720}
					height={405}
					alt="product"
					className="w-full h-auto rounded-md"
				/>
			</div>

			<div className="font-medium text-base text-textSecondary">
				<p className=""></p>
			</div>
		</div>
	);
}

export default Unit3;
