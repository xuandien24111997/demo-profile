import request from "ultils/Api";

const uploadImage = (data) => {
  return request({
    url: `api/upload/image`,
    method: "POST",
    data: data,
  });
};

const uploadAudio = (data) => {
  return request({
    url: `api/upload/audio`,
    method: "POST",
    data: data,
  });
};

export { uploadImage, uploadAudio };
