interface ButtonPrimaryProps {
	children: React.ReactNode;
	onClick?: () => void; // Optional function for onClick
}

function ButtonPrimary({ children, onClick }: ButtonPrimaryProps) {
	return (
		<button
			className="py-3 px-5 bg-primary text-white rounded-md font-medium flex items-center gap-4"
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default ButtonPrimary;
