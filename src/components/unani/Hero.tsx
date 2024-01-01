import styles from "@/styles/Unani.module.css";

function Hero() {
	return (
		<div className="overflow-hidden">
			<video
				autoPlay={true}
				loop={true}
				muted={true}
				playsInline={true}
				className={styles.video}
			>
				<source src="/assets/videoes/unani.mp4" type="video/mp4" />
			</video>

			<div className="h-[1080px] grid grid-cols-2">
				<div className={styles.background1}>abc</div>
				<div>abc</div>
			</div>
		</div>
	);
}

export default Hero;
