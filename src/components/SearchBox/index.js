import React from "react";
import "./style.scss";

const SearchBox = ({ styleName, placeholder, onChange, value }) => {
  return (
    <div className={`search-bar right-side-icon bg-transparent ${styleName}`}>
      <div className="form-group">
        <input
          className="form-control border-0"
          type="search"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <img
          className="icon-search"
          src={require("assets/images/icon-search.png").default}
          alt="icon-search"
        />
      </div>
    </div>
  );
};
export default SearchBox;

SearchBox.defaultProps = {
  styleName: "",
  value: "",
};
