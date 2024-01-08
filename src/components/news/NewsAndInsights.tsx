import News from "./News";
import Story from "./Story";

function NewsAndInsights() {
	return (
		<div className="relative mt-[-100px] w-full mb-10">
			<div className="container mx-auto bg-white rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)] font-medium ">
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-1/2 p-10">
						<News />
					</div>

					<div className="bg-[#F2F2F2] w-full md:w-1/2 rounded-r-2xl">
						<Story />
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewsAndInsights;
