function ButtonPrimary({ children }: { children: React.ReactNode }) {
	return (
		<button className="py-3 px-5 bg-primary text-white rounded-md font-medium flex items-center gap-4">
			{children}
		</button>
	);
}

export default ButtonPrimary;
