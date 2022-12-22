import request from "ultils/Api";

const getlistQuizzesAdminService = (data) => {
  return request({
    url: `api/quizz/list`,
    method: "POST",
    data: data,
  });
};

const updateQuizzesByIdAdminService = (data) => {
  return request({
    url: `api/quizz/${data._id}`,
    method: "PUT",
    data: {
      question: data.question,
      information: data.information,
      nameAudioShow: data.nameAudioShow,
      informationLink: data.informationLink,
      audio: data.audio,
      answers: data.answers,
      lang: data.lang,
    },
  });
};
const createQuizzesByIdAdminService = (data) => {
  return request({
    url: `api/quizz/create`,
    method: "POST",
    data: data,
  });
};
const deleteQuizzesByIdAdminService = (data) => {
  return request({
    url: `api/quizz/${data}`,
    method: "DELETE",
  });
};

export {
  getlistQuizzesAdminService,
  updateQuizzesByIdAdminService,
  createQuizzesByIdAdminService,
  deleteQuizzesByIdAdminService,
};
