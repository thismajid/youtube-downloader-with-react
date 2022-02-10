import http from "./httpService";

const download = (url) => {
  return http.get(`/download?url=${url}`);
};

export { download };
