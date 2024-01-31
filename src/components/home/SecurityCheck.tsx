"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import styles from "@/styles/Security.module.css";
import ButtonSecondary from "../ui/button/ButtonSecondary";
import AddModal from "../share/Modal/AddModal";
import { useDispatch } from "react-redux";
import { handleAddModalOpen } from "@/redux/Reducer/MainSlice";
import Image from "next/image";
import { DNA } from "react-loader-spinner";
import { securityCheck } from "@/api/api";

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

	//? API call

	const [code, setCode] = useState<string>("");
	const [data, setData] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const handleOpenModal = () => {
		if (code.length !== 0) {
			dispatch(handleAddModalOpen());
			handleVerifyClick();
		}
	};

	const handleVerifyClick = async () => {
		try {
			setIsLoading(true);
			const response = await securityCheck(code);
			setData(response.data[0]);
		} catch (error) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	if (isError) {
		return (
			<p className="text-center text-lg font-medium">
				Something went wrong. Please reload the page.
			</p>
		);
	}

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
						<div className="bg-primary opacity-80 rounded-xl">
							<div className="p-10 text-center">
								<p className="text-2xl font-medium mb-6">
									Verify Medicine Security Code
								</p>
								<div className="flex flex-col items-center justify-center gap-8 mx-auto">
									<input
										className="h-12 w-[40%] min-w-[260px] text-black p-2 rounded-md"
										onChange={(e) => setCode(e.target.value)}
									/>
									<ButtonSecondary onClick={handleOpenModal}>
										VERIFY
									</ButtonSecondary>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>

			<AddModal modalHead="Security Check">
				<div className="font-medium text-lg">
					{isLoading ? (
						<div className="flex items-center justify-center">
							<DNA
								visible={true}
								height="200"
								width="200"
								ariaLabel="dna-loading"
								wrapperStyle={{}}
								wrapperClass="dna-wrapper"
							/>
						</div>
					) : (
						<div className="mx-auto">
							<p
								className="text-center font-bold break-all"
								dangerouslySetInnerHTML={{ __html: data?.message }}
							/>
							<p
								className="text-center break-all"
								dangerouslySetInnerHTML={{ __html: data?.message1 }}
							/>
							<p
								className="text-center"
								dangerouslySetInnerHTML={{ __html: data?.message2 }}
							/>
							<p
								className="text-center"
								dangerouslySetInnerHTML={{ __html: data?.message3 }}
							/>
							{data?.status && (
								<Image
									src={"/assets/images/security/qr_code.jpg"}
									height={200}
									width={200}
									alt="qr_code"
									className="h-[200px] w-[200px] mx-auto"
								/>
							)}
							{data?.securityCodeDetails && (
								<div className="text-left py-8">
									<span className="font-bold"> Medicine Name : </span>
									<span
										className=""
										dangerouslySetInnerHTML={{
											__html: data?.securityCodeDetails.MEDICINE_NAME,
										}}
									/>

									<Image
										src={`https://www.drug-international.com/${data?.securityCodeDetails?.MEDICINE_IMG}`}
										height={200}
										width={200}
										alt="medicine"
										className="max-h-[200px] w-auto my-8"
									/>

									<p
										className=""
										dangerouslySetInnerHTML={{
											__html: data?.securityCodeDetails?.MEDICINE_DESC,
										}}
									/>
								</div>
							)}
						</div>
					)}
				</div>
			</AddModal>
		</div>
	);
}

export default SecurityCheck;
