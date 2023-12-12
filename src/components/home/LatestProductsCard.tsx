import Image from "next/image";

type ILatestProductsCard = {
	src: string;
	title: string;
	genericName: string;
	theraputicName: string;
};

function LatestProductsCard(props: ILatestProductsCard) {
	return (
		<div className="relative border border-red-500 group">
			<div className="relative">
				<Image
					// src={`/assets/images/home/latest/1.charm.png`}
					src={props.src}
					width={424}
					height={378}
					alt="latest products"
					className="w-full h-auto object-cover"
				/>
				<div className="overlay hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 text-white text-2xl font-medium">
					View
				</div>
			</div>
			<div className="w-full bg-primary text-white text-2xl font-medium text-center">
				{props.title}
			</div>
			<div className="hidden p-6 text-center group-hover:flex flex-col gap-2 transition-all delay-1000">
				<div className="flex flex-col gap-1">
					<p className="text-textLight text-base font-medium">Generic Name :</p>
					<p className="text-textSecondary text-base font-medium uppercase">
						{props.genericName}
					</p>
				</div>
				<div className="flex flex-col gap-1">
					<p className="text-textLight text-base font-medium">
						Therapeutic Name:
					</p>
					<p className="text-textSecondary text-base font-medium uppercase">
						{props.theraputicName}
					</p>
				</div>
			</div>
		</div>
	);
}

export default LatestProductsCard;
