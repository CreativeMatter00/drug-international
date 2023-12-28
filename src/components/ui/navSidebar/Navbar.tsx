"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/styles/NavSidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop1 = window.scrollY;
			const shouldBeVisible1 = scrollTop1 > 200;
			setScrolling(shouldBeVisible1);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const pathName = usePathname().toString();

	let logoSrc = "/assets/logo/drug-logo.png";

	if (pathName.includes("unani")) {
		logoSrc = "/assets/unani.png";
	}

	if (pathName.includes("herbal")) {
		logoSrc = "/assets/herbal.png";
	}

	return (
		<nav
			className={`top-0  flex justify-center bg-white fixed w-full z-[100000] ${
				scrolling
					? `bg-opacity-75 shadow-lg ${styles.navShadow}  ${styles.blurLg}`
					: ``
			}`}
		>
			<div className="container h-20 w-full px-1 py-2">
				<div className="flex h-full w-full justify-between">
					<div className="flex items-center">
						<Link href="/home">
							<Image
								src={logoSrc}
								width={170}
								height={61}
								alt="Logo"
								className="h-auto"
								priority
							/>
						</Link>
					</div>

					<div className="flex justify-between gap-1 items-center text-[#272727] text-sm font-medium uppercase">
						<Link href="/about-us">
							<div
								className={`p-2.5 cursor-pointer hover:text-primary hover:underline hover:underline-offset-8 ${
									pathName.includes("about-us")
										? "underline underline-offset-8 font-bold text-primary"
										: ""
								}`}
							>
								About Us
							</div>
						</Link>
						<Link href="/our-legacy">
							<div
								className={`p-2.5 cursor-pointer hover:text-primary hover:underline hover:underline-offset-8 ${
									pathName.includes("our-legacy")
										? "underline underline-offset-8 font-bold text-primary"
										: ""
								}`}
							>
								Our Legacy
							</div>
						</Link>
						<Link href="/products">
							<div
								className={`p-2.5 cursor-pointer hover:text-primary hover:underline hover:underline-offset-8 ${
									pathName.includes("products")
										? "underline underline-offset-8 font-bold text-primary"
										: ""
								}`}
							>
								products
							</div>
						</Link>
						<Link href="/facilities">
							<div
								className={`p-2.5 cursor-pointer hover:text-primary hover:underline hover:underline-offset-8 ${
									pathName.includes("facilities")
										? "underline underline-offset-8 font-bold text-primary"
										: ""
								}`}
							>
								facilities
							</div>
						</Link>
						{/* <div className="p-2.5 cursor-pointer">career</div> */}
						<Link href="/contact-us">
							<div
								className={`p-2.5 cursor-pointer hover:text-primary hover:underline hover:underline-offset-8 ${
									pathName.includes("contact-us")
										? "underline underline-offset-8 font-bold text-primary"
										: ""
								}`}
							>
								Contact
							</div>
						</Link>
					</div>

					<div className="flex gap-4 items-center ">
						<div className="cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="23"
								height="23"
								viewBox="0 0 24 24"
								className="fill-black hover:fill-primary"
							>
								<path d="M18.6659 17.7231L23.8047 22.8619C24.0651 23.1223 24.0651 23.5444 23.8047 23.8047C23.5444 24.0651 23.1223 24.0651 22.8619 23.8047L17.7231 18.6659C15.8426 20.326 13.3723 21.3333 10.6667 21.3333C4.77563 21.3333 0 16.5577 0 10.6667C0 4.77563 4.77563 0 10.6667 0C16.5577 0 21.3333 4.77563 21.3333 10.6667C21.3333 13.3723 20.326 15.8426 18.6659 17.7231ZM10.6667 20C15.8213 20 20 15.8213 20 10.6667C20 5.51201 15.8213 1.33333 10.6667 1.33333C5.51201 1.33333 1.33333 5.51201 1.33333 10.6667C1.33333 15.8213 5.51201 20 10.6667 20Z" />
							</svg>
						</div>

						<div className="group cursor-pointer flex justify-center items-center">
							<Image
								src={`/assets/icons/navbar/Language Icon.svg`}
								width={32}
								height={32}
								alt="latest products"
								className="h-auto  block group-hover:hidden"
							/>
							<Image
								src={`/assets/icons/navbar/Language Icon hover.svg`}
								width={32}
								height={32}
								alt="latest products"
								className=" h-auto hidden group-hover:block"
							/>
						</div>

						<div className="border border-primary rounded-lg py-0.5 px-1 flex justify-center items-center gap-2 text-sm font-bold bg-primary text-white hover:text-primary hover:bg-white group cursor-pointer uppercase">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="23"
								height="23"
								viewBox="0 0 25 25"
								fill="none"
								className="stroke-[#5B5B5B] hover:stroke-primary group-hover:animate-spin"
							>
								<path
									d="M12.7734 24.5467C19.2756 24.5467 24.5467 19.2756 24.5467 12.7734C24.5467 6.27111 19.2756 1 12.7734 1C6.27111 1 1 6.27111 1 12.7734C1 19.2756 6.27111 24.5467 12.7734 24.5467Z"
									className="stroke-[#FFFFFF] group-hover:stroke-primary"
									//   stroke-width="0.85"
									strokeWidth="0.85" // Change stroke-width to strokeWidth
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12.7733 1V24.5467M12.7733 1C9.1738 1 6.25586 6.2711 6.25586 12.7734C6.25586 19.2756 9.1738 24.5467 12.7733 24.5467M12.7733 1C16.3727 1 19.2907 6.2711 19.2907 12.7734C19.2907 19.2756 16.3727 24.5467 12.7733 24.5467"
									className="stroke-[#FFFFFF] group-hover:stroke-primary"
									strokeWidth="0.85"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M24.5467 12.7734H1"
									className="stroke-[#FFFFFF] group-hover:stroke-primary"
									strokeWidth="0.85"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M22.865 6.88672H2.68213"
									className="stroke-[#FFFFFF] group-hover:stroke-primary"
									strokeWidth="0.85"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M22.865 18.66H2.68213"
									className="stroke-[#FFFFFF] group-hover:stroke-primary"
									strokeWidth="0.85"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							Global
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;