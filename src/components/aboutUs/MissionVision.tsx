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
					Drug International Limited prioritizes and implements robust quality
					management systems since its inception, ensuring excellence from raw
					material procurement to product delivery. The management places a
					strong emphasis on sourcing raw materials from reputable suppliers to
					guarantee quality. A top priority is the establishment of rigorous
					Standard Operating Procedures (SOPs) to promptly detect and
					investigate any product quality deviations, maintaining reliability
					through thorough laboratory testing.
					<br />
					The company remains committed to continuous improvement, embracing
					modern technologies, scientifically sound design, advanced processing
					methods, and rigorous testing procedures. This proactive approach aims
					to achieve and sustain higher standards of quality in every aspect of
					its operations.
				</p>
			</div>
			<div className="px-16 mx-auto mb-12">
				<p className="font-medium text-2xl text-textPrimary text-center mb-8">
					Marketing Strategies of Drug International Limited
				</p>
				<ul className="flex flex-col gap-3">
					<li> Scouting impactful products for local markets </li>
					<li>
						Expanding our product and service portfolio through continuous
						development.
					</li>
					<li>
						Utilizing modern information technology for timely and targeted
						communication.
					</li>
					<li>
						Supplying quality medicine to even the remotest corners of the
						country.
					</li>
					<li>
						Creating full-time employment opportunities for diverse
						professionals.
					</li>
				</ul>
			</div>
			<div className="font-medium text-base text-textPrimary">
				Drug International Limited has created full time employment for Doctors,
				Chemists, Pharmacists, Engineers, Technicians and others professionals.
				<br />
				<br />
				Our commitment to assembling skilled personnel shapes an effective
				organization dedicated to delivering unparalleled service and top-notch
				products to our cherished customers and patients.
			</div>
		</div>
	);
}

export default MissionVision;
