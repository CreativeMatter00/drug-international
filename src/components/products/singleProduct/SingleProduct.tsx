/* eslint-disable react/no-unescaped-entities */

"use client";

import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "@/api/api";
import Loader from "@/components/ui/loader/Loader";
import ButtonPrimary from "@/components/ui/button/ButtonPrimary";

type ISingleProduct = {
	slug: string;
};

function SingleProduct(props: ISingleProduct) {
	const { isLoading, error, data } = useQuery({
		queryKey: ["productDetails", props.slug],
		queryFn: ({ queryKey }) => getProductDetails(queryKey[1]),
	});

	if (error)
		return (
			<div className="text-center text-xl font-md py-8">
				Something went wrong. Please reload
			</div>
		);

	// console.log(data[0]?.INSERT_FILE);

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<BreadCrumb title={data[0].MEDICINE_NAME} />
					<div className="py-16">
						<div className="container mx-auto font-medium px-4 md:px-0">
							<div className="mb-12">
								<p className="text-3xl text-textPrimary uppercase mb-6">
									{data[0].MEDICINE_NAME}
								</p>
								<p className="text-lg text-primaryShade uppercase">
									{data[0].GN_NAME}
								</p>
							</div>

							<div className="flex flex-col-reverse lg:flex-row gap-4">
								<div
									className="text-lg flex flex-col gap-4 w-full lg:w-1/2"
									dangerouslySetInnerHTML={{ __html: data[0].MEDICINE_DESC }}
								/>

								<div className="w-full lg:w-1/2">
									<div>
										<Swiper
											modules={[Pagination, Autoplay]}
											spaceBetween={30}
											centeredSlides={true}
											loop={true}
											pagination={{ clickable: true }}
											autoplay={{
												delay: 2500,
												disableOnInteraction: false,
											}}
										>
											{data[0]?.MEDICINE_IMAGES?.map(
												(image: any, index: number) => {
													return (
														<SwiperSlide key={index}>
															<div className="mx-auto h-[600px] w-auto flex items-center justify-center">
																<img
																	//   src={`https://www.drug-international.com/uploads/product_images/SERAVENT.jpg`}
																	src={`https://www.drug-international.com/${image}`}
																	width={500}
																	height={500}
																	alt={data[0].MEDICINE_NAME}
																	className="mx-auto max-h-[600px] w-auto"
																/>
															</div>
														</SwiperSlide>
													);
												}
											)}
										</Swiper>
									</div>
								</div>
							</div>

							<div className="my-8">
								{data[0]?.INSERT_FILE !== "" && (
									<a
										href={`https://www.drug-international.com/${data[0]?.INSERT_FILE}`}
										rel="noopener noreferrer"
										target="_blank"
									>
										<ButtonPrimary>PRESCRIBING DESCRIPTION</ButtonPrimary>
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default SingleProduct;
