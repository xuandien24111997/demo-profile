import request from "ultils/Api";

const getlistPhrasesAdminService = (data) => {
  return request({
    url: `api/alphabet/list`,
    method: "POST",
    data: data,
  });
};

const updatePhrasesByIdAdminService = (data) => {
  return request({
    url: `api/alphabet/${data._id}`,
    method: "PUT",
    data: {
      word: data.word,
      spelling: data.spelling,
      means: data.means,
      note: data.note,
      audio: data.audio,
      lang: data.lang,
    },
  });
};
const createPhrasesByIdAdminService = (data) => {
  return request({
    url: `api/alphabet/create`,
    method: "POST",
    data: data,
  });
};
const deletePhrasesByIdAdminService = (data) => {
  return request({
    url: `api/alphabet/${data}`,
    method: "DELETE",
  });
};

export {
  getlistPhrasesAdminService,
  updatePhrasesByIdAdminService,
  createPhrasesByIdAdminService,
  deletePhrasesByIdAdminService,
};
