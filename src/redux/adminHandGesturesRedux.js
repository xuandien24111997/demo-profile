import {
  getlistHandAdminService,
  updateHandByIdAdminService,
  createHandByIdAdminService,
  deleteHandByIdAdminService,
} from "service/admin/handGestures";
import { AllocationAlertsSuccess, AlertError } from "components/Alert";

const types = {
  HAND_LOADING: "hand_loading",
  GET_LIST_HAND: "get_list_hand",
  CREATE_HAND: "create_hand",
  EDIT_HAND: "edit_hand",
  DELETE_HAND: "delete_hand",
};

export const actions = {
  getListHand: (payload) => {
    return { type: types.GET_LIST_HAND, payload };
  },
  createHand: (payload) => {
    return { type: types.CREATE_HAND, payload };
  },
  editHand: (payload) => {
    return { type: types.EDIT_HAND, payload };
  },
  deleteHand: (payload) => {
    return { type: types.DELETE_HAND, payload };
  },
  checkLoading: (payload) => {
    return { type: types.HAND_LOADING, payload };
  },
};

export const getListHandAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getlistHandAdminService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListHand(res.data));
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const updateHandAction = (hand) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateHandByIdAdminService(hand);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistHandAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListHand(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Update Hand Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Update Hand Fail");
    throw err;
  }
};
export const createHandAction = (hand) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await createHandByIdAdminService(hand);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistHandAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListHand(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Create Hand Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Create Hand Fail");
    throw err;
  }
};
export const deleteHandAction = (hand, data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await deleteHandByIdAdminService(hand);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistHandAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListHand(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Delete Hand Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Delete Hand Fail");
    throw err;
  }
};

const initialState = {
  getAllPagingResponseDTO: {},
  listHand: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LIST_HAND:
      return {
        ...state,
        getAllPagingResponseDTO: {
          PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listHand: payload.hands,
      };
    case types.HAND_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
