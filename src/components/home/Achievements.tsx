import styles from "@/styles/Achievements.module.css";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";

function Achievements() {
	const [active, setActive] = useState(false);

	return (
		<div className={` mb-8 py-12`}>
			<div className={`px-4 z-10 relative m-auto`}>
				<div className="text-center font-semibold text-4xl pb-20 uppercase">
					Achievements
				</div>
				{/* <Marquee pauseOnHover={true}>
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
				</Marquee> */}
				<div className="container mx-auto flex flex-wrap justify-center gap-y-8">
					<div
						className="flex items-center justify-center w-1/2 md:w-1/5 h-[200px] transition-all duration-300 hover:shadow-xl"
						onClick={() => setActive(true)}
					>
						<Image
							src={"/assets/images/home/achievements/certificate-01.jpg"}
							width={365}
							height={365}
							alt="achievement"
							className="h-[200px] w-auto"
						/>
					</div>
					<div className="flex items-center justify-center w-1/2 md:w-1/5 h-[200px] transition-all duration-300 hover:shadow-xl">
						<Image
							src={"/assets/images/home/achievements/certificate-02.jpg"}
							width={365}
							height={365}
							alt="achievement"
							className="h-[200px] w-auto"
						/>
					</div>

					<div className="flex items-center justify-center w-1/2 md:w-1/5 h-[200px] transition-all duration-300 hover:shadow-xl">
						<Image
							src={"/assets/images/home/achievements/certificate-04.jpg"}
							width={365}
							height={365}
							alt="achievement"
							className="h-[200px] w-auto"
						/>
					</div>
					<div className="flex items-center justify-center w-1/2 md:w-1/5 h-[200px] transition-all duration-300 hover:shadow-xl">
						<Image
							src={"/assets/images/home/achievements/certificate-05.jpg"}
							width={365}
							height={365}
							alt="achievement"
							className="h-[200px] w-auto"
						/>
					</div>
					<div className="flex items-center justify-center w-1/2 md:w-1/5 h-[200px] transition-all duration-300 hover:shadow-xl">
						<Image
							src={"/assets/images/home/achievements/certificate-06.jpg"}
							width={365}
							height={365}
							alt="achievement"
							className="h-[200px] w-auto"
						/>
					</div>
					<div className="flex items-center justify-center w-1/2 md:w-1/5 h-[200px] transition-all duration-300 hover:shadow-xl">
						<Image
							src={"/assets/images/home/achievements/certificate-07.jpg"}
							width={365}
							height={365}
							alt="achievement"
							className="h-[200px] w-auto"
						/>
					</div>
					<div className="flex items-center justify-center w-1/2 md:w-1/5 h-[200px] transition-all duration-300 hover:shadow-xl">
						<Image
							src={"/assets/images/home/achievements/certificate-08.jpg"}
							width={365}
							height={365}
							alt="achievement"
							className="h-[200px] w-auto"
						/>
					</div>
					<div className="flex items-center justify-center w-1/2 md:w-1/5 h-[200px] transition-all duration-300 hover:shadow-xl">
						<Image
							src={"/assets/images/home/achievements/certificate-09.jpg"}
							width={365}
							height={365}
							alt="achievement"
							className="h-[200px] w-auto"
						/>
					</div>
					<div className="flex items-center justify-center w-1/2 md:w-1/5 h-[200px] transition-all duration-300 hover:shadow-xl">
						<Image
							src={"/assets/images/home/achievements/certificate-10.jpg"}
							width={365}
							height={365}
							alt="achievement"
							className="h-[200px] w-auto"
						/>
					</div>
				</div>
			</div>
			<div className="modal" role="dialog">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Hello!</h3>
					<p className="py-4">This modal works with a hidden checkbox!</p>
					<div className="modal-action">
						<label htmlFor="my_modal_6" className="btn">
							Close!
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Achievements;
