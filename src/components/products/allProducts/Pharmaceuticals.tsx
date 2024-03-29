import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function Pharmaceuticals(pharmaceuticalData: any) {
	const locale = useLocale();

	if (pharmaceuticalData?.error)
		return (
			<div className="text-center text-xl font-md py-8">
				Something went wrong. Please reload
			</div>
		);

	return (
		<div className="px-5 py-10 mb-10">
			{pharmaceuticalData?.pharmaceuticalData?.length < 1 && (
				<div className="flex justify-center items-center h-64 text-4xl font-medium text-slate-600 -mt-10">
					Medicine not available
				</div>
			)}
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-5">
				{pharmaceuticalData?.pharmaceuticalData?.map((product: any) => (
					<Link
						href={`/${locale}/products/${product.MEDICINE_ID}`}
						className="tooltip border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 flex items-center justify-center min-h-[10rem]"
						key={product?.MEDICINE_ID}
						data-tip={product.MEDICINE_NAME}
					>
						<div>
							{product.PRODUCT_FET_PHOTO ? (
								<img
									src={`https://www.drug-international.com/${product?.PRODUCT_FET_PHOTO}`}
									width={245}
									height={165}
									alt={product.MEDICINE_NAME}
									className="mx-auto h-auto w-auto"
								/>
							) : (
								<div key={product.MEDICINE_ID} className="">
									<img
										src="/assets/images/imageNotFound.jpg"
										width={245}
										height={165}
										alt="imageNotFound"
										className="mx-auto h-auto w-auto"
									/>
								</div>
							)}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Pharmaceuticals;
