/* eslint-disable react/no-unescaped-entities */
import styles from "@/styles/Global.module.css";
import { useTranslations } from "next-intl";

const GlobalPresence = () => {
	const t = useTranslations("Global");

	return (
		<div className="flex justify-center items-center ">
			<div className="container ">
				<div
					className={`border-[0.5px] border-[#7B7B7B55]  uppercase mb-12 mt-4 py-6 rounded-md flex items-center justify-center gap-4 w-full ${styles.globalPresenceShadow}`}
				>
					{/* <div className="border border-[#7B7B7B55] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.3)] uppercase mb-16 py-6 rounded-md flex items-center justify-center gap-4 w-full"> */}

					<div className="border border-t-primaryShade w-[20%]" />
					<div className="text-base font-medium text-center">
						{/* GLOBAL PRESENCE */}
						{t("title")}
					</div>
					<div className="border border-t-primaryShade w-[20%]" />
				</div>

				<div
					className="text-base font-medium text-justify mb-8 p-2"
					dangerouslySetInnerHTML={{ __html: t("description") }}
				/>
			</div>
		</div>
	);
};

export default GlobalPresence;
