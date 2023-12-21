import React from "react";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";

interface BreadCrumbProps {
	title: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ title }) => {
	return (
		<div className="pt-20 mb-4">
			<div className="pb-6 border-b-2 border-[#E4E4E6]">
				<div className="container mx-auto flex items-center gap-2 text-textPrimary font-medium text-sm uppercase">
					<Link href={"/"} className="text-xl hover:text-primary">
						<IoMdHome />{" "}
					</Link>
					/
					<Link
						href={"/products"}
						className="hover:text-primary hover:underline hover:underline-offset-4"
					>
						<p> Products </p>
					</Link>
					/<p className="text-primary"> {title} </p>
				</div>
			</div>
		</div>
	);
};

export default BreadCrumb;
