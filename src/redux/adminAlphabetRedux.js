import {
  getlistAlphabetAdminService,
  updateAlphabetByIdAdminService,
  getlistAboutAlphabetAdminService,
  updateAboutAlphabetByIdAdminService,
} from "service/admin/alphabet";
import { AllocationAlertsSuccess, AlertError } from "components/Alert";

const types = {
  ALPHABET_LOADING: "alphabet_loading",
  GET_LIST_ALPHABET: "get_list_alphabet",
  EDIT_ALPHABET: "edit_alphabet",
  GET_LIST_ABOUT_ALPHABET: "get_list_about_alphabet",
  EDIT_ABOUT_ALPHABET: "edit_about_alphabet",
};

export const actions = {
  getListAlphabet: (payload) => {
    return { type: types.GET_LIST_ALPHABET, payload };
  },
  editAlphabet: (payload) => {
    return { type: types.EDIT_ALPHABET, payload };
  },
  checkLoading: (payload) => {
    return { type: types.ALPHABET_LOADING, payload };
  },
  getListAboutAlphabet: (payload) => {
    return { type: types.GET_LIST_ABOUT_ALPHABET, payload };
  },
  editAboutAlphabet: (payload) => {
    return { type: types.EDIT_ABOUT_ALPHABET, payload };
  },
};

export const getListAlphabetAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getlistAlphabetAdminService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListAlphabet(res.data));
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const updateAlphabetAction = (alphabet) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateAlphabetByIdAdminService(alphabet);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistAlphabetAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListAlphabet(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Update Phrases Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Update Alphabet Fail");
    throw err;
  }
};

export const getListAboutAlphabetAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getlistAboutAlphabetAdminService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListAboutAlphabet(res.data));
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const updateAboutAlphabetAction = (aboutAlphabet) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateAboutAlphabetByIdAdminService(aboutAlphabet);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistAboutAlphabetAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListAboutAlphabet(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Update Phrases Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Update Alphabet Fail");
    throw err;
  }
};

const initialState = {
  getAllPagingResponseDTO: {},
  listAlphabets: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LIST_ALPHABET:
      return {
        ...state,
        getAllPagingResponseDTO: {
          // PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listAlphabets: payload.alphabet,
      };
    case types.GET_LIST_ABOUT_ALPHABET:
      return {
        ...state,
        getAllPagingResponseDTO: {
          PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listAboutAlphabets: payload.alphabetRepeat,
      };
    case types.ALPHABET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
