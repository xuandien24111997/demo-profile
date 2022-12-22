import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer as UserRedux } from "./UserRedux";
import { reducer as LanguageRedux } from "./adminLanguagesRedux";
import { reducer as TimeRedux } from "./adminTimeRedux";
import { reducer as DirectionRedux } from "./adminDirectionRedux";
import { reducer as AlphabetRedux } from "./adminAlphabetRedux";
import { reducer as AboutAlphabetRedux } from "./adminAlphabetRedux";
import { reducer as FingerCounting } from "./adminFingerCountingRedux";
import { reducer as Phrases } from "./adminPhrasesRedux";
import { reducer as HandGestures } from "./adminHandGesturesRedux";
import { reducer as NumbersClassifieds } from "./adminNumbersClassifiedsRedux";
import { reducer as DirectionsClientRedux } from "./clients/directionsClientRedux";
import { reducer as Quizzes } from "./adminQuizzesRedux";
import { reducer as PhraseSetting } from "./adminPhraseSettingRedux";
import { reducer as Country } from "./adminCountryRedux";

const config = {
  key: "root",
  storage: storage,
  whitelist: [],
};
export default persistCombineReducers(config, {
  user: UserRedux,
  languageRedux: LanguageRedux,
  timeRedux: TimeRedux,
  directionRedux: DirectionRedux,
  alphabetRedux: AlphabetRedux,
  aboutAlphabetRedux: AboutAlphabetRedux,
  fingerCounting: FingerCounting,
  phrases: Phrases,
  handGestures: HandGestures,
  numbersClassifieds: NumbersClassifieds,
  directionsClientRedux: DirectionsClientRedux,
  quizzes: Quizzes,
  phraseSetting: PhraseSetting,
  country: Country,
});
