"use client";

import { securityCheck } from "@/api/api";
import ButtonPrimary from "@/components/ui/button/ButtonPrimary";
import axios from "axios";
import { useState } from "react";

function Page() {
	const [code, setCode] = useState("");
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleVerifyClick = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(
				`http://103.219.160.253:5454/drug-website/api/CheckScurityCode/${code}`
			);
			setData(response.data);
		} catch (error) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	console.log("🚀 ~ Page ~ code:", code);
	console.log(data);

	return (
		<div className="container mx-auto">
			<div className={`container px-4 z-10 relative m-auto`}>
				<div className="text-center font-semibold text-4xl py-4 uppercase">
					Security Check
				</div>

				<div className="py-[20px] md:py-[40px]">
					<div className=" opacity-80 h-[460px] rounded-xl">
						<div className="p-10 text-center">
							<p className="text-2xl font-medium mb-6">
								Verify Medicine Security Code
							</p>
							<div className="flex flex-col items-center justify-center gap-4 mx-auto mb-12 md:flex-row">
								<input
									className="h-12 w-[40%] min-w-[260px] text-black p-2 border-2 border-primary rounded-md"
									onChange={(e) => setCode(e.target.value)}
								/>
								<ButtonPrimary onClick={handleVerifyClick}>
									VERIFY
								</ButtonPrimary>
							</div>
							<p className="text-lg font-medium ">Security Check Information</p>
							<div>{isLoading && <p className="text-center"> Loading </p>}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page;
