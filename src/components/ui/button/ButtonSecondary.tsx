interface ButtonSecondaryProps {
	children: React.ReactNode;
	onClick?: () => void; // Optional function for onClick
}

function ButtonSecondary({ children, onClick }: ButtonSecondaryProps) {
	return (
		<button
			className="py-3 px-5 bg-white text-primary rounded-md font-medium"
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default ButtonSecondary;
