function Button({ children }: { children: React.ReactNode }) {
	return (
		<button className="py-3 px-5 bg-primary text-white rounded-md font-medium">
			{children}
		</button>
	);
}

export default Button;
