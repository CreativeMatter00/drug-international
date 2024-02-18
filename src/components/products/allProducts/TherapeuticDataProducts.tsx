import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function TherapeuticDataProducts(therapeuticData: any) {
  const locale = useLocale();
  if (therapeuticData?.error)
    return (
      <div className="text-center text-xl font-md py-8">
        Something went wrong. Please reload
      </div>
    );

  return (
    <div className="px-5 py-10 mb-10">
      <div className="flex justify-center items-center text-4xl font-medium text-slate-600 -mt-14 p-5 mb-4">
        {therapeuticData?.therapeuticData.therapeticPd[0]?.TH_GRP_NAME}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-5">
        {therapeuticData?.therapeuticData?.therapeticPd?.map(
          (pharmaceutical: any) => (
            <Link
              href={`/${locale}/products/${pharmaceutical.MEDICINE_ID}`}
              className="tooltip border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 flex items-center justify-center min-h-[10rem]"
              key={pharmaceutical?.MEDICINE_ID}
              data-tip={pharmaceutical.MEDICINE_NAME}
            >
              {pharmaceutical.PRODUCT_FET_PHOTO ? (
                <Image
                  src={`https://www.drug-international.com/${pharmaceutical?.PRODUCT_FET_PHOTO}`}
                  width={245}
                  height={165}
                  alt="product"
                  className="mx-auto h-auto w-auto"
                />
              ) : (
                <div key={pharmaceutical.MEDICINE_ID} className="">
                  <Image
                    src="/assets/images/imageNotFound.jpg"
                    width={245}
                    height={165}
                    alt="imageNotFound"
                    className="mx-auto h-auto w-auto"
                  />
                </div>
              )}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default TherapeuticDataProducts;
