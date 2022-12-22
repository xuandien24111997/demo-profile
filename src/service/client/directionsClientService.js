import request from "ultils/Api";

const getDirectionsClientService = (data) => {
  return request({
    url: `api/direction/list`,
    method: "POST",
    data,
  });
};

export { getDirectionsClientService };
