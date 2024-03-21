"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavSidebar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const pathName = usePathname().toString();
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="h-screen p-4 bg-[#FFFFFF] flex flex-col justify-between border-t w-full">
        <div className=" h-full overflow-auto p-4 uppercase ">
          <div className="flex flex-col gap-3 text-base font-medium justify-center items-center">
            <Link href={`/${locale}/about-us`}>
              <div
                className={`p-2.5 cursor-pointer hover:text-primary hover:underline hover:underline-offset-8 ${
                  pathName.includes("about-us")
                    ? "underline underline-offset-8 font-bold text-primary"
                    : ""
                }`}
              >
                {t("aboutUs")}
              </div>
            </Link>

            <Link href={`/${locale}/our-legacy`}>
              <div
                className={`p-2.5 cursor-pointer hover:text-primary hover:underline hover:underline-offset-8 ${
                  pathName.includes("our-legacy")
                    ? "underline underline-offset-8 font-bold text-primary"
                    : ""
                }`}
              >
                {t("ourLegacy")}
              </div>
            </Link>
            <Link href={`/${locale}/products`}>
              <div
                className={`p-2.5 cursor-pointer hover:text-primary hover:underline hover:underline-offset-8 ${
                  pathName.includes("products")
                    ? "underline underline-offset-8 font-bold text-primary"
                    : ""
                }`}
              >
                {t("products")}
              </div>
            </Link>
            <Link href={`/${locale}/facilities`}>
              <div
                className={`p-2.5 cursor-pointer hover:text-primary hover:underline hover:underline-offset-8 ${
                  pathName.includes("facilities")
                    ? "underline underline-offset-8 font-bold text-primary"
                    : ""
                }`}
              >
                {t("facilities")}
              </div>
            </Link>
            <Link href={`/${locale}/contact-us`}>
              <div
                className={`p-2.5 cursor-pointer hover:text-primary hover:underline hover:underline-offset-8 ${
                  pathName.includes("contact-us")
                    ? "underline underline-offset-8 font-bold text-primary"
                    : ""
                }`}
              >
                {t("contact")}
              </div>
            </Link>

            <Link href={`/${locale}/global`}>
              <div
                className={`p-2.5 cursor-pointer hover:text-primary hover:underline hover:underline-offset-8 ${
                  pathName.includes("contact-us")
                    ? "underline underline-offset-8 font-bold text-primary"
                    : ""
                } flex gap-2 `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="stroke-[#5B5B5B] hover:stroke-primary group-hover:animate-spin"
                >
                  <path
                    d="M12.7734 24.5467C19.2756 24.5467 24.5467 19.2756 24.5467 12.7734C24.5467 6.27111 19.2756 1 12.7734 1C6.27111 1 1 6.27111 1 12.7734C1 19.2756 6.27111 24.5467 12.7734 24.5467Z"
                    className="stroke-primary"
                    //   stroke-width="0.85"
                    strokeWidth="0.85" // Change stroke-width to strokeWidth
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.7733 1V24.5467M12.7733 1C9.1738 1 6.25586 6.2711 6.25586 12.7734C6.25586 19.2756 9.1738 24.5467 12.7733 24.5467M12.7733 1C16.3727 1 19.2907 6.2711 19.2907 12.7734C19.2907 19.2756 16.3727 24.5467 12.7733 24.5467"
                    className="stroke-primary"
                    strokeWidth="0.85"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.5467 12.7734H1"
                    className="stroke-primary"
                    strokeWidth="0.85"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.865 6.88672H2.68213"
                    className="stroke-primary"
                    strokeWidth="0.85"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.865 18.66H2.68213"
                    className="stroke-primary"
                    strokeWidth="0.85"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Global
              </div>
            </Link>
          </div>
        </div>

        <div className="items-center justify-center pb-16 flex mb-10">
          <div className="flex gap-2">
            <Link href={`/${locale}/home`}>
              <div
                className={`group cursor-pointer flex items-center text-primary ${
                  pathName.includes("herbal") || pathName.includes("unani")
                    ? "block"
                    : "hidden"
                }`}
              >
                <Image
                  src={`/assets/icons/sidebar/Drug Icon.svg`}
                  width={44}
                  height={44}
                  alt="Herbals"
                  className="h-auto group-hover:hidden"
                />
                <Image
                  src={`/assets/icons/sidebar/Drug Icon Hover.svg`}
                  width={44}
                  height={44}
                  alt="Herbal"
                  className="h-auto hidden group-hover:block"
                />
              </div>
            </Link>

            <Link href={`/${locale}/herbal`}>
              <div
                className={`group cursor-pointer flex items-center flex-col uppercase font-bold text-sm text-[#CC7A2D] ${
                  pathName.includes("herbal") ? "hidden" : "block"
                }`}
              >
                <Image
                  src={`/assets/icons/sidebar/Herbal Icon.svg`}
                  width={44}
                  height={44}
                  alt="Herbal"
                  className="h-auto group-hover:hidden"
                />
                <Image
                  src={`/assets/icons/sidebar/Herbal Icon Hover.svg`}
                  width={44}
                  height={44}
                  alt="Herbal"
                  className="h-auto hidden group-hover:block"
                />
              </div>
            </Link>

            <Link href={`/${locale}/unani`}>
              <div
                className={`group cursor-pointer flex items-center flex-col uppercase font-bold text-sm text-[#159A48] ${
                  pathName.includes("unani") ? "hidden" : "block"
                } `}
              >
                <Image
                  src={`/assets/icons/sidebar/Unani Icon.svg`}
                  width={44}
                  height={44}
                  alt="Unanis"
                  className="h-auto group-hover:hidden"
                />
                <Image
                  src={`/assets/icons/sidebar/Unani Icon Hover.svg`}
                  width={44}
                  height={44}
                  alt="Unanis Hovers"
                  className="h-auto hidden group-hover:block"
                />
              </div>
            </Link>

            {/* <div className="group cursor-pointer flex justify-center items-center">
              <Image
                src={`/assets/icons/navbar/Language Icon.svg`}
                width={44}
                height={44}
                alt="latest products"
                className="h-auto  block group-hover:hidden"
              />
              <Image
                src={`/assets/icons/navbar/Language Icon hover.svg`}
                width={44}
                height={44}
                alt="latest products"
                className=" h-auto hidden group-hover:block"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSidebar;
