import request from "ultils/Api";

const getListFingerCountingService = (data) => {
  return request({
    url: `api/finger/list`,
    method: "POST",
    data,
  });
};

const updateFingerCountingService = (data) => {
  return request({
    url: `api/finger/${data.id}`,
    method: "PUT",
    data: data.data,
  });
};

export { getListFingerCountingService, updateFingerCountingService };
