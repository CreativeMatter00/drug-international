import Image from "next/image";
import React from "react";

function Unit2() {
	return (
		<div>
			<p className="font-medium text-3xl uppercase text-primary mb-10">
				Unit - 2
			</p>

			<div className="mb-8">
				<Image
					src="/assets/images/facilities/unit2.jpg"
					width={720}
					height={405}
					alt="product"
					className="w-full h-auto rounded-md"
				/>
			</div>

			<div className="font-medium text-base text-textSecondary">
				<p className="">
					Established in 2014, Drug International Limited (Unit-2) is dedicated
					to manufacturing and globally marketing penicillin, cephalosporin,
					steroids, and oncology products. Committed to high-quality
					pharmaceuticals, the facility features four manufacturing blocks
					adhering to WHO guidelines. Each block, including Cephalosporin,
					Penicillin, General, and Oncology Buildings, maintains dedicated HVAC
					systems for contamination control. The site embraces the zone concept
					of cGMP, ensuring meticulous implementation. Modern QC laboratories, a
					Product Development Laboratory, Engineering Department, Cafeteria, and
					Conference Room enhance operational efficiency. With its own power
					generators, water treatment system, and Effluent Treatment Plant, the
					unit is well-equipped for pharmaceutical production and environmental
					responsibility. The site prioritizes security, offering
					round-the-clock access control. Drug International Limited (Unit-2) is
					poised to excel in providing the latest pharmaceutical developments in
					solid, liquid, injectable, and semi-solid dosage forms.
				</p>
			</div>
		</div>
	);
}

export default Unit2;
