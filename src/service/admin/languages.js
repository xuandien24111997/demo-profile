import request from "ultils/Api";

const getlistLanguageAdminService = (data) => {
  return request({
    url: `api/Languages/list`,
    method: "POST",
    data,
  });
};

const getLanguageByIdAdminService = (id) => {
  return request({
    url: `api/Languages/${id}`,
    method: "GET",
  });
};

const createLanguageAdminService = (data) => {
  return request({
    url: `api/languages/create`,
    method: "POST",
    data,
  });
};

const updateLanguageByIdAdminService = (data) => {
  return request({
    url: `api/Languages/${data._id}`,
    method: "PUT",
    data: {
      name: data.name,
    },
  });
};

const deleteLanguageAdminService = (id) => {
  return request({
    url: `api/Languages/${id}`,
    method: "DELETE",
  });
};

export {
  getlistLanguageAdminService,
  getLanguageByIdAdminService,
  createLanguageAdminService,
  updateLanguageByIdAdminService,
  deleteLanguageAdminService,
};
