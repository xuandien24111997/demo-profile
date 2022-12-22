import {
  getlistDirectionAdminService,
  updateDirectionByIdAdminService,
} from "service/admin/direction";
import { AllocationAlertsSuccess, AlertError } from "components/Alert";

const types = {
  DIRECTION_LOADING: "direction_loading",
  GET_LIST_DIRECTION: "get_list_direction",
};

export const actions = {
  getListDirection: (payload) => {
    return { type: types.GET_LIST_DIRECTION, payload };
  },
  checkLoading: (payload) => {
    return { type: types.DIRECTION_LOADING, payload };
  },
};

export const getListDirectionAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getlistDirectionAdminService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListDirection(res.data));
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const updateDirectionAction = (direction) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateDirectionByIdAdminService(direction);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistDirectionAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListDirection(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Update Direction Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Update Direction Fail");
    throw err;
  }
};

const initialState = {
  getAllPagingResponseDTO: {},
  listDirections: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LIST_DIRECTION:
      return {
        ...state,
        getAllPagingResponseDTO: {
          PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listDirections: payload.directions,
      };
    case types.DIRECTION_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
