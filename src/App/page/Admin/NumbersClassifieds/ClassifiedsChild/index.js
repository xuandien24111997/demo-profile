import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import SearchBox from "components/SearchBox";
import { useDebounce } from "hooks/useDebound";
import CircularProgress from "@material-ui/core/CircularProgress";
import BasketModal from "./components/ClassifidesChildModal";
import Table from "./components/Table";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ClassifidesChild = ({
  getListClassifiersChildAction,
  updateClassifiersChildAction,
  loading,
  listClassifiedsChild,
  getAllPagingResponseDTO,
  createClassifiersChildAction,
  deleteClassifiersChildAction,
  getListClassifiedAction,
  listClassifieds,
}) => {
  const classes = useStyles();

  const [pageNumber, setPageNumber] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const debounceSearchQuery = useDebounce(searchKey, 500);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [classifidesChild, setClassifidesChild] = useState({
    word: "",
    spelling: "",
    means: "",
    audio: {
      name: "",
      path: "",
      url: "",
    },
    lang: JSON.parse(localStorage.getItem("idLanguage")),
    type: JSON.parse(localStorage.getItem("idClassified")) || "",
  });
  const [audio, setAudio] = useState({ formFile: "" });
  const [language, setLanguage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    getListClassifiedAction({
      Keyword: "",
      TotalOrderForOnePage: 100,
      PageNumber: 1,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
    });
  }, [language]);

  useEffect(() => {
    let data = {
      Keyword: debounceSearchQuery,
      TotalOrderForOnePage: 10,
      PageNumber: pageNumber,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      Type: JSON.parse(localStorage.getItem("idClassified")) || "",
    };
    getListClassifiersChildAction(data);
  }, [debounceSearchQuery, pageNumber, language, type]);

  useEffect(() => {
    listClassifieds[0] && setType(listClassifieds[0]._id);
  }, [listClassifieds]);

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
      <p className="page-title">Classifieds Child</p>
      <div className="languages__body">
        <div className="module-box-header header-search">
          <div className="header-search__input col-8 pl-0">
            <SearchBox
              placeholder="Search Classified Child"
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
                setClassifidesChild({
                  word: "",
                  spelling: "",
                  means: "",
                  audio: {
                    name: "",
                    path: "",
                    url: "",
                  },
                  lang: JSON.parse(localStorage.getItem("idLanguage")),
                  type: JSON.parse(localStorage.getItem("idClassified")),
                });
              }}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>Add New Classified Child</span>
            </Button>
          </div>
        </div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Classifieds Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={type || ""}
            onChange={(e) => {
              setType(e.target.value);
              localStorage.setItem(
                "idClassified",
                JSON.stringify(e.target.value)
              );
            }}
            label="Classifieds Type"
            style={{ backgroundColor: "#fff" }}
          >
            {listClassifieds &&
              listClassifieds.map((item, index) => {
                return (
                  <MenuItem key={item._id} value={item._id}>
                    <span style={{ marginRight: 5, fontWeight: "bold" }}>
                      {item.word}
                    </span>
                    <span>{item.spelling}</span>
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
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
              ) : listClassifiedsChild ? (
                listClassifiedsChild.map((data, index) => {
                  return (
                    <Table
                      key={index}
                      data={data}
                      setIsVisibleModal={setIsVisibleModal}
                      setClassifidesChild={setClassifidesChild}
                      deleteClassifiersChildAction={
                        deleteClassifiersChildAction
                      }
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
        classifidesChild={classifidesChild}
        setClassifidesChild={setClassifidesChild}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        handleClose={() => setIsVisibleModal(!isVisibleModal)}
        updateClassifiersChildAction={updateClassifiersChildAction}
        setPageNumber={setPageNumber}
        createClassifiersChildAction={createClassifiersChildAction}
        audio={audio}
        setAudio={setAudio}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getListClassifiedAction,
    getListClassifiersChildAction,
    updateClassifiersChildAction,
    createClassifiersChildAction,
    deleteClassifiersChildAction,
  } = require("redux/adminNumbersClassifiedsRedux");
  return {
    getListClassifiedAction: (data) => dispatch(getListClassifiedAction(data)),
    getListClassifiersChildAction: (data) =>
      dispatch(getListClassifiersChildAction(data)),
    updateClassifiersChildAction: (data) =>
      dispatch(updateClassifiersChildAction(data)),
    createClassifiersChildAction: (data) =>
      dispatch(createClassifiersChildAction(data)),
    deleteClassifiersChildAction: (data) =>
      dispatch(deleteClassifiersChildAction(data)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.numbersClassifieds.loading,
  getAllPagingResponseDTO: state.numbersClassifieds.getAllPagingResponseDTO,
  listClassifieds: state.numbersClassifieds.listClassifieds,
  listClassifiedsChild: state.numbersClassifieds.listClassifiedsChild,
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassifidesChild);
