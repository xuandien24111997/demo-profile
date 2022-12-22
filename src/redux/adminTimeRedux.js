import {
  getlistTimeAdminService,
  updateTimeByIdAdminService,
} from "service/admin/time";
import { AllocationAlertsSuccess, AlertError } from "components/Alert";

const types = {
  TIME_LOADING: "TIME_LOADING",
  GET_LIST_TIME: "GET_LIST_TIME",
};

export const actions = {
  getListTimes: (payload) => {
    return { type: types.GET_LIST_TIME, payload };
  },
  checkLoading: (payload) => {
    return { type: types.TIME_LOADING, payload };
  },
};

export const getListTimesAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getlistTimeAdminService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListTimes(res.data));
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const updateTimeAction = (time) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateTimeByIdAdminService(time);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistTimeAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListTimes(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Update Time Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Update Time Fail");
    throw err;
  }
};

const initialState = {
  getAllPagingResponseDTO: {},
  listTimes: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LIST_TIME:
      return {
        ...state,
        getAllPagingResponseDTO: {
          PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listTimes: payload.times,
      };
    case types.TIME_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
