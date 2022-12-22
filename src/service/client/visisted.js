import request from "ultils/Api";

const create = (data) => {
  return request({
    url: `api/visited`,
    method: "POST",
    data,
  });
};

const count = () => {
  return request({
    url: `api/visited`,
    method: "GET",
  });
};

export { create, count };
