/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

function Nature() {
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
		<div className="bg-black font-medium text-white pt-10">
			<p className="text-center mb-2 text-3xl"> Nature's Wisdom Displayed </p>
			<p className="text-center mb-16 text-sm">
				Key ingredients in Our Unani ingredients/Wellness Solutions
			</p>

			<motion.div
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={revealAnimation}
			>
				<div className="container mx-auto flex">
					<div className="w-1/3 items-end hidden md:flex">
						<Image
							src="/assets/images/unani/masala.png"
							width={350}
							height={400}
							alt="Nature's Wisdom Unveiled"
							className="mx-auto w-full h-auto"
						/>
					</div>

					<div className="w-full pb-10 md:w-2/3">
						<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
							<div>
								<Image
									src="/assets/images/unani/ingredients/Aloe Vera.png"
									width={300}
									height={300}
									alt="Ingredient"
									className="mx-auto mb-4 w-[200px] h-auto"
								/>
								<p className="text-center mb-2 text-2xl uppercase">
									{" "}
									Aloe Vera{" "}
								</p>
								<p className="text-center text-base capitalize">
									Aloe barbadensis miller
								</p>
							</div>

							<div>
								<Image
									src="/assets/images/unani/ingredients/fennel.png"
									width={300}
									height={300}
									alt="Ingredient"
									className="mx-auto mb-4 w-[200px] h-auto"
								/>
								<p className="text-center mb-2 text-2xl uppercase"> Fennel </p>
								<p className="text-center text-base capitalize">
									{" "}
									Foeniculum vulgare{" "}
								</p>
							</div>

							<div>
								<Image
									src="/assets/images/unani/ingredients/neem.png"
									width={300}
									height={300}
									alt="Ingredient"
									className="mx-auto mb-4 w-[200px] h-auto"
								/>
								<p className="text-center mb-2 text-2xl uppercase"> Neem </p>
								<p className="text-center text-base capitalize">
									Azadirachta indica
								</p>
							</div>

							<div>
								<Image
									src="/assets/images/unani/ingredients/Myrrh.png"
									width={300}
									height={300}
									alt="Ingredient"
									className="mx-auto mb-4 w-[200px] h-auto"
								/>
								<p className="text-center mb-2 text-2xl uppercase"> Myrrh </p>
								<p className="text-center text-base capitalize">
									{" "}
									Commiphora wightii{" "}
								</p>
							</div>

							<div>
								<Image
									src="/assets/images/unani/ingredients/Saffron.png"
									width={300}
									height={300}
									alt="Ingredient"
									className="mx-auto mb-4 w-[200px] h-auto"
								/>
								<p className="text-center mb-2 text-2xl uppercase"> Saffron </p>
								<p className="text-center text-base capitalize">
									Crocus sativus
								</p>
							</div>

							<div>
								<Image
									src="/assets/images/unani/ingredients/frankincense.png"
									width={300}
									height={300}
									alt="Ingredient"
									className="mx-auto mb-4 w-[200px] h-auto"
								/>
								<p className="text-center mb-2 text-2xl uppercase">
									Frankincense
								</p>
								<p className="text-center text-base capitalize">
									{" "}
									Boswellia serrata{" "}
								</p>
							</div>

							<div>
								<Image
									src="/assets/images/unani/ingredients/licorice.png"
									width={300}
									height={300}
									alt="Ingredient"
									className="mx-auto mb-4 w-[200px] h-auto"
								/>
								<p className="text-center mb-2 text-2xl uppercase">licorice</p>
								<p className="text-center text-base capitalize">
									{" "}
									Glycyrrhiza glabra{" "}
								</p>
							</div>

							<div>
								<Image
									src="/assets/images/unani/ingredients/Guggul.png"
									width={300}
									height={300}
									alt="Ingredient"
									className="mx-auto mb-4 w-[200px] h-auto"
								/>
								<p className="text-center mb-2 text-2xl uppercase">Guggul</p>
								<p className="text-center text-base capitalize">
									{" "}
									Commiphora wightii{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Nature;
