import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import SearchBox from "components/SearchBox";
import { useDebounce } from "hooks/useDebound";
import CircularProgress from "@material-ui/core/CircularProgress";
import BasketModal from "./components/FingerCountingModal";
import Table from "./components/Table";

const FingerCounting = ({
  getlistFingerCountingsAction,
  getAllPagingResponseDTO,
  listFingerCountings,
  loading,
  createLanguageAdminAction,
  deleteLanguageAdminAction,
  updateFingerCountingAction,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const debounceSearchQuery = useDebounce(searchKey, 500);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [fingerCountingData, setFingerCountingData] = useState({});
  const [language, setLanguage] = useState("");

  useEffect(() => {
    let data = {
      Keyword: debounceSearchQuery,
      TotalOrderForOnePage: 10,
      PageNumber: pageNumber,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
    };
    getlistFingerCountingsAction(data);
  }, [debounceSearchQuery, pageNumber, language]);
  useEffect(() => {
    setLanguage(JSON.parse(localStorage.getItem("idLanguage")));
  }, [
    typeof window !== undefined &&
      JSON.parse(localStorage.getItem("idLanguage")),
  ]);
  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <div className="languages">
      <p className="page-title">Finger Counting</p>
      <div className="languages__body">
        <div className="module-box-header header-search">
          <div className="header-search__input col-8 pl-0">
            <SearchBox
              placeholder="Search Finger Counting"
              notification={false}
              apps={false}
              onChange={(e) => {
                e.persist();
                setSearchKey(e.target.value);
              }}
              value={searchKey}
            />
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
                  Image
                </th>
                <th
                  className="title-thead title-right"
                  style={{ width: "25.9%" }}
                >
                  Number
                </th>
                <th
                  className="title-thead title-thead-right"
                  style={{ width: "5.59%" }}
                >
                  {}
                </th>
              </tr>
              {listFingerCountings ? (
                listFingerCountings.map((data, index) => {
                  return (
                    <Table
                      key={data.id}
                      data={data}
                      setIsVisibleModal={setIsVisibleModal}
                      setFingerCountingData={setFingerCountingData}
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
        fingerCountingData={fingerCountingData}
        setFingerCountingData={setFingerCountingData}
        isVisibleModalArea={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        handleClose={() => setIsVisibleModal(!isVisibleModal)}
        updateFingerCountingAction={updateFingerCountingAction}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getlistFingerCountingsAction,
    updateFingerCountingAction,
  } = require("redux/adminFingerCountingRedux");
  return {
    getlistFingerCountingsAction: (data) =>
      dispatch(getlistFingerCountingsAction(data)),
    updateFingerCountingAction: (data) =>
      dispatch(updateFingerCountingAction(data)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.fingerCounting.loading,
  getAllPagingResponseDTO: state.fingerCounting.getAllPagingResponseDTO,
  listFingerCountings: state.fingerCounting.listFingerCountings,
});

export default connect(mapStateToProps, mapDispatchToProps)(FingerCounting);
