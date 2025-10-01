import { Dropdown, DropdownItem } from "flowbite-react";
import { IoChevronDownSharp } from "react-icons/io5";
import { twMerge } from 'tailwind-merge'

const CustomSelect = ({
  selectedOption,
  selectedValue,
  onValueChange,
  className = "",
  placeholder = "Select...",
}) => {

const getSelectedLabel = () =>
    selectedOption.find((opt) => opt.value === selectedValue)?.label ||
    placeholder;

    return (
        <>
 <Dropdown
      renderTrigger={() => (
        <div className={twMerge('flex items-center justify-between w-full px-3 py-2 bg-(--bg-secondary) rounded-[4px] cursor-pointer',className)}>
          <span className="font-urbanist font-normal text-sm text-(--text-gray-200) capitalize">{getSelectedLabel()}</span>
          <IoChevronDownSharp className="ml-2" />
        </div>
      )}
      dismissOnClick={true}
    >
      {selectedOption?.map((option) => (
        <DropdownItem
          key={option.value}
          onClick={() => onValueChange(option.value)}
          className={twMerge(
            "w-full bg-(--bg-secondary) text-(--text-primary) capitalize hover:bg-(--bg-primary) hover:text-(--text-white) mb-1 transition-all duration-200 ease-in-out",
            selectedValue === option.value
              ? "bg-(--bg-primary) text-(--text-white) font-semibold"
              : "hover:!bg-(--bg-primary) hover:!text-(--text-white)"
          )}
        >
          {option.label}
        </DropdownItem>
      ))}
    </Dropdown>
        </>
    )
}

export default CustomSelect