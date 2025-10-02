import { Dropdown, DropdownItem } from "flowbite-react";
import { twMerge } from 'tailwind-merge'
import { ChevronDownIcon } from "./Icons";

const CustomSelect = ({
  colClassName = "",
  label = '',
  labelClassName = "",
  selectedOption,
  selectedValue,
  onValueChange,
  wrapperClassName = "",
  valueClassName = "",
  itemClassName = "",
  activeItemClassName = "",
  placeholder = "Select...",
}) => {

  const getSelectedLabel = () =>
    selectedOption.find((opt) => opt.value === selectedValue)?.label ||
    placeholder;

  return (
    <>
      <div className={twMerge("flex flex-col relative", colClassName)}>
        {label && (
          <label value={label} className={twMerge(labelClassName)}>{label}</label>
        )}
        <Dropdown
        className="!min-w-full"
          renderTrigger={() => (
            <div className={twMerge('flex items-center justify-between py-2 px-3 bg-(--bg-grey-50) rounded-[4px] w-full h-9 cursor-pointer', wrapperClassName)}>
              <span className={twMerge('font-urbanist font-normal text-sm text-(--text-gray-200) capitalize', valueClassName)}>{getSelectedLabel()}</span>
              <ChevronDownIcon className="text-(--text-gray-200) text-lg ml-2" />
            </div>
          )}
          dismissOnClick={true}
        >
          {selectedOption?.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => onValueChange(option.value)}
              className={twMerge(
                "w-full bg-(--bg-secondary) text-(--text-primary) capitalize hover:!bg-(--bg-primary) hover:!text-(--text-white) mb-1 transition-all duration-200 ease-in-out", itemClassName,
                selectedValue === option.value
                && twMerge(
                  "bg-(--bg-primary) text-(--text-white) font-semibold",
                  activeItemClassName
                )
              )}
            >
              {option.label}
            </DropdownItem>
          ))}
        </Dropdown>
      </div>
    </>
  )
}

export default CustomSelect