import request from "ultils/Api";

const getlistAlphabetAdminService = (data) => {
  return request({
    url: `api/alphabetic/board/list`,
    method: "POST",
    data,
  });
};

const updateAlphabetByIdAdminService = (data) => {
  return request({
    url: `api/alphabetic/board/${data._id}`,
    method: "PUT",
    data: {
      word: data.word,
      audio: data.audio,
      lang: data.lang,
    },
  });
};

const getlistAboutAlphabetAdminService = (data) => {
  return request({
    url: `api/alphabetic/repeat/list`,
    method: "POST",
    data,
  });
};

const updateAboutAlphabetByIdAdminService = (data) => {
  return request({
    url: `api/alphabetic/repeat/${data._id}`,
    method: "PUT",
    data: {
      word: data.word,
      audio: data.audio,
      lang: data.lang,
    },
  });
};

export {
  getlistAlphabetAdminService,
  updateAlphabetByIdAdminService,
  getlistAboutAlphabetAdminService,
  updateAboutAlphabetByIdAdminService
};
