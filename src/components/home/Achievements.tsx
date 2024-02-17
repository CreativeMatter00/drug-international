"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const images = [
	{
		sl: 1,
		name: "Certificate from Ministry of Public Health of Afghanistan",
		logo: "/assets/images/home/achievements/certificate-01.jpg",
		certificate: "/assets/images/home/achievements/af.png",
	},
	{
		sl: 2,
		name: "Certificate from Pharmacy Board of Sierra Leone",
		logo: "/assets/images/home/achievements/certificate-02.jpg",
		certificate: "/assets/images/home/achievements/sl.png",
	},
	{
		sl: 3,
		name: "Certificate from Food and Drugs Authority Ghana",
		logo: "/assets/images/home/achievements/certificate-04.jpg",
		certificate: "/assets/images/home/achievements/fda.png",
	},
	{
		sl: 4,
		name: "Certificate from RIR Private Limited",
		logo: "/assets/images/home/achievements/certificate-05.jpg",
		certificate: "/assets/images/home/achievements/rir.png",
	},
	{
		sl: 5,
		name: "Certificate from Bangladesh Accreditaion Board",
		logo: "/assets/images/home/achievements/certificate-06.jpg",
		certificate: "/assets/images/home/achievements/bab.png",
	},
	{
		sl: 6,
		name: "Certificate from Dept. of Drug Administration of Nepal",
		logo: "/assets/images/home/achievements/certificate-07.jpg",
		certificate: "/assets/images/home/achievements/gn.png",
	},
	{
		sl: 7,
		name: "Halal Certificate from Islamic Foundation",
		logo: "/assets/images/home/achievements/certificate-08.jpg",
		certificate: "/assets/images/home/achievements/if.png",
	},
	{
		sl: 8,
		name: "Certificate of Registration from Registrar Corp USA ",
		logo: "/assets/images/home/achievements/certificate-09.jpg",
		certificate: "/assets/images/home/achievements/ca.png",
	},
	{
		sl: 9,
		name: "Certificate of Good Manufacturing from NAFDAC",
		logo: "/assets/images/home/achievements/certificate-10.jpg",
		certificate: "/assets/images/home/achievements/na.png",
	},
];

function Achievements() {
	const t = useTranslations("Home");

	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState({
		name: "",
		certificate: "",
	});

	const handleImageClick = (name: string, certificate: string) => {
		setSelectedImage({ name, certificate });
		setModalOpen(true);
	};

	const revealAnimation = {
		hidden: { scale: 0 },
		visible: { scale: 1, transition: { duration: 0.5 } },
	};

	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<div className={` mb-8 py-12`}>
			<div className={`px-4 z-10 relative m-auto`}>
				<p className="text-center font-semibold text-4xl pb-8 uppercase">
					{t("achievementTitle")}
				</p>
				<p className="text-center font-semibold text-xl pb-20 uppercase">
					{/* Drug International has earned certificates for outstanding medicine
					quality */}
					{t("achievementSubTitle")}
				</p>
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={revealAnimation}
				>
					<div className="container mx-auto flex flex-wrap justify-center gap-y-8">
						{images.map((image) => (
							<div
								className="flex items-center justify-center w-1/2 rounded-md md:w-1/5 h-[200px] transition-all duration-300 cursor-pointer hover:shadow-xl"
								onClick={() => handleImageClick(image.name, image.certificate)}
								key={image.sl}
							>
								<Image
									src={image.logo}
									width={365}
									height={365}
									alt="achievement"
									className="h-[200px] w-auto"
								/>
							</div>
						))}
					</div>
				</motion.div>
			</div>

			<div className="z-[10000000000]">
				<input
					type="checkbox"
					id="my_modal_7"
					className="modal-toggle"
					checked={modalOpen}
					onChange={(e) =>
						e.target.checked ? setModalOpen(false) : setModalOpen(true)
					}
				/>
				<div className="modal">
					<div className="modal-box w-10/12 max-w-4xl">
						<button
							onClick={() => setModalOpen(false)}
							className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						>
							✕
						</button>
						<h3 className="font-bold text-lg text-center">
							{selectedImage.name}
						</h3>
						<a href={selectedImage.certificate} target="_blank">
							<div className="py-4 flex justify-center items-center">
								<Image
									src={selectedImage.certificate}
									width={290}
									height={400}
									alt="achievement"
									className="h-full w-auto"
								/>
							</div>
						</a>
					</div>
					<label
						className="modal-backdrop"
						htmlFor="my_modal_7"
						onClick={() => setModalOpen(false)}
					>
						Close
					</label>
				</div>
			</div>
		</div>
	);
}

export default Achievements;
