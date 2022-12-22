import request from "ultils/Api";

const phraseSettingService = {
  createOrUpdate: (data) => {
    return request({
      url: `api/phrase-setting`,
      method: "POST",
      data,
    });
  },
  getOne: (id) => {
    return request({
      url: `api/phrase-setting/${id}`,
      method: "GET",
    });
  }
}

export default phraseSettingService
