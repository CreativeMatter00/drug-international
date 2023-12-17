import Image from "next/image";

type IBanner = {
	src: string;
	title: string;
};

function Banner(props: IBanner) {
	return (
		<div className="relative overflow-hidden">
			<Image
				// src={"/assets/images/aboutUs/banner.jpg"}
				src={props.src}
				height={718}
				width={1920}
				alt="banner"
				className="w-screen h-[400px]"
			/>
			<div className="flex items-center justify-center absolute inset-0 bg-gradient-to-tr from-primary to-#C4161C00">
				<div className="container mx-2 font-medium text-2xl md:text-6xl uppercase py-4 px-8 text-white border-l-4 md:border-l-8 border-white">
					{props.title}
				</div>
			</div>
		</div>
	);
}

export default Banner;
