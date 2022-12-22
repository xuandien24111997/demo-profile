import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import SearchBox from "components/SearchBox";
import { useDebounce } from "hooks/useDebound";
import CircularProgress from "@material-ui/core/CircularProgress";
import BasketModal from "./components/TimeModal";
import Table from "./components/Table";

const Time = ({
  getListTimesAction,
  updateTimeAction,
  loading,
  listTimes,
  getAllPagingResponseDTO,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const debounceSearchQuery = useDebounce(searchKey, 500);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [time, setTime] = useState({});
  const [picture, setPicture] = useState({
    VirtualPath: "",
    formFile: "",
  });
  const [language, setLanguage] = useState("");
  useEffect(() => {
    let data = {
      Keyword: debounceSearchQuery,
      TotalOrderForOnePage: 10,
      PageNumber: pageNumber,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
    };
    getListTimesAction(data);
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
      <p className="page-title">Time</p>
      <div className="languages__body">
        <div className="module-box-header header-search">
          <div className="header-search__input col-8 pl-0">
            <SearchBox
              placeholder="Search Time"
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
                  style={{ width: "9%" }}
                >
                  Image
                </th>
                <th className="title-thead title-right">Word</th>
                <th className="title-thead title-right">Spelling</th>
                <th className="title-thead title-right">Means</th>
                <th
                  className="title-thead title-right"
                  style={{ width: "25%" }}
                >
                  Audio
                </th>
                <th
                  className="title-thead title-thead-right"
                  style={{ width: "5.59%" }}
                >
                  {}
                </th>
              </tr>
              {loading ? (
                <div className="loading">
                  <CircularProgress />
                </div>
              ) : listTimes ? (
                listTimes.map((data, index) => {
                  return (
                    <Table
                      key={index}
                      data={data}
                      setIsVisibleModal={setIsVisibleModal}
                      setTime={setTime}
                      picture={picture}
                      setPicture={setPicture}
                    />
                  );
                })
              ) : (
                <tr className="table-component__title">
                  <td
                    className="title-tbody"
                    colSpan="6"
                    style={{ textAlign: "center" }}
                  >
                    No Data
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
        </div>
      </div>
      <BasketModal
        time={time}
        setTime={setTime}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        handleClose={() => setIsVisibleModal(!isVisibleModal)}
        updateLanguageAction={updateTimeAction}
        setPicture={setPicture}
        picture={picture}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getListTimesAction,
    updateTimeAction,
  } = require("redux/adminTimeRedux");
  return {
    getListTimesAction: (data) => dispatch(getListTimesAction(data)),
    updateTimeAction: (data) => dispatch(updateTimeAction(data)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.timeRedux.loading,
  getAllPagingResponseDTO: state.timeRedux.getAllPagingResponseDTO,
  listTimes: state.timeRedux.listTimes,
});

export default connect(mapStateToProps, mapDispatchToProps)(Time);
