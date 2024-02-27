function ButtonInverted({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="py-3 px-5 bg-white text-primary rounded-md font-medium flex items-center gap-4 border border-primary uppercase hover:bg-primary hover:text-white transition-all duration-300"
      type="submit"
    >
      {children}
    </button>
  );
}

export default ButtonInverted;
