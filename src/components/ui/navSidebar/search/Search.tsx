import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { DNA } from "react-loader-spinner";

const Search = () => {
	const [search, setSearch] = useState("");

	const debouncedSearchTerm = useDebounce(search, 200);

	const { data, isLoading, error } = useQuery({
		queryKey: ["search", debouncedSearchTerm],
		queryFn: () => {
			if (debouncedSearchTerm) {
				return fetch(
					`http://103.219.160.253:5454/drug-website/api/GetProductByTrade/${debouncedSearchTerm}`
				).then((res) => res.json());
			}
		},
	});

	console.log(data);

	return (
		<div className="">
			<div className="text-center text-lg font-bold"> Search Product </div>
			<input
				className="bg-[#F6F6F6] py-4 px-8 w-full rounded-full mt-8"
				placeholder="Type Something..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			></input>
			<div className="py-8 px-auto md:px-4">
				{isLoading ? (
					<div className="flex items-center justify-center">
						<DNA
							visible={true}
							height="200"
							width="200"
							ariaLabel="dna-loading"
							wrapperStyle={{}}
							wrapperClass="dna-wrapper"
						/>
					</div>
				) : (
					<div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5">
						{data?.map((product: any) => {
							return (
								<div
									className="tooltip border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 flex items-center justify-center"
									key={product?.MEDICINE_ID}
									data-tip={product.MEDICINE_NAME}
								>
									{product.PRODUCT_FET_PHOTO ? (
										<Image
											src={`https://www.drug-international.com/${product?.PRODUCT_FET_PHOTO}`}
											width={245}
											height={165}
											alt="product"
											className="mx-auto"
										/>
									) : (
										<div key={product.MEDICINE_ID} className="">
											<Image
												src="/assets/images/imageNotFound.jpg"
												width={245}
												height={165}
												alt="imageNotFound"
												className="mx-auto"
											/>
										</div>
									)}
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default Search;
