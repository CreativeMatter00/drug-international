import { getUnaniProducts } from "@/api/api";
import ProductLoader from "@/components/ui/loader/ProductLoader";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function Unani() {
	const locale = useLocale();
	const { isLoading, error, data } = useQuery({
		queryKey: ["getUnaniProducts"],
		queryFn: getUnaniProducts,
	});

	if (error)
		return (
			<div className="text-center text-xl font-md py-8">
				Something went wrong. Please reload
			</div>
		);

	return (
		<div className="px-5 py-10 mb-10">
			<div>
				{isLoading ? (
					<ProductLoader />
				) : (
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-5">
						{data?.map((product: any) => (
							<Link
								href={`/${locale}/products/${product.MEDICINE_ID}`}
								className="tooltip border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 flex items-center justify-center min-h-[10rem]"
								key={product?.MEDICINE_ID}
								data-tip={product.MEDICINE_NAME}
							>
								{product.PRODUCT_FET_PHOTO ? (
									<img
										src={`https://www.drug-international.com/${product?.PRODUCT_FET_PHOTO}`}
										// width={245}
										// height={165}
										alt={product.MEDICINE_NAME}
										className="mx-auto h-auto w-auto p-2"
									/>
								) : (
									<div key={product.MEDICINE_ID} className="">
										<Image
											src="/assets/images/imageNotFound.jpg"
											width={245}
											height={165}
											alt="imageNotFound"
											className="mx-auto h-auto w-auto"
										/>
									</div>
								)}
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Unani;
