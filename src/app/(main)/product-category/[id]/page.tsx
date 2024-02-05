"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSpecializedProductDetail } from "@/api/api";

function Page() {
	const param = useParams<{ id: string }>();

	const { isLoading, error, data } = useQuery({
		queryKey: ["specializedProducts", param.id],
		queryFn: ({ queryKey }) => getSpecializedProductDetail(queryKey[1]),
	});

	console.log(data);

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
						Biotech
					</p>
					<p className="text-textSecondary text-base mb-12">
						Drug International Ltd was the first company in Bangladesh to
						formulate medicines in soft capsule form for the purpose of
						retaining excipients of some particular medicines such as vitamins.
						Currently We are manufacturing wide range of soft capsule products
						like antibiotic, Cardio vascular & Multivitamin Products according
						to the CGMP guidelines.Till date DIL remains the leader in the field
						of soft gelatin capsules in Bangladesh to satisfy patients’
						therapeutic needs. Today DIL uses its refined and modern production
						processes to export soft capsule products to many countries of the
						world.
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

export default Page;
