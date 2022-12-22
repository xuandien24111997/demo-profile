import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/icon-search.png";
import Langate_logo from "../../assets/images/Langate-logo.png";
import history from "ultils/history";
import { debounce } from "lodash";
import { getlistLanguageAdminService } from "service/admin/languages";
import Select from "react-select";

const customStyles = {
  indicatorsContainer: () => ({
    display: "none"
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "#66967e",
    border: 0,
    color: "#eaefee",
    padding: "5px 15px 5px 10px",
    borderRadius: "999px",
    fontSize: "18px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#eaefee",
  }),
  container: (provided) => ({
    ...provided,
    width: 240,
  }),
  input: (provided) => ({
    ...provided,
    color: "#eaefee",
  }),
}

function Header() {
  const [show, setShow] = useState(false);
  const [indexActive, setIndexActive] = useState(0);
  const [list, setList] = useState([])

  const [isLoading, setIsLoading] = useState(false);

  const onSearch = debounce((newValue) => {
    if (newValue.length >= 3) {
      setIsLoading(true)
      getlistLanguageAdminService({
        Keyword: newValue,
        TotalOrderForOnePage: 20,
      }).then((response) => {
        setList(response.data.languages)
      }).finally(() => {
        setIsLoading(false)
      })
    } else {
      setList([])
    }
  }, 500)

  const handleChange = (data) => {
    localStorage.setItem("clientLanguage", JSON.stringify(data));
    history.push("/more-about");
  };

  return (
    <div className="header">
      <div className="header__title">
        <div className="title-left">
          <div className="title-logo">
            <img alt="img" src={logo} />
          </div>
          <div className="title-text">
            <img alt="img" src={Langate_logo} width="200" />
          </div>
        </div>
        <div className="title-search">
          <div className="title-search__input">
            <Select value={null} isLoading={isLoading} styles={customStyles} placeholder="Search here" onInputChange={onSearch} menuIsOpen={!!list.length} getOptionLabel={(option) => option.name} options={list} onChange={(option) => handleChange({ id: option._id, name: option.name })} />
          </div>
          <div className="title-search__icon">
            <button>
              {" "}
              <img alt="img" src={search} />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="header__menu ">
        <ul className="menu-ul container">
          <li
            className={`menu-ul__list-li  ${indexActive === 0 ? "active" : ""}`}
            onClick={() => {
              history.push("/");
              setIndexActive(0);
            }}
          >
            Home
          </li>
          <li
            className={`menu-ul__list-li  ${indexActive === 1 ? "active" : ""}`}
            onClick={() => {
              history.push("select-language");
              setIndexActive(1);
            }}
          >
            Languages
          </li>
          <li
            className={`menu-ul__list-li  ${indexActive === 2 ? "active" : ""}`}
            onClick={() => {
              history.push("about-us");
              setIndexActive(2);
            }}
          >
            About us
          </li>
          <li
            className={`menu-ul__list-li  ${indexActive === 3 ? "active" : ""}`}
            onClick={() => {
              history.push("contributes");
              setIndexActive(3);
            }}
          >
            Contribute to the Project
          </li>
          <li
            className={`menu-ul__list-li  ${indexActive === 4 ? "active" : ""}`}
            onClick={() => {
              history.push("external-resources");
              setIndexActive(4);
            }}
          >
            External Resources
          </li>
          <li
            className={`menu-ul__list-li  ${indexActive === 5 ? "active" : ""}`}
            onClick={() => {
              history.push("contact-us");
              setIndexActive(5);
            }}
          >
            Contact us
          </li>
          <li
            className={`menu-ul__list-li  ${indexActive === 6 ? "active" : ""}`}
            onClick={() => {
              history.push("acknowledgement");
              setIndexActive(6);
            }}
          >
            Acknowledgement
          </li>
          <div
            className={`burger-icon ${show && "burger-active"}`}
            onClick={(e) => setShow(!show)}
          >
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
        </ul>
      </div>
      <div className={`head_show-list ${show && "head_show-list--show"}`}>
        <ul className="show-list_menu-ul">
          <li
            className={`menu-ul__list-down  ${
              indexActive === 0 ? "active" : ""
            }`}
            onClick={() => {
              history.push("/");
              setIndexActive(0);
            }}
          >
            Home
          </li>
          <li
            className={`menu-ul__list-down  ${
              indexActive === 1 ? "active" : ""
            }`}
            onClick={() => {
              history.push("select-language");
              setIndexActive(1);
            }}
          >
            Languages
          </li>
          <li
            className={`menu-ul__list-down  ${
              indexActive === 2 ? "active" : ""
            }`}
            onClick={() => {
              history.push("about-us");
              setIndexActive(2);
            }}
          >
            About us
          </li>
          <li
            className={`menu-ul__list-down  ${
              indexActive === 3 ? "active" : ""
            }`}
            onClick={() => {
              history.push("contributes");
              setIndexActive(3);
            }}
          >
            Contribute to the Project
          </li>
          <li
            className={`menu-ul__list-down  ${
              indexActive === 4 ? "active" : ""
            }`}
            onClick={() => {
              history.push("external-resources");
              setIndexActive(4);
            }}
          >
            External Resources
          </li>
          <li
            className={`menu-ul__list-down  ${
              indexActive === 5 ? "active" : ""
            }`}
            onClick={() => {
              history.push("contact-us");
              setIndexActive(5);
            }}
          >
            Contact us
          </li>
          <li
            className={`menu-ul__list-down  ${
              indexActive === 6 ? "active" : ""
            }`}
            onClick={() => {
              history.push("acknowledgement");
              setIndexActive(6);
            }}
          >
            Acknowledgement
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
