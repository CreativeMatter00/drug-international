import Image from "next/image";

type ILatestProductsCard = {
	src: string;
	title: string;
	genericName: string;
	theraputicName: string;
};

function LatestProductsCard(props: ILatestProductsCard) {
	return (
		<div className="relative rounded-lg  cursor-pointer overflow-hidden group h-[35.25rem] ">
			<div className={`h-20  block group-hover:h-0 duration-500`}></div>

			<div className="relative overflow-hidden p-2 ">
				<div className="flex items-center justify-center h-[300px]">
					<Image
						src={props.src}
						width={408}
						height={362}
						alt="latest products"
						className="w-auto group-hover:transition-all duration-500"
						placeholder="blur"
						blurDataURL="/assets/loading.png"
					/>
				</div>
				<div className="overlay flex group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white text-2xl font-medium ">
					<p className="mt-40 group-hover:mt-0 duration-500 opacity-0 group-hover:opacity-100">
						View
					</p>
				</div>
			</div>

			<div className="w-full bg-primary text-white text-lg md:text-2xl font-medium text-center uppercase">
				{props.title}
			</div>

			<div
				className={`h-0 opacity-0 group-hover:opacity-100 group-hover:h-40 group-hover:rounded-b-md p-4 text-center flex-col duration-500 gap-1 bg-gray-200`}
			>
				<div className="group-hover:opacity-100 opacity-0 -mt-40 group-hover:mt-0 duration-500 ">
					<div className="flex flex-col">
						<p className="text-textLight text-base font-medium">
							Generic Name :
						</p>
						<p className="text-textSecondary text-lg font-medium uppercase">
							{props.genericName}
						</p>
					</div>

					<div className="flex flex-col ">
						<p className="text-textLight text-base font-medium">
							Therapeutic Name:
						</p>
						<p className="text-textSecondary text-lg font-medium uppercase">
							{props.theraputicName}
						</p>
					</div>
				</div>
			</div>

			<div className="h-24 group-hover:hidden"></div>
		</div>
	);
}

export default LatestProductsCard;

// import Image from "next/image";

// type ILatestProductsCard = {
//   src: string;
//   title: string;
//   genericName: string;
//   theraputicName: string;
// };

// function LatestProductsCard(props: ILatestProductsCard) {
//   return (
//     <div className="relative border border-red-500 cursor-pointer overflow-hidden group">
//       <div className="relative overflow-hidden">
//         <Image
//           // src={`/assets/images/home/latest/1.charm.png`}
//           src={props.src}
//           width={424}
//           height={378}
//           alt="latest products"
//           className="w-full h-auto object-cover group-hover:scale-125 group-hover:transition-all"
//         />
//         <div className="overlay hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 text-white text-2xl font-medium">
//           View
//         </div>
//       </div>
//       <div className="w-full bg-primary text-white text-2xl font-medium text-center uppercase">
//         {props.title}
//       </div>
//       <div className="hidden p-6 text-center group-hover:flex flex-col gap-2 group-hover:transition-all delay-1000">
//         <div className="flex flex-col gap-1">
//           <p className="text-textLight text-base font-medium">Generic Name :</p>
//           <p className="text-textSecondary text-base font-medium uppercase">
//             {props.genericName}
//           </p>
//         </div>
//         <div className="flex flex-col gap-1">
//           <p className="text-textLight text-base font-medium">
//             Therapeutic Name:
//           </p>
//           <p className="text-textSecondary text-base font-medium uppercase">
//             {props.theraputicName}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LatestProductsCard;
