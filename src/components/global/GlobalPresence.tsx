/* eslint-disable react/no-unescaped-entities */
import styles from "@/styles/Global.module.css";

const GlobalPresence = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="container ">
        <div
          className={`border-[0.5px] border-[#7B7B7B55]  uppercase mb-12 mt-4 py-6 rounded-md flex items-center justify-center gap-4 w-full ${styles.globalPresenceShadow}`}
        >
          {/* <div className="border border-[#7B7B7B55] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.3)] uppercase mb-16 py-6 rounded-md flex items-center justify-center gap-4 w-full"> */}
          <div className="border border-t-primaryShade w-[20%]" />
          <div className="text-base font-medium text-center">
            GLOBAL PRESENCE
          </div>
          <div className="border border-t-primaryShade w-[20%]" />
        </div>

        <div className="text-base font-medium text-justify mb-8 p-2">
          Today, Drug International Limited is exporting its world class
          pharmaceutical finished products to 36 countries. At the age of
          globalization, the world has no boundaries. With the aim to cope with
          the challenges of globalization, the company began export operations
          in 2002. Currently, Drug International Limited is exporting a wide
          range of pharmaceutical products under different therapeutic
          categories. Drug International Limited has a portfolio that consists
          of different types of products such as antiulcerants, antibiotics,
          NSAIDs, antipyretics, vitamins and minerals, cardiovascular,
          anti-diabetics, antihistamines, antipsychotics, etc. Apart from usual
          tablets and capsules, DIL has technologically advanced dosage forms
          such as inhalers, lyophilized injections, pre-filled syringes and
          sophisticated world class life saving oncology products. DIL is also
          exporting different types of herbal products & supplements to many
          countries. Drug International Limited always thrives to introduce
          hi-tech & innovative dosage forms for the betterment of our patients.
          Its state of the art facility is planned and designed with fine tuned
          orientation to meet both local and international demands. The mission
          of Drug International Limited has always been steered by its
          philosophy of promoting "better life through better medicine". Hence,
          its efforts to improve quality never stops. It continuously sets
          higher standards and has the passion to achieve it all. WHO approved
          cGMP guidelines are strictly followed at every step during production.
          Each and every member of the company is working persistently to uphold
          quality. The key purpose of Drug International Limited is to produce
          quality medication that receives respect, recognition and practicing
          reference from the medical practitioners of the country and now,
          abroad. For its honest promise to society and the well-being of the
          global population, Drug International Limited never uses any harmful
          ingredients while manufacturing its products. This is manifested
          clearly in its inhaler manufacturing facility. It has established an
          ultra modern facility to manufacture inhaler products, which are
          completely CFC free. Drug International Limited's built-in Effluent
          Treatment Plant (ETP) ensures environment-friendly pharmaceutical
          waste management practices. To expedite its export mission, Drug
          International Limited conducted bioequivalence studies on a variety of
          its products. These bioequivalence reports have already been accepted
          by the regulatory bodies of several countries and thus, are helping
          export. Drug International Limited also conducted clinical trials on
          its products e.g. Gynomix Soft Capsule (Neomycin Sulphate BP 52mg,
          Polymyxin B Sulphate BP 5.50mg, Nystatin BP 23mg & Metronidazole BP
          200mg). More trials are in progress. Drug International Limited is
          moving forward vigorously to increase its market share in the
          operating countries and to explore new ones. A few African, Middle
          Eastern, and Central American countries are under active search.
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
