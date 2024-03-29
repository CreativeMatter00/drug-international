import ButtonInverted from "@/components/ui/button/ButtonInverted";
import ProductCard from "../ProductCard";

function UpcomingProducts() {
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-4 mb-16 md:gap-x-4 md:gap-y-14">
        <ProductCard
          src="/assets/images/products/latest/1.png"
          title="toposar"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/2.png"
          title="dobixin-10"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/3.png"
          title="Ocuberry-160"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/4.png"
          title="Momodol extra"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/5.png"
          title="ivtin-6"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/6.png"
          title="charm-50"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/7.png"
          title="dilavir"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/8.png"
          title="solina-5"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/9.png"
          title="fenat"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/10.png"
          title="dorubin"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/11.png"
          title="famtoid"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/12.png"
          title="favira"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/13.png"
          title="Mypart mix"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/14.png"
          title="Geludrox hs"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/15.png"
          title="eyebrom"
          genericName="etoposide"
          theraputicName="oncology"
        />
        <ProductCard
          src="/assets/images/products/latest/16.png"
          title="menoher-40"
          genericName="etoposide"
          theraputicName="oncology"
        />
      </div>
      <div className="flex justify-center mb-20">
        <ButtonInverted> More Products </ButtonInverted>
      </div>
    </div>
  );
}

export default UpcomingProducts;
