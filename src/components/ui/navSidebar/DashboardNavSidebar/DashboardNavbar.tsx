"use client";

import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaExpeditedssl } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

interface DashboardNavbarProps {
	isSidebarVisible: boolean;
	setSidebarVisible: Function;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({
	isSidebarVisible,
	setSidebarVisible,
}) => {
	const [isTooltipVisible, setTooltipVisible] = useState(false);

	const handleSidebarToggle = () => {
		setSidebarVisible(!isSidebarVisible);
	};

	const handleTooltipToggle = () => {
		setTooltipVisible(!isTooltipVisible);
	};

	const logout = () => {
		localStorage.clear();
		// window.location = "/login";
	};

	return (
		<div className="print:hidden">
			<header className="bg-white py-0.5 fixed top-0 left-0 w-full z-50 border">
				<div className="relative">
					<div className="container mx-auto px-4 ">
						<nav className="flex items-center justify-between">
							<div className="font-bold text-xl max-lg:ml-4">
								<Image
									src={`/assets/logo/drug-logo.png`}
									width={170}
									height={61}
									alt="Logo"
									className="h-auto"
									priority
								/>
							</div>

							<ul className="flex space-x-4">
								<li className="text-white"></li>
								<div
									className="flex items-center text-sm font-semibold cursor-pointer relative"
									onMouseEnter={handleTooltipToggle}
									onMouseLeave={handleTooltipToggle}
								>
									<Image
										src={`/assets/icons/profile.png`}
										width={40}
										height={40}
										alt="Logo"
										className="h-auto"
										priority
									/>
									<MdKeyboardArrowDown className="h-5 w-5" />
									{isTooltipVisible && (
										<div className="absolute bg-white border py-2 rounded-lg  right-0 top-8 w-48 animation">
											<div className="divide-y divide-blue-200 flex flex-col ">
												<button
													className={`hover:bg-[#F3F4F6]  cursor-pointer flex justify-between w-full hover:text-indigo-700 py-2 px-4 `}
												>
													<p className="flex items-center text-sm font-semibold ">
														<CgProfile className="h-5 w-5 mr-2" />
														profile
													</p>
												</button>

												<button
													className={`hover:bg-[#F3F4F6]  cursor-pointer flex justify-between w-full hover:text-indigo-700 py-2 px-4 `}
												>
													<p className="flex items-center text-sm font-semibold ">
														<FaExpeditedssl className="h-5 w-5 mr-2" />
														Change Password
													</p>
												</button>

												<button
													className={`hover:bg-[#F3F4F6]  cursor-pointer flex justify-between w-full hover:text-red-700 py-2 px-4`}
													onClick={logout}
												>
													<p className="flex items-center text-sm font-semibold ">
														<RiLogoutBoxLine className="h-5 w-5 mr-2" />
														Logout
													</p>
												</button>
											</div>
										</div>
									)}
								</div>
							</ul>
						</nav>
					</div>
					<button
						className={`absolute mx-2 inset-y-0 left-0 hover:text-indigo-700 border-indigo-500 border-r
        `}
						onClick={handleSidebarToggle}
					>
						{isSidebarVisible ? (
							<TiArrowLeftThick className="h-5 w-5" />
						) : (
							<TiArrowRightThick className="h-5 w-5" />
						)}
					</button>
				</div>
			</header>
		</div>
	);
};

export default DashboardNavbar;
