import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import SearchBox from "components/SearchBox";
import { useDebounce } from "hooks/useDebound";
import CircularProgress from "@material-ui/core/CircularProgress";
import BasketModal from "./components/LanguageModal";
import Table from "./components/Table";

const Language = ({
  getListLanguagesAction,
  getAllPagingResponseDTO,
  listLanguages,
  loading,
  createLanguageAdminAction,
  deleteLanguageAdminAction,
  updateLanguageAction,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const debounceSearchQuery = useDebounce(searchKey, 500);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    let data = {
      Keyword: debounceSearchQuery,
      TotalOrderForOnePage: 10,
      PageNumber: pageNumber,
      IsOrderNewASC: true,
    };
    getListLanguagesAction(data);
  }, [debounceSearchQuery, pageNumber]);

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <div className="languages">
      <p className="page-title">Languages</p>
      <div className="languages__body">
        <div className="module-box-header header-search">
          <div className="header-search__input col-8 pl-0">
            <SearchBox
              placeholder="Search Language"
              notification={false}
              apps={false}
              onChange={(e) => {
                e.persist();
                setSearchKey(e.target.value);
              }}
              value={searchKey}
            />
          </div>
          <div className="module-add-task header-search__create header-search__mt">
            <Button
              className="jr-btn btn-block"
              variant="contained"
              style={{
                backgroundColor: "#927c04",
                color: "#FFFFFF",
                textTransform: "none",
                fontFamily: "OpenSans-Regular",
              }}
              aria-label="add"
              onClick={() => {
                setLanguage({});
                setIsVisibleModal(true);
              }}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>Add New Language</span>
            </Button>
          </div>
        </div>

        <div className="table">
          <div className="component-table__table-detail">
            <table className="table-component">
              <tr className="table-component__title">
                <th
                  className="title-thead title-thead-left"
                  style={{ width: "34.33%" }}
                >
                  Name
                </th>
                <th
                  className="title-thead title-right"
                  style={{ width: "25.9%" }}
                >
                  Date Created
                </th>
                <th
                  className="title-thead title-thead-right"
                  style={{ width: "5.59%" }}
                >
                  {}
                </th>
              </tr>
              {listLanguages ? (
                listLanguages.map((data, index) => {
                  return (
                    <Table
                      key={data.id}
                      data={data}
                      setIsVisibleModal={setIsVisibleModal}
                      setLanguage={setLanguage}
                      deleteLanguageAdminAction={deleteLanguageAdminAction}
                    />
                  );
                })
              ) : (
                <tr className="table-component__title">
                  <td
                    className="title-tbody"
                    colSpan="4"
                    style={{ textAlign: "center" }}
                  >
                    no data
                  </td>
                </tr>
              )}
            </table>
          </div>
          <div className="pagination">
            <Pagination
              count={getAllPagingResponseDTO.PageTotal}
              onChange={handleChange}
              variant="outlined"
            />
          </div>
          <div className="loading">{loading && <CircularProgress />}</div>
        </div>
      </div>
      <BasketModal
        language={language}
        setLanguage={setLanguage}
        isVisibleModalArea={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        handleClose={() => setIsVisibleModal(!isVisibleModal)}
        createLanguageAdminAction={createLanguageAdminAction}
        updateLanguageAction={updateLanguageAction}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getListLanguagesAction,
    createLanguageAdminAction,
    deleteLanguageAdminAction,
    updateLanguageAction,
  } = require("redux/adminLanguagesRedux");
  return {
    getListLanguagesAction: (data) => dispatch(getListLanguagesAction(data)),
    createLanguageAdminAction: (data) =>
      dispatch(createLanguageAdminAction(data)),
    deleteLanguageAdminAction: (data) =>
      dispatch(deleteLanguageAdminAction(data)),
    updateLanguageAction: (data) => dispatch(updateLanguageAction(data)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.languageRedux.loading,
  getAllPagingResponseDTO: state.languageRedux.getAllPagingResponseDTO,
  listLanguages: state.languageRedux.listLanguages,
});

export default connect(mapStateToProps, mapDispatchToProps)(Language);
