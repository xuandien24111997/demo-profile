import request from "ultils/Api";

const getlistHandAdminService = (data) => {
  return request({
    url: `api/hands/list`,
    method: "POST",
    data: data,
  });
};

const updateHandByIdAdminService = (data) => {
  console.log("data", data);
  return request({
    url: `api/hands/${data._id}`,
    method: "PUT",
    data: {
      title: data.title,
      question: data.question,
      note: data.note,
      image: data.image,
      lang: data.lang,
    },
  });
};
const createHandByIdAdminService = (data) => {
  return request({
    url: `api/hands/create`,
    method: "POST",
    data: data,
  });
};
const deleteHandByIdAdminService = (data) => {
  return request({
    url: `api/hands/${data}`,
    method: "DELETE",
  });
};

export {
  getlistHandAdminService,
  updateHandByIdAdminService,
  createHandByIdAdminService,
  deleteHandByIdAdminService,
};
