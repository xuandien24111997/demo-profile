import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import SearchBox from "components/SearchBox";
import { useDebounce } from "hooks/useDebound";
import CircularProgress from "@material-ui/core/CircularProgress";
import BasketModal from "./components/HandModal";
import Table from "./components/Table";
import Button from "@material-ui/core/Button";

const Hand = ({
  getListHandAction,
  updateHandAction,
  loading,
  listHand,
  getAllPagingResponseDTO,
  createHandAction,
  deleteHandAction,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const debounceSearchQuery = useDebounce(searchKey, 500);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [hand, setHand] = useState({
    title: "",
    question: "",
    note: "",
    image: {
      name: "",
      path: "",
      url: "",
    },
    lang: JSON.parse(localStorage.getItem("idLanguage")),
  });
  const [image, setImage] = useState({ formFile: "", VirtualPath: "" });
  const [language, setLanguage] = useState("");
  useEffect(() => {
    let data = {
      Keyword: debounceSearchQuery,
      TotalOrderForOnePage: 10,
      PageNumber: pageNumber,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
    };
    getListHandAction(data);
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
      <p className="page-title">Hand</p>
      <div className="languages__body">
        <div className="module-box-header header-search">
          <div className="header-search__input col-8 pl-0">
            <SearchBox
              placeholder="Search Hand"
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
                setHand({
                  title: "",
                  question: "",
                  note: "",
                  image: {
                    name: "",
                    path: "",
                    url: "",
                  },
                  lang: JSON.parse(localStorage.getItem("idLanguage")),
                });
                setImage({ formFile: "", VirtualPath: "" });
              }}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>Add New Hand Gestures</span>
            </Button>
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
                <th
                  className="title-thead title-right"
                  style={{ width: "15%" }}
                >
                  Title
                </th>
                <th
                  className="title-thead title-right"
                  style={{ width: "25%" }}
                >
                  How to use ?
                </th>
                <th
                  className="title-thead title-right"
                  style={{ width: "20%" }}
                >
                  Notes
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
              ) : listHand ? (
                listHand.map((data, index) => {
                  return (
                    <Table
                      key={index}
                      data={data}
                      setIsVisibleModal={setIsVisibleModal}
                      setHand={setHand}
                      setImage={setImage}
                      image={image}
                      deleteHandAction={deleteHandAction}
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
        hand={hand}
        setHand={setHand}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        handleClose={() => setIsVisibleModal(!isVisibleModal)}
        updateHandAction={updateHandAction}
        setPageNumber={setPageNumber}
        createHandAction={createHandAction}
        image={image}
        setImage={setImage}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getListHandAction,
    updateHandAction,
    createHandAction,
    deleteHandAction,
  } = require("redux/adminHandGesturesRedux");
  return {
    getListHandAction: (data) => dispatch(getListHandAction(data)),
    updateHandAction: (data) => dispatch(updateHandAction(data)),
    createHandAction: (data) => dispatch(createHandAction(data)),
    deleteHandAction: (data) => dispatch(deleteHandAction(data)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.handGestures.loading,
  getAllPagingResponseDTO: state.handGestures.getAllPagingResponseDTO,
  listHand: state.handGestures.listHand,
});

export default connect(mapStateToProps, mapDispatchToProps)(Hand);
