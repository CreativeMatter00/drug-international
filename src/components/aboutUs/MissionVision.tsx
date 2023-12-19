import React from "react";

function MissionVision() {
	return (
		<div>
			<div className="bg-mission bg-cover pt-14 pb-32 px-4 rounded-md text-white">
				<p className="mb-16 font-medium text-lg">
					Drug International Limited believes their mission is to ensure better
					life through better medicine and the patients to lead a healthier
					life.
				</p>

				<p className="font-bold text-center text-xl mb-8">
					Mission Statement & Vision
				</p>

				<div className="px-16">
					<ul className="flex flex-col gap-3">
						<li> Adherence to the cGMP regulations </li>
						<li>
							Quality Assurance medicines throughout manufacturing operations
						</li>
						<li>
							To Have strict SOP for assurance of the identity, strength,
							quality, and purity of drug products
						</li>
						<li>
							To deliver medicine to patients in best form of dose and efficacy
						</li>
					</ul>
				</div>
			</div>

			<div className="mx-8 mb-24 rounded-lg bg-primaryShade relative mt-[-20px] py-16 px-2 text-white">
				<p className="font-bold text-xl text-center uppercase mb-6">
					Strategies
				</p>
				<p>
					Drug International Limited since its inception adopted and established
					strong quality management systems, from procuring raw material to
					delivery. The management of the company has always emphasized on
					procurement of the raw material from the best source with appropriate
					quality. The managements’ top priority was to establish robust SOP in
					order to detect and investigate product quality and maintaining
					reliability by testing in its laboratory for any quality deviations.
					<br />
					For continuous improvement, the company had been vigilant and
					proactive in adopting modern technologies, scientifically sound
					design, processing methods, and testing procedures in order to achieve
					higher quality.
				</p>
			</div>
			<div className="px-16 mx-auto mb-12">
				<p className="font-medium text-2xl text-textPrimary text-center mb-8">
					Marketing Strategies of Drug International Limited
				</p>
				<ul className="flex flex-col gap-3">
					<li> Identifying effective products for local markets </li>
					<li> Development of the product and service portfolio </li>
					<li>
						Ensuring timely and targeted communication by using modern
						information technology
					</li>
					<li>
						Providing quality medicine to the remotest corners of the country
					</li>
				</ul>
			</div>
			<div className="font-medium text-base text-textPrimary">
				Drug International Limited has created full time employment for Doctors,
				Chemists, Pharmacists, Engineers, Technicians and others professionals.
				<br />
				<br />
				Drug International Limited is committed to bring together qualified
				personnel to build an effective organization for delivering quality
				service and products to its customers and patients.
			</div>
		</div>
	);
}

export default MissionVision;
