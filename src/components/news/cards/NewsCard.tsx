import Image from "next/image";
import Link from "next/link";

type INewsCard = {
	src: string;
	title: string;
	detail: string;
};

function NewsCard(props: INewsCard) {
	return (
		<Link href="/news/1">
			<div className="font-medium bg-[#F2F2F2] p-4 rounded-md relative overflow-hidden group cursor-pointer">
				<div className="h-[200px] overflow-hidden rounded-md mb-6 relative ">
					<Image
						src={props.src}
						width={720}
						height={400}
						className="w-full h-[400px] object-cover"
						alt="news"
					/>
					<div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
						<span className="text-white text-lg font-semibold">View More</span>
					</div>
				</div>

				<p className="text-2xl text-textPrimary uppercase mb-4">
					{props.title}
				</p>
				<p className="text-xs text-textSecondary">{props.detail}</p>
			</div>
		</Link>
	);
}

export default NewsCard;
