import request from "ultils/Api";

const getlistTimeAdminService = (data) => {
  return request({
    url: `api/times/list`,
    method: "POST",
    data,
  });
};

const updateTimeByIdAdminService = (data) => {
  return request({
    url: `api/times/${data._id}`,
    method: "PUT",
    data: {
      image: data.image,
      group: data.group,
      display: data.display,
      lang: data.lang,
    },
  });
};

export { getlistTimeAdminService, updateTimeByIdAdminService };
