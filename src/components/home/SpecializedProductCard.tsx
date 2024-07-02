import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type ISpecializedProductCard = {
	id: number;
	src: string;
	title: string;
};

function SpecializedProductCard(props: ISpecializedProductCard) {
	const locale = useLocale();
	return (
		<Link href={`/${locale}/product-category/${props.id}`}>
			<div className="p-5 min-h-[410px] border border-[#272727] bg-white rounded-md group hover:cursor-pointer">
				<div className="relative flex items-center justify-center overflow-hidden">
					<Image
						// src={`/assets/images/home/specialized/capsule.png`}
						src={`https://www.drug-international.com/${props.src}`}
						width={320}
						height={334}
						alt="Specialized products"
						className="h-[250px] p-4 w-auto object-contain group-hover:scale-110 group-hover:transition-all duration-300"
					/>
					<div className="overlay flex group-hover:transition-all group-hover:duration-300 items-center justify-center absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-50 rounded-md text-white text-2xl font-medium">
						<p className="mt-48 group-hover:mt-0 duration-500 opacity-0 group-hover:opacity-100">
							View
						</p>
					</div>
				</div>
				<p className="text-center text-md font-semibold mt-10 uppercase">
					{props.title}
				</p>
			</div>
		</Link>
	);
}

export default SpecializedProductCard;
