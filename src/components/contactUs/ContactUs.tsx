"use client";

import { motion } from "framer-motion";
import { MdOutlineFax } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { ImOffice } from "react-icons/im";
import { GiFactory } from "react-icons/gi";
import ButtonInverted from "../ui/button/ButtonInverted";
import Banner from "../ui/Banner";
import { useLocale, useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IFormInput {
	fullName: string;
	email: string;
	message: string;
	optionsRadios: string;
}

function ContactUs() {
	const revealAnimation = {
		hidden: { scale: 0 },
		visible: { scale: 1, transition: { duration: 0.3 } },
	};

	const t = useTranslations("Contact");
	const locale = useLocale();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		fetch(
			`https://www.drug-international.com/api/GetcontactUs?name=${data.fullName}&email=${data.email}&message=${data.message}&optionsRadios=${data.optionsRadios}`
		)
			.then((response) => {
				if (response.ok) {
					toast.success("Message send successfully!", {
						position: "bottom-left",
						autoClose: 3001,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});
				}
				if (!response.ok) {
					toast.error("Message not send . please try again!", {
						position: "bottom-left",
						autoClose: 3001,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});
				}
				reset();
			})
			.catch((error) => {
				alert("Message not send . please try again.....");
			});
	};

	return (
		<div>
			<div className="relative">
				<Banner
					src="/assets/images/contactUs/banner.jpg"
					title={locale === "cn" ? "联系我们" : "Contact Us"}
				/>

				<div className="relative mt-[-100px] w-full mb-10">
					<div className="container mx-auto bg-white rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)]">
						<motion.div
							initial="hidden"
							animate="visible"
							variants={revealAnimation}
						>
							<p className="p-12 font-medium text-2xl text-textPrimary mb-0 md:mb-16">
								{t("ourAddress")}
							</p>

							<div className="mb-24">
								<div className="grid grid-cols-1 min-[1028px]:grid-cols-3">
									<div className="bg-[#F6F6F6] rounded-tr-2xl"></div>
									<div className="px-9 py-12 flex items-center gap-4 border-b-2 border-[#E4E4E6]">
										<div className="border border-primary text-4xl text-primary p-4 rounded-full">
											<MdOutlineFax />
										</div>
										<div className="w-full">
											<p className="font-medium text-xs uppercase text-textLight text-center mb-2">
												Fax
											</p>
											<p className="font-medium text-sm uppercase text-textSecondary text-center">
												(+880) 2 9671453
											</p>
										</div>
									</div>
									<div className="px-9 py-12 flex items-center gap-4 border-0 md:border-b-2 md:border-[#E4E4E6]">
										<div className="border border-primary text-4xl text-primary p-4 rounded-full">
											<TfiEmail />
										</div>
										<div className="w-full">
											<p className="font-medium text-xs uppercase text-textLight text-center mb-2">
												Email
											</p>
											<p className="font-medium text-sm text-textSecondary text-center">
												info@drug-international.com
											</p>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3">
									<div className="bg-primaryShade flex flex-col items-center justify-center px-9 py-10 text-white gap-2">
										<div className="text-4xl">
											<ImOffice />
										</div>
										<p className="uppercase font-medium text-lg">Head Office</p>
									</div>
									<div className="px-9 py-10 border-b-2 border-[#E4E4E6]">
										<p className="text-textLight uppercase mb-2 text-xs">
											Address
										</p>
										<p className="text-textSecondary text-sm">
											KHWAJA ENAYETPURI (R) TOWER17, Bir Uttam K.M. Shafiullah
											Road (Green Road),Dhaka-1205, Bangladesh
										</p>
									</div>

									<div className="px-9 py-10 border-0 md:border-b-2 md:border-[#E4E4E6]">
										<p className="text-textLight uppercase mb-2 text-xs">Tel</p>
										<p className="text-textSecondary text-sm">
											(+880) 2 223362613-4, (+880) 2 223362621, <br /> (+880) 2
											223370257
										</p>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3">
									<div className="bg-primaryShade flex flex-col items-center justify-center px-9 py-10 text-white gap-2">
										<div className="text-4xl uppercase">
											<GiFactory />
										</div>
										<p className="uppercase font-medium text-lg">
											Factory (Unit - 1)
										</p>
									</div>
									<div className="px-9 py-10 border-b-2 border-[#E4E4E6]">
										<p className="text-textLight uppercase mb-2 text-xs">
											Address
										</p>
										<p className="text-textSecondary text-sm">
											252, Tongi Industrial Area, Tongi, Gazipur, Bangladesh.
										</p>
									</div>

									<div className="px-9 py-10 border-0 md:border-b-2 md:border-[#E4E4E6]">
										<p className="text-textLight uppercase mb-2 text-xs">Tel</p>
										<p className="text-textSecondary text-sm">
											(+880) 2 9810659
										</p>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3">
									<div className="bg-primaryShade flex flex-col items-center justify-center px-9 py-10 text-white gap-2">
										<div className="text-4xl uppercase">
											<GiFactory />
										</div>
										<p className="uppercase font-medium text-lg">
											Factory (Unit - 2)
										</p>
									</div>
									<div className="px-9 py-10 border-b-2 border-[#E4E4E6]">
										<p className="text-textLight uppercase mb-2 text-xs">
											Address
										</p>
										<p className="text-textSecondary text-sm">
											13A & 14A, Tongi I/A, Squibb Road, Tongi, Gazipur,
											Bangladesh
										</p>
									</div>

									<div className="px-9 py-10 border-0 md:border-b-2 md:border-[#E4E4E6]">
										<p className="text-textLight uppercase mb-2 text-xs">Tel</p>
										<p className="text-textSecondary text-sm">
											(+880) 2 9801884
										</p>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3">
									<div className="bg-primaryShade flex flex-col items-center justify-center px-9 py-10 text-white gap-2">
										<div className="text-4xl uppercase">
											<GiFactory />
										</div>
										<p className="uppercase font-medium text-lg">
											Factory (Unit - 3)
										</p>
									</div>
									<div className="px-9 py-10 border-0 md:border-b-2 md:border-[#E4E4E6]">
										<p className="text-textLight uppercase mb-2 text-xs">
											Address
										</p>
										<p className="text-textSecondary text-sm">
											31/1, Satrong Road, Gopalpur, Tongi Industrial Area,
											Gazipur, Bangladesh
										</p>
									</div>

									<div className="border-0 md:border-b-2 md:border-[#E4E4E6]"></div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3">
									<div className="bg-primaryShade rounded-br-xl flex flex-col items-center justify-center px-9 py-10 text-white gap-2">
										<div className="text-4xl uppercase">
											<GiFactory />
										</div>
										<p className="uppercase font-medium text-lg">
											Factory (HERBAL & UNANI)
										</p>
									</div>
									<div className="px-9 py-10 border-b-2 border-[#E4E4E6] md:border-0">
										<p className="text-textLight uppercase mb-2 text-xs">
											Address
										</p>
										<p className="text-textSecondary text-sm">
											Monipur Bazar, Bokran Monipur, Gazipur, Bangladesh
										</p>
									</div>

									<div className=""></div>
								</div>
							</div>

							{/* contact part */}

							<div className="w-4/5 mx-auto font-medium text-base text-textSecondary text-center mb-14">
								{t("formPrompt")}
							</div>

							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="flex flex-col md:flex-row gap-4 font-medium px-4">
									<div className="w-full md:w-1/3 flex flex-col items-center gap-4">
										<p className="text-textLight text-xs">
											You must have to select contact first
										</p>

										<div className="text-xl text-textPrimary">
											<select
												className="w-full border border-textPrimary rounded-md p-2"
												{...register("optionsRadios", { required: true })}
											>
												<option value="0" selected disabled>
													Select Contact
												</option>
												<option value="sshimu7@gmail.com">General Query</option>
												<option value="dpmallick.bd@gmail.com">
													Medical Information
												</option>
												<option value="hr@drug-international.com">
													Career Information
												</option>
												<option value="harun077@yahoo.com">Export Query</option>
												<option value="sshimu7@gmail.com">
													Drug Safety (ADES) & Product Complaints
												</option>
											</select>
											{errors?.optionsRadios?.type === "required" && (
												<p className="text-xs text-red-700 py-4 ">
													Category is required
												</p>
											)}
										</div>
									</div>

									<div className="w-full md:w-2/3">
										<input
											type="text"
											placeholder="Full Name"
											className="bg-[#EFEFF0] p-4 w-full border-b-2 border-black mb-4"
											{...register("fullName", {
												required: true,
												minLength: 3,
											})}
										/>
										{errors?.fullName?.type === "required" && (
											<p className="text-xs text-red-700 pb-4">
												Full name is required
											</p>
										)}
										{errors?.fullName?.type === "minLength" && (
											<p className="text-xs text-red-700 pb-4">
												Full name must be at least 3 characters long
											</p>
										)}

										<input
											type="text"
											placeholder="Email"
											className="bg-[#EFEFF0] p-4 w-full border-b-2 border-black mb-4"
											{...register("email", {
												required: true,
												pattern:
													/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
											})}
										/>
										{errors?.email?.type === "required" && (
											<p className="text-xs text-red-700 pb-4">
												Email is required
											</p>
										)}
										{errors?.email?.type === "pattern" && (
											<p className="text-xs text-red-700 pb-4">
												Invalid email address
											</p>
										)}

										<textarea
											rows={7}
											placeholder="TYPE"
											className="bg-[#EFEFF0] p-4 w-full border-b-2 border-black mb-4"
											{...register("message", {
												required: true,
												minLength: 5,
											})}
										/>

										{errors?.message?.type === "required" && (
											<p className="text-xs text-red-700 pb-4">
												Message is required
											</p>
										)}
										{errors?.message?.type === "minLength" && (
											<p className="text-xs text-red-700 pb-4">
												Message must be at least 5 characters long
											</p>
										)}

										<div className="flex justify-center mb-8">
											<ButtonInverted> SEND </ButtonInverted>
										</div>
										<ToastContainer />
									</div>
								</div>
							</form>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
// "use client";

// import { motion } from "framer-motion";
// import { MdOutlineFax } from "react-icons/md";
// import { TfiEmail } from "react-icons/tfi";
// import { ImOffice } from "react-icons/im";
// import { GiFactory } from "react-icons/gi";
// import ButtonInverted from "../ui/button/ButtonInverted";
// import Banner from "../ui/Banner";
// import { useLocale, useTranslations } from "next-intl";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// interface IFormInput {
//   fullName: string;
//   email: string;
//   message: string;
//   optionsRadios: string;
// }

// function ContactUs() {
//   const revealAnimation = {
//     hidden: { scale: 0 },
//     visible: { scale: 1, transition: { duration: 0.3 } },
//   };

//   const t = useTranslations("Contact");
//   const locale = useLocale();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<IFormInput>();

//   const onSubmit: SubmitHandler<IFormInput> = (data) => {
//     fetch(
//       `http://103.219.160.253:5454/drug-website/api/GetcontactUs?name=${data.fullName}&email=${data.email}&message=${data.message}&optionsRadios=${data.optionsRadios}`
//     )
//       .then((response) => {
//         if (response.ok) {
//           toast.success("Message sent successfully!", {
//             position: "bottom-left",
//             autoClose: 3001,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           });
//         }
//         if (!response.ok) {
//           toast.error("Message not sent . Please try again!", {
//             position: "bottom-left",
//             autoClose: 3001,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           });
//         }
//         reset();
//       })
//       .catch((error) => {
//         alert("Message not send . please try again.....");
//       });
//   };

//   return (
//     <div>
//       <div className="relative">
//         <Banner
//           src="/assets/images/contactUs/banner.jpg"
//           title={locale === "cn" ? "联系我们" : "Contact Us"}
//         />

// <<<<<<< HEAD
//         <div className="relative mt-[-100px] w-full mb-10">
//           <div className="container mx-auto bg-white rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)]">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={revealAnimation}
//             >
//               <p className="p-12  font-medium text-2xl text-textPrimary mb-0 md:mb-16">
//                 {t("ourAddress")}
//               </p>
// =======
// 				<div className="relative mt-[-100px] w-full mb-10">
// 					<div className="container mx-auto bg-white rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)]">
// 						<motion.div
// 							initial="hidden"
// 							animate="visible"
// 							variants={revealAnimation}
// 						>
// 							<p className="p-12 font-medium text-2xl text-textPrimary mb-0 md:mb-16">
// 								{t("ourAddress")}
// 							</p>
// >>>>>>> 81ee1b288843d2bbfba9ac4d04e8f46013a38946

//               <div className="mb-24">
//                 <div className="grid grid-cols-1 min-[1028px]:grid-cols-3">
//                   <div className="bg-[#F6F6F6] rounded-tr-2xl"></div>
//                   <div className="px-9 py-12 flex items-center gap-4 border-b-2 border-[#E4E4E6]">
//                     <div className="border border-primary text-4xl text-primary p-4 rounded-full">
//                       <MdOutlineFax />
//                     </div>
//                     <div className="w-full">
//                       <p className="font-medium text-xs uppercase text-textLight text-center mb-2">
//                         Fax
//                       </p>
//                       <p className="font-medium text-sm uppercase text-textSecondary text-center">
//                         (+880) 2 9671453
//                       </p>
//                     </div>
//                   </div>
//                   <div className="px-9 py-12 flex items-center gap-4 border-0 md:border-b-2 md:border-[#E4E4E6]">
//                     <div className="border border-primary text-4xl text-primary p-4 rounded-full">
//                       <TfiEmail />
//                     </div>
//                     <div className="w-full">
//                       <p className="font-medium text-xs uppercase text-textLight text-center mb-2">
//                         Email
//                       </p>
//                       <p className="font-medium text-sm text-textSecondary text-center">
//                         info@drug-international.com
//                       </p>
//                     </div>
//                   </div>
//                 </div>

// <<<<<<< HEAD
//                 <div className="grid grid-cols-1 md:grid-cols-3">
//                   <div className="bg-primaryShade flex flex-col items-center justify-center px-9 py-10 text-white gap-2">
//                     <div className="text-4xl">
//                       <ImOffice />
//                     </div>
//                     <p className="uppercase font-medium text-lg">
//                       {" "}
//                       Head Office{" "}
//                     </p>
//                   </div>
//                   <div className="px-9 py-10 border-b-2 border-[#E4E4E6]">
//                     <p className="text-textLight uppercase mb-2 text-xs">
//                       Address
//                     </p>
//                     <p className="text-textSecondary text-sm">
//                       KHWAJA ENAYETPURI (R) TOWER17, Bir Uttam K.M. Shafiullah
//                       Road (Green Road),Dhaka-1205, Bangladesh
//                     </p>
//                   </div>
// =======
// 								<div className="grid grid-cols-1 md:grid-cols-3">
// 									<div className="bg-primaryShade flex flex-col items-center justify-center px-9 py-10 text-white gap-2">
// 										<div className="text-4xl">
// 											<ImOffice />
// 										</div>
// 										<p className="uppercase font-medium text-lg">Head Office</p>
// 									</div>
// 									<div className="px-9 py-10 border-b-2 border-[#E4E4E6]">
// 										<p className="text-textLight uppercase mb-2 text-xs">
// 											Address
// 										</p>
// 										<p className="text-textSecondary text-sm">
// 											KHWAJA ENAYETPURI (R) TOWER17, Bir Uttam K.M. Shafiullah
// 											Road (Green Road),Dhaka-1205, Bangladesh
// 										</p>
// 									</div>
// >>>>>>> 81ee1b288843d2bbfba9ac4d04e8f46013a38946

//                   <div className="px-9 py-10 border-0 md:border-b-2 md:border-[#E4E4E6]">
//                     <p className="text-textLight uppercase mb-2 text-xs">Tel</p>
//                     <p className="text-textSecondary text-sm">
//                       (+880) 2 223362613-4, (+880) 2 223362621, <br /> (+880) 2
//                       223370257
//                     </p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3">
//                   <div className="bg-primaryShade flex flex-col items-center justify-center px-9 py-10 text-white gap-2">
//                     <div className="text-4xl uppercase">
//                       <GiFactory />
//                     </div>
//                     <p className="uppercase font-medium text-lg">
//                       Factory (Unit - 1)
//                     </p>
//                   </div>
//                   <div className="px-9 py-10 border-b-2 border-[#E4E4E6]">
//                     <p className="text-textLight uppercase mb-2 text-xs">
//                       Address
//                     </p>
//                     <p className="text-textSecondary text-sm">
//                       252, Tongi Industrial Area, Tongi, Gazipur, Bangladesh.
//                     </p>
//                   </div>

// <<<<<<< HEAD
//                   <div className="px-9 py-10 border-0 md:border-b-2 md:border-[#E4E4E6]">
//                     <p className="text-textLight uppercase mb-2 text-xs">
//                       {" "}
//                       Tel{" "}
//                     </p>
//                     <p className="text-textSecondary text-sm">
//                       (+880) 2 9810659
//                     </p>
//                   </div>
//                 </div>
// =======
// 									<div className="px-9 py-10 border-0 md:border-b-2 md:border-[#E4E4E6]">
// 										<p className="text-textLight uppercase mb-2 text-xs">Tel</p>
// 										<p className="text-textSecondary text-sm">
// 											(+880) 2 9810659
// 										</p>
// 									</div>
// 								</div>
// >>>>>>> 81ee1b288843d2bbfba9ac4d04e8f46013a38946

//                 <div className="grid grid-cols-1 md:grid-cols-3">
//                   <div className="bg-primaryShade flex flex-col items-center justify-center px-9 py-10 text-white gap-2">
//                     <div className="text-4xl uppercase">
//                       <GiFactory />
//                     </div>
//                     <p className="uppercase font-medium text-lg">
//                       Factory (Unit - 2)
//                     </p>
//                   </div>
//                   <div className="px-9 py-10 border-b-2 border-[#E4E4E6]">
//                     <p className="text-textLight uppercase mb-2 text-xs">
//                       Address
//                     </p>
//                     <p className="text-textSecondary text-sm">
//                       13A & 14A, Tongi I/A, Squibb Road, Tongi, Gazipur,
//                       Bangladesh
//                     </p>
//                   </div>

// <<<<<<< HEAD
//                   <div className="px-9 py-10 border-0 md:border-b-2 md:border-[#E4E4E6]">
//                     <p className="text-textLight uppercase mb-2 text-xs">
//                       {" "}
//                       Tel{" "}
//                     </p>
//                     <p className="text-textSecondary text-sm">
//                       (+880) 2 9801884
//                     </p>
//                   </div>
//                 </div>
// =======
// 									<div className="px-9 py-10 border-0 md:border-b-2 md:border-[#E4E4E6]">
// 										<p className="text-textLight uppercase mb-2 text-xs">Tel</p>
// 										<p className="text-textSecondary text-sm">
// 											(+880) 2 9801884
// 										</p>
// 									</div>
// 								</div>
// >>>>>>> 81ee1b288843d2bbfba9ac4d04e8f46013a38946

//                 <div className="grid grid-cols-1 md:grid-cols-3">
//                   <div className="bg-primaryShade flex flex-col items-center justify-center px-9 py-10 text-white gap-2">
//                     <div className="text-4xl uppercase">
//                       <GiFactory />
//                     </div>
//                     <p className="uppercase font-medium text-lg">
//                       Factory (Unit - 3)
//                     </p>
//                   </div>
//                   <div className="px-9 py-10 border-0 md:border-b-2 md:border-[#E4E4E6]">
//                     <p className="text-textLight uppercase mb-2 text-xs">
//                       Address
//                     </p>
//                     <p className="text-textSecondary text-sm">
//                       31/1, Satrong Road, Gopalpur, Tongi Industrial Area,
//                       Gazipur, Bangladesh
//                     </p>
//                   </div>

//                   <div className="border-0 md:border-b-2 md:border-[#E4E4E6]"></div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3">
//                   <div className="bg-primaryShade rounded-br-xl flex flex-col items-center justify-center px-9 py-10 text-white gap-2">
//                     <div className="text-4xl uppercase">
//                       <GiFactory />
//                     </div>
//                     <p className="uppercase font-medium text-lg">
//                       Factory (HERBAL & UNANI)
//                     </p>
//                   </div>
//                   <div className="px-9 py-10 border-b-2 border-[#E4E4E6] md:border-0">
//                     <p className="text-textLight uppercase mb-2 text-xs">
//                       Address
//                     </p>
//                     <p className="text-textSecondary text-sm">
//                       Monipur Bazar, Bokran Monipur, Gazipur, Bangladesh
//                     </p>
//                   </div>

//                   <div className=""></div>
//                 </div>
//               </div>

//               {/* contact part */}

//               <div className="w-4/5 mx-auto font-medium text-base text-textSecondary text-center mb-14">
//                 {t("formPrompt")}
//               </div>

//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="flex flex-col md:flex-row gap-4 font-medium px-4">
//                   <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
//                     <p className="text-textLight text-xs">
//                       You must have to select contact first
//                     </p>

//                     <div className="text-xl text-textPrimary">
//                       <select
//                         className="w-full border border-textPrimary rounded-md p-2"
//                         {...register("optionsRadios", { required: true })}
//                       >
//                         <option value="0" selected disabled>
//                           Select Contact
//                         </option>
//                         <option value="sshimu7@gmail.com">General Query</option>
//                         <option value="dpmallick.bd@gmail.com">
//                           Medical Information
//                         </option>
//                         <option value="hr@drug-international.com">
//                           Career Information
//                         </option>
//                         <option value="harun077@yahoo.com">Export Query</option>
//                         <option value="sshimu7@gmail.com">
//                           Drug Safety (ADES) & Product Complaints
//                         </option>
//                       </select>
//                       {errors?.optionsRadios?.type === "required" && (
//                         <p className="text-xs text-red-700 py-4 ">
//                           Category is required
//                         </p>
//                       )}
//                     </div>
//                   </div>

// <<<<<<< HEAD
//                   <div className="w-full md:w-2/3">
//                     <input
//                       type="text"
//                       placeholder="FULL NAME"
//                       className="bg-[#EFEFF0] p-4 w-full border-b-2 border-black mb-4"
//                       {...register("fullName", {
//                         required: true,
//                         minLength: 3,
//                       })}
//                     />
//                     {errors?.fullName?.type === "required" && (
//                       <p className="text-xs text-red-700 pb-4">
//                         Full name is required
//                       </p>
//                     )}
//                     {errors?.fullName?.type === "minLength" && (
//                       <p className="text-xs text-red-700 pb-4">
//                         Full name must be at least 3 characters long
//                       </p>
//                     )}
// =======
// 									<div className="w-full md:w-2/3">
// 										<input
// 											type="text"
// 											placeholder="Full Name"
// 											className="bg-[#EFEFF0] p-4 w-full border-b-2 border-black mb-4"
// 											{...register("fullName", {
// 												required: true,
// 												minLength: 3,
// 											})}
// 										/>
// 										{errors?.fullName?.type === "required" && (
// 											<p className="text-xs text-red-700 pb-4">
// 												Full name is required
// 											</p>
// 										)}
// 										{errors?.fullName?.type === "minLength" && (
// 											<p className="text-xs text-red-700 pb-4">
// 												Full name must be at least 3 characters long
// 											</p>
// 										)}
// >>>>>>> 81ee1b288843d2bbfba9ac4d04e8f46013a38946

//                     <input
//                       type="text"
//                       placeholder="Email"
//                       className="bg-[#EFEFF0] p-4 w-full border-b-2 border-black mb-4"
//                       {...register("email", {
//                         required: true,
//                         pattern:
//                           /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                       })}
//                     />
//                     {errors?.email?.type === "required" && (
//                       <p className="text-xs text-red-700 pb-4">
//                         Email is required
//                       </p>
//                     )}
//                     {errors?.email?.type === "pattern" && (
//                       <p className="text-xs text-red-700 pb-4">
//                         Invalid email address
//                       </p>
//                     )}

//                     <textarea
//                       rows={7}
//                       placeholder="TYPE"
//                       className="bg-[#EFEFF0] p-4 w-full border-b-2 border-black mb-4"
//                       {...register("message", {
//                         required: true,
//                         minLength: 5,
//                       })}
//                     />

//                     {errors?.message?.type === "required" && (
//                       <p className="text-xs text-red-700 pb-4">
//                         Message is required
//                       </p>
//                     )}
//                     {errors?.message?.type === "minLength" && (
//                       <p className="text-xs text-red-700 pb-4">
//                         Message must be at least 5 characters long
//                       </p>
//                     )}

// <<<<<<< HEAD
//                     <div className="flex justify-center mb-8">
//                       <ButtonInverted> SEND </ButtonInverted>
//                     </div>

//                     <ToastContainer />
//                   </div>
//                 </div>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// =======
// 										<div className="flex justify-center mb-8">
// 											<ButtonInverted> SEND </ButtonInverted>
// 										</div>
// 										<ToastContainer />
// 									</div>
// 								</div>
// 							</form>
// 						</motion.div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// >>>>>>> 81ee1b288843d2bbfba9ac4d04e8f46013a38946
// }

// export default ContactUs;
