import {
  getlistQuizzesAdminService,
  updateQuizzesByIdAdminService,
  createQuizzesByIdAdminService,
  deleteQuizzesByIdAdminService,
} from "service/admin/quizzes";
import { AllocationAlertsSuccess, AlertError } from "components/Alert";

const types = {
  QUIZZES_LOADING: "quizzes_loading",
  GET_LIST_QUIZZES: "get_list_quizzes",
  CREATE_QUIZZES: "create_quizzes",
  EDIT_QUIZZES: "edit_quizzes",
  DELETE_QUIZZES: "delete_quizzes",
};

export const actions = {
  getListQuizzes: (payload) => {
    return { type: types.GET_LIST_QUIZZES, payload };
  },
  createQuizzes: (payload) => {
    return { type: types.CREATE_QUIZZES, payload };
  },
  editQuizzes: (payload) => {
    return { type: types.EDIT_QUIZZES, payload };
  },
  deleteQuizzes: (payload) => {
    return { type: types.DELETE_QUIZZES, payload };
  },
  checkLoading: (payload) => {
    return { type: types.QUIZZES_LOADING, payload };
  },
};

export const getListQuizzesAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getlistQuizzesAdminService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListQuizzes(res.data));
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const updateQuizzesAction = (phrase) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateQuizzesByIdAdminService(phrase);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistQuizzesAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListQuizzes(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Update Quizzes Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Update Quizzes Fail");
    throw err;
  }
};
export const createQuizzesAction = (phrase) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await createQuizzesByIdAdminService(phrase);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistQuizzesAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListQuizzes(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Create Quizzes Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Create Quizzes Fail");
    throw err;
  }
};
export const deleteQuizzesAction = (phrase, data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await deleteQuizzesByIdAdminService(phrase);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistQuizzesAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListQuizzes(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Delete Quizzes Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Delete Quizzes Fail");
    throw err;
  }
};

const initialState = {
  getAllPagingResponseDTO: {},
  listQuizzes: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LIST_QUIZZES:
      return {
        ...state,
        getAllPagingResponseDTO: {
          PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listQuizzes: payload.quizz,
      };
    case types.QUIZZES_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
