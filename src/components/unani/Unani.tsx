import Description from "./Description";
import Hero from "./Hero";
import Nature from "./Nature";
import OurProducts from "./OurProducts";

function Unani() {
  return (
    <div>
      <div className="relative">
        <Hero />
        <Description />
        <Nature />
        <OurProducts />
      </div>
    </div>
  );
}

export default Unani;
