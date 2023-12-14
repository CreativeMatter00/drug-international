import Image from "next/image";
import React from "react";

function BAB() {
	return (
		<div className="py-8">
			<div className="text-center font-semibold text-4xl pb-12 uppercase">
				BAB Certificates
			</div>
			<div className="px-4">
				<Image
					src={"/assets/images/home/bab.png"}
					height={266}
					width={588}
					alt="BAB Certificate"
					className="mx-auto mb-10"
				/>
				<div className="container mx-auto text-center">
					<p className="text-textSecondary text-base font-medium">
						At Khwaja Yunus Ali Medical College & Hospital, we take immense
						pride in our latest accomplishment - the prestigious BAB (Bangladesh
						Accreditation Board) Certificate. This recognition signifies our
						unwavering commitment to maintaining the highest standards of
						excellence in healthcare and medical education.
					</p>
				</div>
			</div>
		</div>
	);
}

export default BAB;
