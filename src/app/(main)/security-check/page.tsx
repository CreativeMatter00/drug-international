import ButtonSecondary from "@/components/ui/button/ButtonSecondary";
import React from "react";

function page() {
	return (
		<div className="container mx-auto">
			<div className={`container px-4 z-10 relative m-auto`}>
				<div className="text-center font-semibold text-4xl py-4 uppercase">
					Security Check
				</div>

				<div className="py-[20px] md:py-[40px] text-white">
					<div className="bg-primary opacity-80 h-[460px] rounded-xl">
						<div className="p-10 text-center">
							<p className="text-2xl font-medium mb-6">
								Verify Medicine Security Code
							</p>
							<div className="flex flex-col items-center justify-center gap-4 mx-auto mb-12 md:flex-row">
								<input className="h-12 w-[40%] min-w-[260px] text-black p-2 rounded-md" />
								<ButtonSecondary> VERIFY </ButtonSecondary>
							</div>
							<p className="text-lg font-medium ">Security Check Information</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
