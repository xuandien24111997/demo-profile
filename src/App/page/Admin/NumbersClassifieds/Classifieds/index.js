import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import SearchBox from "components/SearchBox";
import { useDebounce } from "hooks/useDebound";
import CircularProgress from "@material-ui/core/CircularProgress";
import ClassifidesModal from "./components/ClassifidesModal";
import Table from "./components/Table";

const Classifides = ({
  getListClassifiedAction,
  getAllPagingResponseDTO,
  listClassifieds,
  loading,
  createClassifiedAction,
  deleteClassifiedAction,
  updateClassifiedAction,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const debounceSearchQuery = useDebounce(searchKey, 500);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [classifides, setClassifides] = useState({});
  const [language, setLanguage] = useState("");

  useEffect(() => {
    let data = {
      Keyword: debounceSearchQuery,
      TotalOrderForOnePage: 10,
      PageNumber: pageNumber,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
    };
    getListClassifiedAction(data);
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
      <p className="page-title">Classifidess</p>
      <div className="languages__body">
        <div className="module-box-header header-search">
          <div className="header-search__input col-8 pl-0">
            <SearchBox
              placeholder="Search Classifide"
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
                setClassifides({
                  word: "",
                  spelling: "",
                  description: "",
                  lang: JSON.parse(localStorage.getItem("idLanguage")),
                });
                setIsVisibleModal(true);
              }}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>Add New Classifide</span>
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
                  Word
                </th>
                <th
                  className="title-thead title-thead-left"
                  style={{ width: "34.33%" }}
                >
                  Spelling
                </th>
                <th
                  className="title-thead title-right"
                  style={{ width: "25.9%" }}
                >
                  Description
                </th>
                <th
                  className="title-thead title-thead-right"
                  style={{ width: "5.59%" }}
                >
                  {}
                </th>
              </tr>
              {listClassifieds ? (
                listClassifieds.map((data, index) => {
                  return (
                    <Table
                      key={data.id}
                      data={data}
                      setIsVisibleModal={setIsVisibleModal}
                      setClassifides={setClassifides}
                      deleteClassifiedAction={deleteClassifiedAction}
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
      <ClassifidesModal
        classifides={classifides}
        setClassifides={setClassifides}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        handleClose={() => setIsVisibleModal(!isVisibleModal)}
        createClassifiedAction={createClassifiedAction}
        updateClassifiedAction={updateClassifiedAction}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getListClassifiedAction,
    createClassifiedAction,
    deleteClassifiedAction,
    updateClassifiedAction,
  } = require("redux/adminNumbersClassifiedsRedux");
  return {
    getListClassifiedAction: (data) => dispatch(getListClassifiedAction(data)),
    createClassifiedAction: (data) => dispatch(createClassifiedAction(data)),
    deleteClassifiedAction: (data) => dispatch(deleteClassifiedAction(data)),
    updateClassifiedAction: (data) => dispatch(updateClassifiedAction(data)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.numbersClassifieds.loading,
  getAllPagingResponseDTO: state.numbersClassifieds.getAllPagingResponseDTO,
  listClassifieds: state.numbersClassifieds.listClassifieds,
});

export default connect(mapStateToProps, mapDispatchToProps)(Classifides);
