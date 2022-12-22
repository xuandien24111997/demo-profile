import {
  getlistPhrasesAdminService,
  updatePhrasesByIdAdminService,
  createPhrasesByIdAdminService,
  deletePhrasesByIdAdminService,
} from "service/admin/phrases";
import { AllocationAlertsSuccess, AlertError } from "components/Alert";

const types = {
  PHRASES_LOADING: "phrases_loading",
  GET_LIST_PHRASES: "get_list_phrases",
  CREATE_PHRASES: "create_phrases",
  EDIT_PHRASES: "edit_phrases",
  DELETE_PHRASES: "delete_phrases",
};

export const actions = {
  getListPhrases: (payload) => {
    return { type: types.GET_LIST_PHRASES, payload };
  },
  createPhrases: (payload) => {
    return { type: types.CREATE_PHRASES, payload };
  },
  editPhrases: (payload) => {
    return { type: types.EDIT_PHRASES, payload };
  },
  deletePhrases: (payload) => {
    return { type: types.DELETE_PHRASES, payload };
  },
  checkLoading: (payload) => {
    return { type: types.PHRASES_LOADING, payload };
  },
};

export const getListPhrasesAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getlistPhrasesAdminService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListPhrases(res.data));
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const updatePhrasesAction = (phrase) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updatePhrasesByIdAdminService(phrase);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistPhrasesAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListPhrases(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Update Phrases Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Update Phrases Fail");
    throw err;
  }
};
export const createPhrasesAction = (phrase) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await createPhrasesByIdAdminService(phrase);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistPhrasesAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListPhrases(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Create Phrases Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Create Phrases Fail");
    throw err;
  }
};
export const deletePhrasesAction = (phrase, data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await deletePhrasesByIdAdminService(phrase);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistPhrasesAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListPhrases(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Delete Phrases Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Delete Phrases Fail");
    throw err;
  }
};

const initialState = {
  getAllPagingResponseDTO: {},
  listPhrases: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LIST_PHRASES:
      return {
        ...state,
        getAllPagingResponseDTO: {
          PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listPhrases: payload.alphabet,
      };
    case types.PHRASES_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
