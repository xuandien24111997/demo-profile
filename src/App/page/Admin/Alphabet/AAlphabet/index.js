import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import SearchBox from "components/SearchBox";
import { useDebounce } from "hooks/useDebound";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alphabet from "./component/AlphabetModal";
import Table from "./component/Table";

const Alphabets = ({
  getListAlphabetAction,
  loading,
  listAlphabets,
  updateAlphabetAction,
  getAllPagingResponseDTO,
}) => {
  const [language, setLanguage] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const debounceSearchQuery = useDebounce(searchKey, 500);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [alphabet, setAlphabet] = useState({
    word: "",
    audio: {
      name: "",
      path: "",
      url: "",
    },
  });

  const [audio, setAudio] = useState({ formFile: "" });
  useEffect(() => {
    let data = {
      IsOrderNewASC: false,
      Keyword: "",
      Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      PageNumber: pageNumber,
      TotalOrderForOnePage: 10,
    };
    getListAlphabetAction(data);
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
      <p className="page-title">Alphabet</p>
      <div className="languages__body">
        <div className="module-box-header header-search">
          <div className="header-search__input col-8 pl-0">
            <SearchBox
              placeholder="Search Alphabet"
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
                <th className="title-thead title-right">A Alphabet</th>
                <th
                  className="title-thead title-right"
                  style={{ width: "30%" }}
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
              ) : listAlphabets ? (
                listAlphabets.map((data, index) => {
                  return (
                    <Table
                      key={index}
                      index={index}
                      data={data}
                      setIsVisibleModal={setIsVisibleModal}
                      setAlphabet={setAlphabet}
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
      <Alphabet
        alphabet={alphabet}
        setAlphabet={setAlphabet}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        handleClose={() => setIsVisibleModal(!isVisibleModal)}
        setPageNumber={setPageNumber}
        updateAlphabetAction={updateAlphabetAction}
        setAudio={setAudio}
        audio={audio}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getListAlphabetAction,
    updateAlphabetAction,
  } = require("redux/adminAlphabetRedux");
  return {
    getListAlphabetAction: (data) => dispatch(getListAlphabetAction(data)),
    updateAlphabetAction: (data) => dispatch(updateAlphabetAction(data)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.alphabetRedux.loading,
  getAllPagingResponseDTO: state.alphabetRedux.getAllPagingResponseDTO,
  listAlphabets: state.alphabetRedux.listAlphabets,
});

export default connect(mapStateToProps, mapDispatchToProps)(Alphabets);
