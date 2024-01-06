import Axios from "axios";

const defaultAxios = Axios.create({
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer BQBmU4jVoCoaNtRT1Yu2AMG6lystQwlzivEF8rFZu0__47ZBfFhTT2Bqx5O-eWfNBfFcFRE49_ou1hQA1jdMkrR31kMmxV-2P4QDYC5A4IAwcD0nqKk",
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
