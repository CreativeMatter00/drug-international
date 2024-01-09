/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

function page() {
	return (
		<div>
			<div className="pt-20 mb-4">
				<div className="pb-6 border-b-2 border-[#E4E4E6] mb-16">
					<div className="container mx-auto">
						<Link
							href="/home"
							className="text-primary font-medium flex items-center gap-4 px-4"
						>
							<FaArrowLeftLong /> Go Back
						</Link>
					</div>
				</div>

				<div className="container mx-auto font-medium">
					<p className="pt-20 pb-12 text-4xl text-primaryShade uppercase">
						Nano Particulate Tablet
					</p>
					<p className="text-textSecondary text-base mb-12">
						Making medicines that dissolve well in water is tough, but we've
						found a solution: nanoparticles, these super tiny particles with
						special properties. Drug International Ltd. is diving into
						cutting-edge research on these particles, exploring new ways to use
						them in medicine. It's like unlocking a whole new level of making
						drugs work better and more effectively.
					</p>

					<div className="grid grid-cols-2 md:grid-cols-5 gap-x-3 gap-y-5 mb-10 md:mb-20">
						<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90">
							<Image
								src="/assets/images/products/all/pharmaceuticals/1.png"
								width={245}
								height={165}
								alt="product"
								className="mx-auto"
							/>
						</div>
						<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90">
							<Image
								src="/assets/images/products/all/pharmaceuticals/2.png"
								width={245}
								height={165}
								alt="product"
								className="mx-auto"
							/>
						</div>
						<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
							<Image
								src="/assets/images/products/all/pharmaceuticals/3.png"
								width={245}
								height={165}
								alt="product"
								className="mx-auto"
							/>
						</div>
						<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
							<Image
								src="/assets/images/products/all/pharmaceuticals/4.png"
								width={245}
								height={165}
								alt="product"
								className="mx-auto"
							/>
						</div>
						<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
							<Image
								src="/assets/images/products/all/pharmaceuticals/5.png"
								width={245}
								height={165}
								alt="product"
								className="mx-auto"
							/>
						</div>

						<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
							<Image
								src="/assets/images/products/all/pharmaceuticals/6.png"
								width={245}
								height={165}
								alt="product"
								className="mx-auto"
							/>
						</div>
						<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
							<Image
								src="/assets/images/products/all/pharmaceuticals/7.png"
								width={245}
								height={165}
								alt="product"
								className="mx-auto"
							/>
						</div>
						<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
							<Image
								src="/assets/images/products/all/pharmaceuticals/8.png"
								width={245}
								height={165}
								alt="product"
								className="mx-auto"
							/>
						</div>
						<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
							<Image
								src="/assets/images/products/all/pharmaceuticals/9.png"
								width={245}
								height={165}
								alt="product"
								className="mx-auto"
							/>
						</div>
						<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
							<Image
								src="/assets/images/products/all/pharmaceuticals/10.png"
								width={245}
								height={165}
								alt="product"
								className="mx-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;