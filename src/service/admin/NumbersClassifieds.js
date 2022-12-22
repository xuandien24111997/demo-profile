import request from "ultils/Api";

//NUMBERS
const getlistNumbersAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/number/list`,
    method: "POST",
    data: data,
  });
};

const updateNumberByIdAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/number/${data._id}`,
    method: "PUT",
    data: {
      word: data.word,
      spelling: data.spelling,
      means: data.means,
      note:data.note,
      audio: data.audio,
      lang: data.lang,
    },
  });
};
const createNumberByIdAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/number/create`,
    method: "POST",
    data: data,
  });
};
const deleteNumberByIdAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/number/${data}`,
    method: "DELETE",
  });
};

//CURRENCY UNIT
const getlistCurrencyUnitAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/currency/list`,
    method: "POST",
    data: data,
  });
};

const updateCurrencyUnitByIdAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/currency/${data._id}`,
    method: "PUT",
    data: {
      word: data.word,
      spelling: data.spelling,
      means: data.means,
      audio: data.audio,
      lang: data.lang,
    },
  });
};
const createCurrencyUnitByIdAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/currency/create`,
    method: "POST",
    data: data,
  });
};
const deleteCurrencyUnitByIdAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/currency/${data}`,
    method: "DELETE",
  });
};

// CLASSIFIEDS

const getlistClassifiedsAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/classifiers/list`,
    method: "POST",
    data,
  });
};

const getClassifiedsByIdAdminService = (id) => {
  return request({
    url: `api/numbersClassifieds/classifiers/${id}`,
    method: "GET",
  });
};

const createClassifiedsAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/classifiers/create`,
    method: "POST",
    data,
  });
};

const updateClassifiedsByIdAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/classifiers/${data.id}`,
    method: "PUT",
    data: data.data,
  });
};

const deleteClassifiedsAdminService = (id) => {
  return request({
    url: `api/numbersClassifieds/classifiers/${id}`,
    method: "DELETE",
  });
};

// CLASSIFIEDS CHILD

const getlistClassifiersChildAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/classifiersChild/list`,
    method: "POST",
    data,
  });
};

const createClassifiersChildAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/classifiersChild/create`,
    method: "POST",
    data,
  });
};

const updateClassifiersChildByIdAdminService = (data) => {
  return request({
    url: `api/numbersClassifieds/classifiersChild/${data.id}`,
    method: "PUT",
    data: data.data,
  });
};

const deleteClassifiersChildAdminService = (id) => {
  return request({
    url: `api/numbersClassifieds/classifiersChild/${id}`,
    method: "DELETE",
  });
};

export {
  getlistNumbersAdminService,
  updateNumberByIdAdminService,
  createNumberByIdAdminService,
  deleteNumberByIdAdminService,
  getlistCurrencyUnitAdminService,
  updateCurrencyUnitByIdAdminService,
  createCurrencyUnitByIdAdminService,
  deleteCurrencyUnitByIdAdminService,
  getlistClassifiedsAdminService,
  getClassifiedsByIdAdminService,
  createClassifiedsAdminService,
  updateClassifiedsByIdAdminService,
  deleteClassifiedsAdminService,
  getlistClassifiersChildAdminService,
  createClassifiersChildAdminService,
  updateClassifiersChildByIdAdminService,
  deleteClassifiersChildAdminService,
};
