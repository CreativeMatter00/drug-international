function ButtonPrimary({ children }: { children: React.ReactNode }) {
	return (
		<button className="py-3 px-5 bg-white text-textPrimary rounded-md font-medium">
			{children}
		</button>
	);
}

export default ButtonPrimary;
