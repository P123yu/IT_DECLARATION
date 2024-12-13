// import { Box, Modal } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { BsPencil } from "react-icons/bs";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { HiOutlineInformationCircle } from "react-icons/hi2";
// import { ImCancelCircle } from "react-icons/im";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import Service from "./Service";

// function IT_Declaration_Update() {
//   const employeeId = 2;
//   const [open, setOpen] = useState(false);
//   const [open1, setOpen1] = useState(false);
//   const [open2, setOpen2] = useState(false);
//   const [totalSection80c, setTotalSection80c] = useState("");
//   const [totalSection80d, setTotalSection80d] = useState("");
//   const [totalSection80e, setTotalSection80e] = useState("");
//   const [sumSection80C, setSumSection80C] = useState("");
//   const [sumSection80D, setSumSection80D] = useState("");
//   const [sumSection80E, setSumSection80E] = useState("");
//   const [totalDataSection80C, setTotalDataSection80C] = useState("");
//   const [totalDataSection80D, setTotalDataSection80D] = useState("");
//   const [totalDataSection80E, setTotalDataSection80E] = useState("");

//   console.warn(totalSection80c, "totalSection80c");

//   console.warn(totalDataSection80C, "totalDataSection80C???");

//   const handlePreview = () => {
//     navigate("/preview");
//   };

//   useEffect(() => {
//     getTotalSection80C();
//   }, [open]);

//   useEffect(() => {
//     getTotalSection80D();
//   }, [open1]);

//   useEffect(() => {
//     getTotalSection80E();
//   }, [open2]);

//   //---------------------------------------------------------------------------------------------------------------------

//   const getTotalSection80C = () => {
//     var totalSumSection80C = 0;
//     Service.getTotalSumOfSection80C(employeeId).then((res) => {
//       console.warn(
//         res?.data?.data?.TotalSumSection80C,
//         "res?.data?.data?.TotalSumSection80C"
//       );
//       setTotalSection80c(res?.data?.data || 0);
//     });
//     Service.getSection80CByEmpId(employeeId).then((res) => {
//       setTotalDataSection80C(res?.data?.data || "");
//     });
//   };

//   const handleChangeIT_DeclarationSection80C = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;
//     setTotalDataSection80C({ ...totalDataSection80C, [key]: value });
//   };

//   const handleSubmitSection80C = () => {
//     console.warn(totalDataSection80C, "totalDataSection80C.....????");
//     const { id, ...restTotalDataSection80C } = totalDataSection80C;
//     console.warn(id, restTotalDataSection80C, "{{{{{{{{{{{{{{");
//     Service.updateSection80CDataFirst(id, restTotalDataSection80C).then(
//       (response) => {
//         getTotalSection80C();
//       }
//     );
//   };

//   //--------------------------------------------------------------------------------------------------------------------------

//   const getTotalSection80D = () => {
//     var totalSumSection80D = 0;
//     Service.getTotalSumOfSection80D(employeeId).then((res) => {
//       console.warn(res?.data?.data, "res?.data?.data?.TotalSumSection80D");
//       setTotalSection80d(res?.data?.data || 0);
//     });
//     Service.getSection80DByEmpId(employeeId).then((res) => {
//       console.warn(res?.data?.data, "res?.data?.data?.TotalSumSection80D dddd");
//       setTotalDataSection80D(res?.data?.data || "");
//     });
//   };

//   const handleChangeIT_DeclarationSection80D = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;
//     setTotalDataSection80D({ ...totalDataSection80D, [key]: value });
//   };

//   console.log(totalDataSection80D, "totalDataSection80D??????ppp");

//   const handleSubmitSection80D = () => {
//     console.warn(totalDataSection80D, "totalDataSection80D.....????");
//     const { id, ...restTotalDataSection80D } = totalDataSection80D;
//     console.warn(id, restTotalDataSection80D, "{{{{{{{{{{{{{{");
//     Service.updateSection80DDataFirst(id, restTotalDataSection80D).then(
//       (response) => {
//         getTotalSection80D();
//       }
//     );
//   };

//   //-------------------------------------------------------------------------------------------------------------------------

//   const getTotalSection80E = () => {
//     var totalSumSection80E = 0;
//     Service.getTotalSumOfSection80E(employeeId).then((res) => {
//       console.warn(res?.data?.data, "res?.data?.data?.TotalSumSection80E");
//       setTotalSection80e(res?.data?.data || 0);
//     });
//     Service.getSection80EByEmpId(employeeId).then((res) => {
//       console.warn(res?.data?.data, "res?.data?.data?.TotalSumSection80E eee");
//       setTotalDataSection80E(res?.data?.data || "");
//     });
//   };

//   const handleChangeIT_DeclarationSection80E = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;
//     setTotalDataSection80E({ ...totalDataSection80E, [key]: value });
//   };

//   const handleSubmitSection80E = () => {
//     console.warn(totalDataSection80E, "totalDataSection80E.....????");
//     const { id, ...restTotalDataSection80E } = totalDataSection80E;
//     console.warn(id, restTotalDataSection80E, "{{{{{{{{{{{{{{");
//     Service.updateSection80EDataFirst(id, restTotalDataSection80E).then(
//       (response) => {
//         getTotalSection80E();
//       }
//     );
//   };

//   // ----------------------------------------------------------------------------------------------------------

//   const navigate = useNavigate();

//   const handleITDecScreenBack = () => {
//     navigate("/");
//   };

//   const handleSelectRegime = () => {
//     navigate("/selectRegime");
//   };

//   const handleClose = () => {
//     setOpen(false);
//     Swal.fire({
//       title: "Submitted!",
//       icon: "success",
//     });
//   };

//   const handleClose1 = () => {
//     setOpen1(false);
//     Swal.fire({
//       title: "Submitted!",
//       icon: "success",
//     });
//   };

//   const handleClose2 = () => {
//     setOpen2(false);
//     Swal.fire({
//       title: "Submitted!",
//       icon: "success",
//     });
//   };

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 1200,
//     bgcolor: "white",
//     border: "2px solid #000",
//     boxShadow: 25,
//     maxHeight: "90vh", // Set the maximum height for the modal
//     overflowY: "auto",
//     "@media (max-width: 768px)": {
//       width: "90%", // Adjusted width for screens below the 'md' breakpoint
//     },
//   };
//   // clear for section 80C ------------------------------------------------------------------------------------------------

//   const handleOpenModal = () => {
//     setOpen(true);
//   };

//   const handleCloseModal = () => {
//     setOpen(false);
//   };

//   const handleClearSection80C = () => {
//     const obj = {
//       cpf: "",
//       lip: "",
//       ppf: "",
//       ulip: "",
//       ion: "",
//       nss: "",
//       hlp: "",
//       fds: "",
//       lss: "",
//       cee: "",
//       dsss: "",
//       empId: employeeId,
//       flag: "1",
//     };
//     let totalSumSection80C = 0;
//     Service.postSection80CDataFirst(obj).then((res) => {
//       Service.getSection80CByEmpId().then((res) => {
//         setTotalDataSection80C(res.data);
//         const { empId, flag, ...remainObjClear } = res.data;
//         for (let i in remainObjClear) {
//           totalSumSection80C += Number(remainObjClear[i]);
//         }
//         setSumSection80C(totalSumSection80C);
//         handleCloseModal();
//         setTimeout(() => {
//           handleOpenModal();
//         }, 0);
//       });
//     });
//   };

//   // clear for section 80D ------------------------------------------------------------------------------------------------
//   const handleOpenModal1 = () => {
//     setOpen1(true);
//   };

//   const handleCloseModal1 = () => {
//     setOpen1(false);
//   };

//   const handleClearSection80D = () => {
//     const obj = {
//       nps: "",
//       mpsc: "",
//       mpp: "",
//       mppsc: "",
//       mth: "",
//       mtc: "",
//       tbpm: "",
//       empId: employeeId,
//       flag: "1",
//     };
//     let totalSumSection80D = 0;
//     Service.postSection80DDataFirst(obj).then((res) => {
//       Service.getSection80DByEmpId().then((res) => {
//         setTotalDataSection80D(res.data);
//         const { empId, flag, ...remainObjClear } = res.data;
//         for (let i in remainObjClear) {
//           totalSumSection80D += Number(remainObjClear[i]);
//         }
//         setSumSection80D(totalSumSection80D);
//         handleCloseModal1();
//         setTimeout(() => {
//           handleOpenModal1();
//         }, 0);
//       });
//     });
//   };

//   // clear for section 80E ------------------------------------------------------------------------------------------------
//   const handleOpenModal2 = () => {
//     setOpen2(true);
//   };

//   const handleCloseModal2 = () => {
//     setOpen2(false);
//   };

//   const handleClearSection80E = () => {
//     const obj = {
//       loan: " ",
//       rent: " ",
//       housingLoan: " ",
//       empId: "1",
//       flag: "1",
//     };
//     let totalSumSection80E = 0;
//     Service.postSection80EDataFirst(obj).then((res) => {
//       Service.getSection80EByEmpId().then((res) => {
//         setTotalDataSection80E(res.data);
//         const { empId, flag, ...remainObjClear } = res.data;
//         for (let i in remainObjClear) {
//           totalSumSection80E += Number(remainObjClear[i]);
//         }
//         setSumSection80E(totalSumSection80E);
//         handleCloseModal2();
//         setTimeout(() => {
//           handleOpenModal2();
//         }, 0);
//       });
//     });
//   };

//   return (
//     <div className="mt-6 w-screen">
//       <div className="flex space-x-10 items-center px-4">
//         <div className="text-gray-400 text-xl ml-4 cursor-pointer">
//           <FaArrowLeft onClick={handleITDecScreenBack} />
//         </div>
//         <div className="text-gray-700 font-semibold text-2xl">
//           IT Declaration
//         </div>
//       </div>

//       <div className="border-b-[2px] border-gray-300 mt-1 px-4"></div>

//       <div className="mt-8">
//         <div className="border-2 border-gray-500 flex items-center  space-x-5 py-1 w-[320px]  lg:ml-[500px] md:ml-[300px] ml-[50px]">
//           <div className="ml-3 lg:text-2xl md:text-3xl text-2xl">
//             <HiOutlineInformationCircle />
//           </div>
//           <div className="font-medium text-gray-500 text-xl">
//             Declaration window is open
//           </div>
//         </div>

//         <div className="text-center text-gray-500 text-lg lg:text-lg md:text-2xl mt-3 font-normal">
//           Enter your planned investment declarations here and choose the desired
//           regime in the following page
//         </div>

//         <div className="mt-12">
//           <div className="grid grid-cols-3 gap-28 md:gap-8 lg:gap-28 px-32 lg:px-32 md:px-10">
//             <div className="md:col-span-1 col-span-3 md:-ml-0 -ml-16">
//               <div className="border-[2px] border-gray-300 shadow-xl">
//                 <h2 className="text-gray-700 text-lg md:text-xl lg:text-lg text-center font-medium py-1 md:py-[18px] lg:py-1">
//                   Section 80 C
//                 </h2>
//                 <div className="border-b-[2px] border-gray-300"></div>
//                 <img
//                   className="h-32 w-32 lg:h-32 lg:w-32 md:h-52 md:w-52 ml-[75px] md:ml-[12px] lg:ml-[75px] mt-5 mb-8 "
//                   src="./src/assets/savings 2.png"
//                 />
//                 <div className="flex space-x-5 items-center ml-12 md:ml-2 lg:ml-12">
//                   <h2 className="text-center font-semibold text-gray-500 text-xl">
//                     Declared Amount
//                   </h2>
//                   {totalSection80c?.flag == 1 ? (
//                     <BsPencil
//                       className="lg:text-2xl md:text-3xl text-2xl  text-blue-600 cursor-pointer"
//                       onClick={() => setOpen(true)}
//                     />
//                   ) : (
//                     ""
//                   )}
//                 </div>

//                 <h2 className="text-lg text-center text-blue-500 font-semibold  mb-10 cursor-pointer md:text-2xl lg:text-xl ">
//                   INR {totalSection80c?.TotalSumSection80C}
//                 </h2>
//               </div>
//             </div>

//             <div className="md:col-span-1 col-span-3 md:-ml-0 -ml-16 -mt-20 md:-mt-0 lg:-mt-0">
//               <div className="border-[2px] border-gray-300 shadow-xl">
//                 <h2 className="text-gray-700 text-lg md:text-xl lg:text-lg text-center font-medium py-1">
//                   Section 80D/80DD/80DDB/80U
//                 </h2>
//                 <div className="border-b-[2px] border-gray-300"></div>
//                 <img
//                   className="h-32 w-32 lg:h-32 lg:w-32 md:h-52 md:w-52 ml-[75px] md:ml-[12px] lg:ml-[75px] mt-5 mb-8 "
//                   src="./src/assets/Medical.jpg"
//                 />
//                 <div className="flex space-x-5 items-center ml-12 md:ml-2 lg:ml-12">
//                   <h2 className="text-center font-semibold text-gray-500 text-xl">
//                     Declared Amount
//                   </h2>
//                   {totalSection80d?.flag == 1 ? (
//                     <BsPencil
//                       className="lg:text-2xl md:text-3xl text-2xl  text-blue-600 cursor-pointer"
//                       onClick={() => setOpen1(true)}
//                     />
//                   ) : (
//                     ""
//                   )}
//                 </div>
//                 <h2 className="text-lg text-center text-blue-500 font-semibold  mb-10 cursor-pointer md:text-2xl lg:text-xl ">
//                   INR {totalSection80d?.TotalSumSection80D || 0}
//                 </h2>
//               </div>
//             </div>

//             <div className="md:col-span-1 col-span-3 md:-ml-0 -ml-16 -mt-20 md:-mt-0 lg:-mt-0">
//               <div className="border-[2px] border-gray-300 shadow-xl">
//                 <h2 className="text-gray-700 text-lg md:text-xl lg:text-lg text-center font-medium py-1 ">
//                   Section 80E/10/Housing Loan
//                 </h2>
//                 <div className="border-b-[2px] border-gray-300"></div>
//                 <img
//                   className="h-32 w-32 lg:h-32 lg:w-32 md:h-52 md:w-52 ml-[75px] md:ml-[12px] lg:ml-[75px] mt-5 mb-8 "
//                   src="./src/assets/images icon.png"
//                 />
//                 <div className="flex space-x-5 items-center ml-12 md:ml-2 lg:ml-12">
//                   <h2 className="text-center font-semibold text-gray-500 text-xl">
//                     Declared Amount
//                   </h2>
//                   {totalSection80e?.flag === 1 ? (
//                     <BsPencil
//                       className="lg:text-2xl md:text-3xl text-2xl  text-blue-600 cursor-pointer"
//                       onClick={() => setOpen2(true)}
//                     />
//                   ) : (
//                     ""
//                   )}
//                 </div>
//                 <h2 className="text-lg text-center text-blue-500 font-semibold  mb-10 cursor-pointer md:text-2xl lg:text-xl ">
//                   INR {totalSection80e?.TotalSumSection80E || 0}
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-20 pb-14">
//           <div className="grid grid-cols-12">
//             <div className="lg:col-span-9 md:col-span-8 col-span-7">
//               <div className="md:py-10  py-2 border-[1px] border-gray-500 md:text-xl text-md">
//                 <div className="flex md:space-x-5 space-x-1 items-center md:ml-[200px] lg:ml-[700px] ml-[2px] text-gray-500 font-semibold">
//                   <div className="text-2xl">
//                     <HiOutlineInformationCircle />
//                   </div>
//                   <div>Click Next to choose Regime </div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-3 md:col-span-4 col-span-5">
//               <div className="md:py-8 py-1 border-b-[1px] border-t-[1px] border-r-[1px] border-gray-500 flex md:space-x-6 space-x-1 md:pl-12 pl-1">
//                 <div className="bg-blue-800 md:p-2 cursor-pointer">
//                   <h2
//                     className="text-white text-xl px-1"
//                     onClick={handlePreview}
//                   >
//                     Preview
//                   </h2>
//                 </div>
//                 <div
//                   className="border-2 border-blue-700 flex items-center space-x-2 text-xl text-blue-700 cursor-pointer"
//                   onClick={handleSelectRegime}
//                 >
//                   <div className="md:ml-5 ml-1">Next</div>
//                   <div className="md:ml-4 ml-1">
//                     <FaArrowRight className="md:mr-4 mr-1 text-lg" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="">
//         <Modal open={open} onClose={() => setOpen(false)}>
//           <Box sx={style} className="">
//             <div className="grid grid-cols-3">
//               <div className="col-span-1 mt-4 ml-10">
//                 <div className="font-semibold text-2xl font-gray-700 ml-12 text-gray-600">
//                   Section 80C
//                 </div>
//               </div>
//               <div className="col-span-1 "></div>

//               <div className="col-span-1  mt-4 ">
//                 <div
//                   onClick={() => setOpen(false)}
//                   style={{ cursor: "pointer", fontSize: "30px" }}
//                 >
//                   <ImCancelCircle className="md:ml-[350px] mr-[90px] text-gray-600 md:text-3xl text-4xl" />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: 120,
//                     alignItems: "center",
//                     marginTop: "80px",
//                   }}
//                 ></div>
//               </div>
//             </div>

//             <div className="border-[1px] border-gray-400 flex space-x-7 -mt-10">
//               <div className="ml-32 my-2">
//                 <h2 className="mb-2 font-medium font-gray-400">
//                   Total Declared Amount in
//                 </h2>
//                 <h2 className="text-xl font-gray-700 font-medium">
//                   INR {totalSection80c?.TotalSumSection80C || 0}
//                 </h2>
//               </div>

//               <div className="md:border-r-[1px] md:border-gray-600 "></div>
//             </div>

//             <div className="mt-6">
//               <label className="font-semibold text-xl ml-8">
//                 Deduction under section 80 C
//               </label>
//               <div className="grid grid-cols-2">
//                 <div className="md:col-span-1 col-span-2">
//                   <div className="ml-12 mt-5">
//                     <label className="font-medium text-gray-900">
//                       Contribution to Pension Fund{" "}
//                       <span className="font-medium text-gray-500">
//                         (Max. Rs. 1,50,000 /-)
//                       </span>
//                     </label>
//                     <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                         INR
//                       </div>
//                       <div className="bg-blue-700 ml-3">
//                         <input
//                           type="text"
//                           className="w-[180px] outline-none "
//                           name="cpf"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.cpf}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="ml-12 mt-5">
//                     <label className="font-medium text-gray-900">
//                       Life Insurance Premium
//                     </label>
//                     <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                         INR
//                       </div>
//                       <div className="bg-blue-700 ml-3">
//                         <input
//                           type="text"
//                           className="w-[180px] outline-none"
//                           name="lip"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.lip}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="ml-12 mt-5">
//                     <label className="font-medium text-gray-900">
//                       Public Provident Fund
//                     </label>
//                     <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                         INR
//                       </div>
//                       <div className="bg-blue-700 ml-3">
//                         <input
//                           type="text"
//                           className="w-[180px] outline-none"
//                           name="ppf"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.ppf}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="ml-12 mt-5">
//                     <label className="font-medium text-gray-900">ULIP</label>
//                     <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                         INR
//                       </div>
//                       <div className="bg-blue-700 ml-3">
//                         <input
//                           type="text"
//                           className="w-[180px] outline-none"
//                           name="ulip"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.ulip}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="ml-12 mt-5">
//                     <label className="font-medium text-gray-900">
//                       VIII Issue of NSC
//                     </label>
//                     <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                         INR
//                       </div>
//                       <div className="bg-blue-700 ml-3">
//                         <input
//                           type="text"
//                           className="w-[180px] outline-none"
//                           name="ion"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.ion}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="ml-12 mt-5">
//                     <label className="font-medium text-gray-900">
//                       National Saving Scheme
//                     </label>
//                     <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                         INR
//                       </div>
//                       <div className="bg-blue-700 ml-3">
//                         <input
//                           type="text"
//                           className="w-[180px] outline-none"
//                           name="nss"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.nss}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="md:col-span-1 col-span-2">
//                   <div className="ml-12 mt-5">
//                     <label className="font-medium text-gray-900 pr-4">
//                       Repayment of housing Loan Principal{" "}
//                       <span className="font-medium text-gray-500">
//                         (Max. Rs. 1,50,000 /-)
//                       </span>
//                     </label>
//                     <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                         INR
//                       </div>
//                       <div className="bg-blue-700 ml-3">
//                         <input
//                           type="text"
//                           className="w-[180px] outline-none"
//                           name="hlp"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.hlp}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="ml-12 mt-5">
//                     <label className="font-medium text-gray-900">
//                       Fixed Deposit Savings for 5 Years
//                     </label>
//                     <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                         INR
//                       </div>
//                       <div className="bg-blue-700 ml-3">
//                         <input
//                           type="text"
//                           className="w-[180px] outline-none"
//                           name="fds"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.fds}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="ml-12 mt-5">
//                     <label className="font-medium text-gray-900">
//                       Equity Linked Savings Scheme{" "}
//                       <span className="font-medium text-gray-500">
//                         (Max. Rs. 1,50,000 /-)
//                       </span>
//                     </label>
//                     <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                         INR
//                       </div>
//                       <div className="bg-blue-700 ml-3">
//                         <input
//                           type="text"
//                           className="w-[180px] outline-none"
//                           name="lss"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.lss}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="ml-12 mt-5">
//                     <label className="font-medium text-gray-900">
//                       Children's Eduction Expenses Restricted to Two Children{" "}
//                       <br></br>
//                       <span className="font-medium text-gray-500">
//                         (Max. Rs. 1,50,000 /-)
//                       </span>
//                     </label>
//                     <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                         INR
//                       </div>
//                       <div className="bg-blue-700 ml-3">
//                         <input
//                           type="text"
//                           className="w-[180px] outline-none"
//                           name="cee"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.cee}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="ml-12 mt-5">
//                     <label className="font-medium text-gray-900">
//                       Deposite in Sukanya Samriddhi Scheme
//                     </label>
//                     <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                         INR
//                       </div>
//                       <div className="bg-blue-700 ml-3">
//                         <input
//                           type="text"
//                           className="w-[180px] outline-none"
//                           name="dsss"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.dsss}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex mt-16 md:ml-[500px] ml-[80px] space-x-10 pb-10">
//               <div>
//                 <button
//                   className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                   onClick={() => {
//                     handleClose();
//                     handleSubmitSection80C();
//                   }}
//                 >
//                   Update
//                 </button>
//               </div>

//               <div>
//                 <button
//                   className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700"
//                   onClick={handleClearSection80C}
//                 >
//                   Clear
//                 </button>
//               </div>
//             </div>
//           </Box>
//         </Modal>
//       </div>

//       <div className="">
//         <Modal open={open1} onClose={() => setOpen1(false)}>
//           <Box sx={style} className="">
//             <div className="grid grid-cols-3">
//               <div className="col-span-1 mt-4 ml-10">
//                 <div className="font-semibold text-2xl font-gray-700 ml-12 text-gray-600">
//                   Section 80D/80DD/80DDB/80U
//                 </div>
//               </div>
//               <div className="col-span-1 "></div>

//               <div className="col-span-1  mt-4 ">
//                 <div
//                   onClick={() => setOpen1(false)}
//                   style={{ cursor: "pointer", fontSize: "30px" }}
//                 >
//                   <ImCancelCircle className="md:ml-[350px] mr-[90px] text-gray-600 md:text-3xl text-4xl" />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: 120,
//                     alignItems: "center",
//                     marginTop: "80px",
//                   }}
//                 ></div>
//               </div>
//             </div>

//             <div className="border-[1px] border-gray-400 flex space-x-7 -mt-10 mb-5">
//               <div className="ml-32 my-2">
//                 <h2 className="mb-2 font-medium font-gray-400">
//                   Total Declared Amount in
//                 </h2>
//                 <h2 className="text-xl font-gray-700 font-medium">
//                   INR {totalSection80d?.TotalSumSection80D || 0}
//                 </h2>
//               </div>

//               <div className="md:border-r-[1px] md:border-gray-600 bg-blue-900"></div>
//             </div>

//             <div className="pr-2">
//               <div className="font-semibold text-xl ml-8">
//                 Deduction under section 80 CCD
//               </div>

//               <div className="ml-10 mt-5 mb-8">
//                 <div className="font-medium text-gray-900">
//                   National Pension Scheme{" "}
//                   <span className="font-medium text-gray-500">
//                     (Max. Rs. 50,000 /-)
//                   </span>
//                 </div>
//                 <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                   <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                     INR
//                   </div>
//                   <div className="bg-blue-700 ml-3">
//                     <input
//                       type="text"
//                       className="w-[180px] outline-none"
//                       name="nps"
//                       onChange={handleChangeIT_DeclarationSection80D}
//                       value={totalDataSection80D.nps}
//                     ></input>
//                   </div>
//                 </div>
//               </div>

//               <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
//                 Deduction under section 80 D - Mediclaim Policy (Excluding
//                 Through CMS)
//               </div>

//               <div className="ml-10 mt-5">
//                 <label className="font-medium text-gray-900">
//                   Premium for Mediclaim Policy for Self, Spouse & Child{" "}
//                   <span className="font-medium text-gray-500">
//                     (Maximum excemption Rs. 25,000 /-)
//                   </span>
//                 </label>
//                 <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                   <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                     INR
//                   </div>
//                   <div className="bg-blue-700 ml-3">
//                     <input
//                       type="text"
//                       className="w-[180px] outline-none"
//                       name="mpsc"
//                       onChange={handleChangeIT_DeclarationSection80D}
//                       value={totalDataSection80D.mpsc}
//                     ></input>
//                   </div>
//                 </div>
//               </div>

//               <div className="ml-10 mt-5">
//                 <label className="font-medium text-gray-900">
//                   Premium for Mediclaim Policy for Parents{" "}
//                   <span className="font-medium text-gray-500">
//                     (Parent's age less than 60 years)
//                   </span>
//                 </label>
//                 <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                   <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                     INR
//                   </div>
//                   <div className="bg-blue-700 ml-3">
//                     <input
//                       type="text"
//                       className="w-[180px] outline-none"
//                       name="mpp"
//                       onChange={handleChangeIT_DeclarationSection80D}
//                       value={totalDataSection80D.mpp}
//                     ></input>
//                   </div>
//                 </div>
//               </div>

//               <div className="ml-10 mt-5 mb-8">
//                 <label className="font-medium text-gray-900">
//                   Premium for Mediclaim Policy for Parents{" "}
//                   <span className="font-medium text-gray-500">
//                     (Parent's age less than 60 years (Senior Citizen))
//                   </span>
//                 </label>
//                 <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                   <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                     INR
//                   </div>
//                   <div className="bg-blue-700 ml-3">
//                     <input
//                       type="text"
//                       className="w-[180px] outline-none"
//                       name="mppsc"
//                       onChange={handleChangeIT_DeclarationSection80D}
//                       value={totalDataSection80D.mppsc}
//                     ></input>
//                   </div>
//                 </div>
//               </div>

//               <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
//                 Deduction in respect of maintainance including medical treatment
//                 of handicapped dependent who is a person with disability{" "}
//               </div>

//               <div className="ml-10 mt-5 mb-8">
//                 <label className="font-medium text-gray-900">
//                   Maximum excemption is 1,25,000 /- for dependent with
//                   disability Deduction in respect of maintainance including
//                   medical treatment of handicapped dependent who is a person
//                   with disability less than 80% and more than 40%
//                 </label>
//                 <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                   <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                     INR
//                   </div>
//                   <div className="bg-blue-700 ml-3">
//                     <input
//                       type="text"
//                       className="w-[180px] outline-none"
//                       name="mth"
//                       onChange={handleChangeIT_DeclarationSection80D}
//                       value={totalDataSection80D.mth}
//                     ></input>
//                   </div>
//                 </div>
//               </div>

//               <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
//                 Deduction in respect of medical treatment for cases covered
//                 under rule 11DD (1) of IT rules,1962 [Sec.80DDB] max Rs. 40000/-{" "}
//               </div>

//               <div className="ml-10 mt-5 mb-8">
//                 <label className="font-medium text-gray-900">
//                   National Savings Scheme
//                 </label>
//                 <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                   <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                     INR
//                   </div>
//                   <div className="bg-blue-700 ml-3">
//                     <input
//                       type="text"
//                       className="w-[180px] outline-none"
//                       name="mtc"
//                       onChange={handleChangeIT_DeclarationSection80D}
//                       value={totalDataSection80D.mtc}
//                     ></input>
//                   </div>
//                 </div>
//               </div>

//               <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
//                 Deduction in respect of Totally Blind physically or mentally
//                 retard person [Sec.80U] max Rs. 75000 /-
//               </div>

//               <div className="ml-10 mt-5 mb-8">
//                 <label className="font-medium text-gray-900">
//                   YES/NO (if yes please enclose the certificate){" "}
//                 </label>
//                 <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                   <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                     INR
//                   </div>
//                   <div className="bg-blue-700 ml-3">
//                     <input
//                       type="text"
//                       className="w-[180px] outline-none"
//                       name="tbpm"
//                       onChange={handleChangeIT_DeclarationSection80D}
//                       value={totalDataSection80D.tbpm}
//                     ></input>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex mt-16 md:ml-[500px] ml-[80px] space-x-10 pb-10">
//               <div>
//                 <button
//                   className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                   onClick={() => {
//                     handleSubmitSection80D();
//                     handleClose1();
//                   }}
//                 >
//                   Update
//                 </button>
//               </div>

//               <div>
//                 <button
//                   className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700"
//                   onClick={handleClearSection80D}
//                 >
//                   Clear
//                 </button>
//               </div>
//             </div>
//           </Box>
//         </Modal>
//       </div>

//       <div className="">
//         <Modal open={open2} onClose={() => setOpen2(false)}>
//           <Box sx={style} className="">
//             <div className="items-center md:space-x-[340px] space-x-20 flex mt-10 p-4">
//               <div className="font-semibold text-2xl font-gray-700 md:ml-12 ml-4 text-gray-600">
//                 Section 80E/10/HousingLoan
//               </div>
//               <div
//                 onClick={() => setOpen2(false)}
//                 style={{ cursor: "pointer", fontSize: "30px" }}
//               >
//                 <ImCancelCircle className="md:ml-[350px] -ml-[30px] text-gray-600 md:text-xl text-4xl" />
//               </div>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 gap: 120,
//                 alignItems: "center",
//                 marginTop: "80px",
//               }}
//             ></div>

//             <div className="border-[1px] border-gray-400 flex space-x-7 -mt-10 mb-5">
//               <div className="ml-32 my-2">
//                 <h2 className="mb-2 font-medium font-gray-400">
//                   Total Declared Amount in
//                 </h2>
//                 <h2 className="text-xl font-gray-700 font-medium">
//                   INR {totalSection80e?.TotalSumSection80E || 0}
//                 </h2>
//               </div>
//               <div className="md:border-r-[1px] md:border-gray-600 bg-blue-900"></div>
//             </div>

//             <div className="pr-2">
//               <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
//                 Deduction in respect of repayment of Loan "Only Interest on
//                 Loan" Taken for Higher Education [Sec.80E]
//               </div>

//               <div className="ml-10 mt-5 mb-8">
//                 <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                   <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                     INR
//                   </div>
//                   <div className="bg-blue-700 ml-3">
//                     <input
//                       type="text"
//                       className="w-[180px] outline-none"
//                       name="loan"
//                       onChange={handleChangeIT_DeclarationSection80E}
//                       value={totalDataSection80E.loan}
//                     ></input>
//                   </div>
//                 </div>
//               </div>

//               <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
//                 House Rent Exemption Under Section 10 (13A)
//               </div>

//               <div className="ml-10 mt-5 mb-8">
//                 <label className="font-medium text-gray-900">
//                   {" "}
//                   <span className="font-medium text-gray-500">
//                     Rent Payable per month
//                   </span>
//                 </label>
//                 <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                   <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                     INR
//                   </div>
//                   <div className="bg-blue-700 ml-3">
//                     <input
//                       type="text"
//                       className="w-[180px] outline-none"
//                       name="rent"
//                       onChange={handleChangeIT_DeclarationSection80E}
//                       value={totalDataSection80E.rent}
//                     ></input>
//                   </div>
//                 </div>
//               </div>

//               <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
//                 Interest paid on housing Loan from approved Financial
//                 Institution
//               </div>

//               <div className="ml-10 mt-5 mb-8">
//                 <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                   <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                     INR
//                   </div>
//                   <div className="bg-blue-700 ml-3">
//                     <input
//                       type="text"
//                       className="w-[180px] outline-none"
//                       name="housingLoan"
//                       onChange={handleChangeIT_DeclarationSection80E}
//                       value={totalDataSection80E.housingLoan}
//                     ></input>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex md:mt-16  md:ml-[500px] ml-[80px] space-x-10 pb-10">
//               <div>
//                 <button
//                   className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                   onClick={() => {
//                     handleSubmitSection80E();
//                     handleClose2();
//                   }}
//                 >
//                   Update
//                 </button>
//               </div>

//               <div>
//                 <button
//                   className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700"
//                   onClick={handleClearSection80E}
//                 >
//                   Clear
//                 </button>
//               </div>
//             </div>
//           </Box>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default IT_Declaration_Update;

// import { Box, Modal } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { BsPencil } from "react-icons/bs";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { HiOutlineInformationCircle } from "react-icons/hi2";
// import { ImCancelCircle } from "react-icons/im";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import Service from "./Service";
// import useFileStore from "./Zustand";
// import { useStoreFinancialYear } from "./useFileStore";

// function IT_Declaration_Update() {
//   const { regime } = useFileStore();
//   const { submitFinancialYear } = useStoreFinancialYear();

//   const employeeId = 2;

//   const [open, setOpen] = useState(false);
//   const [open1, setOpen1] = useState(false);
//   const [open2, setOpen2] = useState(false);
//   const [value, setValue] = useState(false);
//   const [value1, setValue1] = useState(false);
//   const [value2, setValue2] = useState(false);

//   console.warn(value2, "vvvvvvvvvv");

//   const navigate = useNavigate();

//   const handleITDecScreenBack = () => {
//     navigate("/");
//   };

//   const handleSelectRegime = () => {
//     navigate("/select-regime");
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

//   // // const [allSectionName, setAllSectionName] = useState([]);

//   // const fetchAllSectionNameInitially = () => {
//   //   axios
//   //     .get("http://localhost:8080/it-declaration-master/get-all")
//   //     .then((res) => {
//   //       setAllSectionName(res?.data);
//   //     });
//   // };

//   // useEffect(() => {
//   //   fetchAllSectionNameInitially();
//   // }, []);

//   // const handleChangeIT_DeclarationSection80 = (e, itDecId) => {
//   //   const key = e.target.name;
//   //   const value = e.target.value;

//   //   // Update the state with the modified data
//   //   setAllSectionName(updatedSections);
//   // };

//   const [info, setInfo] = useState([]);
//   const [master, setMaster] = useState([]);
//   const [allSectionName, setAllSectionName] = useState([]);

//   // Fetch info
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

//   // Fetch master
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

//   // Combine info and master initially
//   useEffect(() => {
//     const combinedSections = info.map((item1) => {
//       const matchingItem = master.find(
//         (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//       );
//       return matchingItem ? { ...item1, ...matchingItem } : item1;
//     });
//     setAllSectionName(combinedSections);
//   }, [info, master]);

//   // Handle input change
//   const handleChangeIT_DeclarationSection80 = (e, itDecId) => {
//     const key = e.target.name; // Key from the input name
//     const value = e.target.value; // New value

//     // Update the specific section
//     const updatedSections = allSectionName.map((section) =>
//       section.itDecId === itDecId
//         ? { ...section, [key]: value } // Update the field
//         : section
//     );

//     setAllSectionName(updatedSections); // Update the state
//   };

//   const [existingAllSectionName, setExistingAllSectionName] = useState([]);

//   console.warn(existingAllSectionName, "existingAllSectionName************");

//   // const handleChangeIT_DeclarationSection80 = (e, itDecId) => {
//   //   const key = e.target.name;
//   //   const value = e.target.value;
//   //   let updatedSections = [];

//   //   if (empIdAndFinancialYearStatus === false) {
//   //     // Map through allSectionName to add empId and financialYear
//   //     updatedSections = allSectionName.map((section) => ({
//   //       ...section,
//   //       empId: employeeId,
//   //       financialYear: submitFinancialYear,
//   //     }));
//   //   } else {
//   //     // Merge existingAllSectionName and allSectionName based on itDecId
//   //     updatedSections = existingAllSectionName.map((item1) => {
//   //       const matchingItem = allSectionName.find(
//   //         (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//   //       );
//   //       return matchingItem ? { ...item1, ...matchingItem } : item1;
//   //     });
//   //   }

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
//   //   setAllSectionName(updatedSections);
//   // };

//   console.log(allSectionName, "allSectionName");

//   const [empIdAndFinancialYearStatus, setEmpIdAndFinancialYearStatus] =
//     useState(null);

//   // useEffect(() => {
//   //   axios
//   //     .get("http://localhost:8080/it-declaration-info/get/2/2024-2025")
//   //     .then((res) => {
//   //       setEmpIdAndFinancialYearStatus(true);
//   //       // Update state with combined data
//   //       setExistingAllSectionName(res.data);
//   //     })
//   //     .catch((error) => {
//   //       setEmpIdAndFinancialYearStatus(false);
//   //     });
//   // }, [allSectionName]);

//   console.warn(
//     empIdAndFinancialYearStatus,
//     "empIdAndFinancialYearStatus)))))))))))))))"
//   );

//   console.warn(existingAllSectionName, "eeeeeeeeeeeeeeeeeeeeeeeee");

//   // section 80 c
//   // const [saveStatusSection80C, setSaveStatusSection80C] = useState();

//   // useEffect(() => {
//   //   getSaveStatus80cFunction();
//   // }, []);

//   // const getSaveStatus80cFunction = () => {
//   //   axios
//   //     .get(
//   //       "http://localhost:8080/it-declaration-info/get-save-status/2/2024-2025"
//   //     )
//   //     .then((res) => setSaveStatusSection80C(res.data))
//   //     .catch((error) => console.log(error));
//   // };

//   const [totalAmountSection80c, setTotalAmountSection80c] = useState(0);
//   const calculateSumFunction = () => {
//     const sum = allSectionName
//       ?.filter((section) => section.itDecId > 1 && section.itDecId < 4)
//       ?.reduce(
//         (total, section) =>
//           total + (parseFloat(section.declarationAmount) || 0),
//         0
//       );

//     axios
//       .post(
//         "http://localhost:8080/it-declaration-info/total-amount-80c/2/2024-2025",
//         { declarationAmount: sum }
//       )
//       .then((res) => {
//         setTotalAmountSection80c(res?.data?.declarationAmount);
//         // window.location.reload();
//         // getTotalAmountSection80c();
//       });

//     console.log(sum, "sum+++++++++++++++++++++");
//   };

//   useEffect(() => {
//     getTotalAmountSection80c();
//   }, []);

//   const getTotalAmountSection80c = () => {
//     axios
//       .get(
//         "http://localhost:8080/it-declaration-info/get-total-amount-80c/2/2024-2025"
//       )
//       .then((res) => {
//         setTotalAmountSection80c(res?.data);
//       });
//   };

//   const setSaveStatus80cFunction = () => {
//     axios
//       .post("http://localhost:8080/it-declaration-info/save-status/2/2024-2025")
//       .then((res) => {
//         // alert("save status");
//         calculateSumFunction();
//         getTotalAmountSection80c();
//         // getSaveStatus80cFunction();
//       });
//   };

//   const handleSubmitSection80C = () => {
//     Service.postSection80CDataFirst(allSectionName).then((response) => {
//       // alert("saved");
//       setOpen(false);
//       Swal.fire({
//         title: "Section 80c Successfully updated",
//         icon: "success",
//       });
//       navigate("/declaration-dashboard");
//       //  setSaveStatusSection80C(true);
//       setSaveStatus80cFunction();
//     });
//     console.warn(allSectionName, "allSectionName+++++++++++________________");
//   };

//   // const handleSubmitSection80D = () => {
//   //   Service.postSection80CDataFirst(allSectionName).then((response) => {
//   //     alert("saved");
//   //   });
//   //   console.warn(allSectionName, "allSectionName+++++++++++________________");
//   // };

//   // section 80 d
//   const [saveStatusSection80D, setSaveStatusSection80D] = useState(false);

//   console.log(
//     saveStatusSection80D,
//     "dddddddddddddddddrrrrrrrrrrrrrrrddddddddddddddd"
//   );

//   useEffect(() => {
//     getSaveStatus80dFunction();
//   }, []);

//   const getSaveStatus80dFunction = () => {
//     axios
//       .get(
//         "http://localhost:8080/it-declaration-info/get-save-status-80d/2/2024-2025"
//       )
//       .then((res) => setSaveStatusSection80D(res.data))
//       .catch((error) => console.log(error));
//   };

//   const [totalAmountSection80d, setTotalAmountSection80d] = useState(0);
//   const calculateSumDFunction = () => {
//     const sum = allSectionName
//       ?.filter((section) => section.itDecId >= 4 && section.itDecId <= 6)
//       ?.reduce(
//         (total, section) =>
//           total + (parseFloat(section.declarationAmount) || 0),
//         0
//       );

//     axios
//       .post(
//         "http://localhost:8080/it-declaration-info/total-amount-80d/2/2024-2025",
//         { declarationAmount: sum }
//       )
//       .then((res) => {
//         setTotalAmountSection80d(res?.data?.declarationAmount);
//       });

//     console.log(sum, "sum+++++++++++++++++++++");
//   };

//   useEffect(() => {
//     getTotalAmountSection80d();
//   }, []);

//   const getTotalAmountSection80d = () => {
//     axios
//       .get(
//         "http://localhost:8080/it-declaration-info/get-total-amount-80d/2/2024-2025"
//       )
//       .then((res) => {
//         setTotalAmountSection80d(res?.data);
//       });
//   };

//   const setSaveStatus80dFunction = () => {
//     axios
//       .post(
//         "http://localhost:8080/it-declaration-info/save-status-80d/2/2024-2025"
//       )
//       .then((res) => {
//         alert("save status");
//         calculateSumDFunction();
//         getSaveStatus80dFunction();
//       });
//   };

//   const handleSubmitSection80D = () => {
//     Service.postSection80CDataFirst(allSectionName).then((response) => {
//       alert("saved");
//       setSaveStatus80dFunction();
//     });
//     console.warn(allSectionName, "allSectionName+++++++++++________________");
//   };

//   // section 80 e

//   const [saveStatusSection80E, setSaveStatusSection80E] = useState();

//   useEffect(() => {
//     getSaveStatus80eFunction();
//   }, []);

//   const getSaveStatus80eFunction = () => {
//     axios
//       .get(
//         "http://localhost:8080/it-declaration-info/get-save-status/2/2024-2025"
//       )
//       .then((res) => setSaveStatusSection80E(res.data))
//       .catch((error) => console.log(error));
//   };

//   const [totalAmountSection80e, setTotalAmountSection80e] = useState(0);
//   const calculateSumEFunction = () => {
//     const sum = allSectionName
//       ?.filter((section) => section.itDecId > 7 && section.itDecId <= 10)
//       ?.reduce(
//         (total, section) =>
//           total + (parseFloat(section.declarationAmount) || 0),
//         0
//       );

//     axios
//       .post(
//         "http://localhost:8080/it-declaration-info/total-amount-80e/2/2024-2025",
//         { declarationAmount: sum }
//       )
//       .then((res) => {
//         setTotalAmountSection80e(res?.data?.declarationAmount);
//       });

//     console.log(sum, "sum+++++++++++++++++++++");
//   };

//   useEffect(() => {
//     getTotalAmountSection80e();
//   }, []);

//   const getTotalAmountSection80e = () => {
//     axios
//       .get(
//         "http://localhost:8080/it-declaration-info/get-total-amount-80e/2/2024-2025"
//       )
//       .then((res) => {
//         setTotalAmountSection80e(res?.data);
//       });
//   };

//   const setSaveStatus80eFunction = () => {
//     axios
//       .post("http://localhost:8080/it-declaration-info/save-status/2/2024-2025")
//       .then((res) => {
//         alert("save status");
//         calculateSumEFunction();
//         getSaveStatus80eFunction();
//       });
//   };

//   const handleSubmitSection80E = () => {
//     Service.postSection80CDataFirst(allSectionName).then((response) => {
//       alert("saved");
//       setSaveStatus80eFunction();
//     });
//     console.warn(allSectionName, "allSectionName+++++++++++________________");
//   };

//   // const handleSubmitSection80E = () => {
//   //   Service.postSection80CDataFirst(allSectionName).then((response) => {
//   //     alert("saved");
//   //   });
//   //   console.warn(allSectionName, "allSectionName+++++++++++________________");
//   // };

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 1200,
//     bgcolor: "white",
//     border: "2px solid #000",
//     boxShadow: 25,
//     maxHeight: "90vh", // Set the maximum height for the modal
//     overflowY: "auto",
//     "@media (max-width: 768px)": {
//       width: "90%", // Adjusted width for screens below the 'md' breakpoint
//     },
//   };

//   const handlePreview = () => {
//     navigate("/preview");
//   };

//   return (
//     <div className="mt-6 w-screen">
//       <div className="flex space-x-10 items-center px-4">
//         <div className="text-gray-400 text-xl ml-4 cursor-pointer">
//           <FaArrowLeft onClick={handleITDecScreenBack} />
//         </div>
//         <div className="text-gray-700 font-semibold text-2xl">
//           IT Declaration
//         </div>
//       </div>

//       <div className="border-b-[2px] border-gray-300 mt-1 px-4"></div>

//       <div className="mt-8">
//         <div className="flex justify-center">
//           <div className="border-2 border-gray-500 flex items-center  space-x-5 py-1 w-[320px] ">
//             <div className="ml-3 text-2xl">
//               <HiOutlineInformationCircle />
//             </div>
//             <div className="font-medium text-gray-500 text-xl ">
//               Declaration window is open
//             </div>
//           </div>
//         </div>
//         <div className="text-center text-gray-500 lg:text-lg md:text-2xl mt-3 font-normal ">
//           Enter your planned investment declarations here and choose the desired
//           regime in the following page
//         </div>
//         <div className="mt-12">
//           <div className="grid grid-cols-3 gap-28 md:gap-8 lg:gap-28 px-32 lg:px-32 md:px-10">
//             <div className="md:col-span-1 col-span-3 md:-ml-0 -ml-16">
//               <div className="border-[2px] border-gray-300 shadow-xl">
//                 <h2 className="text-gray-700 text-lg md:text-xl lg:text-lg text-center font-medium py-1 md:py-[18px] lg:py-1">
//                   Section 80 C
//                 </h2>
//                 <div className="border-b-[2px] border-gray-300"></div>
//                 <div className="flex justify-center">
//                   <img
//                     className="h-32 w-32 lg:h-32 lg:w-32 md:h-52 md:w-52  mt-5 mb-8 "
//                     src="./src/assets/savings 2.png"
//                   />
//                 </div>
//                 {totalAmountSection80c != 0 ? (
//                   <div className="flex flex-col items-center pb-2">
//                     <div className="flex items-center space-x-2">
//                       <div className="text-gray-400 text-lg font-semibold">
//                         Declared Amount
//                       </div>
//                       <BsPencil
//                         className="lg:text-2xl md:text-3xl text-2xl  text-blue-600 cursor-pointer"
//                         onClick={() => setOpen(true)}
//                       />
//                     </div>

//                     <div className="text-gray-600 text-xl text-gray-400">
//                       {totalAmountSection80c}
//                     </div>
//                   </div>
//                 ) : (
//                   <h2
//                     className="text-lg lg:text-lg md:text-2xl text-center text-blue-500 font-semibold  mb-10 cursor-pointer"
//                     onClick={() => setOpen(true)}
//                   >
//                     Add to Declaration
//                   </h2>
//                 )}
//               </div>
//             </div>

//             <div className="md:col-span-1 col-span-3 md:-ml-0 -ml-16 -mt-20 md:-mt-0 lg:-mt-0 ">
//               <div className="border-[2px] border-gray-300 shadow-xl">
//                 <h2 className="text-gray-700 text-lg md:text-xl lg:text-lg text-center font-medium py-1">
//                   Section 80D/80DD/80DDB/80U
//                 </h2>
//                 <div className="border-b-[2px] border-gray-300"></div>
//                 <div className="flex justify-center">
//                   <img
//                     className="h-32 w-32 lg:h-32 lg:w-32 md:h-52 md:w-52  mt-5 mb-8 "
//                     src="./src/assets/Medical.jpg"
//                   />
//                 </div>
//                 {totalAmountSection80d != 0 ? (
//                   <div className="flex flex-col items-center pb-2">
//                     <div className="flex items-center space-x-2">
//                       <div className="text-gray-400 text-lg font-semibold">
//                         Declared Amount
//                       </div>
//                       <BsPencil
//                         className="lg:text-2xl md:text-3xl text-2xl  text-blue-600 cursor-pointer"
//                         onClick={() => setOpen1(true)}
//                       />
//                     </div>
//                     <div className="text-gray-600 text-xl text-gray-400">
//                       {totalAmountSection80d}
//                     </div>
//                   </div>
//                 ) : (
//                   <h2
//                     className="text-lg lg:text-lg md:text-2xl text-center text-blue-500 font-semibold  mb-10 cursor-pointer"
//                     onClick={() => setOpen1(true)}
//                   >
//                     Add to Declaration
//                   </h2>
//                 )}
//               </div>
//             </div>

//             <div className="md:col-span-1 col-span-3 md:-ml-0 -ml-16 -mt-20 md:-mt-0 lg:-mt-0">
//               <div className="border-[2px] border-gray-300 shadow-xl">
//                 <h2 className="text-gray-700 text-lg md:text-xl lg:text-lg text-center font-medium py-1">
//                   Section 80E/10/Housing Loan
//                 </h2>
//                 <div className="border-b-[2px] border-gray-300"></div>
//                 <div className="flex justify-center">
//                   <img
//                     className="h-32 w-32 lg:h-32 lg:w-32 md:h-52 md:w-52 mt-5 mb-8 "
//                     src="./src/assets/images icon.png"
//                   />
//                 </div>
//                 {totalAmountSection80e != 0 ? (
//                   <div className="flex flex-col items-center pb-2">
//                     <div className="flex items-center space-x-2">
//                       <div className="text-gray-400 text-lg font-semibold">
//                         Declared Amount
//                       </div>
//                       <BsPencil
//                         className="lg:text-2xl md:text-3xl text-2xl  text-blue-600 cursor-pointer"
//                         onClick={() => setOpen2(true)}
//                       />
//                     </div>
//                     <div className="text-gray-600 text-xl text-gray-400">
//                       {totalAmountSection80e}
//                     </div>
//                   </div>
//                 ) : (
//                   <h2
//                     className="text-lg lg:text-lg md:text-2xl text-center text-blue-500 font-semibold  mb-10 cursor-pointer"
//                     onClick={() => setOpen2(true)}
//                   >
//                     Add to Declaration
//                   </h2>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="p-2 mt-5">
//           <div className="grid lg:grid-cols-12 lg:border-[1px] border-gray-500">
//             <div className="lg:col-span-9 lg:border-r-[1px] border-gray-500">
//               <div className="flex items-center float-end mr-5 mt-2 gap-5">
//                 <div className="text-2xl text-gray-500 font-bold ">
//                   <HiOutlineInformationCircle />
//                 </div>
//                 <div className="text-lg text-gray-500 font-bold">
//                   Click Next to choose Regime
//                 </div>
//               </div>
//             </div>
//             <div className="col-span-3">
//               <div className="flex justify-center">
//                 <div className="flex items-center ml-2 space-x-5">
//                   <div className="bg-blue-800 cursor-pointer">
//                     <h2
//                       className="text-white text-xl p-2"
//                       onClick={handlePreview}
//                     >
//                       Preview
//                     </h2>
//                   </div>
//                   <div
//                     className="border-[1px] p-2 border-blue-700 flex items-center space-x-2 text-xl text-blue-700 cursor-pointer"
//                     onClick={handleSelectRegime}
//                   >
//                     <p className="">Next</p>
//                     <div className="ml-1">
//                       <FaArrowRight className="mr-1 text-lg" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="">
//         <Modal open={open} onClose={() => setOpen(false)}>
//           <Box sx={style} className="">
//             <div className="flex justify-between">
//               <div className=" mt-4">
//                 <div className="font-semibold text-md lg:text-2xl font-gray-700 ml-12 text-gray-600">
//                   Section 80C
//                 </div>
//               </div>
//               <div className="mt-4 ">
//                 <div
//                   onClick={() => setOpen(false)}
//                   style={{ cursor: "pointer", fontSize: "30px" }}
//                 >
//                   <ImCancelCircle className="mr-10 text-gray-600 md:text-3xl text-4xl" />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: 120,
//                     alignItems: "center",
//                     marginTop: "80px",
//                   }}
//                 ></div>
//               </div>
//             </div>

//             <div className="border-[1px] border-gray-400 flex space-x-7 -mt-10">
//               <div className="ml-32 my-2">
//                 <h2 className="mb-2 font-medium font-gray-400">
//                   Total Declared Amount in
//                 </h2>
//                 <h2 className="text-xl font-gray-700 font-medium">
//                   INR {totalAmountSection80c || 0}
//                 </h2>
//               </div>

//               <div className="md:border-r-[1px] md:border-gray-600 "></div>
//             </div>

//             <div className="mt-6">
//               <label className="font-semibold text-xl ml-8">
//                 Deduction under section 80 C
//               </label>
//               <div className="grid grid-cols-2">
//                 {allSectionName
//                   ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
//                   ?.filter(
//                     (section) => section.itDecId > 1 && section.itDecId < 4
//                   ) // Filter the desired range
//                   ?.map((section) => (
//                     <div
//                       className="md:col-span-1 col-span-2"
//                       key={section.itDecId} // Use a unique identifier like itDecId
//                     >
//                       <div className="ml-12 mt-5">
//                         <label className="font-medium text-gray-900">
//                           {section.declarationName} <br />
//                           <span className="font-medium text-gray-500">
//                             {section.additionalInformation}
//                           </span>
//                         </label>
//                         <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                           <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                             INR
//                           </div>
//                           <div className="bg-blue-700 ml-3">
//                             <input
//                               type="number"
//                               className="w-[180px] outline-none"
//                               name="declarationAmount"
//                               value={section.declarationAmount || ""}
//                               onChange={(e) =>
//                                 handleChangeIT_DeclarationSection80(
//                                   e,
//                                   section.itDecId
//                                 )
//                               }
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <div className="flex mt-16  space-x-10 pb-10">
//                 <div>
//                   <button
//                     className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                     onClick={handleSubmitSection80C}
//                   >
//                     update
//                   </button>
//                 </div>

//                 <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//                   Clear
//                 </button>
//                 {/* <div>
//                   {saveStatusSection80C ? (
//                     <button className="py-[10px] px-4 bg-red-700 text-white  font-semibold cursor-not-allowed">
//                       Saved
//                     </button>
//                   ) : (
//                     <button
//                       className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                       onClick={handleSubmitSection80C}
//                     >
//                       Save
//                     </button>
//                   )}
//                 </div> */}

//                 {/* <div>
//                   {saveStatusSection80C ? (
//                     ""
//                   ) : (
//                     <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//                       Clear
//                     </button>
//                   )}
//                 </div> */}
//               </div>
//             </div>
//           </Box>
//         </Modal>
//       </div>

//       <div className="">
//         <Modal open={open1} onClose={() => setOpen1(false)}>
//           <Box sx={style} className="">
//             <div className="flex justify-between">
//               <div className=" mt-4 ">
//                 <div className="font-semibold text-md lg:text-2xl font-gray-700 ml-12 text-gray-600">
//                   Section 80D/80DD/80DDB/80U
//                 </div>
//               </div>

//               <div className=" mt-4 ">
//                 <div
//                   onClick={() => setOpen1(false)}
//                   style={{ cursor: "pointer", fontSize: "30px" }}
//                 >
//                   <ImCancelCircle className="mr-10 text-gray-600 md:text-3xl text-4xl" />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: 120,
//                     alignItems: "center",
//                     marginTop: "80px",
//                   }}
//                 ></div>
//               </div>
//             </div>

//             <div className="border-[1px] border-gray-400 flex space-x-7 -mt-10 mb-5">
//               <div className="ml-32 my-2">
//                 <h2 className="mb-2 font-medium font-gray-400">
//                   Total Declared Amount in
//                 </h2>
//                 <h2 className="text-xl font-gray-700 font-medium font-bold">
//                   INR {totalAmountSection80d || 0}
//                 </h2>
//               </div>

//               <div className="md:border-r-[1px] md:border-gray-600 bg-blue-900"></div>
//             </div>

//             <div className="grid grid-cols-1">
//               {allSectionName
//                 ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
//                 ?.filter(
//                   (section) => section.itDecId >= 4 && section.itDecId <= 6
//                 ) // Filter the desired range
//                 ?.map((section) => (
//                   <div
//                     className="md:col-span-1 col-span-2"
//                     key={section.itDecId} // Use a unique identifier like itDecId
//                   >
//                     <div className="ml-12 mt-5">
//                       <label className="font-medium text-gray-900">
//                         {section.declarationName} <br />
//                         <span className="font-medium text-gray-500">
//                           {section.additionalInformation}
//                         </span>
//                       </label>
//                       <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                         <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                           INR
//                         </div>
//                         <div className="bg-blue-700 ml-3">
//                           <input
//                             type="number"
//                             className="w-[180px] outline-none"
//                             name="declarationAmount"
//                             value={section.declarationAmount || ""}
//                             onChange={(e) =>
//                               handleChangeIT_DeclarationSection80(
//                                 e,
//                                 section.itDecId
//                               )
//                             }
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>

//             <div className="flex justify-center">
//               <div className="flex mt-16  space-x-10 pb-10">
//                 <div>
//                   <button
//                     className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                     onClick={handleSubmitSection80D}
//                   >
//                     update
//                   </button>
//                 </div>

//                 <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//                   Clear
//                 </button>
//                 {/* <div>
//                   {saveStatusSection80D ? (
//                     <button className="py-[10px] px-4 bg-red-700 text-white  font-semibold cursor-not-allowed">
//                       Saved
//                     </button>
//                   ) : (
//                     <button
//                       className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                       onClick={handleSubmitSection80D}
//                     >
//                       S
//                     </button>
//                   )}
//                 </div> */}

//                 {/* <div>
//                   {saveStatusSection80D ? (
//                     ""
//                   ) : (
//                     <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//                       Clear
//                     </button>
//                   )}
//                 </div> */}
//               </div>
//             </div>
//           </Box>
//         </Modal>
//       </div>

//       <div className="">
//         <Modal open={open2} onClose={() => setOpen2(false)}>
//           <Box sx={style} className="">
//             <div className="flex justify-between">
//               <div className="mt-4">
//                 <div className="font-semibold text-md lg:text-2xl font-gray-700 ml-12 text-gray-600">
//                   Section 80E/10/HousingLoan
//                 </div>
//               </div>

//               <div className=" mt-4 ">
//                 <div
//                   onClick={() => setOpen2(false)}
//                   style={{ cursor: "pointer", fontSize: "30px" }}
//                 >
//                   <ImCancelCircle className="mr-10 text-gray-600 md:text-3xl text-4xl" />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: 120,
//                     alignItems: "center",
//                     marginTop: "80px",
//                   }}
//                 ></div>
//               </div>
//             </div>

//             <div className="border-[1px] border-gray-400 flex space-x-7 -mt-10 mb-5">
//               <div className="ml-32 my-2">
//                 <h2 className="mb-2 font-medium font-gray-400">
//                   Total Declared Amount in
//                 </h2>
//                 <h2 className="text-xl font-gray-700 font-medium">
//                   INR {totalAmountSection80e || 0}
//                 </h2>
//               </div>
//               <div className="md:border-r-[1px] md:border-gray-600 bg-blue-900"></div>
//             </div>

//             <div className="grid grid-cols-1">
//               {allSectionName
//                 ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
//                 ?.filter(
//                   (section) => section.itDecId > 7 && section.itDecId < 10
//                 ) // Filter the desired range
//                 ?.map((section) => (
//                   <div
//                     className="md:col-span-1 col-span-2"
//                     key={section.itDecId} // Use a unique identifier like itDecId
//                   >
//                     <div className="ml-12 mt-5">
//                       <label className="font-medium text-gray-900">
//                         {section.declarationName} <br />
//                         <span className="font-medium text-gray-500">
//                           {section.additionalInformation}
//                         </span>
//                       </label>
//                       <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                         <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                           INR
//                         </div>
//                         <div className="bg-blue-700 ml-3">
//                           <input
//                             type="number"
//                             className="w-[180px] outline-none"
//                             name="declarationAmount"
//                             value={section.declarationAmount || ""}
//                             onChange={(e) =>
//                               handleChangeIT_DeclarationSection80(
//                                 e,
//                                 section.itDecId
//                               )
//                             }
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>

//             <div className="flex justify-center">
//               <div className="flex md:mt-16  space-x-10 pb-10">
//                 <div>
//                   <button
//                     className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                     onClick={handleSubmitSection80E}
//                   >
//                     update
//                   </button>
//                 </div>

//                 <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//                   Clear
//                 </button>
//                 {/* <div>
//                   {value2 ? (
//                     <button className="py-[10px] px-4 bg-red-700 text-white  font-semibold cursor-not-allowed">
//                       Saved
//                     </button>
//                   ) : (
//                     <button
//                       className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                       onClick={handleSubmitSection80E}
//                     >
//                       Save
//                     </button>
//                   )}
//                 </div>

//                 <div>
//                   {value2 ? (
//                     ""
//                   ) : (
//                     <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//                       Clear
//                     </button>
//                   )}
//                 </div> */}
//               </div>
//             </div>
//           </Box>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default IT_Declaration_Update;

import { Box, Modal } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Service from "./Service";
import useFileStore from "./Zustand";
import { useStoreFinancialYear } from "./useFileStore";

function IT_Declaration_Update() {
  const { regime } = useFileStore();
  const { submitFinancialYear } = useStoreFinancialYear();

  const employeeId = 2;

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(false);
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);

  const navigate = useNavigate();

  const handleITDecScreenBack = () => {
    navigate("/");
  };

  const handleSelectRegime = () => {
    navigate("/select-regime");
  };

  const [info, setInfo] = useState([]);
  const [master, setMaster] = useState([]);
  const [allSectionName, setAllSectionName] = useState([]);

  // Fetch info
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

  // Fetch master
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

  // Combine info and master initially
  useEffect(() => {
    const combinedSections = info.map((item1) => {
      const matchingItem = master.find(
        (item2) => Number(item2.itDecId) === Number(item1.itDecId)
      );
      return matchingItem ? { ...item1, ...matchingItem } : item1;
    });
    setAllSectionName(combinedSections);
  }, [info, master]);

  // Handle input change
  const handleChangeIT_DeclarationSection80 = (e, itDecId) => {
    const key = e.target.name;
    const value = e.target.value;
    // Update the specific section
    const updatedSections = allSectionName.map((section) =>
      section.itDecId === itDecId ? { ...section, [key]: value } : section
    );

    setAllSectionName(updatedSections); // Update the state
  };

  const [existingAllSectionName, setExistingAllSectionName] = useState([]);

  console.warn(existingAllSectionName, "existingAllSectionName************");

  console.log(allSectionName, "allSectionName");

  const [empIdAndFinancialYearStatus, setEmpIdAndFinancialYearStatus] =
    useState(null);

  console.warn(
    empIdAndFinancialYearStatus,
    "empIdAndFinancialYearStatus)))))))))))))))"
  );

  console.warn(existingAllSectionName, "eeeeeeeeeeeeeeeeeeeeeeeee");

  // section 80 c

  const [totalAmountSection80c, setTotalAmountSection80c] = useState(0);
  const calculateSumFunction = () => {
    const sum = allSectionName
      ?.filter((section) => section.itDecId > 1 && section.itDecId < 4)
      ?.reduce(
        (total, section) =>
          total + (parseFloat(section.declarationAmount) || 0),
        0
      );

    axios
      .post(
        "http://localhost:8080/it-declaration-info/total-amount-80c/2/2024-2025",
        { declarationAmount: sum }
      )
      .then((res) => {
        setTotalAmountSection80c(res?.data?.declarationAmount);
        // window.location.reload();
        // getTotalAmountSection80c();
      });

    console.log(sum, "sum+++++++++++++++++++++");
  };

  useEffect(() => {
    getTotalAmountSection80c();
  }, []);

  const getTotalAmountSection80c = () => {
    axios
      .get(
        "http://localhost:8080/it-declaration-info/get-total-amount-80c/2/2024-2025"
      )
      .then((res) => {
        setTotalAmountSection80c(res?.data);
      });
  };

  const setSaveStatus80cFunction = () => {
    axios
      .post("http://localhost:8080/it-declaration-info/save-status/2/2024-2025")
      .then((res) => {
        // alert("save status");
        calculateSumFunction();
        getTotalAmountSection80c();
        // getSaveStatus80cFunction();
      });
  };

  const handleSubmitSection80C = () => {
    Service.postSection80CDataFirst(allSectionName).then((response) => {
      // alert("saved");
      setOpen(false);
      Swal.fire({
        title: "Section 80c Successfully updated",
        icon: "success",
      });
      navigate("/declaration-dashboard");
      //  setSaveStatusSection80C(true);
      setSaveStatus80cFunction();
    });
    console.warn(allSectionName, "allSectionName+++++++++++________________");
  };

  // const handleSubmitSection80D = () => {
  //   Service.postSection80CDataFirst(allSectionName).then((response) => {
  //     alert("saved");
  //   });
  //   console.warn(allSectionName, "allSectionName+++++++++++________________");
  // };

  // section 80 d
  const [saveStatusSection80D, setSaveStatusSection80D] = useState(false);

  console.log(
    saveStatusSection80D,
    "dddddddddddddddddrrrrrrrrrrrrrrrddddddddddddddd"
  );

  useEffect(() => {
    getSaveStatus80dFunction();
  }, []);

  const getSaveStatus80dFunction = () => {
    axios
      .get(
        "http://localhost:8080/it-declaration-info/get-save-status-80d/2/2024-2025"
      )
      .then((res) => setSaveStatusSection80D(res.data))
      .catch((error) => console.log(error));
  };

  const [totalAmountSection80d, setTotalAmountSection80d] = useState(0);
  const calculateSumDFunction = () => {
    const sum = allSectionName
      ?.filter((section) => section.itDecId >= 4 && section.itDecId <= 6)
      ?.reduce(
        (total, section) =>
          total + (parseFloat(section.declarationAmount) || 0),
        0
      );

    axios
      .post(
        "http://localhost:8080/it-declaration-info/total-amount-80d/2/2024-2025",
        { declarationAmount: sum }
      )
      .then((res) => {
        setTotalAmountSection80d(res?.data?.declarationAmount);
      });

    console.log(sum, "sum+++++++++++++++++++++");
  };

  useEffect(() => {
    getTotalAmountSection80d();
  }, []);

  const getTotalAmountSection80d = () => {
    axios
      .get(
        "http://localhost:8080/it-declaration-info/get-total-amount-80d/2/2024-2025"
      )
      .then((res) => {
        setTotalAmountSection80d(res?.data);
      });
  };

  const setSaveStatus80dFunction = () => {
    axios
      .post(
        "http://localhost:8080/it-declaration-info/save-status-80d/2/2024-2025"
      )
      .then((res) => {
        alert("save status");
        calculateSumDFunction();
        getSaveStatus80dFunction();
      });
  };

  const handleSubmitSection80D = () => {
    Service.postSection80CDataFirst(allSectionName).then((response) => {
      alert("saved");
      setSaveStatus80dFunction();
    });
    console.warn(allSectionName, "allSectionName+++++++++++________________");
  };

  // section 80 e

  const [saveStatusSection80E, setSaveStatusSection80E] = useState();

  useEffect(() => {
    getSaveStatus80eFunction();
  }, []);

  const getSaveStatus80eFunction = () => {
    axios
      .get(
        "http://localhost:8080/it-declaration-info/get-save-status/2/2024-2025"
      )
      .then((res) => setSaveStatusSection80E(res.data))
      .catch((error) => console.log(error));
  };

  const [totalAmountSection80e, setTotalAmountSection80e] = useState(0);
  const calculateSumEFunction = () => {
    const sum = allSectionName
      ?.filter((section) => section.itDecId > 7 && section.itDecId <= 10)
      ?.reduce(
        (total, section) =>
          total + (parseFloat(section.declarationAmount) || 0),
        0
      );

    axios
      .post(
        "http://localhost:8080/it-declaration-info/total-amount-80e/2/2024-2025",
        { declarationAmount: sum }
      )
      .then((res) => {
        setTotalAmountSection80e(res?.data?.declarationAmount);
      });

    console.log(sum, "sum+++++++++++++++++++++");
  };

  useEffect(() => {
    getTotalAmountSection80e();
  }, []);

  const getTotalAmountSection80e = () => {
    axios
      .get(
        "http://localhost:8080/it-declaration-info/get-total-amount-80e/2/2024-2025"
      )
      .then((res) => {
        setTotalAmountSection80e(res?.data);
      });
  };

  const setSaveStatus80eFunction = () => {
    axios
      .post("http://localhost:8080/it-declaration-info/save-status/2/2024-2025")
      .then((res) => {
        alert("save status");
        calculateSumEFunction();
        getSaveStatus80eFunction();
      });
  };

  const handleSubmitSection80E = () => {
    Service.postSection80CDataFirst(allSectionName).then((response) => {
      alert("saved");
      setSaveStatus80eFunction();
    });
    console.warn(allSectionName, "allSectionName+++++++++++________________");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 25,
    maxHeight: "90vh", // Set the maximum height for the modal
    overflowY: "auto",
    "@media (max-width: 768px)": {
      width: "90%", // Adjusted width for screens below the 'md' breakpoint
    },
  };

  const handlePreview = () => {
    navigate("/preview");
  };

  return (
    <div className="mt-6 w-screen">
      <div className="flex space-x-10 items-center px-4">
        <div className="text-gray-400 text-xl ml-4 cursor-pointer">
          <FaArrowLeft onClick={handleITDecScreenBack} />
        </div>
        <div className="text-gray-700 font-semibold text-2xl">
          IT Declaration
        </div>
      </div>

      <div className="border-b-[2px] border-gray-300 mt-1 px-4"></div>

      <div className="mt-8">
        <div className="flex justify-center">
          <div className="border-2 border-gray-500 flex items-center  space-x-5 py-1 w-[320px] ">
            <div className="ml-3 text-2xl">
              <HiOutlineInformationCircle />
            </div>
            <div className="font-medium text-gray-500 text-xl ">
              Declaration window is open
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 lg:text-lg md:text-2xl mt-3 font-normal ">
          Enter your planned investment declarations here and choose the desired
          regime in the following page
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-3 gap-28 md:gap-8 lg:gap-28 px-32 lg:px-32 md:px-10">
            <div className="md:col-span-1 col-span-3 md:-ml-0 -ml-16">
              <div className="border-[2px] border-gray-300 shadow-xl">
                <h2 className="text-gray-700 text-lg md:text-xl lg:text-lg text-center font-medium py-1 md:py-[18px] lg:py-1">
                  Section 80 C
                </h2>
                <div className="border-b-[2px] border-gray-300"></div>
                <div className="flex justify-center">
                  <img
                    className="h-32 w-32 lg:h-32 lg:w-32 md:h-52 md:w-52  mt-5 mb-8 "
                    src="./src/assets/savings 2.png"
                  />
                </div>
                {totalAmountSection80c != 0 ? (
                  <div className="flex flex-col items-center pb-2">
                    <div className="flex items-center space-x-2">
                      <div className="text-gray-400 text-lg font-semibold">
                        Declared Amount
                      </div>
                      <BsPencil
                        className="lg:text-2xl md:text-3xl text-2xl  text-blue-600 cursor-pointer"
                        onClick={() => setOpen(true)}
                      />
                    </div>

                    <div className="text-gray-600 text-xl text-gray-400">
                      {totalAmountSection80c}
                    </div>
                  </div>
                ) : (
                  <h2
                    className="text-lg lg:text-lg md:text-2xl text-center text-blue-500 font-semibold  mb-10 cursor-pointer"
                    onClick={() => setOpen(true)}
                  >
                    Add to Declaration
                  </h2>
                )}
              </div>
            </div>

            <div className="md:col-span-1 col-span-3 md:-ml-0 -ml-16 -mt-20 md:-mt-0 lg:-mt-0 ">
              <div className="border-[2px] border-gray-300 shadow-xl">
                <h2 className="text-gray-700 text-lg md:text-xl lg:text-lg text-center font-medium py-1">
                  Section 80D/80DD/80DDB/80U
                </h2>
                <div className="border-b-[2px] border-gray-300"></div>
                <div className="flex justify-center">
                  <img
                    className="h-32 w-32 lg:h-32 lg:w-32 md:h-52 md:w-52  mt-5 mb-8 "
                    src="./src/assets/Medical.jpg"
                  />
                </div>
                {totalAmountSection80d != 0 ? (
                  <div className="flex flex-col items-center pb-2">
                    <div className="flex items-center space-x-2">
                      <div className="text-gray-400 text-lg font-semibold">
                        Declared Amount
                      </div>
                      <BsPencil
                        className="lg:text-2xl md:text-3xl text-2xl  text-blue-600 cursor-pointer"
                        onClick={() => setOpen1(true)}
                      />
                    </div>
                    <div className="text-gray-600 text-xl text-gray-400">
                      {totalAmountSection80d}
                    </div>
                  </div>
                ) : (
                  <h2
                    className="text-lg lg:text-lg md:text-2xl text-center text-blue-500 font-semibold  mb-10 cursor-pointer"
                    onClick={() => setOpen1(true)}
                  >
                    Add to Declaration
                  </h2>
                )}
              </div>
            </div>

            <div className="md:col-span-1 col-span-3 md:-ml-0 -ml-16 -mt-20 md:-mt-0 lg:-mt-0">
              <div className="border-[2px] border-gray-300 shadow-xl">
                <h2 className="text-gray-700 text-lg md:text-xl lg:text-lg text-center font-medium py-1">
                  Section 80E/10/Housing Loan
                </h2>
                <div className="border-b-[2px] border-gray-300"></div>
                <div className="flex justify-center">
                  <img
                    className="h-32 w-32 lg:h-32 lg:w-32 md:h-52 md:w-52 mt-5 mb-8 "
                    src="./src/assets/images icon.png"
                  />
                </div>
                {totalAmountSection80e != 0 ? (
                  <div className="flex flex-col items-center pb-2">
                    <div className="flex items-center space-x-2">
                      <div className="text-gray-400 text-lg font-semibold">
                        Declared Amount
                      </div>
                      <BsPencil
                        className="lg:text-2xl md:text-3xl text-2xl  text-blue-600 cursor-pointer"
                        onClick={() => setOpen2(true)}
                      />
                    </div>
                    <div className="text-gray-600 text-xl text-gray-400">
                      {totalAmountSection80e}
                    </div>
                  </div>
                ) : (
                  <h2
                    className="text-lg lg:text-lg md:text-2xl text-center text-blue-500 font-semibold  mb-10 cursor-pointer"
                    onClick={() => setOpen2(true)}
                  >
                    Add to Declaration
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 mt-5">
          <div className="grid lg:grid-cols-12 lg:border-[1px] border-gray-500">
            <div className="lg:col-span-9 lg:border-r-[1px] border-gray-500">
              <div className="flex items-center float-end mr-5 mt-2 gap-5">
                <div className="text-2xl text-gray-500 font-bold ">
                  <HiOutlineInformationCircle />
                </div>
                <div className="text-lg text-gray-500 font-bold">
                  Click Next to choose Regime
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex justify-center">
                <div className="flex items-center ml-2 space-x-5">
                  <div className="bg-blue-800 cursor-pointer">
                    <h2
                      className="text-white text-xl p-2"
                      onClick={handlePreview}
                    >
                      Preview
                    </h2>
                  </div>
                  <div
                    className="border-[1px] p-2 border-blue-700 flex items-center space-x-2 text-xl text-blue-700 cursor-pointer"
                    onClick={handleSelectRegime}
                  >
                    <p className="">Next</p>
                    <div className="ml-1">
                      <FaArrowRight className="mr-1 text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={style} className="">
            <div className="flex justify-between">
              <div className=" mt-4">
                <div className="font-semibold text-md lg:text-2xl font-gray-700 ml-12 text-gray-600">
                  Section 80C
                </div>
              </div>
              <div className="mt-4 ">
                <div
                  onClick={() => setOpen(false)}
                  style={{ cursor: "pointer", fontSize: "30px" }}
                >
                  <ImCancelCircle className="mr-10 text-gray-600 md:text-3xl text-4xl" />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 120,
                    alignItems: "center",
                    marginTop: "80px",
                  }}
                ></div>
              </div>
            </div>

            <div className="border-[1px] border-gray-400 flex space-x-7 -mt-10">
              <div className="ml-32 my-2">
                <h2 className="mb-2 font-medium font-gray-400">
                  Total Declared Amount in
                </h2>
                <h2 className="text-xl font-gray-700 font-medium">
                  INR {totalAmountSection80c || 0}
                </h2>
              </div>

              <div className="md:border-r-[1px] md:border-gray-600 "></div>
            </div>

            <div className="mt-6">
              <label className="font-semibold text-xl ml-8">
                Deduction under section 80 C
              </label>
              <div className="grid grid-cols-2">
                {allSectionName
                  ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
                  ?.filter(
                    (section) => section.itDecId > 1 && section.itDecId < 4
                  ) // Filter the desired range
                  ?.map((section) => (
                    <div
                      className="md:col-span-1 col-span-2"
                      key={section.itDecId} // Use a unique identifier like itDecId
                    >
                      <div className="ml-12 mt-5">
                        <label className="font-medium text-gray-900">
                          {section.declarationName} <br />
                          <span className="font-medium text-gray-500">
                            {section.additionalInformation}
                          </span>
                        </label>
                        <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                          <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                            INR
                          </div>
                          <div className="bg-blue-700 ml-3">
                            <input
                              type="number"
                              className="w-[180px] outline-none"
                              name="declarationAmount"
                              value={section.declarationAmount || ""}
                              onChange={(e) =>
                                handleChangeIT_DeclarationSection80(
                                  e,
                                  section.itDecId
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex mt-16  space-x-10 pb-10">
                <div>
                  <button
                    className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
                    onClick={handleSubmitSection80C}
                  >
                    update
                  </button>
                </div>

                <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
                  Clear
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>

      <div className="">
        <Modal open={open1} onClose={() => setOpen1(false)}>
          <Box sx={style} className="">
            <div className="flex justify-between">
              <div className=" mt-4 ">
                <div className="font-semibold text-md lg:text-2xl font-gray-700 ml-12 text-gray-600">
                  Section 80D/80DD/80DDB/80U
                </div>
              </div>

              <div className=" mt-4 ">
                <div
                  onClick={() => setOpen1(false)}
                  style={{ cursor: "pointer", fontSize: "30px" }}
                >
                  <ImCancelCircle className="mr-10 text-gray-600 md:text-3xl text-4xl" />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 120,
                    alignItems: "center",
                    marginTop: "80px",
                  }}
                ></div>
              </div>
            </div>

            <div className="border-[1px] border-gray-400 flex space-x-7 -mt-10 mb-5">
              <div className="ml-32 my-2">
                <h2 className="mb-2 font-medium font-gray-400">
                  Total Declared Amount in
                </h2>
                <h2 className="text-xl font-gray-700 font-medium font-bold">
                  INR {totalAmountSection80d || 0}
                </h2>
              </div>

              <div className="md:border-r-[1px] md:border-gray-600 bg-blue-900"></div>
            </div>

            <div className="grid grid-cols-1">
              {allSectionName
                ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
                ?.filter(
                  (section) => section.itDecId >= 4 && section.itDecId <= 6
                ) // Filter the desired range
                ?.map((section) => (
                  <div
                    className="md:col-span-1 col-span-2"
                    key={section.itDecId} // Use a unique identifier like itDecId
                  >
                    <div className="ml-12 mt-5">
                      <label className="font-medium text-gray-900">
                        {section.declarationName} <br />
                        <span className="font-medium text-gray-500">
                          {section.additionalInformation}
                        </span>
                      </label>
                      <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                        <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                          INR
                        </div>
                        <div className="bg-blue-700 ml-3">
                          <input
                            type="number"
                            className="w-[180px] outline-none"
                            name="declarationAmount"
                            value={section.declarationAmount || ""}
                            onChange={(e) =>
                              handleChangeIT_DeclarationSection80(
                                e,
                                section.itDecId
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex justify-center">
              <div className="flex mt-16  space-x-10 pb-10">
                <div>
                  <button
                    className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
                    onClick={handleSubmitSection80D}
                  >
                    update
                  </button>
                </div>

                <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
                  Clear
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>

      <div className="">
        <Modal open={open2} onClose={() => setOpen2(false)}>
          <Box sx={style} className="">
            <div className="flex justify-between">
              <div className="mt-4">
                <div className="font-semibold text-md lg:text-2xl font-gray-700 ml-12 text-gray-600">
                  Section 80E/10/HousingLoan
                </div>
              </div>

              <div className=" mt-4 ">
                <div
                  onClick={() => setOpen2(false)}
                  style={{ cursor: "pointer", fontSize: "30px" }}
                >
                  <ImCancelCircle className="mr-10 text-gray-600 md:text-3xl text-4xl" />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 120,
                    alignItems: "center",
                    marginTop: "80px",
                  }}
                ></div>
              </div>
            </div>

            <div className="border-[1px] border-gray-400 flex space-x-7 -mt-10 mb-5">
              <div className="ml-32 my-2">
                <h2 className="mb-2 font-medium font-gray-400">
                  Total Declared Amount in
                </h2>
                <h2 className="text-xl font-gray-700 font-medium">
                  INR {totalAmountSection80e || 0}
                </h2>
              </div>
              <div className="md:border-r-[1px] md:border-gray-600 bg-blue-900"></div>
            </div>

            <div className="grid grid-cols-1">
              {allSectionName
                ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
                ?.filter(
                  (section) => section.itDecId > 7 && section.itDecId < 10
                ) // Filter the desired range
                ?.map((section) => (
                  <div
                    className="md:col-span-1 col-span-2"
                    key={section.itDecId} // Use a unique identifier like itDecId
                  >
                    <div className="ml-12 mt-5">
                      <label className="font-medium text-gray-900">
                        {section.declarationName} <br />
                        <span className="font-medium text-gray-500">
                          {section.additionalInformation}
                        </span>
                      </label>
                      <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                        <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                          INR
                        </div>
                        <div className="bg-blue-700 ml-3">
                          <input
                            type="number"
                            className="w-[180px] outline-none"
                            name="declarationAmount"
                            value={section.declarationAmount || ""}
                            onChange={(e) =>
                              handleChangeIT_DeclarationSection80(
                                e,
                                section.itDecId
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex justify-center">
              <div className="flex md:mt-16  space-x-10 pb-10">
                <div>
                  <button
                    className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
                    onClick={handleSubmitSection80E}
                  >
                    update
                  </button>
                </div>

                <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
                  Clear
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default IT_Declaration_Update;
