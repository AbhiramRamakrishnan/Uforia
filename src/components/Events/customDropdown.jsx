import { useState } from "react";
import { ChevronDown } from "lucide-react";

function CustomDropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Selected Box */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-28 border border-gray-300 rounded-full px-3 py-1.5 text-xs text-gray-700 bg-white shadow-sm hover:border-pink-400 focus:ring-2 focus:ring-pink-300 transition-all"
      >
        {value.charAt(0).toUpperCase() + value.slice(1)}
        <ChevronDown size={14} className="ml-1 text-gray-500" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <ul className="absolute left-0 mt-1 w-28 bg-white border border-gray-200 rounded-xl shadow-lg text-xs z-10 animate-fadeIn">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`px-3 py-1.5 cursor-pointer hover:bg-pink-50 hover:text-pink-600 transition-all ${
                option === value ? "bg-pink-100 text-pink-600 font-medium" : ""
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
