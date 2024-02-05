import { getHerbalProducts } from "@/api/api";
import Loader from "@/components/ui/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

function Herbal() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["getHerbalProducts"],
    queryFn: getHerbalProducts,
  });

  return (
    <div className="px-5 py-10 mb-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-5">
        {data?.map((pharmaceutical: any) => (
          <div
            className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 flex items-center justify-center"
            key={pharmaceutical?.MEDICINE_ID}
          >
            <Image
              src={`https://www.drug-international.com/${pharmaceutical?.PRODUCT_FET_PHOTO}`}
              width={245}
              height={165}
              alt="product"
              className="mx-auto"
            />
          </div>
        ))}

        {/* {isLoading ? (
					<Loader />
				) : (
					data?.map((product: any) => (
						// <div
						// 	key={product.MEDICINE_ID}
						// 	className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90"
						// >
						<Image
							key={product.MEDICINE_ID}
							src={`https://www.drug-international.com/${product?.PRODUCT_FET_PHOTO}`}
							// src="https://www.drug-international.com/uploads/IMG/1519295580Alocap.jpg"
							width={245}
							height={165}
							alt="product"
							className="mx-auto"
						/>
						// </div>
					))
				)} */}
        {/* 
				<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90">
					<Image
						src="/assets/images/products/all/herbal/1.png"
						width={245}
						height={165}
						alt="product"
						className="mx-auto"
					/>
				</div>
				<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90">
					<Image
						src="/assets/images/products/all/herbal/2.png"
						width={245}
						height={165}
						alt="product"
						className="mx-auto"
					/>
				</div>
				<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
					<Image
						src="/assets/images/products/all/herbal/3.png"
						width={245}
						height={165}
						alt="product"
						className="mx-auto"
					/>
				</div>
				<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
					<Image
						src="/assets/images/products/all/herbal/4.png"
						width={245}
						height={165}
						alt="product"
						className="mx-auto"
					/>
				</div>
				<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
					<Image
						src="/assets/images/products/all/herbal/5.png"
						width={245}
						height={165}
						alt="product"
						className="mx-auto"
					/>
				</div>

				<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
					<Image
						src="/assets/images/products/all/herbal/6.png"
						width={245}
						height={165}
						alt="product"
						className="mx-auto"
					/>
				</div>
				<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
					<Image
						src="/assets/images/products/all/herbal/7.png"
						width={245}
						height={165}
						alt="product"
						className="mx-auto"
					/>
				</div>
				<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
					<Image
						src="/assets/images/products/all/herbal/8.png"
						width={245}
						height={165}
						alt="product"
						className="mx-auto"
					/>
				</div>
				<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
					<Image
						src="/assets/images/products/all/herbal/1.png"
						width={245}
						height={165}
						alt="product"
						className="mx-auto"
					/>
				</div>
				<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 ">
					<Image
						src="/assets/images/products/all/herbal/2.png"
						width={245}
						height={165}
						alt="product"
						className="mx-auto"
					/>
				</div> */}
      </div>
    </div>
  );
}

export default Herbal;
