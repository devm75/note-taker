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
    <div>
      <label
        id="listbox-label"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Status
      </label>
      <div className="relative mt-2">
        <button
          type="button"
          className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={toggleDropdown}
        >
          <span className="flex items-center">
            <span className="ml-3 block truncate">Tom Cook</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"></span>
        </button>

        {/* <!--
        Select popover, show/hide based on select state.
  
        Entering: ""
          From: ""
          To: ""
        Leaving: "transition ease-in duration-100"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
        {showDropdownOptions && (
          <ul
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {/* <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
  
          Highlighted: "bg-indigo-600 text-white", Not Highlighted: "text-gray-900"
        --> */}
            <li
              className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
              id="listbox-option-0"
              role="option"
            >
              <div className="flex items-center">
                {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                <span className="ml-3 block truncate font-normal">
                  Wade Cooper
                </span>
              </div>

              {/* <!--
            Checkmark, only display for selected option.
  
            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          --> */}
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"></span>
            </li>

            {/* <!-- More items... --> */}
          </ul>
        )}
      </div>
    </div>
  );
};
