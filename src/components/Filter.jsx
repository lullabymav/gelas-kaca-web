import { useState, useEffect, useMemo } from "react";
import Item from "./Item";

export default function Filter(props) {
  // Default Value
  var defaultCategory = [{ name: "Mic", category: "Sound System" }];
  const [categoryList, setCategoryList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  // Add default value on page load
  useEffect(() => {
    setCategoryList(defaultCategory);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return categoryList;
    }
    return categoryList.filter((item) => item.category === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, categoryList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="app">
      <div className="filter-container">
        <div>
          <select
            className="btn-in rounded-full px-2"
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value={`${props.name1}`}>{props.name1}</option>
            <option value={`${props.name2}`}>{props.name2}</option>
            <option value={`${props.name3}`}>{props.name3}</option>
            <option value={`${props.name4}`}>{props.name4}</option>
          </select>
        </div>
      </div>
      <div className="Category-list">
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div>
    </div>
  );
}
