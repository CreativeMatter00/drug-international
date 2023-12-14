import Image from "next/image";

type ISpecializedProductCard = {
	src: string;
	title: string;
};

function SpecializedProductCard(props: ISpecializedProductCard) {
	return (
		<div className="p-5 border border-[#272727] bg-white rounded-md group hover:cursor-pointer">
			<div className="relative overflow-hidden">
				<Image
					// src={`/assets/images/home/specialized/capsule.png`}
					src={props.src}
					width={320}
					height={334}
					alt="Specialized products"
					className="w-full h-auto object-cover group-hover:scale-125 group-hover:transition-all"
				/>
				<div className="overlay hidden group-hover:flex group-hover:transition-all group-hover:duration-500 items-center justify-center absolute inset-0 bg-primary bg-opacity-50 rounded-md text-white text-2xl font-medium">
					View
				</div>
			</div>
			<p className="text-center text-lg font-bold mt-10"> {props.title} </p>
		</div>
	);
}

export default SpecializedProductCard;
