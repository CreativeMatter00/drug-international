import Image from "next/image";

type IOurProductCard = {
	src: string;
	title: string;
	description: string;
};

function OurProductCard(props: IOurProductCard) {
	return (
		<div className="w-fit rounded-md bg-herbalSecondary flex flex-col items-center p-2 cursor-pointer group">
			<div className="h-[300px] w-[300px] overflow-hidden bg-gradient-to-b from-white to-gray-300">
				<Image
					// src="/assets/images/herbal/products/03.png"
					src={props.src}
					width={500}
					height={500}
					alt="herbal products"
					className="h-[300px] w-[300px] group-hover:scale-110 transition-all"
				/>
			</div>
			<div className="text-center font-medium text-white py-2">
				<p className="text-2xl uppercase"> {props.title} </p>
				<p className="text-xs">{props.description}</p>
			</div>
		</div>
	);
}

export default OurProductCard;
