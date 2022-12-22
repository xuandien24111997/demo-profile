import request from "ultils/Api";

const SignInAdministrator = async (data) => {
  return request({
    url: `api/user/login`,
    method: "POST",
    data,
  });
};

export { SignInAdministrator };
