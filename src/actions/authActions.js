import APIRequest from "../utils/APIRequest";

export const loginAction = (values) => async (dispatch) => {
  const type = "LOGIN";
  await APIRequest({
    type,
    apiData: {
      method: "post",
      url: "/api/users/login",
      data: values,
    },
    meta: { loadingId: -1 },
    dispatch,
  });
};

export const registerAction = (values) => async (dispatch) => {
  const type = "REGISTER";
  await APIRequest({
    type,
    apiData: {
      method: "post",
      url: "/api/users/register",
      data: values,
    },
    meta: { loadingId: -1 },
    dispatch,
  });
};
