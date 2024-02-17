import { getHerbalProducts } from "@/api/api";
import Loader from "@/components/ui/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function Herbal() {
  const locale = useLocale();
  const { isLoading, error, data } = useQuery({
    queryKey: ["getHerbalProducts"],
    queryFn: getHerbalProducts,
  });

  if (error)
    return (
      <div className="text-center text-xl font-md py-8">
        Something went wrong. Please reload
      </div>
    );

  return (
    <div className="px-5 py-10 mb-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-5">
        {isLoading ? (
          <Loader />
        ) : (
          data?.map((product: any) => (
            <Link
              href={`/${locale}/products/${product.MEDICINE_ID}`}
              className="tooltip border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 flex items-center justify-center"
              key={product?.MEDICINE_ID}
              data-tip={product.MEDICINE_NAME}
            >
              {product.PRODUCT_FET_PHOTO ? (
                <Image
                  // src="https://www.drug-international.com/uploads/IMG/1519295580Alocap.jpg"
                  src={`https://www.drug-international.com/${product?.PRODUCT_FET_PHOTO}`}
                  width={245}
                  height={165}
                  alt={product.MEDICINE_NAME}
                  className="mx-auto h-auto w-auto"
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
            </Link>
          ))
        )}

        {/* 
<div className="border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover￼cale-90">
<Image
src="/assets/images/products/all/herbal/1.png"
width={245}
height={165}
alt="product"
className="mx-auto"
/>
</div>
 */}
      </div>
    </div>
  );
}

export default Herbal;
