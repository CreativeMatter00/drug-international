import styles from "@/styles/Achievements.module.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Achievements() {
	return (
		<div className={`${styles.background} mb-32 py-28`}>
			<div className={`container px-4 z-10 relative m-auto text-white`}>
				<div className="text-center font-semibold text-4xl pb-20 uppercase">
					Achievements
				</div>
				<Marquee pauseOnHover={true}>
					<Image
						src={"/assets/images/home/achievements/1.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
					<Image
						src={"/assets/images/home/achievements/2.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
					<Image
						src={"/assets/images/home/achievements/3.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
					<Image
						src={"/assets/images/home/achievements/4.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
					<Image
						src={"/assets/images/home/achievements/5.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
					<Image
						src={"/assets/images/home/achievements/6.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
					<Image
						src={"/assets/images/home/achievements/7.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
					<Image
						src={"/assets/images/home/achievements/8.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
					<Image
						src={"/assets/images/home/achievements/9.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
					<Image
						src={"/assets/images/home/achievements/10.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
					<Image
						src={"/assets/images/home/achievements/11.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
					<Image
						src={"/assets/images/home/achievements/12.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
					<Image
						src={"/assets/images/home/achievements/13.png"}
						width={436}
						height={606}
						alt="achievement"
						className="h-[606] w-auto mr-4 object-cover"
					/>
				</Marquee>
			</div>
		</div>
	);
}

export default Achievements;
