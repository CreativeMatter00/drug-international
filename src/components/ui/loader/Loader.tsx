import Image from "next/image";
import React from "react";

function Loader() {
	return (
		<div className="flex items-center justify-center h-screen w-screen">
			<Image
				src="/assets/images/loader/loader.png"
				height={200}
				width={200}
				alt="loader"
				className="animate-ping"
			/>
		</div>
	);
}

export default Loader;
