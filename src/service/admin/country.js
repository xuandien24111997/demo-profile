import request from "ultils/Api";

const getCountries = (data) => {
  return request({
    url: `api/country/list`,
    method: "POST",
    data,
  });
};

const getCountry = (id) => {
  return request({
    url: `api/country/${id}`,
    method: "GET",
  });
};

const updateCountry = (id, data) => {
  return request({
    url: `api/country/${id}`,
    method: "PUT",
    data: {
      lang: data.lang,
      lat: data.lat,
      lng: data.lng,
      name: data.name,
    },
  });
};

const deleteCountry = (id) => {
  return request({
    url: `api/country/${id}`,
    method: "DELETE",
  });
};

const createCountry = (data) => {
  return request({
    url: `api/country/create`,
    method: "POST",
    data,
  });
};

export {
  getCountries,
  getCountry,
  updateCountry,
  deleteCountry,
  createCountry,
};
