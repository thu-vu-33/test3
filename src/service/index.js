import Axios from "axios";

const defaultAxios = Axios.create({
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer BQDqXnJIyq3e09SiNKlxB5q8CuSSVETrp2BbIlondXRMz_nIxsKZq8FmoZKzYFUPz6zV19xETsxCbhJl9PB8gLWhkVaynz5roHkQFOZHn-r770Wq3RY",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export function apiClient(method, url, options = {}) {
  const { data = {}, headers = {}, params = {}, ...rest } = options;
  return defaultAxios({
    url,
    data,
    method,
    params,
    headers,
    ...rest,
  });
}

export const apis = {
  get: (url, args) => apiClient("get", url, args),
  post: (url, args) => apiClient("post", url, args),
  put: (url, args) => apiClient("put", url, args),
  patch: (url, args) => apiClient("patch", url, args),
  delete: (url, args) => apiClient("delete", url, args),
};
