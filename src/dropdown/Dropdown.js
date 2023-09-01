import React, { useState } from "react";
import style from "./Dropdown.module.css";

function Dropdown({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleHover = () => {
    setIsOpen(true);
  };

  const handleItemClick = (item) => {
    setDropdownValue(item);
    setIsOpen(false); // Close the dropdown when an item is clicked
  };

  return (
    <div className={style.dropdownContainer}>
      <h1>Should you use a Dropdown?</h1>
      <select className={style.dropdownButton} onMouseEnter={handleHover}>
        <option value="" disabled selected>
          {dropdownValue ? dropdownValue : "select"}
        </option>
      </select>
      {isOpen && (
        <ul className={style.dropdownList}>
          {items.map((item, index) => (
            <li
              key={index}
              className={style.dropdownItem}
              onClick={() => handleItemClick(item)} // Close the dropdown when an item is clicked
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
