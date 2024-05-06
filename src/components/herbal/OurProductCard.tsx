/* eslint-disable @next/next/no-img-element */

type IOurProductCard = {
	src: string;
	title: string;
};

function OurProductCard(props: IOurProductCard) {
	return (
		<div className="w-fit rounded-md bg-herbalSecondary flex flex-col items-center p-2 cursor-pointer group">
			<div className="h-[300px] w-[300px] overflow-hidden bg-white flex items-center justify-center">
				<img
					// src="/assets/images/herbal/products/03.png"
					src={props.src}
					width={500}
					height={500}
					alt={props.title}
					className="w-full h-auto group-hover:scale-110 transition-all p-4"
				/>
			</div>
			<div className="text-center font-medium text-white py-2">
				<p className="text-2xl uppercase"> {props.title} </p>
				{/* <p className="text-xs">{props.description}</p> */}
			</div>
		</div>
	);
}

export default OurProductCard;
