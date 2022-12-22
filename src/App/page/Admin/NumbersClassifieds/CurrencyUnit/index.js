import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import SearchBox from "components/SearchBox";
import { useDebounce } from "hooks/useDebound";
import CircularProgress from "@material-ui/core/CircularProgress";
import BasketModal from "./components/CurrencyUnitModal";
import Table from "./components/Table";
import Button from "@material-ui/core/Button";

const CurrencyUnit = ({
  getListCurrencyUnitAction,
  updateCurrencyUnitAction,
  loading,
  listCurrencyUnit,
  getAllPagingResponseDTO,
  createCurrencyUnitAction,
  deleteCurrencyUnitAction,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const debounceSearchQuery = useDebounce(searchKey, 500);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [currencyUnit, setCurrencyUnit] = useState({
    word: "",
    spelling: "",
    means: "",
    audio: {
      name: "",
      path: "",
      url: "",
    },
    lang: JSON.parse(localStorage.getItem("idLanguage")),
  });
  const [audio, setAudio] = useState({ formFile: "" });
  const [language, setLanguage] = useState("");

  useEffect(() => {
    let data = {
      Keyword: debounceSearchQuery,
      TotalOrderForOnePage: 10,
      PageNumber: pageNumber,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
    };
    getListCurrencyUnitAction(data);
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
      <p className="page-title">Currency Unit</p>
      <div className="languages__body">
        <div className="module-box-header header-search">
          <div className="header-search__input col-8 pl-0">
            <SearchBox
              placeholder="Search Currency Unit"
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
                setIsVisibleModal(true);
                setCurrencyUnit({
                  word: "",
                  spelling: "",
                  means: "",
                  audio: {
                    name: "",
                    path: "",
                    url: "",
                  },
                  lang: JSON.parse(localStorage.getItem("idLanguage")),
                });
              }}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>Add New Phrase</span>
            </Button>
          </div>
        </div>
        <div className="table">
          <div className="component-table__table-detail">
            <table className="table-component">
              <tr className="table-component__title">
                <th className="title-thead title-thead-left">Item English</th>
                <th className="title-thead title-right">Romanisation</th>
                <th className="title-thead title-right">Orthography</th>
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
              ) : listCurrencyUnit ? (
                listCurrencyUnit.map((data, index) => {
                  return (
                    <Table
                      key={index}
                      data={data}
                      setIsVisibleModal={setIsVisibleModal}
                      setCurrencyUnit={setCurrencyUnit}
                      deleteCurrencyUnitAction={deleteCurrencyUnitAction}
                    />
                  );
                })
              ) : (
                <tr className="table-component__title">
                  <td
                    className="title-tbody"
                    colSpan="5"
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
        currencyUnit={currencyUnit}
        setCurrencyUnit={setCurrencyUnit}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        handleClose={() => setIsVisibleModal(!isVisibleModal)}
        updateCurrencyUnitAction={updateCurrencyUnitAction}
        setPageNumber={setPageNumber}
        createCurrencyUnitAction={createCurrencyUnitAction}
        audio={audio}
        setAudio={setAudio}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getListCurrencyUnitAction,
    updateCurrencyUnitAction,
    createCurrencyUnitAction,
    deleteCurrencyUnitAction,
  } = require("redux/adminNumbersClassifiedsRedux");
  return {
    getListCurrencyUnitAction: (data) =>
      dispatch(getListCurrencyUnitAction(data)),
    updateCurrencyUnitAction: (data) =>
      dispatch(updateCurrencyUnitAction(data)),
    createCurrencyUnitAction: (data) =>
      dispatch(createCurrencyUnitAction(data)),
    deleteCurrencyUnitAction: (data) =>
      dispatch(deleteCurrencyUnitAction(data)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.numbersClassifieds.loading,
  getAllPagingResponseDTO: state.numbersClassifieds.getAllPagingResponseDTO,
  listCurrencyUnit: state.numbersClassifieds.listCurrencyUnit,
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyUnit);
