import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

type IProductCard = {
	src: string;
	title: string;
	genericName: string;
	theraputicName: string;
};

function ProductCard(props: IProductCard) {
	const locale = useLocale();
	return (
		<Link
			href={`/${locale}/products/[title]?theraputicName=${encodeURIComponent(
				props.theraputicName
			)}`}
			as={`/${locale}/products/${encodeURIComponent(props.title)}`}
		>
			<div className="p-2 md:p-5 mx-auto group border-2 border-white rounded-md hover:border-primary transition-all duration-300">
				<div>
					<Image
						src={props.src}
						height={191}
						width={229}
						alt="latest product"
						className="mx-auto w-full h-auto scale-95 group-hover:scale-105 group-hover:transition-all group-hover:delay-100"
					/>
				</div>
				<p className="font-medium text-lg md:text-2xl text-center uppercase text-primaryShade mb-4">
					{props.title}
				</p>

				<div className="flex items-center justify-between">
					<div>
						<div className="flex flex-col">
							<p className="text-textSecondary text-sm md:text-base font-medium">
								Generic Name :
							</p>
							<p className="text-textPrimary text-base md:text-lg font-medium uppercase">
								{props.genericName}
							</p>
						</div>

						<div className="flex flex-col ">
							<p className="text-textSecondary text-sm md:text-base font-medium">
								Therapeutic Name:
							</p>
							<p className="text-textPrimary text-base md:text-lg font-medium uppercase">
								{props.theraputicName}
							</p>
						</div>
					</div>

					<button className="w-8 h-8 md:w-12 md:h-12 bg-primary text-lg md:text-2xl text-white flex items-center justify-center rounded-full">
						<FaAngleRight />
					</button>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;
