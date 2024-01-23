import Achievements from "@/components/home/Achievements";
import BAB from "@/components/home/BAB";
import CSR from "@/components/home/CSR";
import Hero from "@/components/home/Hero";
import LatestProducts from "@/components/home/LatestProducts";
import SecurityCheck from "@/components/home/SecurityCheck";
import SpecializedProducts from "@/components/home/SpecializedProducts";
import WhoWeAre from "@/components/home/WhoWeAre";
import SearchModal from "../share/Modal/SearchModal";
import Search from "../ui/navSidebar/search/Search";

function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <LatestProducts />
      <SecurityCheck />
      <SpecializedProducts />
      <CSR />
      <Achievements />
      <BAB />

      {/* <SearchModal modalHead="">
        <Search />
      </SearchModal> */}

      {/* <Modal
        modalHead="Select your preferred language"
        setModalOpen={setLanguageOpen}
        addModalOpen={languageModalOpen}
      >
        <Language />
      </Modal>

      <SearchModal modalHead="">
        <Search />
      </SearchModal> */}
    </div>
  );
}

export default Home;
