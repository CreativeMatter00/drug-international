import Image from "next/image";
import Link from "next/link";

function GenericProducts(genericData: any) {
	if (genericData?.error)
		return (
			<div className="text-center text-xl font-md py-8">
				Something went wrong. Please reload
			</div>
		);

	return (
		<div className="px-5 py-10 mb-10">
			{genericData?.genericData?.length < 1 && (
				<div className="flex justify-center items-center h-64 text-4xl font-medium text-slate-600 -mt-10">
					Medicine not available
				</div>
			)}
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-5">
				{genericData?.genericData?.map((product: any) => (
					<Link
						href={`/products/${product.MEDICINE_ID}`}
						className="tooltip border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 flex items-center justify-center"
						key={product?.MEDICINE_ID}
						data-tip={product.MEDICINE_NAME}
					>
						{product.PRODUCT_FET_PHOTO ? (
							<Image
								src={`https://www.drug-international.com/${product?.PRODUCT_FET_PHOTO}`}
								width={245}
								height={165}
								alt="product"
								className="mx-auto"
							/>
						) : (
							<div key={product.MEDICINE_ID} className="">
								<Image
									src="/assets/images/imageNotFound.jpg"
									width={245}
									height={165}
									alt="imageNotFound"
									className="mx-auto"
								/>
							</div>
						)}
					</Link>
				))}
			</div>
		</div>
	);
}

export default GenericProducts;
