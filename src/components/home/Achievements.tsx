import styles from "@/styles/Achievements.module.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Achievements() {
	return (
		<div className={`${styles.background} mb-8 py-12`}>
			<div className={`px-4 z-10 relative m-auto text-white`}>
				<div className="text-center font-semibold text-4xl pb-20 uppercase">
					Achievements
				</div>
				<Marquee pauseOnHover={true}>
					<div className="h-auto w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/1.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
					<div className="h-[400px] w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/2.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
					<div className="h-[400px] w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/3.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
					<div className="h-[400px] w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/4.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
					<div className="h-[400px] w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/5.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
					<div className="h-[400px] w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/6.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
					<div className="h-[400px] w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/7.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
					<div className="h-[400px] w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/8.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
					<div className="h-[400px] w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/9.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
					<div className="h-[400px] w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/10.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
					<div className="h-[400px] w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/11.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
					<div className="h-[400px] w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/12.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
					<div className="h-[400px] w-auto mr-4 overflow-hidden">
						<Image
							src={"/assets/images/home/achievements/13.png"}
							width={290}
							height={400}
							alt="achievement"
						/>
					</div>
				</Marquee>
			</div>
		</div>
	);
}

export default Achievements;
