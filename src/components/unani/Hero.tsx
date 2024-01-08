import styles from "@/styles/Unani.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
	return (
		<div className="overflow-hidden text-white font-medium">
			<video
				autoPlay={true}
				loop={true}
				muted={true}
				playsInline={true}
				className={styles.video}
			>
				<source src="/assets/videoes/unani.mp4" type="video/mp4" />
			</video>

			<div className="h-[800px] flex">
				<div className={`${styles.background1} w-[90%] lg:w-1/2 rounded-r-xl`}>
					<div className="h-full flex items-center">
						<div className="bg-[#01511F] p-8 w-full ">
							<div className="w-3/4 ml-auto">
								<p className="text-5xl uppercase mb-6">
									Unani Essence
									<br />
									Modern Wellness
								</p>
								<p className="text-lg uppercase mb-16">
									Experience the healing journey with
									<br />
									Drug International Unani Ltd
								</p>

								<button className="flex items-center gap-4 bg-[#159A48] text-base py-3 px-5 text-white rounded-md">
									See Our Products <FaArrowRightLong />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=""></div>
			</div>
		</div>
	);
}

export default Hero;
