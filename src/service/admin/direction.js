import request from "ultils/Api";

const getlistDirectionAdminService = (data) => {
  return request({
    url: `api/direction/list`,
    method: "POST",
    data,
  });
};

const updateDirectionByIdAdminService = (data) => {
  return request({
    url: `api/direction/${data._id}`,
    method: "PUT",
    data: {
      image: data.image,
      group: data.group,
      display: data.display,
      lang: data.lang,
    },
  });
};

export { getlistDirectionAdminService, updateDirectionByIdAdminService };
