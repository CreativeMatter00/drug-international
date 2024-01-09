import { useState } from "react";
import SearchOption from "../AllProductSidebar/SearchOption";

const Language = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  //   const handleAllSideToggle = () => {
  //     setIsAllSidebarVisible(!isAllSidebarVisible);
  //     setIsOverlayVisible(!isOverlayVisible);
  //   };

  //   const handleSearch = () => {
  //     setIsAllSidebarVisible(!isAllSidebarVisible);
  //     setIsOverlayVisible(!isOverlayVisible);
  //   };
  return (
    <div className="flex uppercase p-4">
      <div className="basis-1/2">
        <SearchOption
          optionName="Arabic"
          isSelected={selectedItem === "Arabic"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Afrikaans"
          isSelected={selectedItem === "Afrikaans"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Bulgarian"
          isSelected={selectedItem === "Bulgarian"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Chinese"
          isSelected={selectedItem === "Chinese"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Czech"
          isSelected={selectedItem === "Czech"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Catalan"
          isSelected={selectedItem === "Catalan"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Danish"
          isSelected={selectedItem === "Danish"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Dutch"
          isSelected={selectedItem === "Dutch"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Dari"
          isSelected={selectedItem === "Dari"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="English"
          isSelected={selectedItem === "English"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="French"
          isSelected={selectedItem === "French"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Finnish"
          isSelected={selectedItem === "Finnish"}
          onItemClick={handleItemClick}
        />
      </div>
      <div className="basis-1/2">
        <SearchOption
          optionName="German"
          isSelected={selectedItem === "German"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Hindi"
          isSelected={selectedItem === "Hindi"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Hungarian"
          isSelected={selectedItem === "Hungarian"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Italian"
          isSelected={selectedItem === "Italian"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Japanese"
          isSelected={selectedItem === "Japanese"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Korean"
          isSelected={selectedItem === "Korean"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Portuguese"
          isSelected={selectedItem === "Portuguese"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Polish"
          isSelected={selectedItem === "Polish"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Russian"
          isSelected={selectedItem === "Russian"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Spanish"
          isSelected={selectedItem === "Spanish"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Swedish"
          isSelected={selectedItem === "Swedish"}
          onItemClick={handleItemClick}
        />
        <SearchOption
          optionName="Turkish"
          isSelected={selectedItem === "Turkish"}
          onItemClick={handleItemClick}
        />
      </div>
    </div>
  );
};

export default Language;
