import React from "react";
import './FilterBar.css';

function FilterBar({ filters, onFilterChange }) {
  // Define the handleChange function for condition filter
  const handleConditionChange = (event) => {
    const { value, name } = event.target;
    onFilterChange({ name, value });
  };

  return (
    <div className="filter-sidebar">
      <h2>🛒</h2>
      <div>
        <div className="condition-option">
          <label className="sidebar-label-container">
            <input
              onChange={handleConditionChange}
              type="radio"
              value=""
              name="condition"
            />
            <span className="checkmark"></span>All
          </label>
        </div>
        <div className="condition-option">
          <label className="sidebar-label-container">
            <input
              onChange={handleConditionChange}
              type="radio"
              value="new"
              name="condition"
            />
            <span className="checkmark"></span>New
          </label>
        </div>
        <div className="condition-option">
          <label className="sidebar-label-container">
            <input
              onChange={handleConditionChange}
              type="radio"
              value="used"
              name="condition"
            />
            <span className="checkmark"></span>Used
          </label>
        </div>
        <div className="condition-option">
          <label className="sidebar-label-container">
            <input
              onChange={handleConditionChange}
              type="radio"
              value="refurbished"
              name="condition"
            />
            <span className="checkmark"></span>Refurbished
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
