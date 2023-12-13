"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SpecializedProductCard from "./SpecializedProductCard";

function SpecializedProducts() {
	return (
		<div className="py-12">
			<div className="text-center font-semibold text-4xl pb-12 uppercase">
				Specialized Products
			</div>
			<div className="bg-[#E4E4E6] py-8">
				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					centeredSlides={true}
					pagination={{
						clickable: true,
					}}
				>
					<SwiperSlide>
						<SpecializedProductCard
							src="/assets/images/home/specialized/capsule.png"
							title="Soft Capsule"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<SpecializedProductCard
							src="/assets/images/home/specialized/mdi.png"
							title="MDI"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<SpecializedProductCard
							src="/assets/images/home/specialized/nasal.png"
							title="Nasal Spray"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<SpecializedProductCard
							src="/assets/images/home/specialized/capsule.png"
							title="Soft Capsule"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<SpecializedProductCard
							src="/assets/images/home/specialized/syringe.png"
							title="Prefilled Syringe"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<SpecializedProductCard
							src="/assets/images/home/specialized/eyedrop.png"
							title="Eye Drops"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<SpecializedProductCard
							src="/assets/images/home/specialized/oncology.png"
							title="Oncology"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<SpecializedProductCard
							src="/assets/images/home/specialized/oral.png"
							title="Oral Spray"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<SpecializedProductCard
							src="/assets/images/home/specialized/nano.png"
							title="Nano Particulate Tablet"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<SpecializedProductCard
							src="/assets/images/home/specialized/dpi.png"
							title="DPI"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<SpecializedProductCard
							src="/assets/images/home/specialized/biotech.png"
							title="Biotech"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default SpecializedProducts;
