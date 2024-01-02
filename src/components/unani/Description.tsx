import Image from "next/image";
import React from "react";

function Description() {
	return (
		<div className="py-16 container mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 text-medium gap-y-16 md:gap-y-36 relative px-4">
				<div className="absolute inset-0 items-center justify-center hidden md:flex">
					<Image
						src="/assets/images/unani/natural.png"
						width={392}
						height={316}
						alt="Nature's Wisdom Unveiled"
					/>
				</div>
				<div className="w-full md:w-2/3">
					<p className="uppercase text-2xl text-textPrimary pb-6">
						Traditional Formulations
					</p>
					<p className="text-textSecondary text-base">
						Immerse yourself in the richness of centuries-old healing
						traditions. Our Unani products are crafted with authentic
						formulations, blending herbs and natural ingredients to promote
						holistic well-being.
					</p>
				</div>

				<div className="w-full md:w-2/3 text-right ml-auto">
					<p className="uppercase text-2xl text-textPrimary pb-6">
						Balancing Body and Mind
					</p>
					<p className="text-textSecondary text-base">
						Experience the harmonious balance of body and mind with our Unani
						offerings. Rooted in ancient wisdom, these products aim to restore
						equilibrium, addressing health concerns through natural remedies.
					</p>
				</div>

				<div className="flex items-center justify-center md:hidden">
					<Image
						src="/assets/images/unani/natural.png"
						width={392}
						height={316}
						alt="Nature's Wisdom Unveiled"
						className=""
					/>
				</div>

				<div className="w-full md:w-2/3">
					<p className="uppercase text-2xl text-textPrimary pb-6">
						Time-Tested Efficacy
					</p>
					<p className="text-textSecondary text-base">
						Embrace the proven efficacy of time-tested ingredients. Our Unani
						products draw from a heritage of healing, utilizing botanicals and
						herbs renowned for their therapeutic properties, delivering results
						backed by centuries of use.
					</p>
				</div>
				<div className="w-full md:w-2/3 text-right ml-auto">
					<p className="uppercase text-2xl text-textPrimary pb-6">
						Holistic Wellness Solutions
					</p>
					<p className="text-textSecondary text-base">
						Elevate your wellness journey with holistic solutions. Our Unani
						range goes beyond symptom relief, focusing on addressing the root
						causes of health issues, offering comprehensive wellness for a
						healthier, more balanced life.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Description;
