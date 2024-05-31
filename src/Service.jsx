import Axios from "./Axios";
import Config from "./Config";

const apiClient = Axios(`${Config.ITDeclarationUrl}`);

const getSection80CByEmpId = () => {
  const response = apiClient.get("/Section80C/getByempIdSec80c/1");
  return response;
};

const getSection80DByEmpId = () => {
  const response = apiClient.get("/Section80D/getByempIdSec80d/1");
  return response;
};

const getSection80EByEmpId = () => {
  const response = apiClient.get("/Section80D/getByempIdSec80d/1");
  return response;
};

const postSection80CDataFirst = (data) => {
  const response = apiClient.post("/Section80C/postSec80C", data);
  return response;
};

const postSection80DDataFirst = (data) => {
  const response = apiClient.post("/Section80D/postSec80D", data);
  return response;
};

const postSection80EDataFirst = (data) => {
  const response = apiClient.post("/Section80E/postSec80E", data);
  return response;
};

const getTotalSumOfSection80C = () => {
  const response = apiClient.get("/Section80C/getTotalSumSection80c/1");
  return response;
};

const getTotalSumOfSection80D = () => {
  const response = apiClient.get("/Section80D/getTotalSumSection80d/1");
  return response;
};

const getTotalSumOfSection80E = () => {
  const response = apiClient.get("/Section80E/getTotalSumSection80e/1");
  return response;
};

const getSection80CActualValue = () => {
  const response = apiClient.get("/api80c/actualGet/1");
  return response;
};

const getSection80DActualValue = () => {
  const response = apiClient.get("/api80d/actualGet/1");
  return response;
};

const getSection80EActualValue = () => {
  const response = apiClient.get("/api80e/actualGet/1");
  return response;
};

const postSection80CActualValue = (data) => {
  const response = apiClient.post("api80c/actualIns", data);
  return response;
};

const postSection80DActualValue = (data) => {
  const response = apiClient.post("/api80d/actualIns", data);
  return response;
};

const postSection80EActualValue = (data) => {
  const response = apiClient.post("/api80e/actualIns", data);
  return response;
};

// const editForm = async (id, data) => {
//   return await apiClient.put(/${id}, data);
// };

// const deleteForm = async id => {
//   return await apiClient.delete(/${id});
// };

// // const removeAll = () => {
// //   return http.delete(/form);
// // };

// // const findByTitle = title => {
// //   return http.get(/form?title=${title});
// // };

const Service = {
  getSection80CByEmpId,
  getSection80DByEmpId,
  getSection80EByEmpId,
  postSection80CDataFirst,
  postSection80DDataFirst,
  postSection80EDataFirst,
  getTotalSumOfSection80C,
  getTotalSumOfSection80D,
  getTotalSumOfSection80E,
  getSection80CActualValue,
  getSection80DActualValue,
  getSection80EActualValue,
  postSection80CActualValue,
  postSection80DActualValue,
  postSection80EActualValue,
};

export default Service;
