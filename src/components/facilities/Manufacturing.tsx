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
					Step into our state-of-the-art manufacturing facility, the heartbeat
					of Drug International Limited's commitment to quality pharmaceuticals.
					Equipped with cutting-edge technology and operated by skilled
					professionals, our facility ensures precision, efficiency, and
					compliance with global manufacturing standards. From formulation to
					packaging, witness the seamless journey of transforming raw materials
					into life-changing medications.
				</p>
			</div>
		</div>
	);
}

export default Manufacturing;
