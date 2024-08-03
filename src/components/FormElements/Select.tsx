import React, { useState } from "react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  placeholder: string;
  options: Option[];
  onSelectOption: () => void;
  selectedValue: string;
};
export const Select = ({
  placeholder,
  options,
  onSelectOption,
  selectedValue,
}: SelectProps): React.ReactNode => {
  const [showDropdownOptions, setShowDropdownOptions] = useState(false);

  const toggleDropdown = () => {
    setShowDropdownOptions((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className=" inline-flex min-h-40 w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {placeholder}
          {
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          }
        </button>
      </div>
      {showDropdownOptions && (
        <div
          className="absolute right-0 left-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {options?.map((ele, index) => (
            <div
              className="py-1"
              role="none"
              onClick={() => {
                toggleDropdown();
              }}
            >
              <span
                className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                role="menuitem"
                tabIndex={-1}
                id={`menu-item-${index}`}
              >
                {ele?.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
