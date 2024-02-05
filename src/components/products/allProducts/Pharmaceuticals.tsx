import Image from "next/image";

function Pharmaceuticals(pharmaceuticalData: any) {
  return (
    <div className="px-5 py-10 mb-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-5">
        {pharmaceuticalData?.pharmaceuticalData?.map((pharmaceutical: any) => (
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
      </div>
    </div>
  );
}

export default Pharmaceuticals;
