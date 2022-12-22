import {
  getlistLanguageAdminService,
  createLanguageAdminService,
  updateLanguageByIdAdminService,
  deleteLanguageAdminService,
} from "service/admin/languages";
import { AllocationAlertsSuccess } from "components/Alert";

const types = {
  LANGUAGES_LOADING: "LANGUAGES_LOADING",
  GET_LIST_LANGUAGES: "GET_LIST_LANGUAGES",
  GET_LANGUAGE_BY_ID: "GET_LANGUAGE_BY_ID",
  CREATE_LANGUAGE: "CREATE_LANGUAGE",
  UPDATE_LANGUAGE: "UPDATE_LANGUAGE",
  DELETE_LANGUAGE: "DELETE_LANGUAGE",
};

export const actions = {
  getListLanguages: (payload) => {
    return { type: types.GET_LIST_LANGUAGES, payload };
  },
  checkLoading: (payload) => {
    return { type: types.LANGUAGES_LOADING, payload };
  },
  createLanguage: (payload) => {
    return { type: types.CREATE_LANGUAGE, payload };
  },
  deleteLanguage: (payload) => {
    return { type: types.DELETE_LANGUAGE, payload };
  },
  updateLanguage: (payload) => {
    return { type: types.UPDATE_LANGUAGE, payload };
  },
};

export const getListLanguagesAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getlistLanguageAdminService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListLanguages(res.data));
      dispatch(actions.checkLoading(false));
      if (!localStorage.getItem("clientLanguage")) {
        localStorage.setItem(
          "clientLanguage",
          JSON.stringify({
            id: res.data.languages[0]._id,
            name: res.data.languages[0].name,
          })
        );
      }

      if (!localStorage.getItem("idLanguage")) {
        localStorage.setItem(
          "idLanguage",
          JSON.stringify(res.data.languages[0]._id)
        );
      }
    }
  } catch (err) {
    alert(err);
  }
};

export const createLanguageAdminAction = (data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await createLanguageAdminService(data);
    if (res && res.status === 200) {
      dispatch(actions.createLanguage(res.data));
      AllocationAlertsSuccess("Create Language Success");
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const deleteLanguageAdminAction = (id) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await deleteLanguageAdminService(id);
    if (res && res.status === 200) {
      dispatch(actions.deleteLanguage(res.data.deleted));
      dispatch(actions.checkLoading(false));
      AllocationAlertsSuccess("Delete Language Success");
    }
  } catch (err) {
    alert(err);
  }
};

export const updateLanguageAction = (language) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateLanguageByIdAdminService(language);
    if (res && res.status === 200 && res.data) {
      dispatch(actions.updateLanguage(res.data));
      dispatch(actions.checkLoading(false));
      AllocationAlertsSuccess("Update Language Success");
    }
  } catch (err) {
    alert(err);
  }
};

const initialState = {
  getAllPagingResponseDTO: {},
  listLanguages: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LIST_LANGUAGES:
      return {
        ...state,
        getAllPagingResponseDTO: {
          PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listLanguages: payload.languages,
      };
    case types.LANGUAGES_LOADING:
      return { ...state, loading: payload };
    case types.CREATE_LANGUAGE:
      return {
        ...state,
        listLanguages: [
          payload,
          ...state.listLanguages.filter((item, index) => index !== 9),
        ],
      };
    case types.DELETE_LANGUAGE:
      return {
        ...state,
        listLanguages: state.listLanguages.filter(
          (item, index) => item._id !== payload._id
        ),
      };
    case types.UPDATE_LANGUAGE:
      return {
        ...state,
        listLanguages: [
          payload,
          ...state.listLanguages.filter(
            (item, index) => item._id !== payload._id
          ),
        ],
      };
    default:
      return state;
  }
};
