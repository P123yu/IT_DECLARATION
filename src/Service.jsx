import Axios from "./Axios";
import Config from "./Config";

const apiClient = Axios(`${Config.ITDeclarationUrl}`);

const getSection80CByEmpId = (employeeId) => {
  console.log(employeeId);
  const response = apiClient.get(`/section80c/get/${employeeId}`);
  return response;
};

const getSection80DByEmpId = (employeeId) => {
  const response = apiClient.get(`/section80d/get/${employeeId}`);
  return response;
};

const getSection80EByEmpId = (employeeId) => {
  const response = apiClient.get(`/section80e/get/${employeeId}`);
  return response;
};

// const postSection80CDataFirst = (data) => {
//   const response = apiClient.post("/section80c/add", data);
//   return response;
// };

const postSection80CDataFirst = (data) => {
  const response = apiClient.post("/it-declaration-info/add", data);
  return response;
};
const postSection80DDataFirst = (data) => {
  const response = apiClient.post("/section80d/add", data);
  return response;
};

const postSection80EDataFirst = (data) => {
  const response = apiClient.post("/section80e/add", data);
  return response;
};

const getTotalSumOfSection80C = (employeeId) => {
  const response = apiClient.get(
    `/section80c/getTotalSumSection80c/${employeeId}`
  );
  return response;
};

const updateSection80CDataFirst = (employeeId, data) => {
  const response = apiClient.post(`/section80c/update/${employeeId}`, data);
  return response;
};

const updateSection80DDataFirst = (employeeId, data) => {
  const response = apiClient.post(`/section80d/update/${employeeId}`, data);
  return response;
};

const updateSection80EDataFirst = (employeeId, data) => {
  const response = apiClient.post(`/section80e/update/${employeeId}`, data);
  return response;
};

const getTotalSumOfSection80D = (employeeId) => {
  const response = apiClient.get(
    `/section80d/getTotalSumSection80d/${employeeId}`
  );
  return response;
};

const getTotalSumOfSection80E = (employeeId) => {
  const response = apiClient.get(
    `/section80e/getTotalSumSection80e/${employeeId}`
  );
  return response;
};

const getSection80CActualValue = (employeeId) => {
  const response = apiClient.get(`/section80c-update/get/${employeeId}`);
  return response;
};

const getSection80DActualValue = (employeeId) => {
  const response = apiClient.get(`/section80d-update/get/${employeeId}`);
  return response;
};

const getSection80EActualValue = (employeeId) => {
  const response = apiClient.get(`/section80e-update/get/${employeeId}`);
  return response;
};

const postSection80CActualValue = (data) => {
  const response = apiClient.post("/section80c-update/add", data);
  return response;
};

const postSection80DActualValue = (data) => {
  const response = apiClient.post("/section80d-update/add", data);
  return response;
};

const postSection80EActualValue = (data) => {
  const response = apiClient.post("/section80e-update/add", data);
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
  updateSection80CDataFirst,
  updateSection80DDataFirst,
  updateSection80EDataFirst,
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
