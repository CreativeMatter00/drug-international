import Image from "next/image";

function ProductLoader() {
  return (
    <div className="flex justify-center items-center p-12 h-[400px] w-full">
      <Image
        src="/assets/images/loader/loader.png"
        height={200}
        width={200}
        alt="loader"
        className="animate-ping"
      />
    </div>
  );
}

export default ProductLoader;
