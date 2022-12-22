import {
  getlistNumbersAdminService,
  updateNumberByIdAdminService,
  createNumberByIdAdminService,
  deleteNumberByIdAdminService,
  getlistCurrencyUnitAdminService,
  updateCurrencyUnitByIdAdminService,
  createCurrencyUnitByIdAdminService,
  deleteCurrencyUnitByIdAdminService,
  getlistClassifiedsAdminService,
  createClassifiedsAdminService,
  updateClassifiedsByIdAdminService,
  deleteClassifiedsAdminService,
  getlistClassifiersChildAdminService,
  createClassifiersChildAdminService,
  updateClassifiersChildByIdAdminService,
  deleteClassifiersChildAdminService,
} from "service/admin/NumbersClassifieds";
import { AllocationAlertsSuccess, AlertError } from "components/Alert";

const types = {
  CURRENCY_LOADING: "currency_loading",
  GET_LIST_NUMBERS: "get_list_numbers",
  GET_LIST_CURRENCY_UNIT: "get_list_currency_unit",
  GET_LIST_CLASSIFIEDS: "get_list_classifieds",
  GET_LIST_CLASSIFIEDS_CHILD: "get_list_classifieds_child",
};

export const actions = {
  getListNumbers: (payload) => {
    return { type: types.GET_LIST_NUMBERS, payload };
  },
  getListCurrencyUnit: (payload) => {
    return { type: types.GET_LIST_CURRENCY_UNIT, payload };
  },
  getListClassifieds: (payload) => {
    return { type: types.GET_LIST_CLASSIFIEDS, payload };
  },
  getListClassifiersChild: (payload) => {
    return { type: types.GET_LIST_CLASSIFIEDS_CHILD, payload };
  },
  checkLoading: (payload) => {
    return { type: types.CURRENCY_LOADING, payload };
  },
};

// CURRENCY NUMBER

export const getListNumbersAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getlistNumbersAdminService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListNumbers(res.data));
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const updateNumberAction = (phrase) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateNumberByIdAdminService(phrase);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistNumbersAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListNumbers(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Update Number Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Update Number Fail");
    throw err;
  }
};
export const createNumberAction = (phrase) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await createNumberByIdAdminService(phrase);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistNumbersAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListNumbers(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Create Number Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Create Number Fail");
    throw err;
  }
};
export const deleteNumberAction = (phrase, data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await deleteNumberByIdAdminService(phrase);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistNumbersAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListNumbers(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Delete Number Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Delete Number Fail");
    throw err;
  }
};

// CURRENCY UNIT

export const getListCurrencyUnitAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getlistCurrencyUnitAdminService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListCurrencyUnit(res.data));
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const updateCurrencyUnitAction = (phrase) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateCurrencyUnitByIdAdminService(phrase);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistCurrencyUnitAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListCurrencyUnit(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Update Currency Unit Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Update Currency Unit Fail");
    throw err;
  }
};
export const createCurrencyUnitAction = (phrase) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await createCurrencyUnitByIdAdminService(phrase);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistCurrencyUnitAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListCurrencyUnit(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Create Currency Unit Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Create Currency Unit Fail");
    throw err;
  }
};
export const deleteCurrencyUnitAction = (phrase, data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await deleteCurrencyUnitByIdAdminService(phrase);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistCurrencyUnitAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListCurrencyUnit(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Delete Currency Unit Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Delete Currency Unit Fail");
    throw err;
  }
};

// CLASSIFIEDS

export const getListClassifiedAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getlistClassifiedsAdminService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListClassifieds(res.data));
      if (res.data.classifiers[0]) {
        localStorage.setItem(
          "idClassified",
          JSON.stringify(res.data.classifiers[0]._id)
        );
      }
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const updateClassifiedAction = (data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateClassifiedsByIdAdminService(data);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistClassifiedsAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListClassifieds(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Update Classified Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Update Classified Fail");
    throw err;
  }
};

export const createClassifiedAction = (data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await createClassifiedsAdminService(data);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistClassifiedsAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListClassifieds(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Create Classified Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Create Classified Fail");
    throw err;
  }
};

export const deleteClassifiedAction = (data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await deleteClassifiedsAdminService(data);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistClassifiedsAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListClassifieds(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Delete Classified Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Delete Classified Fail");
    throw err;
  }
};

// CLASSIFIEDS CHILD

export const getListClassifiersChildAction = (page) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await getlistClassifiersChildAdminService(page);
    if (res && res.status === 200) {
      dispatch(actions.getListClassifiersChild(res.data));
      dispatch(actions.checkLoading(false));
    }
  } catch (err) {
    alert(err);
  }
};

export const updateClassifiersChildAction = (data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await updateClassifiersChildByIdAdminService(data);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistClassifiersChildAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
        Type: JSON.parse(localStorage.getItem("idClassified")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListClassifiersChild(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Update Classifiers Child Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Update Classified Fail");
    throw err;
  }
};

export const createClassifiersChildAction = (data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await createClassifiersChildAdminService(data);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistClassifiersChildAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
        Type: JSON.parse(localStorage.getItem("idClassified")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListClassifiersChild(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Create Classifiers Child Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Create Classified Fail");
    throw err;
  }
};

export const deleteClassifiersChildAction = (data) => async (dispatch) => {
  dispatch(actions.checkLoading(true));
  try {
    const res = await deleteClassifiersChildAdminService(data);
    if (res && res.status === 200 && res.data) {
      const resList = await getlistClassifiersChildAdminService({
        Keyword: "",
        TotalOrderForOnePage: 10,
        PageNumber: 1,
        IsOrderNewASC: false,
        Language: JSON.parse(localStorage.getItem("idLanguage")) || "",
        Type: JSON.parse(localStorage.getItem("idClassified")) || "",
      });
      if (resList && resList.status === 200) {
        dispatch(actions.getListClassifiersChild(resList.data));
        dispatch(actions.checkLoading(false));
        AllocationAlertsSuccess("Delete Classifiers Child Success");
      }
    }
  } catch (err) {
    dispatch(actions.checkLoading(false));
    AlertError("Delete Classifiers Child Fail");
    throw err;
  }
};

const initialState = {
  getAllPagingResponseDTO: {},
  listNumbers: [],
  listCurrencyUnit: [],
  listClassifieds: [],
  listClassifiedsChild: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LIST_NUMBERS:
      return {
        ...state,
        getAllPagingResponseDTO: {
          PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listNumbers: payload.currency,
      };
    case types.GET_LIST_CURRENCY_UNIT:
      return {
        ...state,
        getAllPagingResponseDTO: {
          PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listCurrencyUnit: payload.currency,
      };
    case types.GET_LIST_CLASSIFIEDS:
      return {
        ...state,
        getAllPagingResponseDTO: {
          PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listClassifieds: payload.classifiers,
      };
    case types.GET_LIST_CLASSIFIEDS_CHILD:
      return {
        ...state,
        getAllPagingResponseDTO: {
          PageNumber: payload.PageNumber,
          PageTotal: payload.PageTotal,
          TotalOrderForOnePage: payload.TotalOrderForOnePage,
        },
        listClassifiedsChild: payload.classifiers,
      };
    case types.CURRENCY_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
