"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSpecializedProductDetail } from "@/api/api";
import Loader from "@/components/ui/loader/Loader";
import { useLocale } from "next-intl";

function Page() {
  const param = useParams<{ id: string }>();

  const locale = useLocale();

  const { isLoading, error, data } = useQuery({
    queryKey: ["specializedProducts", param.id],
    queryFn: ({ queryKey }) => getSpecializedProductDetail(queryKey[1]),
  });

  if (error)
    return (
      <div className="text-center text-xl font-md py-8">
        Something went wrong. Please reload
      </div>
    );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="pt-20 mb-4">
          <div className="pb-6 border-b-2 border-[#E4E4E6] mb-16">
            <div className="container mx-auto">
              <Link
                href={`/${locale}/home`}
                className="text-primary font-medium flex items-center gap-4 px-4"
              >
                <FaArrowLeftLong /> Go Back
              </Link>
            </div>
          </div>

          <div className="container mx-auto font-medium px-4">
            <p className="pt-20 pb-12 text-4xl text-primaryShade uppercase">
              {data[0].SUB_TITTLE}
            </p>
            <p className="text-textSecondary text-base mb-12">
              {data[0].SPECIAL_DESC}
              hi
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-5 mb-10 md:mb-20">
              {data.specializedP.map((product: any) => (
                <Link
                  href={`/${locale}/products/${product.MEDICINE_ID}`}
                  key={product.MEDICINE_ID}
                  className="flex items-center justify-center border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 min-h-[10rem]"
                >
                  <Image
                    src={`https://www.drug-international.com/${product.PRODUCT_FET_PHOTO}`}
                    width={245}
                    height={165}
                    alt="product"
                    className="mx-auto h-auto w-auto"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
