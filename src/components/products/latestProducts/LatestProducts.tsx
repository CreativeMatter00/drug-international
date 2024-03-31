"use client";

import ProductCard from "../ProductCard";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function LatestProducts() {
	const router = useRouter();

	const handleBack = () => {
		router.back();
	};
	return (
		<div className="container mx-auto px-2">
			<div className="pb-6 border-b-2 border-[#E4E4E6] mb-16">
				<div className="container mx-auto">
					<button
						className="text-textPrimary font-medium flex items-center gap-4 px-4 hover:text-primary"
						onClick={handleBack}
					>
						<FaArrowLeft /> Back
					</button>
				</div>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-4 mb-16 md:gap-x-4 md:gap-y-14">
				<ProductCard
					src="https://www.drug-international.com/uploads/product_images/Toposar50mg.jpg"
					title="Toposar"
					genericName="Etoposide"
					theraputicName="Oncology"
				/>
				<ProductCard
					src="https://www.drug-international.com/uploads/product_images/Dobixin_01.jpg"
					title="Dobixin"
					genericName="Doxorubicin"
					theraputicName="Oncology"
				/>
				<ProductCard
					src="https://www.drug-international.com/uploads/product_images/Mylostat.jpg"
					title="Mylostat Capsule"
					genericName="Hydroxyurea"
					theraputicName="Oncology"
				/>
				<ProductCard
					src="https://www.drug-international.com/uploads/product_images/15699998851522141958Varox.jpg%20(2).jpg"
					title="Varox"
					genericName="Rivaroxaban"
					theraputicName="Cardiovascular"
				/>
				<ProductCard
					src="https://www.drug-international.com/uploads/product_images/1531116782Sonib%20-c.jpg"
					title="Sonib"
					genericName="Sorafenib"
					theraputicName="Oncology"
				/>
				<ProductCard
					src="https://www.drug-international.com/uploads/product_images/1525760112Depomed_4.jpg"
					title="Depomed"
					genericName="Methylprednisolone"
					theraputicName="Steroid"
				/>
				<ProductCard
					src="https://www.drug-international.com/uploads/product_images/1525760942Ontaxel_30.jpg"
					title="Ontaxel-30"
					genericName="Paclitaxel"
					theraputicName="Oncology"
				/>
				<ProductCard
					src="https://www.drug-international.com/uploads/product_images/1525948609Foly_tab.jpg"
					title="Foly"
					genericName="Folinic"
					theraputicName="Vitamin"
				/>
				<ProductCard
					src="https://www.drug-international.com/uploads/product_images/1526549123Dezco.jpg"
					title="Dezco"
					genericName="Deflazacort"
					theraputicName="Steroid"
				/>
				<ProductCard
					src="https://www.drug-international.com/uploads/product_images/1528785317Foly%20_%20In.jpg.jpg"
					title="Foly Injection"
					genericName="Folinic"
					theraputicName="Steroid"
				/>
				<ProductCard
					src="https://www.drug-international.com/uploads/product_images/1534563816Epiruba_50c.jpg"
					title="Epiruba-50"
					genericName="Epirubicin"
					theraputicName="Oncology"
				/>
				<ProductCard
					src="https://www.drug-international.com/uploads/product_images/1537877176Mes-D-%20Carton%20Pic.jpg"
					title="Mes-D"
					genericName="Mesna"
					theraputicName="Oncology"
				/>
			</div>
		</div>
	);
}

export default LatestProducts;
