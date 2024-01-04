/* eslint-disable react/no-unescaped-entities */

"use client";

import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination } from "swiper/modules";

type ISingleProduct = {
	slug: string;
};

function SingleProduct(props: ISingleProduct) {
	return (
		<div>
			<BreadCrumb title={props.slug} />
			<div className="py-16">
				<div className="container mx-auto font-medium">
					<div className="mb-12">
						<p className="text-3xl text-textPrimary uppercase mb-6">
							{props.slug}
						</p>
						<p className="text-lg text-primaryShade uppercase">Etoposide USP</p>
					</div>

					<div className="flex flex-col-reverse md:flex-row gap-4">
						<div className="flex flex-col gap-6 text-lg m-full md:w-1/2">
							<div>
								<span className="text-textPrimary uppercase">
									Composition :
								</span>
								<span className="text-textSecondary">
									Each capsule contains Etoposide USP 50mg
								</span>
							</div>
							<div>
								<span className="text-textPrimary uppercase">Indication :</span>
								<span className="text-textSecondary">
									Etoposide is indicated in the management of Small Cell Lung
									Cancer: Etoposide is indicated in combination with other
									approved chemotherapeutic agents as first line treatment in
									patients with small cell lung cancer.
								</span>
							</div>

							<div>
								<span className="text-textPrimary uppercase">
									Dosage and administration :
								</span>
								<span className="text-textSecondary">
									Small cell lung cancer: The dose in combination with other
									approved chemotherapeutic drugs ranges from 35 mg/m2/day for 4
									days to 50 mg/m2/day for 5 days.Or, as directed by the
									registered physicians.
								</span>
							</div>

							<div>
								<span className="text-textPrimary uppercase">
									Use in pregnancy and lactation :
								</span>
								<span className="text-textSecondary">
									Pregnancy category D. There are no adequate and well
									controlled studies in pregnant woman Etoposide has been
									reported to be found in human milk. Patient recieves Etoposide
									should not be breast feed.
								</span>
							</div>

							<div>
								<span className="text-textPrimary uppercase">Packing :</span>
								<span className="text-textSecondary">
									Toposar: Each box contains 4 x 7's capsules in blister pack.
								</span>
							</div>
						</div>
						<div className="m-full md:w-1/2 ">
							<div>
								<Swiper
									modules={[Pagination]}
									spaceBetween={30}
									centeredSlides={true}
									loop={true}
									pagination={{ clickable: true }}
									autoplay={{
										delay: 2500,
										disableOnInteraction: false,
									}}
								>
									<SwiperSlide>
										<Image
											src="/assets/images/products/4.png"
											width={500}
											height={500}
											alt="herbal"
											className="mx-auto"
										/>
									</SwiperSlide>

									<SwiperSlide>
										<Image
											src="/assets/images/products/5.png"
											width={500}
											height={500}
											alt="herbal"
											className="mx-auto"
										/>
									</SwiperSlide>

									<SwiperSlide>
										<Image
											src="/assets/images/products/6.png"
											width={500}
											height={500}
											alt="herbal"
											className="mx-auto"
										/>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleProduct;
