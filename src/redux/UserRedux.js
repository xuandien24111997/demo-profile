import { SignInAdministrator } from "service/Auth";

const types = {
  LOGOUT: "LOGOUT",
  USER_LOADING: "USER_LOADING",
};

export const actions = {
  logout() {
    return { type: types.LOGOUT };
  },
  checkLoading: (payload) => {
    return { type: types.USER_LOADING, payload };
  },
};

export const loginAdminAction = (data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await SignInAdministrator({
      email: data.email,
      password: data.password,
    });
    if (res && res.status === 200) {
      localStorage.setItem("authToken", res.data.token);
      dispatch(actions.checkLoading(false));
      data.history.push("/admin/languages/list");
    } else {
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
  }
};

const initialState = {
  loading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGOUT:
      return Object.assign({}, initialState);
    case types.USER_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
