import Image from "next/image";
import ButtonPrimary from "../ui/button/ButtonPrimary";
import { BsDownload } from "react-icons/bs";
import Link from "next/link";

function Products() {
  return (
    <div className="relative mt-[-100px] w-full mb-10">
      <div className="container mx-auto bg-white py-8 md:py-14 px-4 md:px-12 rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)]">
        <div className="mt-36 mb-24">
          <div className="flex flex-col items-center gap-6 w-fit mx-auto">
            <p className="font-medium text-base text-textSecondary">
              Download all product list
            </p>
            <ButtonPrimary>
              <BsDownload /> Download
            </ButtonPrimary>
          </div>
        </div>

        <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <Link href={"products/latest-products"}>
            <div className="border-4 border-[#e4e4e6] py-2 px-4 flex items-center relative group overflow-hidden ">
              <div className="flex items-center gap-2 text-primary font-medium text-3xl uppercase group-hover:text-white z-10">
                <p className="">
                  Latest <br /> Products
                </p>
                <Image
                  src={"/assets/images/products/1.png"}
                  width={158}
                  height={180}
                  alt="product"
                  className="w-[130px] h-auto"
                />
              </div>

              {/* <div className="absolute top-1 right-0">
                <div className="h-6 w-6 bg-primary rounded-full group-hover:h-40 group-hover:w-40 duration-700 z-0 transition-all"></div>
              </div> */}

              <div className="absolute top-1 left-0">
                <div className="h-6 w-6 bg-primary rounded-full group-hover:h-40 group-hover:w-96 duration-700 z-0 transition-all"></div>
              </div>
              {/* <div className="absolute top-1 right-0">
                <div className="h-6 w-6 bg-primary rounded-full group-hover:h-96 group-hover:w-96 duration-700 z-0"></div>
              </div> */}
            </div>
          </Link>

          <Link href={"#"}>
            <div className="border border-[#e4e4e6] p-3 flex items-center">
              <div className="flex items-center gap-2 text-primary font-medium text-3xl uppercase">
                <p className="">
                  {" "}
                  Upcoming <br /> Products{" "}
                </p>
                <Image
                  src={"/assets/images/products/1.png"}
                  width={158}
                  height={180}
                  alt="product"
                  className="w-[130px] h-auto"
                />
              </div>
            </div>
          </Link>

          <Link href={"#"}>
            <div className="border border-[#e4e4e6] p-3 flex items-center">
              <div className="flex items-center gap-2 text-primary font-medium text-3xl uppercase">
                <p className="">
                  {" "}
                  All <br /> Products{" "}
                </p>
                <Image
                  src={"/assets/images/products/1.png"}
                  width={158}
                  height={180}
                  alt="product"
                  className="w-[130px] h-auto"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
