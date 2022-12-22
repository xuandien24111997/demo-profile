import { getDirectionsClientService } from "service/client/directionsClientService";

const types = {
  GET_LIST_DIRECTIONS: "GET_LIST_DIRECTIONS",
};

export const actions = {
  getListDirections: (payload) => {
    return { type: types.GET_LIST_DIRECTIONS, payload };
  },
};

export const getListDirectionsAction = (data) => async (dispatch) => {
  try {
    const res = await getDirectionsClientService(data);
    console.log(res)
    if (res && res.status === 200) {
      dispatch(actions.getListDirections(res.data));
    }
  } catch (err) {
    alert(err);
  }
};

const initialState = {
  listDirections: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LIST_DIRECTIONS:
      return {
        ...state,
        listDirections: payload.directions,
      };
    default:
      return state;
  }
};
