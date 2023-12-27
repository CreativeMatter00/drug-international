"use client";

interface optionProps {
  optionName: string;
  isSelected: boolean;
  onItemClick: (item: string) => void;
}

const SearchOption: React.FC<optionProps> = ({
  optionName,
  isSelected,
  onItemClick,
}) => {
  return (
    <div
      className={`flex gap-2 text-lg font-medium items-center cursor-pointer ${
        isSelected ? "selected" : ""
      }`}
      onClick={() => onItemClick(optionName)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle cx="8" cy="8" r="8" fill="#E4E4E6" />
        <circle cx="8" cy="8" r="6" fill={isSelected ? "#DF343A" : "#E4E4E6"} />
      </svg>
      {optionName}
    </div>
  );
};

export default SearchOption;
