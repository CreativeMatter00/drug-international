import Image from "next/image";

function Pharmaceuticals(pharmaceuticalData: any) {
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
				{pharmaceuticalData?.pharmaceuticalData?.map((pharmaceutical: any) => (
					<div
						className="tooltip border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 flex items-center justify-center"
						key={pharmaceutical?.MEDICINE_ID}
						data-tip={pharmaceutical.MEDICINE_NAME}
					>
						{pharmaceutical.PRODUCT_FET_PHOTO ? (
							<Image
								src={`https://www.drug-international.com/${pharmaceutical?.PRODUCT_FET_PHOTO}`}
								width={245}
								height={165}
								alt="product"
								className="mx-auto"
							/>
						) : (
							<div key={pharmaceutical.MEDICINE_ID} className="">
								<Image
									src="/assets/images/imageNotFound.jpg"
									width={245}
									height={165}
									alt="imageNotFound"
									className="mx-auto"
								/>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Pharmaceuticals;
