import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import SearchBox from "components/SearchBox";
import { useDebounce } from "hooks/useDebound";
import CircularProgress from "@material-ui/core/CircularProgress";
import BasketModal from "./components/PhraseModal";
import Table from "./components/Table";
import Button from "@material-ui/core/Button";
import { Editor } from "@tinymce/tinymce-react";
import { checkFileImage, checkSize } from "ultils/checkFile";
import { uploadImage } from "service/admin/uploadFile";
import { BACKEND_URL } from "config"

const Phrases = ({
  getListPhrasesAction,
  updatePhrasesAction,
  loading,
  listPhrases,
  getAllPagingResponseDTO,
  createPhrasesAction,
  deletePhrasesAction,
  updatePhraseSetting,
  phraseSettingLoading,
  phraseSettings,
  detailPhraseSetting,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const [settings, setSettings] = useState({});
  const debounceSearchQuery = useDebounce(searchKey, 500);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [phrases, setPhrases] = useState({
    word: "",
    spelling: "",
    means: "",
    note: "",
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
    getListPhrasesAction(data);
  }, [debounceSearchQuery, pageNumber, language]);
  useEffect(() => {
    setLanguage(JSON.parse(localStorage.getItem("idLanguage")));
  }, [
    typeof window !== undefined &&
      JSON.parse(localStorage.getItem("idLanguage")),
  ]);

  useEffect(() => {
    detailPhraseSetting().then((res) => {
      setSettings(res)
    })
  }, [language]);
  
  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <div className="languages">
      <p className="page-title">Phrases</p>
      <div className="languages__body">
        <div className="module-box-header header-search">
          <div className="header-search__input col-8 pl-0">
            <SearchBox
              placeholder="Search Phrases"
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
                setPhrases({
                  word: "",
                  spelling: "",
                  means: "",
                  note: "",
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
                <th
                  className="title-thead title-thead-left"
                  style={{ width: "7%" }}
                >
                  Item English
                </th>
                <th
                  className="title-thead title-right"
                  style={{ width: "15%" }}
                >
                  Romanisation
                </th>
                <th
                  className="title-thead title-right"
                  style={{ width: "15%" }}
                >
                  Orthography
                </th>
                <th className="title-thead title-right">Note</th>
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
              ) : listPhrases ? (
                listPhrases.map((data, index) => {
                  return (
                    <Table
                      key={index}
                      data={data}
                      setIsVisibleModal={setIsVisibleModal}
                      setPhrases={setPhrases}
                      deletePhrasesAction={deletePhrasesAction}
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

        {
          phraseSettingLoading ? (
            <div className="loading">
              <CircularProgress />
            </div>
            ) : (
            <div>
              <p className="page-title">Phrase images</p>
              <div>
                <Editor
                  apiKey="0ndozqncn1at1e8tsvk4beszm9wlywfrnmkdor7ik45qnsbw"
                  onEditorChange={(data) => setSettings((prev) => ({ ...prev, dialogue_image: data }))}
                  value={settings.dialogue_image}
                  init={{
                    min_height: 250,
                    max_height: 400,
                    menubar: false,
                    images_upload_handler: async (blobInfo, success, failure) => {
                      try {
                        const file = blobInfo.blob();

                        // check file type
                        if (!checkFileImage(file.name)) {
                          throw new Error("File should be png, jpg, jpeg or gif.");
                        }

                        // check file type
                        if (!checkSize(file.size)) {
                          throw new Error("File should be less than 2 MB");
                        }

                        const formDataImg = new FormData();
                        formDataImg.append("uploadFile", blobInfo.blob());
                        const imageResponse = await uploadImage(formDataImg);
                        success(BACKEND_URL + "image/" + imageResponse.data.name);
                      } catch (error) {
                        failure(error.message || error.kind || error);
                      }
                    },
                    plugins: [
                      "advlist autolink lists link charmap print preview anchor",
                      "searchreplace visualblocks ",
                      "media table paste wordcount image code",
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | image code",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; overflow: auto }",
                  }}
                />
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
                  onClick={() => { updatePhraseSetting(settings) }}
                >
                  <span>Update</span>
                </Button>
              </div>
            </div>
            )
        }
      </div>
      <BasketModal
        phrases={phrases}
        setPhrases={setPhrases}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        handleClose={() => setIsVisibleModal(!isVisibleModal)}
        updatePhrasesAction={updatePhrasesAction}
        setPageNumber={setPageNumber}
        createPhrasesAction={createPhrasesAction}
        audio={audio}
        setAudio={setAudio}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getListPhrasesAction,
    updatePhrasesAction,
    createPhrasesAction,
    deletePhrasesAction,
  } = require("redux/adminPhrasesRedux");
  const { updateOrCreatePhraseSettingAction, detailPhraseSettingAction } = require("redux/adminPhraseSettingRedux");
  return {
    getListPhrasesAction: (data) => dispatch(getListPhrasesAction(data)),
    updatePhrasesAction: (data) => dispatch(updatePhrasesAction(data)),
    createPhrasesAction: (data) => dispatch(createPhrasesAction(data)),
    deletePhrasesAction: (data) => dispatch(deletePhrasesAction(data)),
    updatePhraseSetting: (payload) => dispatch(updateOrCreatePhraseSettingAction(payload)),
    detailPhraseSetting: () => dispatch(detailPhraseSettingAction())
  };
};

const mapStateToProps = (state) => ({
  loading: state.phrases.loading,
  getAllPagingResponseDTO: state.phrases.getAllPagingResponseDTO,
  listPhrases: state.phrases.listPhrases,
  phraseSettingLoading: state.phraseSetting.loading,
  phraseSettings: state.phraseSetting.settings
});

export default connect(mapStateToProps, mapDispatchToProps)(Phrases);
