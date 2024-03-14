import Image from "next/image";

type ILatestProductsCard = {
	src: string;
	title: string;
	genericName: string;
	theraputicName: string;
};

function LatestProductsCard(props: ILatestProductsCard) {
	const { src, title, genericName, theraputicName } = props;

	// const myLoader = () => {
	//  return `${src}&q=${30}`;
	// };

	return (
		<div className="relative rounded-lg  cursor-pointer overflow-hidden group h-[35.25rem] ">
			<div className={`h-20  block group-hover:h-0 duration-500`}></div>
			<div className="relative overflow-hidden p-2">
				<div className="flex items-center justify-center h-[300px]">
					<img
						src={src}
						// width={408}
						// height={362}
						alt={src}
						className="w-auto group-hover:transition-all duration-500"
						// loader={myLoader}
					/>
				</div>
				<div className="overlay flex group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white text-2xl font-medium ">
					<p className="mt-40 group-hover:mt-0 duration-500 opacity-0 group-hover:opacity-100">
						View
					</p>
				</div>
			</div>

			<div className="w-full bg-primary text-white text-lg md:text-lg py-2 font-medium text-center uppercase">
				{title}
			</div>

			<div
				className={`h-0 opacity-0 group-hover:opacity-100 group-hover:h-40 group-hover:rounded-b-md p-4 text-center flex-col duration-500 gap-1 bg-gray-200`}
			>
				<div className="group-hover:opacity-100 opacity-0 -mt-40 group-hover:mt-0 duration-500 ">
					<div className="flex flex-col">
						<p className="text-textLight text-base font-medium">
							Generic Name :
						</p>
						<p className="text-textSecondary text-base font-medium uppercase">
							{genericName}
						</p>
					</div>

					<div className="flex flex-col ">
						<p className="text-textLight text-base font-medium">
							Therapeutic Name:
						</p>
						<p className="text-textSecondary text-base font-medium uppercase">
							{theraputicName}
						</p>
					</div>
				</div>
			</div>

			<div className="h-24 group-hover:hidden"></div>
		</div>
	);
}

export default LatestProductsCard;
