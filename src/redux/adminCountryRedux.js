import {
  getCountries,
  getCountry,
  updateCountry,
  deleteCountry,
  createCountry,
} from "service/admin/country";
import { AllocationAlertsSuccess } from "components/Alert";

const types = {
  COUNTRY_LOADING: "COUNTRY_LOADING",
  GET_LIST_COUNTRY: "GET_LIST_COUNTRY",
  GET_COUNTRY_BY_ID: "GET_COUNTRY_BY_ID",
  CREATE_COUNTRY: "CREATE_COUNTRY",
  UPDATE_COUNTRY: "UPDATE_COUNTRY",
  DELETE_COUNTRY: "DELETE_COUNTRY",
};

export const actions = {
  getListCountry: (payload) => {
    return { type: types.GET_LIST_COUNTRY, payload };
  },
  checkLoading: (payload) => {
    return { type: types.COUNTRY_LOADING, payload };
  },
  createCountry: (payload) => {
    return { type: types.CREATE_COUNTRY, payload };
  },
  deleteCountry: (payload) => {
    return { type: types.DELETE_COUNTRY, payload };
  },
  updateCountry: (payload) => {
    return { type: types.UPDATE_COUNTRY, payload };
  },
  getCountry: (payload) => {
    return { type: types.GET_COUNTRY_BY_ID, payload };
  }
};

export const getListCountryAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getCountries(page);
    if (res && res.status === 200) {
      dispatch(actions.getListCountry(res.data.country));
    }
  } catch (err) {
    alert(err);
  } finally{
    dispatch(actions.checkLoading(false));
  }
};

export const getCountryAction = (id) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getCountry(id);
    if (res && res.status === 200) {
      dispatch(actions.getCountry(res.data));
    }
  } catch (err) {
    alert(err);
  } finally{
    dispatch(actions.checkLoading(false));
  }
};

export const createCountryAdminAction = (data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await createCountry(data);
    if (res && res.status === 200) {
      dispatch(actions.createCountry(res.data));
      AllocationAlertsSuccess("Create Language Success");
    }
  } catch (err) {
    alert(err);
  } finally {
    dispatch(actions.checkLoading(false));
  }
};

export const deleteCountryAdminAction = (id) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await deleteCountry(id);
    if (res && res.status === 200) {
      dispatch(actions.deleteCountry({ id }));
      AllocationAlertsSuccess("Delete Language Success");
    }
  } catch (err) {
    alert(err);
  } finally {
    dispatch(actions.checkLoading(false));
  }
};

export const updateCountryAdminAction = (id, payload) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateCountry(id, payload);
    if (res && res.status === 200 && res.data) {
      dispatch(actions.updateCountry(res.data));
      AllocationAlertsSuccess("Update Language Success");
    }
  } catch (err) {
    alert(err);
  } finally {
    dispatch(actions.checkLoading(false));
  }
};

const initialState = {
  list: [],
  loading: false,
  detail: {}
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LIST_COUNTRY:
      return {
        ...state,
        list: payload,
      };
    case types.LANGUAGES_LOADING:
      return { ...state, loading: payload };
    case types.CREATE_COUNTRY:
      return {
        ...state,
        list: [
          payload,
          ...state.list,
        ],
      };
    case types.DELETE_COUNTRY:
      return {
        ...state,
        list: state.list.filter(
          (item) => item._id !== payload.id
        ),
      };
    case types.UPDATE_COUNTRY:
      return {
        ...state,
        list: [
          payload,
          ...state.list.filter(
            (item) => item._id !== payload._id
          ),
        ],
      };
    case types.GET_COUNTRY_BY_ID:
      return {
        ...state,
        detail: payload,
      }
    default:
      return state;
  }
};
