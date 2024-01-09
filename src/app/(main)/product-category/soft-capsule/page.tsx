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

				<div className="container mx-auto font-medium px-4">
					<p className="pt-20 pb-12 text-4xl text-primaryShade uppercase">
						Soft Capsule
					</p>
					<p className="text-textSecondary text-base mb-12">
						Drug International Ltd was the first in Bangladesh to make medicines
						in soft capsule form, keeping important ingredients like vitamins
						intact. Now, we're a top producer of soft capsules, making
						antibiotics, heart meds, and multivitamins following strict
						guidelines. We're the go-to for soft gelatin capsules in Bangladesh,
						and we also share our high-quality products globally. Our commitment
						to making good medicine remains strong, helping people everywhere
						stay healthy.
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
