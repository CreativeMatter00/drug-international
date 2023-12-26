/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function Research() {
	return (
		<div>
			<p className="font-medium text-3xl uppercase text-primary mb-10">
				Research & Development
			</p>

			<div className="mb-8">
				<Image
					src="/assets/images/facilities/research.jpg"
					width={720}
					height={405}
					alt="product"
					className="w-full h-auto rounded-md"
				/>
			</div>

			<div className="font-medium text-base text-textSecondary">
				<p className="">
					Innovation thrives in our dedicated Research & Development center,
					where the quest for excellence never ceases. Our R&D team works
					tirelessly to pioneer new formulations, enhance existing products, and
					push the boundaries of pharmaceutical innovation. Join us on a journey
					of discovery, where scientific curiosity meets the drive to improve
					healthcare outcomes.
				</p>
			</div>
		</div>
	);
}

export default Research;
