"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import styles from "@/styles/Security.module.css";
import ButtonSecondary from "../ui/button/ButtonSecondary";
import AddModal from "../share/Modal/AddModal";
import { useDispatch } from "react-redux";
import { handleAddModalOpen } from "@/redux/Reducer/MainSlice";

function SecurityCheck() {
	const dispatch = useDispatch();
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

	const handleOpenModal = () => {
		dispatch(handleAddModalOpen());
	};

	return (
		<div className={`${styles.background} mb-8 md:mb-32`}>
			<div className={`container px-4 py-10 z-10 relative m-auto text-white`}>
				<div className="text-center font-semibold text-4xl mb-10 uppercase">
					Security Check
				</div>

				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={revealAnimation}
				>
					<div className="">
						<div className="bg-primary opacity-80  rounded-xl">
							<div className="p-10 text-center">
								<p className="text-2xl font-medium mb-6">
									Verify Medicine Security Code
								</p>
								<div className="flex flex-col items-center justify-center gap-8 mx-auto">
									<input className="h-12 w-[40%] min-w-[260px] text-black p-2 rounded-md" />
									<ButtonSecondary onClick={handleOpenModal}>
										VERIFY
									</ButtonSecondary>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>

			<AddModal modalHead="">
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
				<p> verify jjjjjjjjjjjjjjjjjjjjjjjjjj </p>
			</AddModal>
		</div>
	);
}

export default SecurityCheck;
