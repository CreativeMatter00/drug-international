import styles from "@/styles/Unani.module.css";

function Unani() {
	return (
		<div>
			<div className="">
				<video
					autoPlay={true}
					loop={true}
					muted={true}
					playsInline={true}
					className={styles.video}
				>
					<source src="/assets/videoes/unani.mp4" type="video/mp4" />
				</video>
				<div className="h-screen">abc</div>
			</div>
		</div>
	);
}

export default Unani;
