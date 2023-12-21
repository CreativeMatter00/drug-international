import React from "react";

type IProductCard = {
	// src: string;
	title: string;
	genericName: string;
	theraputicName: string;
};

function ProductCard(props: IProductCard) {
	return (
		<div className="w-[284px] h-[373px] border border-black p-5 mx-auto">
			<div> Image </div>
			<p className="font-medium text-2xl text-center uppercase text-primaryShade">
				{props.title}
			</p>

			<div className="flex flex-col">
				<p className="text-textSecondary text-base font-medium">
					Generic Name :
				</p>
				<p className="text-textPrimary text-lg font-medium uppercase">
					{" "}
					{props.genericName}{" "}
				</p>
			</div>

			<div className="flex flex-col ">
				<p className="text-textSecondary text-base font-medium">
					Therapeutic Name:
				</p>
				<p className="text-textPrimary text-lg font-medium uppercase">
					{props.theraputicName}
				</p>
			</div>
		</div>
	);
}

export default ProductCard;
