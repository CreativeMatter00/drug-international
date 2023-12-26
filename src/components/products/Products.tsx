import Image from "next/image";
import ButtonPrimary from "../ui/button/ButtonPrimary";
import { BsDownload } from "react-icons/bs";
import Link from "next/link";
import styles from "@/styles/Products.module.css";

function Products() {
	return (
		<div className="relative mt-[-100px] w-full mb-10">
			<div className="container mx-auto bg-white py-8 md:py-14 px-4 md:px-12 rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)]">
				<div className="mt-36 mb-24">
					<div className="flex flex-col items-center gap-6 w-fit mx-auto">
						<p className="font-medium text-base text-textSecondary">
							Download all product list
						</p>
						<ButtonPrimary>
							<BsDownload /> Download
						</ButtonPrimary>
					</div>
				</div>

				<div className="px-4 flex items-center justify-center">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{/* <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center"> */}
						{/* <div className="flex gap-4 items-center justify-center"> */}
						<Link href={"products/latest-products"}>
							<div
								className={`border border-[#D9D9D9] py-3 px-2 flex items-center relative group overflow-hidden w-80 h-72 rounded-lg ${styles.productCardShadow}`}
							>
								<div className="flex items-center gap-1 text-primary font-medium text-3xl uppercase z-20 duration-500 transition-all">
									<p className="mb-0 group-hover:mt-32 duration-500 group-hover:text-white">
										<span className="font-semibold  ">Latest</span> <br />{" "}
										Products
									</p>
									<Image
										src={"/assets/images/products/1.png"}
										width={158}
										height={180}
										alt="product"
										className="w-[130px] h-auto group-hover:rotate-[15deg] mt-0 group-hover:-mt-28 duration-500 transition-all"
									/>
								</div>

								<div className="absolute -top-4 group-hover:-top-6 left-48 group-hover:left-32 z-10 duration-500 transition-all group-hover:ml-4 group-hover:mb-4">
									<div className="h-40 w-40 group-hover:h-56 group-hover:w-56 bg-primaryShade rounded-full duration-500  transition-all"></div>
								</div>

								<div className="absolute top-[1px] group-hover:-top-20  left-36 group-hover:-left-20 z-0 duration-500 transition-all ">
									<div className="h-16 w-16 bg-[#EE676C] rounded-full group-hover:h-[27rem] group-hover:w-[29rem] duration-500 "></div>
								</div>
							</div>
						</Link>

						<Link href={"products/upcoming-products"}>
							<div
								className={`border border-[#D9D9D9] py-3 px-2 flex items-center relative group overflow-hidden w-80 h-72 rounded-lg ${styles.productCardShadow}`}
							>
								<div className="flex items-center gap-1 text-primary font-medium text-3xl uppercase z-20 duration-500 transition-all">
									<p className="mb-0 group-hover:mt-32 duration-500 group-hover:text-white">
										<span className="font-semibold  "> Upcoming</span> <br />{" "}
										Products
									</p>
									<Image
										src={"/assets/images/products/2.png"}
										width={158}
										height={180}
										alt="product"
										className="w-[130px] h-auto group-hover:-rotate-[15deg] mt-0 group-hover:-mt-28 duration-500 transition-all"
									/>
								</div>

								<div className="absolute top-28 group-hover:-top-6 left-56 group-hover:left-32 z-10 duration-500 transition-all group-hover:ml-4 group-hover:mb-4">
									<div className="h-40 w-40 group-hover:h-56 group-hover:w-56 bg-primaryShade rounded-full duration-500  transition-all"></div>
								</div>

								<div className="absolute top-48 group-hover:-top-20  left-48 group-hover:-left-20 z-0 duration-500 transition-all ">
									<div className="h-16 w-16 bg-[#EE676C] rounded-full group-hover:h-[27rem] group-hover:w-[29rem] duration-500 "></div>
								</div>
							</div>
						</Link>

						<Link href={"products/all-products"}>
							<div
								className={`border border-[#D9D9D9] py-3 px-2 flex items-center relative group overflow-hidden w-80 h-72 rounded-lg ${styles.productCardShadow}`}
							>
								<div className="flex items-center gap-1 text-primary font-medium text-3xl uppercase z-20 duration-500 transition-all">
									<p className="mb-0 group-hover:mt-32 duration-500 group-hover:text-white">
										<span className="font-semibold  ">All</span> <br /> Products
									</p>
									<Image
										src={"/assets/images/products/3.png"}
										width={158}
										height={180}
										alt="product"
										className="w-[130px] h-auto group-hover:-rotate-[20deg] mt-0 group-hover:-mt-28 duration-500 transition-all"
									/>
								</div>

								<div className="absolute -top-5 group-hover:-top-6 left-40 group-hover:left-32 z-10 duration-500 transition-all group-hover:ml-4 group-hover:mb-4">
									<div className="h-40 w-40 group-hover:h-56 group-hover:w-56 bg-primaryShade rounded-full duration-500  transition-all"></div>
								</div>

								<div className="absolute top-28 group-hover:-top-20 left-64 group-hover:-left-20 z-0 duration-500 transition-all ">
									<div className="h-16 w-16 bg-[#EE676C] rounded-full group-hover:h-[27rem] group-hover:w-[29rem] duration-500 "></div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Products;
