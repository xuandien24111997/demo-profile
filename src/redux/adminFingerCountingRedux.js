import {
  getListFingerCountingService,
  updateFingerCountingService,
} from "service/admin/fingerCounting";
import { AllocationAlertsSuccess } from "components/Alert";

const types = {
  FINGER_COUNTING_LOADING: "FINGER_COUNTING_LOADING",
  GET_LIST_FINGER_COUNTING: "GET_LIST_FINGER_COUNTING",
  UPDATE_FINGER_COUNTING: "UPDATE_FINGER_COUNTING",
};

export const actions = {
  getListFingerCounting: (payload) => {
    return { type: types.GET_LIST_FINGER_COUNTING, payload };
  },
  checkLoading: (payload) => {
    return { type: types.FINGER_COUNTING_LOADING, payload };
  },
  updateFingerCounting: (payload) => {
    return { type: types.UPDATE_FINGER_COUNTING, payload };
  },
};

export const getlistFingerCountingsAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getListFingerCountingService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListFingerCounting(res.data));
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const updateFingerCountingAction = (data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateFingerCountingService(data);
    if (res && res.status === 200 && res.data) {
      dispatch(actions.updateFingerCounting(res.data));
      dispatch(actions.checkLoading(false));
      AllocationAlertsSuccess("Update Finger Counting Success");
    }
  } catch (err) {
    alert(err);
  }
};

const initialState = {
  getAllPagingResponseDTO: {},
  listFingerCountings: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LIST_FINGER_COUNTING:
      return {
        ...state,
        getAllPagingResponseDTO: {
          PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listFingerCountings: payload.finger,
      };
    case types.UPDATE_FINGER_COUNTING:
      return {
        ...state,
        listFingerCountings: [
          payload,
          ...state.listFingerCountings.filter(
            (item, index) => item._id !== payload._id
          ),
        ],
      };
    case types.FINGER_COUNTING_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
