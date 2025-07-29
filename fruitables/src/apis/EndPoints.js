const BASE_URL = "http://localhost:3000";
export default {
  PRODUCT_LIST: `${BASE_URL}/product/list`,
  FETCH_PRODUCT: BASE_URL + "/product",
  CREATE_USER: BASE_URL + "/user",
  SIGNIN: BASE_URL + "/user/authenticate",
  CREATE_ORDER: BASE_URL + "/order",
  UPLOAD_FILE: BASE_URL + "user/profile",
};
