import Axios from "./Axios";
import Config from "./Config";

const apiClient = Axios(`${Config.ITDeclarationUrl}`);

const postSection80Data = (data) => {
  const response = apiClient.post("/it-declaration-info/add", data);
  return response;
};

const fetchAllSectionName = () => {
  const response = apiClient.get("/it-declaration-master/get-all");
  return response;
};

const fetchITDeclarationInfoBasedOnEmpIdAndFinancialYear = (
  empId,
  financialYear
) => {
  const response = apiClient.get(
    `/it-declaration-info/get/${empId}/${financialYear}`
  );
  return response;
};

const fetchITDeclarationSaveStatusInfoBasedOnEmpIdAndFinancialYear = (
  empId,
  financialYear
) => {
  const response = apiClient.get(
    `/it-declaration-info/get-save-status/${empId}/${financialYear}`
  );
  return response;
};

const fetchITDeclarationSaveStatusForSection80dInfoBasedOnEmpIdAndFinancialYear =
  (empId, financialYear) => {
    const response = apiClient.get(
      `/it-declaration-info/get-save-status-80d/${empId}/${financialYear}`
    );
    return response;
  };

const postTotalAmountForSection80c = (empId, financialYear, data) => {
  const response = apiClient.post(
    `/it-declaration-info/total-amount-80c/${empId}/${financialYear}`,
    data
  );
  return response;
};

const postTotalAmountForSection80d = (empId, financialYear, data) => {
  const response = apiClient.post(
    `/it-declaration-info/total-amount-80d/${empId}/${financialYear}`,
    data
  );
  return response;
};

const fetchTotalAmountForSection80c = (empId, financialYear) => {
  const response = apiClient.get(
    `/it-declaration-info/get-total-amount-80c/${empId}/${financialYear}`
  );
  return response;
};

const fetchTotalAmountForSection80d = (empId, financialYear) => {
  const response = apiClient.get(
    `/it-declaration-info/get-total-amount-80d/${empId}/${financialYear}`
  );
  return response;
};

const postITDeclarationSaveStatusInfoBasedOnEmpIdAndFinancialYear = (
  empId,
  financialYear
) => {
  const response = apiClient.post(
    `/it-declaration-info/save-status/${empId}/${financialYear}`
  );
  return response;
};

const postITDeclarationSaveStatusForSection80dInfoBasedOnEmpIdAndFinancialYear =
  (empId, financialYear) => {
    const response = apiClient.post(
      `/it-declaration-info/save-status-80d/${empId}/${financialYear}`
    );
    return response;
  };

// ================================ proof of investment ==========================================

const fetchProofOfInvestmentBasedOnEmpIdAndFinancialYear = (
  empId,
  financialYear
) => {
  const response = apiClient.get(
    `/proof-of-investment/get-all-proof/${empId}/${financialYear}`
  );
  return response;
};

const postProofOfInvestment = (data) => {
  const response = apiClient.post("/proof-of-investment/add", data);
  return response;
};

const setStatusForProofOfInvestment = (empId, submitFinancialYear, state) => {
  const response = apiClient.get(
    `/proof-of-investment/set-status-proof/${empId}/${submitFinancialYear}/${state}`
  );
  return response;
};

const getStatusForProofOfInvestmentFunction = (empId, submitFinancialYear) => {
  const response = apiClient.get(
    `/proof-of-investment/get-status-proof/${empId}/${submitFinancialYear}`
  );
  return response;
};

const setSubmitStatusForProofOfInvestment = (
  empId,
  submitFinancialYear,
  state
) => {
  const response = apiClient.get(
    `/proof-of-investment/set-submit-status-proof/${empId}/${submitFinancialYear}/${state}`
  );
  return response;
};

const getSubmitStatusForProofOfInvestmentFunction = (
  empId,
  submitFinancialYear
) => {
  const response = apiClient.get(
    `/proof-of-investment/get-submit-status-proof/${empId}/${submitFinancialYear}`
  );
  return response;
};

const Service = {
  // it-declaration =============================================
  postSection80Data,
  fetchAllSectionName,
  fetchITDeclarationInfoBasedOnEmpIdAndFinancialYear,
  fetchITDeclarationSaveStatusInfoBasedOnEmpIdAndFinancialYear,
  fetchITDeclarationSaveStatusForSection80dInfoBasedOnEmpIdAndFinancialYear,
  postITDeclarationSaveStatusInfoBasedOnEmpIdAndFinancialYear,
  postITDeclarationSaveStatusForSection80dInfoBasedOnEmpIdAndFinancialYear,
  postTotalAmountForSection80c,
  postTotalAmountForSection80d,
  fetchTotalAmountForSection80c,
  fetchTotalAmountForSection80d,

  // proof of investment =========================================
  fetchProofOfInvestmentBasedOnEmpIdAndFinancialYear,
  postProofOfInvestment,
  setStatusForProofOfInvestment,
  getStatusForProofOfInvestmentFunction,
  setSubmitStatusForProofOfInvestment,
  getSubmitStatusForProofOfInvestmentFunction,
};

export default Service;
