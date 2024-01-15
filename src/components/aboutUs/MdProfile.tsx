"use client";

import { motion } from "framer-motion";

import Image from "next/image";

function MdProfile() {
	const slideInAnimationTop = {
		hidden: { opacity: 0, y: 400 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={slideInAnimationTop}
		>
			<Image
				src={"/assets/images/aboutUs/Managing Director.png"}
				width={378}
				height={348}
				alt="Managing Director"
				className="m-auto"
			/>
			<div className="text-center mb-10">
				<p className="font-bold text-lg text-primary uppercase mb-4">
					M A Haider Hussain
				</p>

				<p className="text-textSecondary font-semibold text-base">
					Managing Director
				</p>
				<div className="border-4 border-white border-t-primaryShade w-[120px] mx-auto mt-2" />
			</div>

			<div className="font-medium text-lg text-textPrimary">
				Present Managing Director, younger son of Dr. M. M. Amjad Hussain. Prior
				to becoming Managing Director, he was Director Marketing of Drug
				International Limited. He was also elected Chairman of Khwaja Yunus Ali
				Medical College & Hospital, Khwaja Yunus Ali Medical College. He is also
				Managing Director of ATI Limited, ATI Ceramics Limited and Harnest Label
				Industries. Governing Body Member of Khwaja Yunus Ali University and
				KYAMCH Nursing Institute.
			</div>
		</motion.div>
	);
}

export default MdProfile;
