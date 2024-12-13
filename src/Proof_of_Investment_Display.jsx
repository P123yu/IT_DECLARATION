// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import { TbCircleCheckFilled } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";
// import { useLocalStorage } from "react-use";
// import Service from "./Service";
// import useFileStore from "./Zustand";

// function Proof_of_Investment_Display() {
//   const employeeId = 2;
//   const navigate = useNavigate();

//   const { regime } = useFileStore();

//   const handleProofOfInvestmentScreenBack = () => {
//     navigate("/");
//   };

//   const [proofReviseClicked, setProofReviseClicked] = useLocalStorage(
//     "proof_revise_click_status",
//     "false"
//   );

//   const [netData80C, setNetData80C] = useState("");
//   const [netData80D, setNetData80D] = useState("");
//   const [netData80E, setNetData80E] = useState("");

//   useEffect(() => {
//     getTotalSection80C();
//     getTotalSection80D();
//     getTotalSection80E();
//   }, []);

//   const getTotalSection80C = () => {
//     Service.getSection80CByEmpId(employeeId).then((res) => {
//       setNetData80C(res?.data?.data || "");
//     });
//   };

//   const getTotalSection80D = () => {
//     Service.getSection80DByEmpId(employeeId).then((res) => {
//       setNetData80D(res?.data?.data || "");
//     });
//   };

//   const getTotalSection80E = () => {
//     Service.getSection80EByEmpId(employeeId).then((res) => {
//       setNetData80E(res?.data?.data || "");
//     });
//   };

//   // actual

//   const [actual80c, setActual80c] = useState("");
//   const [actual80d, setActual80d] = useState("");
//   const [actual80e, setActual80e] = useState("");

//   const handleChangeActualInsert80c = (e) => {
//     const { name, value } = e.target;
//     setActual80c({ ...actual80c, [name]: value });
//   };

//   console.log(actual80c, "actual80cnow...");

//   const handleActualInsert80c = () => {
//     console.warn(
//       actual80c,
//       "newActual80c+++++555uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"
//     );
//     if (localProofDispSaveStatus === "false" && proofReviseClicked == "false") {
//       console.log("fffffffffffffffffffffffff");
//       let newActual80c = { ...actual80c, empId: employeeId };
//       console.warn(newActual80c, "newActual80c+++++555");
//       Service.postSection80CActualValue(newActual80c).then((res) =>
//         console.log("inserted")
//       );
//     }
//   };

//   useEffect(() => {
//     Service.getSection80CActualValue(employeeId).then((res) => {
//       setActual80c(res?.data?.data || "");
//       console.warn(
//         res?.data?.data,
//         "+++++++++++++++++++++++++++++++++++++++++++"
//       );
//     });
//   }, []);

//   const handleChangeActualInsert80d = (e) => {
//     const { name, value } = e.target;
//     setActual80d({ ...actual80d, [name]: value });
//   };

//   console.log(actual80d, "actual80d&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
//   const handleActualInsert80d = () => {
//     if (localProofDispSaveStatus === "false" && proofReviseClicked == "false") {
//       let newActual80d = { ...actual80d, empId: employeeId };
//       console.warn(newActual80d, "newActual80d+++++555");
//       Service.postSection80DActualValue(newActual80d).then((res) =>
//         console.log("inserted")
//       );
//     }
//   };

//   useEffect(() => {
//     Service.getSection80DActualValue(employeeId).then((res) => {
//       setActual80d(res?.data?.data);
//     });
//   }, []);

//   useEffect(() => {
//     Service.getSection80EActualValue(employeeId).then((res) => {
//       console.log(
//         res?.data?.data,
//         "++++++++++++++++++++++++++++++++eeeeeeeeeeeeeeeeeeeeeeeeee************"
//       );
//       setActual80e(res?.data?.data);
//     });
//   }, []);

//   const handleChangeActualInsert80e = (e) => {
//     const { name, value } = e.target;
//     setActual80e({ ...actual80e, [name]: value });
//   };

//   console.log(actual80e, "actual80e))))))))))))))))");

//   const handleActualInsert80e = () => {
//     if (localProofDispSaveStatus === "false" && proofReviseClicked == "false") {
//       let newActual80e = { ...actual80e, empId: employeeId, flag: 1 };
//       Service.postSection80EActualValue(newActual80e).then((res) =>
//         console.log("inserted")
//       );
//     }
//   };

//   const handleNavigateProof = () => {
//     navigate("/proof_of_investment_update");
//   };

//   const [localProofDispSaveStatus, setLocalProofDispSaveStatus, remove] =
//     useLocalStorage("disp_proof_save_status", "false");
//   const handleSaveStatus = () => {
//     setLocalProofDispSaveStatus("true");
//   };

//   console.log(localProofDispSaveStatus, "localProofDispSaveStatus)))))");

//   const handleActualUpdate80c = () => {
//     if (
//       localProofDispSaveStatus === "true" ||
//       (localProofDispSaveStatus === "false" && proofReviseClicked == "true")
//     ) {
//       if (actual80c != {}) {
//         const { id, ...updatedActual80c } = actual80c;
//         console.log(id, "id");
//         console.log(
//           updatedActual80c,
//           "updatedActual80c99999999999999999999999999999"
//         );

//         axios
//           .put(
//             `http://localhost:8080/section80c-update/update/${id}`,
//             updatedActual80c
//           )
//           .then((res) => {
//             alert("updated");
//           });
//       }
//     }
//     // else {
//     //   axios.get("http://localhost:8080/section80c-update/get/2").then((res) => {
//     //     console.warn(res.data.data, "&&&&&&&&&&&&&&&&&&&**********");
//     //     axios
//     //       .put(
//     //         `http://localhost:8080/section80c-update/update/${res?.data?.data?.id}`,
//     //         actual80c
//     //       )
//     //       .then((res) => {
//     //         console.log(res.data, "PPPPPPPPPPPPPPP");
//     //       });
//     //   });
//     // }
//   };

//   const handleActualUpdate80d = () => {
//     if (
//       localProofDispSaveStatus === "true" ||
//       (localProofDispSaveStatus === "false" && proofReviseClicked == "true")
//     ) {
//       if (actual80d != {}) {
//         const { id, ...updatedActual80d } = actual80d;
//         //console.log(id, "id");
//         //console.log(updatedActual80d, "updatedActual80d");

//         axios
//           .put(
//             `http://localhost:8080/section80d-update/update/${id}`,
//             updatedActual80d
//           )
//           .then((res) => {
//             alert("updated");
//           });
//       }
//     }
//   };

//   const handleActualUpdate80e = () => {
//     if (
//       localProofDispSaveStatus === "true" ||
//       (localProofDispSaveStatus === "false" && proofReviseClicked == "true")
//     ) {
//       if (actual80d != {}) {
//         const { id, ...updatedActual80e } = actual80e;
//         console.log(id, "id");
//         console.log(updatedActual80e, "updatedActual80c");

//         axios
//           .put(
//             `http://localhost:8080/section80e-update/update/${id}`,
//             updatedActual80e
//           )
//           .then((res) => {
//             alert("updated");
//           });
//       }
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="flex space-x-10 items-center px-4 mb-2 mt-7 ">
//         <div className="text-gray-400 text-xl ml-4 cursor-pointer">
//           <FaArrowLeft onClick={handleProofOfInvestmentScreenBack} />
//         </div>
//         <div className="text-gray-700 font-semibold text-xl ">
//           Proof of Investments
//         </div>
//       </div>

//       <div className="border-b-[1px] border-gray-400 "></div>

//       <div className="bg-gray-200 border-[1px] border-gray-400 mt-7 w-1/3">
//         <div className="flex space-x-10 items-center mb-2 mt-7 ml-28 py-2">
//           <div className="text-gray-500 text-5xl cursor-pointer -mt-8">
//             <TbCircleCheckFilled onClick={handleProofOfInvestmentScreenBack} />
//           </div>
//           <div className="text-gray-700 font-semibold text-xl -mt-8">
//             <div className="text-gray-500">Selected Regime</div>
//             <div className="text-2xl">{regime}</div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-12">
//         <div className="col-span-12 lg:col-span-9 ">
//           <div className="flex justify-between px-2 font-semibold mt-5 mb-5">
//             <div className="text-xl ">Declaration Summary</div>
//             <div className="text-gray-600 ml-10 text-xl">
//               Financial Year: <span className="text-black">2024-2025</span>
//             </div>
//           </div>

//           <div className="border-[1px] border-gray-400 mt-0 pl-4">
//             <div className="flex lg:space-x-[520px] text-xl font-semibold bg-gray-100 pt-2 pb-4">
//               <div>Particulars</div>
//               <div className="flex space-x-10 items-center ">
//                 <h2>Declared Amount</h2>
//                 <h2>Actual Amount</h2>
//               </div>
//             </div>

//             <h1 className="text-lg font-semibold text-gray-700 mt-4">
//               Deduction under section 80 C
//             </h1>

//             <div>
//               <div>
//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-8">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Contribution to Pension Fund
//                       <span className="text-gray-500">
//                         (Max. Rs. 1,50,000 /-)
//                       </span>
//                     </h2>
//                   </div>

//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.cpf}
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="cpf"
//                           onChange={handleChangeActualInsert80c}
//                           value={actual80c?.cpf}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Life Insurance Premium
//                     </h2>
//                   </div>

//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.lip}
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="lip"
//                           onChange={handleChangeActualInsert80c}
//                           value={actual80c?.lip}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Public Provident Fund
//                     </h2>
//                   </div>

//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.ppf}
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="ppf"
//                           onChange={handleChangeActualInsert80c}
//                           value={actual80c?.ppf}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8">
//                     <h2 className="ml-5  font-semibold text-gray-700">ULIP</h2>
//                   </div>

//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.ulip}
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="ulip"
//                           onChange={handleChangeActualInsert80c}
//                           value={actual80c?.ulip}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       VIII Issue of NSC
//                     </h2>
//                   </div>

//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.ion}
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="ion"
//                           onChange={handleChangeActualInsert80c}
//                           value={actual80c?.ion}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8">
//                     <h2 className="ml-5 font-semibold text-gray-700">
//                       National Savings Scheme
//                     </h2>
//                   </div>

//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.nss}
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="nss"
//                           onChange={handleChangeActualInsert80c}
//                           value={actual80c?.nss}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Repayment of housing Loan Principle{" "}
//                       <span className="text-gray-500">
//                         (Max. Rs. 1,50,000 /-)
//                       </span>
//                     </h2>
//                   </div>

//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.hlp}
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1 ">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="hlp"
//                           onChange={handleChangeActualInsert80c}
//                           value={actual80c?.hlp}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Fixed Deposit Savings for 5 years
//                     </h2>
//                   </div>

//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.fds}
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="fds"
//                           onChange={handleChangeActualInsert80c}
//                           value={actual80c?.fds}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Equity Linked Savings Scheme
//                       <span className="text-gray-500">
//                         (Max. Rs. 1,50,000 /-)
//                       </span>
//                     </h2>
//                   </div>

//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.lss}
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="lss"
//                           onChange={handleChangeActualInsert80c}
//                           value={actual80c?.lss}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Children's Education Expenses
//                       <span className="text-gray-500">
//                         (Max. Rs. 1,50,000 /-)
//                       </span>{" "}
//                       <br></br>
//                       Restricted to Two Children{" "}
//                     </h2>
//                   </div>

//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.cee}
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="cee"
//                           onChange={handleChangeActualInsert80c}
//                           value={actual80c?.cee}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Deposite in Sukanya Samriddhi Scheme
//                     </h2>
//                   </div>

//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.dsss}
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="dsss"
//                           onChange={handleChangeActualInsert80c}
//                           value={actual80c?.dsss}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 lg:w-[940px]"></div>

//                 <h2 className="text-lg font-semibold text-gray-700 mt-4">
//                   Deduction under section 80 CCD
//                 </h2>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-8 ml-5">
//                     <h2 className=" text-gray-600 font-medium">
//                       National Pension Scheme{" "}
//                       <span className="text-gray-500">
//                         (Max. Rs. 50,000 /-)
//                       </span>
//                     </h2>
//                   </div>

//                   <div className="col-span-2 text-gray-500 font-medium text-lg ml-5">
//                     <h2 className="my-2">{netData80D?.nps}</h2>
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="nps"
//                           onChange={handleChangeActualInsert80d}
//                           value={actual80d?.nps}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 lg:w-[940px]"></div>

//                 <h2 className="text-lg font-semibold text-gray-700 mt-4">
//                   Deduction under section 80 D - Medicliam Policy (Excluding
//                   Through CMS)
//                 </h2>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-8 ml-5">
//                     <h2 className="my-2 text-lg font-semibold ">
//                       Premium for Mediclaim policy for Self & ChildSpouse
//                       <span className="text-gray-500">
//                         (Maximum exemption Rs. 25,000 /-)
//                       </span>
//                     </h2>
//                   </div>

//                   <div className="col-span-2 text-gray-500 font-medium text-lg ml-5">
//                     <h2 className="">{netData80D?.mpsc}</h2>
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1 ">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="mpsc"
//                           onChange={handleChangeActualInsert80d}
//                           value={actual80d?.mpsc}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8 ml-5">
//                     <h2 className="my-2 text-lg font-semibold ">
//                       Premium for Mediclaim policy for Parents{" "}
//                       <span className="text-gray-500">
//                         (Parent's age less than 60 years)
//                       </span>
//                     </h2>
//                   </div>

//                   <div className="col-span-2 text-gray-500 font-medium text-lg ml-5">
//                     <h2 className="">{netData80D?.mpp}</h2>
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="mpp"
//                           onChange={handleChangeActualInsert80d}
//                           value={actual80d?.mpp}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8 ml-5">
//                     <h2 className="my-2 text-lg font-semibold ">
//                       Premium for Mediclaim policy for Parents
//                       <span className="text-gray-500 text-md font-semibold ">
//                         (Parent's age less than 60 years (Senior Citizen))
//                       </span>
//                     </h2>
//                   </div>

//                   <div className="col-span-2 text-gray-500 font-medium text-lg ml-5">
//                     <h2 className="">{netData80D?.mppsc}</h2>
//                   </div>

//                   <div className="col-span-2 -ml-4 lg:-ml-0">
//                     <div className="flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="mppsc"
//                           onChange={handleChangeActualInsert80d}
//                           value={actual80d?.mppsc}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 lg:w-[940px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-8">
//                     <h2 className="text-lg font-semibold text-gray-700 mt-4">
//                       Deduction in respect of maintainance including medical
//                       treatment of handicapped dependent who is a person with
//                       disability
//                     </h2>
//                     <div className="ml-5 font-semibold text-gray-700 text-md">
//                       <h2 className="">
//                         Maxiumum exemption is 1,25,000 /- for dependent with
//                         disability more than 80% and 70,000 /- for dependent
//                         with disability less than 80% and more than 40%
//                       </h2>
//                     </div>
//                   </div>

//                   <div className="col-span-2 py-4 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80D?.mth}
//                   </div>

//                   <div className="col-span-2 py-4 -ml-4 lg:-ml-0">
//                     <div className="flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="mth"
//                           onChange={handleChangeActualInsert80d}
//                           value={actual80d?.mth}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 lg:w-[940px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-8">
//                     <h2 className="text-lg text-gray-800 py-3 font-medium">
//                       Deduction in respect of medical treatment for cases
//                       covered under rule 11DD (1) of IT rules , 1962 [Sec.80DDB]
//                       max Rs. 40,000 /-
//                     </h2>
//                     <div className="font-semibold text-gray-700 ">
//                       <h2 className="ml-5">National Savings Scheme</h2>
//                     </div>
//                   </div>

//                   <div className="col-span-2 py-4 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80D?.mtc}
//                   </div>

//                   <div className="col-span-2 py-4 -ml-4 lg:-ml-0">
//                     <div className="flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="mtc"
//                           onChange={handleChangeActualInsert80d}
//                           value={actual80d?.mtc}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 lg:w-[940px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-8">
//                     <h2 className="text-lg text-gray-800 py-3 font-medium">
//                       Deduction in respect of Totally Blind Physically
//                       handicapped or mentally retarded person [Sec. 80U] max Rs.
//                       75,000 /-
//                     </h2>
//                     <div className="font-semibold text-gray-700">
//                       <h2 className="ml-5">
//                         Yes / No (if yes please enclose the certificate){" "}
//                       </h2>
//                     </div>
//                   </div>

//                   <div className="col-span-2 py-4 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80D?.tbpm}
//                   </div>

//                   <div className="col-span-2 py-4 -ml-4 lg:-ml-0">
//                     <div className="flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="tbpm"
//                           onChange={handleChangeActualInsert80d}
//                           value={actual80d?.tbpm}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 lg:w-[940px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-8">
//                     <h2 className="text-lg text-gray-800 pt-3 font-medium">
//                       Deduction in respect of repayment of Loan "Only interest
//                       on Loan" Taken for Higher Eduction [Sec. 80E]
//                     </h2>
//                   </div>

//                   <div className="col-span-2 pt-4 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80E?.loan}
//                   </div>

//                   <div className="col-span-2 pt-4 -ml-4 lg:-ml-0">
//                     <div className="flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="loan"
//                           onChange={handleChangeActualInsert80e}
//                           value={actual80e?.loan}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 lg:w-[940px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-8">
//                     <h2 className="text-lg text-gray-800 pt-3 font-medium">
//                       House Rent Exemption unser Section 10 (13A) <br></br>
//                     </h2>
//                     <div className="font-semibold text-gray-700 ">
//                       <h2 className="ml-5">Rent payable per month</h2>
//                     </div>
//                   </div>

//                   <div className="col-span-2 pt-4 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80E?.rent}
//                   </div>

//                   <div className="col-span-2 pt-4 -ml-4 lg:-ml-0">
//                     <div className="flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="rent"
//                           onChange={handleChangeActualInsert80e}
//                           value={actual80e?.rent}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 lg:w-[940px]"></div>

//                 <div className="grid grid-cols-12 gap-2 ">
//                   <div className="col-span-8">
//                     <h2 className="text-lg text-gray-800 py-3 font-medium">
//                       Interest paid on housingloan from approved Financial
//                       Institution
//                     </h2>
//                   </div>

//                   <div className="col-span-2 py-3 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80E?.housingLoan}
//                   </div>

//                   <div className="col-span-2 py-3 -ml-4 lg:-ml-0">
//                     <div className="flex items-center border-[1px] border-gray-400 lg:w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[20px] lg:w-[70px] outline-none"
//                           name="housingLoan"
//                           onChange={handleChangeActualInsert80e}
//                           value={actual80e?.housingLoan}
//                           readOnly={
//                             localProofDispSaveStatus === "true" ? true : false
//                           }
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {localProofDispSaveStatus === "true" ? (
//         ""
//       ) : (
//         <div className="flex space-x-20 items-center ml-32 lg:ml-[1000px] mt-10 pb-10">
//           <button
//             className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//             onClick={() => {
//               handleActualInsert80c();
//               handleNavigateProof();
//               handleActualInsert80d();
//               handleActualInsert80e();
//               handleSaveStatus();

//               // for update
//               handleActualUpdate80c();
//               handleActualUpdate80d();
//               handleActualUpdate80e();
//             }}
//           >
//             Save
//           </button>

//           <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Proof_of_Investment_Display;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import { TbCircleCheckFilled } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";
// import { useLocalStorage } from "react-use";
// import Service from "./Service";
// import useFileStore from "./Zustand";
// import { useStoreFinancialYear } from "./useFileStore";

// function Proof_of_Investment_Display() {
//   const employeeId = 2;
//   const navigate = useNavigate();

//   const { regime } = useFileStore();

//   const { submitFinancialYear } = useStoreFinancialYear();

//   const handleProofOfInvestmentScreenBack = () => {
//     navigate("/");
//   };

//   const [proofReviseClicked, setProofReviseClicked] = useLocalStorage(
//     "proof_revise_click_status",
//     "false"
//   );

//   const [netData80C, setNetData80C] = useState("");
//   const [netData80D, setNetData80D] = useState("");
//   const [netData80E, setNetData80E] = useState("");

//   useEffect(() => {
//     getTotalSection80C();
//     getTotalSection80D();
//     getTotalSection80E();
//   }, []);

//   const getTotalSection80C = () => {
//     Service.getSection80CByEmpId(employeeId).then((res) => {
//       setNetData80C(res?.data?.data || "");
//     });
//   };

//   const getTotalSection80D = () => {
//     Service.getSection80DByEmpId(employeeId).then((res) => {
//       setNetData80D(res?.data?.data || "");
//     });
//   };

//   const getTotalSection80E = () => {
//     Service.getSection80EByEmpId(employeeId).then((res) => {
//       setNetData80E(res?.data?.data || "");
//     });
//   };

//   // actual

//   const [actual80c, setActual80c] = useState("");
//   const [actual80d, setActual80d] = useState("");
//   const [actual80e, setActual80e] = useState("");

//   const handleChangeActualInsert80c = (e) => {
//     const { name, value } = e.target;
//     setActual80c({ ...actual80c, [name]: value });
//   };

//   console.log(actual80c, "actual80cnow...");

//   const handleActualInsert80c = () => {
//     console.warn(
//       actual80c,
//       "newActual80c+++++555uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"
//     );
//     if (localProofDispSaveStatus === "false" && proofReviseClicked == "false") {
//       console.log("fffffffffffffffffffffffff");
//       let newActual80c = { ...actual80c, empId: employeeId };
//       console.warn(newActual80c, "newActual80c+++++555");
//       Service.postSection80CActualValue(newActual80c).then((res) =>
//         console.log("inserted")
//       );
//     }
//   };

//   useEffect(() => {
//     Service.getSection80CActualValue(employeeId).then((res) => {
//       setActual80c(res?.data?.data || "");
//       console.warn(
//         res?.data?.data,
//         "+++++++++++++++++++++++++++++++++++++++++++"
//       );
//     });
//   }, []);

//   const handleChangeActualInsert80d = (e) => {
//     const { name, value } = e.target;
//     setActual80d({ ...actual80d, [name]: value });
//   };

//   console.log(actual80d, "actual80d&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
//   const handleActualInsert80d = () => {
//     if (localProofDispSaveStatus === "false" && proofReviseClicked == "false") {
//       let newActual80d = { ...actual80d, empId: employeeId };
//       console.warn(newActual80d, "newActual80d+++++555");
//       Service.postSection80DActualValue(newActual80d).then((res) =>
//         console.log("inserted")
//       );
//     }
//   };

//   useEffect(() => {
//     Service.getSection80DActualValue(employeeId).then((res) => {
//       setActual80d(res?.data?.data);
//     });
//   }, []);

//   useEffect(() => {
//     Service.getSection80EActualValue(employeeId).then((res) => {
//       console.log(
//         res?.data?.data,
//         "++++++++++++++++++++++++++++++++eeeeeeeeeeeeeeeeeeeeeeeeee************"
//       );
//       setActual80e(res?.data?.data);
//     });
//   }, []);

//   const handleChangeActualInsert80e = (e) => {
//     const { name, value } = e.target;
//     setActual80e({ ...actual80e, [name]: value });
//   };

//   console.log(actual80e, "actual80e))))))))))))))))");

//   const handleActualInsert80e = () => {
//     if (localProofDispSaveStatus === "false" && proofReviseClicked == "false") {
//       let newActual80e = { ...actual80e, empId: employeeId, flag: 1 };
//       Service.postSection80EActualValue(newActual80e).then((res) =>
//         console.log("inserted")
//       );
//     }
//   };

//   // const handleNavigateProof = () => {
//   //   navigate("/proof_of_investment_update");
//   // };

//   const [localProofDispSaveStatus, setLocalProofDispSaveStatus, remove] =
//     useLocalStorage("disp_proof_save_status", "false");
//   const handleSaveStatus = () => {
//     setLocalProofDispSaveStatus("true");
//   };

//   console.log(localProofDispSaveStatus, "localProofDispSaveStatus)))))");

//   const handleActualUpdate80c = () => {
//     if (
//       localProofDispSaveStatus === "true" ||
//       (localProofDispSaveStatus === "false" && proofReviseClicked == "true")
//     ) {
//       if (actual80c != {}) {
//         const { id, ...updatedActual80c } = actual80c;
//         console.log(id, "id");
//         console.log(
//           updatedActual80c,
//           "updatedActual80c99999999999999999999999999999"
//         );

//         axios
//           .put(
//             `http://localhost:8080/section80c-update/update/${id}`,
//             updatedActual80c
//           )
//           .then((res) => {
//             alert("updated");
//           });
//       }
//     }
//     // else {
//     //   axios.get("http://localhost:8080/section80c-update/get/2").then((res) => {
//     //     console.warn(res.data.data, "&&&&&&&&&&&&&&&&&&&**********");
//     //     axios
//     //       .put(
//     //         `http://localhost:8080/section80c-update/update/${res?.data?.data?.id}`,
//     //         actual80c
//     //       )
//     //       .then((res) => {
//     //         console.log(res.data, "PPPPPPPPPPPPPPP");
//     //       });
//     //   });
//     // }
//   };

//   const handleActualUpdate80d = () => {
//     if (
//       localProofDispSaveStatus === "true" ||
//       (localProofDispSaveStatus === "false" && proofReviseClicked == "true")
//     ) {
//       if (actual80d != {}) {
//         const { id, ...updatedActual80d } = actual80d;
//         //console.log(id, "id");
//         //console.log(updatedActual80d, "updatedActual80d");

//         axios
//           .put(
//             `http://localhost:8080/section80d-update/update/${id}`,
//             updatedActual80d
//           )
//           .then((res) => {
//             alert("updated");
//           });
//       }
//     }
//   };

//   const handleActualUpdate80e = () => {
//     if (
//       localProofDispSaveStatus === "true" ||
//       (localProofDispSaveStatus === "false" && proofReviseClicked == "true")
//     ) {
//       if (actual80d != {}) {
//         const { id, ...updatedActual80e } = actual80e;
//         console.log(id, "id");
//         console.log(updatedActual80e, "updatedActual80c");

//         axios
//           .put(
//             `http://localhost:8080/section80e-update/update/${id}`,
//             updatedActual80e
//           )
//           .then((res) => {
//             alert("updated");
//           });
//       }
//     }
//   };

//   // const [info, setInfo] = useState([]);

//   // const fetchInfo = () => {
//   //   axios
//   //     .get("http://localhost:8080/it-declaration-info/get/2/2024-2025")
//   //     .then((res) => {
//   //       setInfo(res?.data);
//   //     });
//   // };

//   // useEffect(() => {
//   //   fetchInfo();
//   // }, []);

//   // const [master, setMaster] = useState([]);

//   // const fetchMaster = () => {
//   //   axios
//   //     .get("http://localhost:8080/it-declaration-master/get-all")
//   //     .then((res) => {
//   //       setMaster(res?.data);
//   //     });
//   // };

//   // useEffect(() => {
//   //   fetchMaster();
//   // }, []);

//   // const allSectionName = info.map((item1) => {
//   //   const matchingItem = master.find(
//   //     (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//   //   );
//   //   return matchingItem ? { ...item1, ...matchingItem } : item1;
//   // });

//   // ===============================================================================================

//   // const [info, setInfo] = useState([]);
//   // const [master, setMaster] = useState([]);
//   // const [proof, setProof] = useState([]);
//   // const [allSectionName, setAllSectionName] = useState([]); // State to store the combined data

//   // // Fetch info data
//   // const fetchInfo = () => {
//   //   axios
//   //     .get("http://localhost:8080/it-declaration-info/get/2/2024-2025")
//   //     .then((res) => {
//   //       setInfo(res?.data);
//   //     });
//   // };

//   // useEffect(() => {
//   //   fetchInfo();
//   // }, []);

//   // // Fetch master data
//   // const fetchMaster = () => {
//   //   axios
//   //     .get("http://localhost:8080/it-declaration-master/get-all")
//   //     .then((res) => {
//   //       setMaster(res?.data);
//   //     });
//   // };

//   // useEffect(() => {
//   //   fetchMaster();
//   // }, []);

//   // const fetchProofOfinvestment = () => {
//   //   axios.get("http://localhost:8080/get-all-proof/2/2024-2025").then((res) => {
//   //     setProof(res?.data);
//   //   });
//   // };

//   // const [proofSaveStatus, setProofSaveStatus] = useState(false);

//   // useEffect(() => {
//   //   fetchProofOfinvestment();
//   // }, [proofSaveStatus === true]);

//   // // Update allSectionName whenever info or master changes
//   // useEffect(() => {
//   //   const combinedData = info.map((item1) => {
//   //     const matchingItem = master.find(
//   //       (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//   //     );
//   //     return matchingItem ? { ...item1, ...matchingItem } : item1;
//   //   });
//   //   setAllSectionName(combinedData);
//   // }, [info, master, proofSaveStatus === true]);

//   const [info, setInfo] = useState([]);
//   const [master, setMaster] = useState([]);
//   const [proof, setProof] = useState([]);
//   const [allSectionName, setAllSectionName] = useState([]); // State to store the combined data
//   const [proofSaveStatus, setProofSaveStatus] = useState(false);

//   // Fetch info data
//   const fetchInfo = () => {
//     axios
//       .get("http://localhost:8080/it-declaration-info/get/2/2024-2025")
//       .then((res) => {
//         setInfo(res?.data);
//       });
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   // Fetch master data
//   const fetchMaster = () => {
//     axios
//       .get("http://localhost:8080/it-declaration-master/get-all")
//       .then((res) => {
//         setMaster(res?.data);
//       });
//   };

//   useEffect(() => {
//     fetchMaster();
//   }, []);

//   // Fetch proof data
//   const fetchProofOfinvestment = () => {
//     axios
//       .get(
//         "http://localhost:8080/proof-of-investment/get-all-proof/2/2024-2025"
//       )
//       .then((res) => {
//         setProof(res?.data);
//       });
//   };

//   useEffect(() => {
//     fetchProofOfinvestment();
//   }, [proofSaveStatus]); // Re-fetch when proofSaveStatus changes

//   // Merge info, master, and proof data based on itDecId
//   useEffect(() => {
//     const combinedData = info.map((infoItem) => {
//       const matchingMaster = master.find(
//         (masterItem) => Number(masterItem.itDecId) === Number(infoItem.itDecId)
//       );

//       const matchingProof = proof.find(
//         (proofItem) => Number(proofItem.itDecId) === Number(infoItem.itDecId)
//       );

//       // Combine data from info, master, and proof
//       return {
//         ...infoItem,
//         ...(matchingMaster || {}),
//         ...(matchingProof || {}),
//       };
//     });

//     setAllSectionName(combinedData);
//   }, [info, master, proof, proofSaveStatus]); // Update whenever any of the dependencies change

//   useEffect(() => {
//     const combinedData = info.map((item1) => {
//       const matchingItem = master.find(
//         (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//       );
//       return matchingItem ? { ...item1, ...matchingItem } : item1;
//     });
//     setAllSectionName(combinedData);
//   }, [info, master]);

//   // Update allSectionName whenever info or master changes
//   useEffect(() => {
//     const combinedData = info.map((item1) => {
//       const matchingItem = master.find(
//         (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//       );
//       return matchingItem ? { ...item1, ...matchingItem } : item1;
//     });
//     setAllSectionName(combinedData);
//   }, [info, master, proofSaveStatus === true]);

//   const [allSectionNames, setAllSectionNames] = useState([]);

//   // const handleChangeProofOfInvestment = (e, itDecId) => {
//   //   const key = e.target.name;
//   //   const value = e.target.value;
//   //   let updatedSections = [];

//   //   // if (empIdAndFinancialYearStatus === false) {
//   //   //   // Map through allSectionName to add empId and financialYear
//   //   updatedSections = allSectionName.map((section) => ({
//   //     ...section,
//   //     empId: employeeId,
//   //     financialYear: submitFinancialYear,
//   //   }));
//   //   // } else {
//   //   //   // Merge existingAllSectionName and allSectionName based on itDecId
//   //   //   updatedSections = existingAllSectionName.map((item1) => {
//   //   //     const matchingItem = allSectionName.find(
//   //   //       (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//   //   //     );
//   //   //     return matchingItem ? { ...item1, ...matchingItem } : item1;
//   //   //   });
//   //   // }

//   //   console.warn(
//   //     updatedSections,
//   //     "updatedSections after merge and before modification"
//   //   );

//   //   // Define additional info for all sections
//   //   const additionalInfo = {
//   //     taxRegime: regime === "Old Regime" ? 0 : 1,
//   //   };

//   //   // Update the specific section based on itDecId
//   //   updatedSections = updatedSections.map((section) =>
//   //     section.itDecId === itDecId
//   //       ? {
//   //           ...section,
//   //           ...additionalInfo, // Add additional info
//   //           [key]: value, // Update the dynamic key-value pair
//   //         }
//   //       : section
//   //   );

//   //   console.warn(updatedSections, "updatedSections after modification");

//   //   // Update the state with the modified data
//   //   setAllSectionNames(updatedSections);
//   // };

//   // const handleChangeProofOfInvestment = (e, itDecId) => {
//   //   const key = e.target.name; // Field name, e.g., "revisedAmount"
//   //   const value = e.target.value; // New value entered in the input

//   //   const updatedSections = allSectionName.map((section) => {
//   //     // Only update the section with the matching itDecId
//   //     if (section.itDecId === itDecId) {
//   //       return {
//   //         ...section,
//   //         [key]: value, // Dynamically update the key-value pair
//   //       };
//   //     }
//   //     // Keep other sections unchanged
//   //     return section;
//   //   });

//   //   console.log(updatedSections, "Updated sections after modification");
//   //   setAllSectionNames(updatedSections); // Update state with the modified array
//   // };

//   const handleChangeProofOfInvestment = (id, newRevisedAmount) => {
//     setAllSectionName((prevAllSectionName) =>
//       prevAllSectionName.map((item) =>
//         item.itDecId === id
//           ? { ...item, revisedAmount: newRevisedAmount }
//           : item
//       )
//     );
//   };

//   console.log(allSectionName, "allSectionNames++++++===");

//   console.log(allSectionNames, "allSectionNames.....");

//   // change with session storage
//   useEffect(() => {
//     getStatusForProofOfInvestmentFunction();
//   }, []);

//   const handleSaveProofOfInvestment = () => {
//     setAllSectionDataProofOfInvestmentFunction();
//   };

//   const setAllSectionDataProofOfInvestmentFunction = () => {
//     axios
//       .post("http://localhost:8080/proof-of-investment/add", allSectionName)
//       .then((res) => {
//         alert("saved");
//         setStatusForProofOfInvestmentFunction();
//       });
//   };

//   const setStatusForProofOfInvestmentFunction = () => {
//     axios
//       .get(
//         "http://localhost:8080/proof-of-investment/set-status-proof/2/2024-2025/true"
//       )
//       .then((res) => {
//         alert("status saved");
//         navigate("/proof-of-investment-update");
//         getStatusForProofOfInvestmentFunction();
//       });
//   };

//   // useEffect(() => {
//   //   navigate("/proof-of-investment-update");
//   // }, [proofSaveStatus === true]);

//   // useEffect(() => {
//   //   navigate("/proof-of-investment-update");
//   // }, []);

//   const getStatusForProofOfInvestmentFunction = () => {
//     axios
//       .get(
//         "http://localhost:8080/proof-of-investment/get-status-proof/2/2024-2025"
//       )
//       .then((res) => {
//         setProofSaveStatus(res?.data);
//       });
//   };

//   return (
//     <div className="p-4">
//       <div className="flex space-x-10 items-center px-4 mb-2 mt-7 ">
//         <div className="text-gray-400 text-xl ml-4 cursor-pointer">
//           <FaArrowLeft onClick={handleProofOfInvestmentScreenBack} />
//         </div>
//         <div className="text-gray-700 font-semibold text-xl ">
//           Proof of Investments
//         </div>
//       </div>

//       <div className="border-b-[1px] border-gray-400 "></div>

//       <div className="bg-gray-200 border-[1px] border-gray-400 mt-7 w-1/3">
//         <div className="flex space-x-10 items-center mb-2 mt-7 ml-28 py-2">
//           <div className="text-gray-500 text-5xl cursor-pointer -mt-8">
//             <TbCircleCheckFilled onClick={handleProofOfInvestmentScreenBack} />
//           </div>
//           <div className="text-gray-700 font-semibold text-xl -mt-8">
//             <div className="text-gray-500">Selected Regime</div>
//             <div className="text-2xl">{regime}</div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-12">
//         <div className="col-span-12 lg:col-span-9 ">
//           <div className="flex justify-between px-2 font-semibold mt-5 mb-5">
//             <div className="text-xl ">Declaration Summary</div>
//             <div className="text-gray-600 ml-10 text-xl">
//               Financial Year: <span className="text-black">2024-2025</span>
//             </div>
//           </div>

//           <div className="border-[1px] border-gray-400 mt-0 pl-4">
//             <div className="flex lg:space-x-[440px] text-xl font-semibold bg-gray-100 pt-2 pb-4">
//               <div>Particulars</div>
//               <div className="flex space-x-[40px] items-center ">
//                 <h2>Declared Amount</h2>
//                 <h2>Actual Amount</h2>
//               </div>
//             </div>

//             {/* <h1 className="text-lg font-semibold text-gray-700 mt-4">
//               Deduction under section 80 C
//             </h1> */}

//             <div className="border-[1px] border-gray-400 rounded-md mt-5 shadow-xl">
//               <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
//                 <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
//                   Deduction under section 80 C
//                 </h2>
//                 {/* <img
//                   className="h-12 w-12 ml-[75px] mt-5 mb-3"
//                   src="./src/assets/Medical.jpg"
//                 /> */}
//               </div>
//               <div className="grid grid-cols-12  p-5">
//                 {allSectionName
//                   ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
//                   ?.filter(
//                     (section) => section.itDecId >= 1 && section.itDecId <= 3
//                   )
//                   ?.map((section) => (
//                     <div
//                       className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
//                       key={section.itDecId}
//                     >
//                       <div className="col-span-7 break-words whitespace-normal ">
//                         <label className="font-medium text-gray-600 text-lg">
//                           {section.declarationName}
//                         </label>
//                         {section.additionalInformation && (
//                           <p className="text-gray-500 ">
//                             {section.additionalInformation}
//                           </p>
//                         )}
//                       </div>
//                       <h2 className="text-gray-500 font-semibold">
//                         {section?.declarationAmount}
//                       </h2>

//                       <div className="col-span-1"></div>

//                       <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
//                         <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
//                           INR
//                         </div>
//                         <input
//                           type="number"
//                           className="w-[92px] px-2 text-gray-500 outline-none"
//                           name="revisedAmount"
//                           value={section?.revisedAmount}
//                           onChange={(e) =>
//                             handleChangeProofOfInvestment(
//                               section.itDecId,
//                               e.target.value
//                             )
//                           }

//                           // onChange={(e) =>
//                           //   handleChangeProofOfInvestment(
//                           //     e.target.value,
//                           //     section.itDecId
//                           //   )
//                           // }
//                         />
//                       </div>
//                     </div>
//                   ))}
//               </div>

//               <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
//                 <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
//                   Section 80D/80DD/80DDB/80U
//                 </h2>
//                 {/* <img
//                   className="h-12 w-12 ml-[75px] mt-5 mb-3"
//                   src="./src/assets/Medical.jpg"
//                 /> */}
//               </div>
//               <div className="grid grid-cols-12  p-5">
//                 {allSectionName
//                   ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
//                   ?.filter(
//                     (section) => section.itDecId >= 4 && section.itDecId <= 6
//                   )
//                   ?.map((section) => (
//                     <div
//                       className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
//                       key={section.itDecId}
//                     >
//                       <div className="col-span-7 break-words whitespace-normal ">
//                         <label className="font-medium text-gray-600 text-lg">
//                           {section.declarationName}
//                         </label>
//                         {section.additionalInformation && (
//                           <p className="text-gray-500 ">
//                             {section.additionalInformation}
//                           </p>
//                         )}
//                       </div>
//                       <h2 className="text-gray-500 font-semibold">
//                         {section?.declarationAmount}
//                       </h2>

//                       <div className="col-span-1"></div>

//                       <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
//                         <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
//                           INR
//                         </div>
//                         <input
//                           type="number"
//                           className="w-[92px] px-2 text-gray-500 outline-none"
//                           name="revisedAmount"
//                           value={section?.revisedAmount}
//                           onChange={(e) =>
//                             handleChangeProofOfInvestment(
//                               section.itDecId,
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>
//                     </div>
//                   ))}
//               </div>

//               <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
//                 <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
//                   Section 80E/10/Housing Loan
//                 </h2>
//               </div>
//               <div className="grid grid-cols-12  p-5">
//                 {allSectionName
//                   ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
//                   ?.filter(
//                     (section) => section.itDecId >= 6 && section.itDecId <= 10
//                   )
//                   ?.map((section) => (
//                     <div
//                       className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
//                       key={section.itDecId}
//                     >
//                       <div className="col-span-7 break-words whitespace-normal ">
//                         <label className="font-medium text-gray-600 text-lg">
//                           {section.declarationName}
//                         </label>
//                         {section.additionalInformation && (
//                           <p className="text-gray-500 ">
//                             {section.additionalInformation}
//                           </p>
//                         )}
//                       </div>
//                       <h2 className="text-gray-500 font-semibold">
//                         {section?.declarationAmount}
//                       </h2>

//                       <div className="col-span-1"></div>

//                       <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
//                         <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
//                           INR
//                         </div>
//                         <input
//                           type="number"
//                           className="w-[92px] px-2 text-gray-500 outline-none"
//                           name="revisedAmount"
//                           value={section?.revisedAmount}
//                           // onChange={(e) =>
//                           //   handleChangeProofOfInvestment(e, section.itDecId)
//                           // }
//                           onChange={(e) =>
//                             handleChangeProofOfInvestment(
//                               section.itDecId,
//                               e.target.value
//                             )
//                           }
//                         />
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {!proofSaveStatus ? (
//         <div className="flex space-x-20 items-center ml-32 lg:ml-[1000px] mt-10 pb-10">
//           <button
//             className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//             onClick={() => {
//               handleSaveProofOfInvestment();
//             }}
//           >
//             Save
//           </button>

//           <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//             Cancel
//           </button>
//         </div>
//       ) : (
//         ""
//       )}

//       {/*
//       {localProofDispSaveStatus === "true" ? (
//         ""
//       ) : (
//         <div className="flex space-x-20 items-center ml-32 lg:ml-[1000px] mt-10 pb-10">
//           <button
//             className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//             onClick={() => {
//               // handleActualInsert80c();
//               // handleNavigateProof();
//               // handleActualInsert80d();
//               // handleActualInsert80e();
//               // handleSaveStatus();

//               // // for update
//               // handleActualUpdate80c();
//               // handleActualUpdate80d();
//               // handleActualUpdate80e();
//             }}
//           >
//             Save
//           </button>

//           <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//             Cancel
//           </button>
//         </div>
//       )} */}
//     </div>
//   );
// }

// export default Proof_of_Investment_Display;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { TbCircleCheckFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import useFileStore from "./Zustand";
import { useStoreFinancialYear } from "./useFileStore";

function Proof_of_Investment_Display() {
  const employeeId = 2;
  const navigate = useNavigate();

  const { regime } = useFileStore();

  const { submitFinancialYear } = useStoreFinancialYear();

  const handleProofOfInvestmentScreenBack = () => {
    navigate("/");
  };

  const [info, setInfo] = useState([]);
  const [master, setMaster] = useState([]);
  const [proof, setProof] = useState([]);
  const [allSectionName, setAllSectionName] = useState([]);
  const [proofSaveStatus, setProofSaveStatus] = useState(false);

  // Fetch info data
  const fetchInfo = () => {
    axios
      .get("http://localhost:8080/it-declaration-info/get/2/2024-2025")
      .then((res) => {
        setInfo(res?.data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Fetch master data
  const fetchMaster = () => {
    axios
      .get("http://localhost:8080/it-declaration-master/get-all")
      .then((res) => {
        setMaster(res?.data);
      });
  };

  useEffect(() => {
    fetchMaster();
  }, []);

  // Fetch proof data
  const fetchProofOfinvestment = () => {
    axios
      .get(
        "http://localhost:8080/proof-of-investment/get-all-proof/2/2024-2025"
      )
      .then((res) => {
        setProof(res?.data);
      });
  };

  useEffect(() => {
    fetchProofOfinvestment();
  }, [proofSaveStatus]);

  // // Merge info, master, and proof data based on itDecId
  // useEffect(() => {
  //   const combinedData = info.map((infoItem) => {
  //     const matchingMaster = master.find(
  //       (masterItem) => Number(masterItem.itDecId) === Number(infoItem.itDecId)
  //     );

  //     const matchingProof = proof.find(
  //       (proofItem) => Number(proofItem.itDecId) === Number(infoItem.itDecId)
  //     );

  //     // Combine data from info, master, and proof
  //     return {
  //       ...infoItem,
  //       ...(matchingMaster || {}),
  //       ...(matchingProof || {}),
  //     };
  //   });

  //   setAllSectionName(combinedData);
  // }, [info, master, proof]);

  // //[info, master, proof, proofSaveStatus]);

  // useEffect(() => {
  //   const combinedData = info.map((item1) => {
  //     const matchingItem = master.find(
  //       (item2) => Number(item2.itDecId) === Number(item1.itDecId)
  //     );
  //     return matchingItem ? { ...item1, ...matchingItem } : item1;
  //   });
  //   setAllSectionName(combinedData);
  // }, [info, master]);

  useEffect(() => {
    // Merge info and master
    const combinedData = info.map((infoItem) => {
      const matchingMaster = master.find(
        (masterItem) => Number(masterItem.itDecId) === Number(infoItem.itDecId)
      );

      // Combine info and master
      return {
        ...infoItem,
        ...(matchingMaster || {}),
      };
    });

    setAllSectionName(combinedData); // Set intermediate merged data
  }, [info, master]);

  useEffect(() => {
    // Add proof data to the existing merged data
    setAllSectionName((prevData) =>
      prevData.map((item) => {
        const matchingProof = proof.find(
          (proofItem) => Number(proofItem.itDecId) === Number(item.itDecId)
        );

        // Add proof data if it exists
        return {
          ...item,
          ...(matchingProof || {}),
        };
      })
    );
  }, [proof]);

  // Update allSectionName whenever info or master changes
  // useEffect(() => {
  //   const combinedData = info.map((item1) => {
  //     const matchingItem = master.find(
  //       (item2) => Number(item2.itDecId) === Number(item1.itDecId)
  //     );
  //     return matchingItem ? { ...item1, ...matchingItem } : item1;
  //   });
  //   setAllSectionName(combinedData);
  // }, [info, master, proofSaveStatus === true]);

  const [allSectionNames, setAllSectionNames] = useState([]);

  const handleChangeProofOfInvestment = (id, newRevisedAmount) => {
    setAllSectionName((prevAllSectionName) =>
      prevAllSectionName.map((item) =>
        item.itDecId === id
          ? { ...item, revisedAmount: newRevisedAmount }
          : item
      )
    );
  };

  console.log(allSectionName, "allSectionNames++++++===iiiiiiiiiiiii");

  useEffect(() => {
    getStatusForProofOfInvestmentFunction();
  }, []);

  const handleSaveProofOfInvestment = () => {
    setAllSectionDataProofOfInvestmentFunction();
  };

  const setAllSectionDataProofOfInvestmentFunction = () => {
    axios
      .post("http://localhost:8080/proof-of-investment/add", allSectionName)
      .then((res) => {
        alert("saved");
        setStatusForProofOfInvestmentFunction();
      });
  };

  const setStatusForProofOfInvestmentFunction = () => {
    axios
      .get(
        "http://localhost:8080/proof-of-investment/set-status-proof/2/2024-2025/true"
      )
      .then((res) => {
        alert("status saved");
        navigate("/proof-of-investment-update");
        getStatusForProofOfInvestmentFunction();
      });
  };

  // useEffect(() => {
  //   navigate("/proof-of-investment-update");
  // }, [proofSaveStatus === true]);

  const getStatusForProofOfInvestmentFunction = () => {
    axios
      .get(
        "http://localhost:8080/proof-of-investment/get-status-proof/2/2024-2025"
      )
      .then((res) => {
        setProofSaveStatus(res?.data);
      });
  };

  return (
    <div className="p-4">
      <div className="flex space-x-10 items-center px-4 mb-2 mt-7 ">
        <div className="text-gray-400 text-xl ml-4 cursor-pointer">
          <FaArrowLeft onClick={handleProofOfInvestmentScreenBack} />
        </div>
        <div className="text-gray-700 font-semibold text-xl ">
          Proof of Investments
        </div>
      </div>

      <div className="border-b-[1px] border-gray-400 "></div>

      <div className="bg-gray-200 border-[1px] border-gray-400 mt-7 w-1/3">
        <div className="flex space-x-10 items-center mb-2 mt-7 ml-28 py-2">
          <div className="text-gray-500 text-5xl cursor-pointer -mt-8">
            <TbCircleCheckFilled onClick={handleProofOfInvestmentScreenBack} />
          </div>
          <div className="text-gray-700 font-semibold text-xl -mt-8">
            <div className="text-gray-500">Selected Regime</div>
            <div className="text-2xl">{regime}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-9 ">
          <div className="flex justify-between px-2 font-semibold mt-5 mb-5">
            <div className="text-xl ">Declaration Summary</div>
            <div className="text-gray-600 ml-10 text-xl">
              Financial Year: <span className="text-black">2024-2025</span>
            </div>
          </div>

          <div className="border-[1px] border-gray-400 mt-0 pl-4">
            <div className="flex lg:space-x-[440px] text-xl font-semibold bg-gray-100 pt-2 pb-4">
              <div>Particulars</div>
              <div className="flex space-x-[40px] items-center ">
                <h2>Declared Amount</h2>
                <h2>Actual Amount</h2>
              </div>
            </div>

            <div className="border-[1px] border-gray-400 rounded-md mt-5 shadow-xl">
              <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
                <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
                  Deduction under section 80 C
                </h2>
              </div>
              <div className="grid grid-cols-12  p-5">
                {allSectionName
                  ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
                  ?.filter(
                    (section) => section.itDecId >= 1 && section.itDecId <= 3
                  )
                  ?.map((section) => (
                    <div
                      className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
                      key={section.itDecId}
                    >
                      <div className="col-span-7 break-words whitespace-normal ">
                        <label className="font-medium text-gray-600 text-lg">
                          {section.declarationName}
                        </label>
                        {section.additionalInformation && (
                          <p className="text-gray-500 ">
                            {section.additionalInformation}
                          </p>
                        )}
                      </div>
                      <h2 className="text-gray-500 font-semibold">
                        {section?.declarationAmount}
                      </h2>

                      <div className="col-span-1"></div>

                      <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                        <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                          INR
                        </div>
                        <input
                          type="number"
                          className="w-[92px] px-2 text-gray-500 outline-none"
                          name="revisedAmount"
                          value={section?.revisedAmount}
                          onChange={(e) =>
                            handleChangeProofOfInvestment(
                              section.itDecId,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}
              </div>

              <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
                <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
                  Section 80D/80DD/80DDB/80U
                </h2>
              </div>
              <div className="grid grid-cols-12  p-5">
                {allSectionName
                  ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
                  ?.filter(
                    (section) => section.itDecId >= 4 && section.itDecId <= 6
                  )
                  ?.map((section) => (
                    <div
                      className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
                      key={section.itDecId}
                    >
                      <div className="col-span-7 break-words whitespace-normal ">
                        <label className="font-medium text-gray-600 text-lg">
                          {section.declarationName}
                        </label>
                        {section.additionalInformation && (
                          <p className="text-gray-500 ">
                            {section.additionalInformation}
                          </p>
                        )}
                      </div>
                      <h2 className="text-gray-500 font-semibold">
                        {section?.declarationAmount}
                      </h2>

                      <div className="col-span-1"></div>

                      <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                        <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                          INR
                        </div>
                        <input
                          type="number"
                          className="w-[92px] px-2 text-gray-500 outline-none"
                          name="revisedAmount"
                          value={section?.revisedAmount}
                          onChange={(e) =>
                            handleChangeProofOfInvestment(
                              section.itDecId,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}
              </div>

              <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
                <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
                  Section 80E/10/Housing Loan
                </h2>
              </div>
              <div className="grid grid-cols-12  p-5">
                {allSectionName
                  ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
                  ?.filter(
                    (section) => section.itDecId >= 6 && section.itDecId <= 10
                  )
                  ?.map((section) => (
                    <div
                      className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
                      key={section.itDecId}
                    >
                      <div className="col-span-7 break-words whitespace-normal ">
                        <label className="font-medium text-gray-600 text-lg">
                          {section.declarationName}
                        </label>
                        {section.additionalInformation && (
                          <p className="text-gray-500 ">
                            {section.additionalInformation}
                          </p>
                        )}
                      </div>
                      <h2 className="text-gray-500 font-semibold">
                        {section?.declarationAmount}
                      </h2>

                      <div className="col-span-1"></div>

                      <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                        <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                          INR
                        </div>
                        <input
                          type="number"
                          className="w-[92px] px-2 text-gray-500 outline-none"
                          name="revisedAmount"
                          value={section?.revisedAmount}
                          onChange={(e) =>
                            handleChangeProofOfInvestment(
                              section.itDecId,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {!proofSaveStatus ? (
        <div className="flex space-x-20 items-center ml-32 lg:ml-[1000px] mt-10 pb-10">
          <button
            className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
            onClick={() => {
              handleSaveProofOfInvestment();
            }}
          >
            Save
          </button>

          <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
            Cancel
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Proof_of_Investment_Display;
