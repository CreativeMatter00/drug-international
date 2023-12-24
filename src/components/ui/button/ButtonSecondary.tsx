function ButtonSecondary({ children }: { children: React.ReactNode }) {
	return (
		<button className="py-3 px-5 bg-white text-primary rounded-md font-medium">
			{children}
		</button>
	);
}

export default ButtonSecondary;
