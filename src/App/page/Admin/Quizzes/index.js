import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import SearchBox from "components/SearchBox";
import { useDebounce } from "hooks/useDebound";
import CircularProgress from "@material-ui/core/CircularProgress";
import BasketModal from "./components/QuizModal";
import Table from "./components/Table";
import Button from "@material-ui/core/Button";

const Quizzes = ({
  getListQuizzesAction,
  updateQuizzesAction,
  loading,
  listQuizzes,
  getAllPagingResponseDTO,
  createQuizzesAction,
  deleteQuizzesAction,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const debounceSearchQuery = useDebounce(searchKey, 500);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [quizzes, setQuizzes] = useState({
    question: "",
    information: "",
    informationLink: "",
    nameAudioShow: "",
    answers: [
      {
        text: "",
        isAnswer: true,
      },
      {
        text: "",
        isAnswer: false,
      },
      {
        text: "",
        isAnswer: false,
      },
    ],
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
    getListQuizzesAction(data);
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
      <p className="page-title">Quizzes</p>
      <div className="languages__body">
        <div className="module-box-header header-search">
          <div className="header-search__input col-8 pl-0">
            <SearchBox
              placeholder="Search Quizzes"
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
                setQuizzes({
                  question: "",
                  information: "",
                  nameAudioShow: "",
                  answers: [
                    {
                      text: "",
                      isAnswer: true,
                    },
                    {
                      text: "",
                      isAnswer: false,
                    },
                    {
                      text: "",
                      isAnswer: false,
                    },
                  ],
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
              <span>Add New Quiz</span>
            </Button>
          </div>
        </div>
        <div className="table">
          <div className="component-table__table-detail">
            <table className="table-component">
              <tr className="table-component__title">
                <th
                  className="title-thead title-thead-left"
                  style={{ width: "21%" }}
                >
                  Question
                </th>
                <th
                  className="title-thead title-right"
                  style={{ width: "20%" }}
                >
                  Information
                </th>
                <th className="title-thead title-right">Name Audio</th>
                <th className="title-thead title-right">Answers</th>
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
              ) : listQuizzes ? (
                listQuizzes.map((data, index) => {
                  return (
                    <Table
                      key={index}
                      data={data}
                      setIsVisibleModal={setIsVisibleModal}
                      setQuizzes={setQuizzes}
                      deleteQuizzesAction={deleteQuizzesAction}
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
        quizzes={quizzes}
        setQuizzes={setQuizzes}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        handleClose={() => setIsVisibleModal(!isVisibleModal)}
        updateQuizzesAction={updateQuizzesAction}
        setPageNumber={setPageNumber}
        createQuizzesAction={createQuizzesAction}
        audio={audio}
        setAudio={setAudio}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getListQuizzesAction,
    updateQuizzesAction,
    createQuizzesAction,
    deleteQuizzesAction,
  } = require("redux/adminQuizzesRedux");
  return {
    getListQuizzesAction: (data) => dispatch(getListQuizzesAction(data)),
    updateQuizzesAction: (data) => dispatch(updateQuizzesAction(data)),
    createQuizzesAction: (data) => dispatch(createQuizzesAction(data)),
    deleteQuizzesAction: (data) => dispatch(deleteQuizzesAction(data)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.quizzes.loading,
  getAllPagingResponseDTO: state.quizzes.getAllPagingResponseDTO,
  listQuizzes: state.quizzes.listQuizzes,
});

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes);
