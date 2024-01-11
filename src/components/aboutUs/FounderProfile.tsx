import Image from "next/image";

function FounderProfile() {
	return (
		<div>
			<Image
				src={"/assets/images/aboutUs/Founder Chairman.png"}
				width={378}
				height={348}
				alt="Founder Chairman"
				className="m-auto"
			/>
			<div className="text-center mb-10">
				<p className="font-bold text-lg text-primary uppercase mb-4">
					Dr. M. M. Amjad Hussain
				</p>
				<p className="text-textLight text-base">
					October 1, 1925 to September 11, 2012
				</p>
				<p className="text-textSecondary font-semibold text-base">
					Honourable Founder Chairman
					<br />
					and Managing Director
				</p>
				<div className="border-4 border-white border-t-primaryShade w-[120px] mx-auto mt-2" />
			</div>
			<div className="p-8 bg-primaryShade relative mb-10 rounded-md">
				<p className="font-medium text-lg text-white mb-10">
					Dr. M. M. Amjad Hussain was born on October 1st 1925 in the village of
					Enayetpur, District of Sirajganj. He had obtained his MBBS from
					Calcutta Medical College, India in 1948. He was the Founding Managing
					Director and Chairman of the following industries / companies /
					organizations:
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 text-white font-medium text-base">
					<ul className="flex flex-col gap-3 mb-3 md:mb-0">
						<li>Khwaja Yunus Ali(R) Medical College & Hospital</li>

						<li>Khwaja Yunus Ali(R) University </li>

						<li>Khwaja Yunus Ali(R) Foundation </li>

						<li>KYAMCH Nursing Institute</li>

						<li>Khwaja Yunus Ali(R) Laboratory School</li>

						<li>Drug International Limited</li>

						<li>Drug International Limited (Basic Chemical Division) </li>

						<li>ATI Limited </li>

						<li>ATI Ceramics Limited</li>
					</ul>

					<ul className="flex flex-col gap-3">
						<li> M. M. Tea Estate </li>

						<li> Drug International Unani Limited </li>

						<li> Drug International Herbal Division </li>

						<li> M. M. Multi Fibers Limited </li>

						<li> Alhaj Moslemuddin and Sons</li>

						<li> Bangladesh Kapok Mills Limited</li>

						<li> Alhaj Textile Mills Limited</li>

						<li> Alhaj Jute Mills Limited</li>

						<li>Meher-Un-Nessa Girls High School</li>
					</ul>
				</div>
			</div>

			<div className="font-medium text-lg text-textPrimary">
				Dr. M. M. Amjad Hussain started his career as a Doctor in the Pakistan
				Army Medical Corps in 1950. He left the army three years later and
				started a business in Chittagong, the port city of Bangladesh. In 1958
				he established an export oriented company in Chittagong by the name of
				“Pakistan Kapok Mills Limited” and started exporting Kapok fibers to
				USA. In 1962 he founded a textile company named “Alhaj Textile Mills
				Limited” which, at the time, was the largest textile company in
				Bangladesh. In 1967, he set up a jute mill named “Alhaj Jute Mills
				Limited”. Dr. M. M. Amjad Hussain was the founder and the managing
				director of both the textile and the jute mills.
				<br />
				<br />
				After the independence of Bangladesh all textile and jute mills were
				nationalized by the government from 1974 to 1982. During that time he
				was involved in trading. After denationalization, he became the managing
				director of both the textile and jute mills until November 1991.
				<br />
				<br />
				Dr. M. M. Amjad Hussain was also the former chairman of the Bangladesh
				Textile Mills Association. In 1980, he started a pharmaceutical company
				called “Drug International Limited” which became one of the leading
				pharmaceutical companies in the country. The company expanded its
				activities by setting up a second unit under the name “Drug
				International Limited, Basic Chemical Division” in 1997 in order to
				produce bulk medicines. It was one of the largest bulk drug
				manufacturers in the country. The company inducted another unit named
				“Sterile Unit” which commenced its commercial operations in 2000.
				<br />
				<br />
				In 1998, ATI Limited was established as a software development house. It
				is now one of the largest software firms in the country. ATI Limited has
				an educational and training division for the development and enhancement
				of employee skills and knowledge in the field of computer science.
				<br />
				<br />
				Also in the year 2000, another company named “ATI Ceramics Ltd.” was
				established in the district of Gazipur, to produce ceramic and granito
				tiles. This is currently the only granito tile manufacturer in the
				country.
				<br />
				<br />
				Dr. M. M. Amjad Hussain had also set up a girls’ high school in his
				mother’s name in 1956. “Meher-Un-Nessa Girls High School” at Enayetpur,
				Sirajganj was the only girls’ school in the vicinity at the time.
				<br />
				<br />
				“Drug International Ltd. (Herbal Division)” was founded with a vision to
				bring herbal remedies to society in a contemporary form and to unravel
				the mysteries behind the 5,000 year old science of natural medicine.
				This involved referring to ancient herbal texts, selecting indigenous
				herbs and subjecting the formulations to modern pharmacological,
				toxicological and safety tests to create new drugs and therapies. Since
				it’s inception, the company has focused on developing safe, natural and
				innovative remedies that will help people lead richer, healthier lives.
				Drug International Limited (Herbal Division) is now registered with the
				USFDA.
			</div>
		</div>
	);
}

export default FounderProfile;
