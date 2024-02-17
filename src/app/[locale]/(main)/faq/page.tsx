import React from "react";

function page() {
	return (
		<div className="container mx-auto py-12">
			<p className="text-center pb-12 text-black text-4xl">
				Frequently Asked Questions about Drug Internation Ltd
			</p>
			<div className="">
				<div className="collapse collapse-plus">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						When was Drug International Limited established?
					</div>
					<div className="collapse-content">
						<p>Drug International Limited was established in 1974.</p>
					</div>
				</div>
				<div className="collapse collapse-plus">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						What was its initial status?
					</div>
					<div className="collapse-content">
						<p>
							Drug International Limited started as a Private Limited Company.
						</p>
					</div>
				</div>
				<div className="collapse collapse-plus">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						How does Drug International Limited align its facility with WHO-cGMP
						concepts and local Drug Administration Regulations?
					</div>
					<div className="collapse-content">
						<p>
							Drug International Limited aligns its facility with WHO-cGMP and
							local regulations, ensuring compliance in design, construction and
							validation for pharmaceutical manufacturing excellence.{" "}
						</p>
					</div>
				</div>
				<div className="collapse collapse-plus">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						How does Drug International Limited prioritize cleanliness and
						eliminate potential sources of dust and smoke in its facility?
					</div>
					<div className="collapse-content">
						<p>
							Drug International Limited ensures facility cleanliness by
							eliminating dust and smoke sources through advanced construction
							materials and a uniform epoxy-coated floor, maintaining a
							controlled environment for top product quality.{" "}
						</p>
					</div>
				</div>
				<div className="collapse collapse-plus">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						How does Drug International Limited ensure uninterrupted operations
						within its facility?
					</div>
					<div className="collapse-content">
						<p>
							Drug International Limited ensures uninterrupted operations within
							its facility by having a backup generator in place. This backup
							power source guarantees continuous operations, minimizing
							disruptions in pharmaceutical manufacturing processes.{" "}
						</p>
					</div>
				</div>
				<div className="collapse collapse-plus">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						How does Drug International Limited demonstrate its commitment to
						formulating medicines with strict compliance to WHO cGMP guidelines?
					</div>
					<div className="collapse-content">
						<p>
							Drug International Limited demonstrates commitment to WHO cGMP
							guidelines by maintaining controlled environments and standardized
							facilities for pharmaceutical manufacturing, ensuring high-quality
							and regulatory compliance.{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
