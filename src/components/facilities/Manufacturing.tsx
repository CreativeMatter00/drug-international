/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function Manufacturing() {
	return (
		<div>
			<p className="font-medium text-3xl uppercase text-primary mb-10">
				Manufacturing Facility
			</p>

			<div className="mb-8">
				<Image
					src="/assets/images/facilities/manufacture.jpg"
					width={720}
					height={405}
					alt="product"
					className="w-full h-auto rounded-md"
				/>
			</div>

			<div className="font-medium text-base text-textSecondary">
				<p className="">
					Drug International Limited stands as a leading pharmaceutical
					manufacturer in Bangladesh, boasting a state-of-the-art facility
					designed, built, and validated in alignment with the WHO-cGMP Concept
					and local Drug Administration Regulations. Our expansive plant
					includes two independent production buildings connected via a covered
					corridor, providing a secure environment shielded from environmental
					hazards. Prioritizing cleanliness, we've eliminated potential sources
					of dust and smoke in the surrounding areas, with constructions
					following approved layout plans and meeting regulatory building codes.
					The facility features advanced materials such as sandwich panels
					covering walls and ceilings, while a uniform 5mm layer of epoxy paint
					on all floors facilitates easy cleaning in production and controlled
					areas, ensuring product quality. Our commitment extends to
					comprehensive infrastructure, including a modern QC laboratory, a
					Product Development Laboratory, an Engineering department, a Canteen,
					and a Conference Room. To ensure uninterrupted operations, a generator
					is in place, and our water treatment plant guarantees the purity and
					distribution of water throughout the facility. The Effluent Water
					Treatment Plant (ETP) underscores our dedication to responsible waste
					water management. Drug International Limited remains steadfast in
					formulating medicines with strict compliance to WHO cGMP guidelines,
					emphasizing a controlled environment with separate departments and
					standardized facilities to uphold the highest standards of quality and
					regulatory compliance.
				</p>
			</div>
		</div>
	);
}

export default Manufacturing;
