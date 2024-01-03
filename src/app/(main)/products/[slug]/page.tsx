import SingleProduct from "@/components/products/singleProduct/SingleProduct";

export default function Page({ params }: { params: { slug: string } }) {
	return (
		<div>
			<SingleProduct slug={params.slug} />
		</div>
	);
}
