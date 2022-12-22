import services from "service/admin/phraseSetting";
import { AllocationAlertsSuccess, AlertError } from "components/Alert";
import storage from "ultils/storage"

const types = {
  PHRASE_SETTING_LOADING: "PHRASE_SETTING_LOADING",
  UPDATE_PHRASE_SETTING_SUCCESS: "UPDATE_PHRASE_SETTING_SUCCESS",
};

export const actions = {
  
  setLoading: (payload) => {
    return { type: types.PHRASE_SETTING_LOADING, payload };
  },
  updateOrCreate: (payload) => {
    return { type: types.UPDATE_PHRASE_SETTING_SUCCESS, payload };
  },
};

export const updateOrCreatePhraseSettingAction = (payload) => async (dispatch) => {
  dispatch(actions.setLoading(true));
  try {
    const lang = await storage.load("idLanguage")
    console.log(payload)
    const res = await services.createOrUpdate({
      ...payload,
      lang,
    });
    if (res && res.status === 200 && res.data) {
      
      dispatch(actions.updateOrCreate(res.data));
      AllocationAlertsSuccess("Update Phrases Success");
    }
  } catch (err) {
    AlertError("Update Setting Fail");
  } finally {
    dispatch(actions.setLoading(false));
  }
};

export const detailPhraseSettingAction = (payload) => async (dispatch) => {
  dispatch(actions.setLoading(true));
  try {
    const lang = await storage.load("idLanguage")
    const res = await services.getOne(payload || lang);
    if (res && res.status === 200 && res.data) {
      dispatch(actions.updateOrCreate({
        dialogue_image: res.data.dialogue_image,
        culture_image: res.data.culture_image,
        culture: res.data.culture
      }));
      return Promise.resolve({
        dialogue_image: res.data.dialogue_image,
        culture_image: res.data.culture_image,
        culture: res.data.culture
      })
    }
  } catch (err) {
    return Promise.reject(err)
  } finally {
    dispatch(actions.setLoading(false));
  }
};

const initialState = {
  settings: {
    dialogue_image: ""
  },
  loading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.UPDATE_PHRASE_SETTING_SUCCESS:
      return {
        ...state,
        settings: payload,
      };
    case types.PHRASE_SETTING_LOADING:
      return {
        ...state,
        loading: payload
      };
    default:
      return state;
  }
};
