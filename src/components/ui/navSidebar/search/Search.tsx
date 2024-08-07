import { getSearchedProducts } from "@/api/api";
import useDebounce from "@/hooks/useDebounce";
import { handleInitialSearchStop } from "@/redux/Reducer/MainSlice";
import { useQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DNA } from "react-loader-spinner";
import { useDispatch } from "react-redux";

const Search = () => {
  const [search, setSearch] = useState("");
  const locale = useLocale();
  const dispatch = useDispatch();

  const debouncedSearchTerm = useDebounce(search, 200);

  const { data, isLoading } = useQuery({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: () => {
      if (debouncedSearchTerm) {
        return getSearchedProducts(debouncedSearchTerm);
      }
    },
  });

  const t = useTranslations("Search");

  return (
    <div className="">
      <div className="text-center text-lg font-bold">
        {/* Search Product */}
        {t("searchProduct")}
      </div>
      <input
        className="bg-[#F6F6F6] py-4 px-8 w-full rounded-full mt-8"
        placeholder={t("searchPlaceholder")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
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
                <Link
                  href={`/${locale}/products/${product.MEDICINE_ID}`}
                  className="tooltip border border-[#e4e4e6] primaryShadow rounded-md w-full transition-all cursor-pointer hover:border-primary hover:scale-90 flex items-center justify-center min-h-[10rem]"
                  onClick={() => dispatch(handleInitialSearchStop())}
                  key={product?.MEDICINE_ID}
                  data-tip={product.MEDICINE_NAME}
                >
                  {product.PRODUCT_FET_PHOTO ? (
                    <Image
                      src={`https://www.drug-international.com/${product?.PRODUCT_FET_PHOTO}`}
                      width={245}
                      height={165}
                      alt="product"
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
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
