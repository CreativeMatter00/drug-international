import Image from "next/image";

const MapPart = () => {
  return (
    <div className="flex justify-center items-center bg-[#014F70]">
      <div className="container p-8">
        <div className="uppercase text-2xl flex justify-center text-white font-medium w-full items-center">
          Global Operation
        </div>
        <div className="h-[500px] w-[1000px] relative border-4 border-red-600">
          {/* <Image
            src="/assets/images/global/Map/afghanistan.png"
            width={1000}
            height={500}
            alt="map"
            className={`m-auto h-auto w-[1000px] cursor-pointer  p-2 `}
          /> */}
          <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-75 border-4 border-red-500 top-4 left-4"></div>
        </div>
      </div>
    </div>
  );
};

export default MapPart;
