/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer
			className="rounded-t-xl w-full py-16 max-lg:py-8 flex justify-center bottom-0 bg-[#272727]"
			// style={{
			//   background: "linear-gradient(115deg, #272727 60%, #5B5B5B 40%)",
			// }}
		>
			<div className="container mx-auto flex items-center justify-center h-full flex-col text-white px-2 max-w-[1024px]">
				<div className="">
					<Image
						src={`/assets/logo/Drug-Logo-vertical.png`}
						width={166}
						height={130}
						alt="Herbal hovers"
						className="h-auto"
					/>
				</div>

				<div className="flex gap-16 my-16 max-lg:gap-10 max-lg:mt-6 max-lg:mb-12 max-lg:flex-col ">
					<div className="flex flex-col basis-5/12">
						<div className="text-sm font-semibold mb-8">
							Drug International Limited, founded in 1974, is a prominent
							pharmaceutical company in Bangladesh. They're known for innovative
							soft gel capsules and diverse products. They excel in supply chain
							management and have diversified into multiple industries.
						</div>
						<div>
							<p className="uppercase text-lg font-medium underline mb-4">
								Social networks
							</p>
							<div className="flex gap-4">
								<Link
									href="https://www.facebook.com/drugintltd"
									target="_blank"
								>
									<Image
										src={`/assets/icons/footer/facebook.svg`}
										width={24}
										height={24}
										alt="social links"
										className="h-auto w-auto hover:scale-110 cursor-pointer duration-300"
									/>
								</Link>

								<Link
									href="https://bd.linkedin.com/company/drug-international-limited"
									target="_blank"
								>
									<Image
										src={`/assets/icons/footer/linkedin.svg`}
										width={24}
										height={24}
										alt="social links"
										className="h-auto w-auto hover:scale-110 cursor-pointer duration-300"
									/>
								</Link>

								<Link
									href="https://www.youtube.com/@druginternationalltd.6126"
									target="_blank"
								>
									<Image
										src={`/assets/icons/footer/youtube.svg`}
										width={24}
										height={24}
										alt="social links"
										className="h-auto w-auto hover:scale-110 cursor-pointer duration-300"
									/>
								</Link>
							</div>
						</div>
					</div>

					<div className="basis-2/12">
						<p className="uppercase text-lg font-medium underline mb-4">
							quick Links
						</p>
						<div className="flex flex-col uppercase text-base font-medium gap-2">
							<Link href="/news">
								<p className="cursor-pointer hover:ml-0.5 duration-200">
									News & insights
								</p>
							</Link>
							<Link href="/security-check">
								<p className="cursor-pointer hover:ml-0.5 duration-200">
									security check
								</p>
							</Link>
							{/* <p className="cursor-pointer hover:ml-0.5 duration-200">
								terms & conditions
							</p> */}
							<Link href="/faq">
								<p className="cursor-pointer hover:ml-0.5 duration-200">faq</p>
							</Link>
							{/* <p className="cursor-pointer hover:ml-0.5 duration-200">
								cookie policy
							</p> */}
							{/* <p className="cursor-pointer hover:ml-0.5 duration-200">
								sitemap
							</p> */}
						</div>
					</div>

					<div className="basis-5/12 flex flex-col gap-2">
						<p className="uppercase text-lg font-medium underline">Contact</p>
						<div className="inline-flex gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="19"
								height="19"
								viewBox="0 0 19 19"
								fill="none"
							>
								<path
									d="M14.7071 11.7071L17.3552 14.3552C17.7113 14.7113 17.7113 15.2887 17.3552 15.6448C15.43 17.57 12.3821 17.7866 10.204 16.153L8.62857 14.9714C6.88504 13.6638 5.33622 12.115 4.02857 10.3714L2.84701 8.79601C1.21341 6.61788 1.43001 3.56999 3.35523 1.64477C3.71133 1.28867 4.28867 1.28867 4.64477 1.64477L7.29289 4.29289C7.68342 4.68342 7.68342 5.31658 7.29289 5.70711L6.27175 6.72825C6.10946 6.89054 6.06923 7.13846 6.17187 7.34373C7.35853 9.71706 9.28294 11.6415 11.6563 12.8281C11.8615 12.9308 12.1095 12.8905 12.2717 12.7283L13.2929 11.7071C13.6834 11.3166 14.3166 11.3166 14.7071 11.7071Z"
									stroke="white"
									strokeWidth="2"
								/>
							</svg>

							<div className="flex flex-col uppercase text-base font-medium gap-1">
								<p>(+880) 2 223362613-4</p>
								<p>(+880)2 223362621</p>
								<p>(+880) 2 223370257</p>
							</div>
						</div>

						<div className="inline-flex gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.33 6L12 10.75L5.67 6H18.33ZM19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.25L11.4 12.8C11.5731 12.9298 11.7836 13 12 13C12.2164 13 12.4269 12.9298 12.6 12.8L20 7.25V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18Z"
									fill="white"
								/>
							</svg>

							<p className="flex flex-col uppercase text-base font-medium gap-2">
								info@drug-international.com
							</p>
						</div>

						<div className="inline-flex gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M12.398 17.804L12.8585 18.6917L12.8585 18.6917L12.398 17.804ZM11.602 17.804L11.1415 18.6917L11.1415 18.6917L11.602 17.804ZM18 9C18 11.1458 16.9079 12.9159 15.545 14.2906C14.183 15.6644 12.6342 16.555 11.9376 16.9163L12.8585 18.6917C13.6448 18.2838 15.397 17.2805 16.9653 15.6987C18.5326 14.1178 20 11.8706 20 9H18ZM12 3C15.3137 3 18 5.68629 18 9H20C20 4.58172 16.4183 1 12 1V3ZM6 9C6 5.68629 8.68629 3 12 3V1C7.58172 1 4 4.58172 4 9H6ZM12.0624 16.9163C11.3658 16.555 9.81702 15.6644 8.45503 14.2906C7.09211 12.9159 6 11.1458 6 9H4C4 11.8706 5.46741 14.1178 7.03474 15.6987C8.60299 17.2805 10.3552 18.2838 11.1415 18.6917L12.0624 16.9163ZM11.9376 16.9163C11.9514 16.9091 11.9733 16.9023 12 16.9023C12.0267 16.9023 12.0486 16.9091 12.0624 16.9163L11.1415 18.6917C11.6831 18.9726 12.3169 18.9726 12.8585 18.6917L11.9376 16.9163ZM14 9C14 10.1046 13.1046 11 12 11V13C14.2091 13 16 11.2091 16 9H14ZM12 7C13.1046 7 14 7.89543 14 9H16C16 6.79086 14.2091 5 12 5V7ZM10 9C10 7.89543 10.8954 7 12 7V5C9.79086 5 8 6.79086 8 9H10ZM12 11C10.8954 11 10 10.1046 10 9H8C8 11.2091 9.79086 13 12 13V11Z"
									fill="white"
								/>
								<path
									d="M19.7942 17.5C20.5841 17.9561 21 18.4734 21 19C21 19.5266 20.5841 20.0439 19.7942 20.5C19.0043 20.9561 17.8682 21.3348 16.5 21.5981C15.1318 21.8614 13.5798 22 12 22C10.4202 22 8.86817 21.8614 7.5 21.5981C6.13183 21.3348 4.99569 20.9561 4.20577 20.5C3.41586 20.0439 3 19.5266 3 19C3 18.4734 3.41586 17.9561 4.20577 17.5"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>

							<p className="flex flex-col uppercase text-base font-medium ">
								Khwaja Enayetpuri (R) <br /> Tower17, Bir Uttam K.M. <br />
								Shafiullah Road (Green Road), <br /> Dhaka-1205, Bangladesh
							</p>
						</div>
					</div>
				</div>

				<div className="text-center">
					© 2001-{currentYear} Creative matter. All rights reserved. <br />
					Trade marks are owned by or licensed to the Drug international
					limited.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
