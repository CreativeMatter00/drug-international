/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from "framer-motion";

function CorporateResponsibility() {
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
			<div className="text-lg font-medium text-textSecondary ">
				<div className="text-lg mb-10">
					Out of social and business obligation, the group established the
					following institutes as "Corporate Social Responsibility (CSR)
					projects"
				</div>
				<div className="px-4 md:px-16">
					<ul className="flex flex-col gap-3">
						<li>
							Khwaja Yunus Ali Medical College & Hospital (KYAMCH); a 586 bed
							tertiary hospital in a rural area, with state of the art multi
							disciplinary medical service facilities.
						</li>

						<li>Khwaja Yunus Ali Medical College (KYAMC) </li>

						<li>KYAMCH Nursing Institute </li>

						<li>Khwaja Yunus Ali University (KYAU) </li>

						<li>KYAMCH Laboratory School </li>

						<li>Khwaja Yunus Ali Foundation </li>
					</ul>
				</div>
			</div>
		</motion.div>
	);
}

export default CorporateResponsibility;
