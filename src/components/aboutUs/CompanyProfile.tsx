/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function CompanyProfile() {
	const t = useTranslations("AboutUs");

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
			<div
				className="font-medium text-base text-textPrimary"
				dangerouslySetInnerHTML={{ __html: t.raw("companyProfileDescription") }}
			>
				{/* Drug International Limited was born in 1974, as a Private Limited
				Company, etching its journey under the Registrar of Joint Stock
				Companies. Fast forward to 1983, where innovation took the
				forefront—inaugurating formulation and production, and pioneering the
				landscape with Bangladesh's state-of-the-art oral solid dosage plant.
				Since day one, our unwavering mission has been to soar beyond
				boundaries, aligning with global standards. Guided by the World Health
				Organization's Good Manufacturing Practices (WHO cGMP) guidelines, we've
				been scripting a legacy of excellence, one milestone at a time.
				<br />
				<br />
				In Bangladesh's medicine chest, Drug International Limited isn't just
				another medicine company, it's the key that unlocks better health.
				Remember gummy vitamins that vanish on your tongue? We started that! And
				for women, we wrote a whole new chapter with GYNOMIX, the first vaginal
				suppository of its kind. We orchestrate a pharmaceutical symphony, from
				child's-play syrups to life-saving injectables, each note a medicine
				tailored to a life.
				<br />
				<br />
				Our secret weapon? A speedy supply chain that gets the right medicine to
				the right people, faster than you can say "Prescription!" We are just
				not a company, we are a healthcare hero, one soft capsule, one
				suppository, one helpful pill at a time. */}
			</div>
		</motion.div>
	);
}

export default CompanyProfile;
