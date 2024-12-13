// import { Box, Modal } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { HiOutlineInformationCircle } from "react-icons/hi2";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";
// import { ImCancelCircle } from "react-icons/im";
// import Service from "./Service";
// import useFileStore from "./Zustand";
// import { useStoreFinancialYear } from "./useFileStore";

// function IT_Declaration_Display() {
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

//   const [amountStatus80C, setAmountStatus80C] = useState(0);
//   const [amountStatus80D, setAmountStatus80D] = useState(0);
//   const [amountStatus80E, setAmountStatus80E] = useState(0);
//   // ------------------------------------------------------

//   useEffect(() => {
//     handleSubmitSection80CAuto();
//     handleSubmitSection80DAuto();
//     handleSubmitSection80EAuto();
//   }, [open || open1 || open2]);

//   const handleSubmitSection80CAuto = () => {
//     Service.getSection80CByEmpId(employeeId).then((res) => {
//       setTotalDataSection80C(res?.data?.data || "");
//       setAmountStatus80C(res?.data?.data?.flag || 0);
//       if (res?.data?.data === undefined) {
//         setValue(false);
//       } else {
//         setValue(true);
//       }
//     });
//   };

//   const handleSubmitSection80DAuto = () => {
//     Service.getSection80DByEmpId(employeeId).then((res) => {
//       setTotalDataSection80D(res?.data?.data || "");
//       setAmountStatus80D(res?.data?.data?.flag || 0);
//       if (res?.data?.data === undefined) {
//         setValue1(false);
//       } else {
//         setValue1(true);
//       }
//     });
//   };

//   const handleSubmitSection80EAuto = () => {
//     Service.getSection80EByEmpId(employeeId).then((res) => {
//       setTotalDataSection80E(res?.data?.data || "");
//       setAmountStatus80E(res?.data?.data?.flag || 0);
//       if (res?.data?.data === undefined) {
//         setValue2(false);
//       } else {
//         setValue2(true);
//       }
//     });
//   };

//   //  section 80c

//   const [infoSection80C, setInfoSection80C] = useState("");
//   const [totalDataSection80C, setTotalDataSection80C] = useState("");
//   console.log(totalDataSection80C, "totalDataSection80C");

//   const totalSumSection80C =
//     (totalDataSection80C.cpf || 0) +
//     (totalDataSection80C.lip || 0) +
//     (totalDataSection80C.ppf || 0) +
//     (totalDataSection80C.ulip || 0) +
//     (totalDataSection80C.ion || 0) +
//     (totalDataSection80C.nss || 0) +
//     (totalDataSection80C.hlp || 0) +
//     (totalDataSection80C.fds || 0) +
//     (totalDataSection80C.lss || 0) +
//     (totalDataSection80C.cee || 0) +
//     (totalDataSection80C.dsss || 0);

//   // const [allSectionName, setAllSectionName] = useState([]);
//   // useEffect(() => {
//   //   axios
//   //     .get("http://localhost:8080/it-declaration-master/get-all")
//   //     .then((res) => {
//   //       setAllSectionName(res?.data);
//   //     });
//   // }, []);

//   // const handleChangeIT_DeclarationSection80C = (e) => {
//   //   const key = e.target.name;
//   //   const value = e.target.value;
//   //   setInfoSection80C({ ...infoSection80C, [key]: value });
//   // };

//   // console.log(infoSection80C);

//   // useEffect(() => {
//   //   // Check if `allSectionName` and `infoSection80C` are valid
//   //   if (allSectionName.length > 0 && infoSection80C) {
//   //     const updatedSections = allSectionName.map((section) => {
//   //       if (infoSection80C.hasOwnProperty(section.name)) {
//   //         return {
//   //           ...allSectionName,
//   //           infoValue: infoSection80C[section.name], // Add new property
//   //         };
//   //       }
//   //       return section; // Keep section as is if condition not met
//   //     });

//   //     console.log(updatedSections, "Updated Sections");
//   //     // Do something with `updatedSections` if needed
//   //   }
//   // }, [infoSection80C]);

//   // console.log(allSectionName, "allSectionName????");

//   const [allSectionName, setAllSectionName] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/it-declaration-master/get-all")
//       .then((res) => {
//         setAllSectionName(res?.data);
//       });
//   }, []);

//   const handleChangeIT_DeclarationSection80 = (e, index) => {
//     const key = e.target.name;
//     const value = e.target.value;

//     // Create a copy of the current state
//     const updatedSections = [...allSectionName];

//     // Define the JSON object you want to add to each section
//     const additionalInfo = {
//       empId: employeeId,
//       // signaturePlace: "Pune",
//       // signatureDate: "2023-11-30",
//       // hrSignaturePlace: "Mumbai",
//       // hrSignatureDate: "2023-12-01",
//       financialYear: submitFinancialYear,
//       taxRegime: regime === "Old Regime" ? 0 : 1,
//       //is_submitted: true,
//       // instituteName: "XYZ Housing Finance",
//       // loanAmount: 5000000.0,
//       // loanDate: "2022-05-15",
//       // interest: 7.5,
//     };

//     // Update the specific section at the given index
//     if (updatedSections[index]) {
//       updatedSections[index] = {
//         ...updatedSections[index],
//         ...additionalInfo, // Spread the additional info to include it in the section
//         [key]: value, // Add or update the dynamic key-value pair
//       };
//     }

//     // Update the state with the modified data
//     setAllSectionName(updatedSections);
//   };

//   // const handleChangeIT_DeclarationSection80C = (e, index) => {
//   //   const key = e.target.name;
//   //   const value = e.target.value;

//   //   // Create a copy of the current state
//   //   const updatedSections = [...allSectionName];

//   //   // Update the specific section at the given index
//   //   if (updatedSections[index]) {
//   //     updatedSections[index] = {
//   //       ...updatedSections[index],
//   //       [key]: value, // Add or update the key-value pair
//   //     };
//   //   }

//   //   // Update the state with the modified data
//   //   setAllSectionName(updatedSections);
//   // };

//   console.log(allSectionName, "allSectionName");

//   // for(let i of allSectionName){
//   //   if(infoSection80C.hasOwnProperty(i.name)){
//   //        {...i,i.name,infoSection80C[i.name]}
//   //   }
//   // }

//   // save section 80c

//   // const handleSubmitSection80C = () => {
//   //   const infoSection80CCopy = {
//   //     ...infoSection80C,
//   //     empId: employeeId,
//   //     flag: 1,
//   //   };
//   //   setValue(true);
//   //   Service.postSection80CDataFirst(infoSection80CCopy).then((response) => {
//   //     Service.getSection80CByEmpId(employeeId).then((response) => {
//   //       setTotalDataSection80C(response?.data?.data);
//   //       setAmountStatus80C(response?.data?.data?.flag || 0);
//   //     });
//   //   });
//   // };

//   const handleSubmitSection80 = () => {
//     // const infoSection80CCopy = {
//     //   ...infoSection80C,
//     //   empId: employeeId,
//     //   flag: 1,
//     // };
//     setValue(true);

//     console.warn(allSectionName, "allSectionName+++++++++++________________");
//     Service.postSection80CDataFirst(allSectionName).then((response) => {
//       alert("saved");
//       // Service.getSection80CByEmpId(employeeId).then((response) => {
//       //   setTotalDataSection80C(response?.data?.data);
//       //   setAmountStatus80C(response?.data?.data?.flag || 0);
//       // });
//     });
//   };

//   const [infoSection80D, setInfoSection80D] = useState("");

//   const handleChangeIT_DeclarationSection80D = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;
//     setInfoSection80D({ ...infoSection80D, [key]: value });
//   };

//   const [totalDataSection80D, setTotalDataSection80D] = useState("");

//   const totalSumSection80D =
//     (totalDataSection80D.nps || 0) +
//     (totalDataSection80D.mpsc || 0) +
//     (totalDataSection80D.mpp || 0) +
//     (totalDataSection80D.mppsc || 0) +
//     (totalDataSection80D.mth || 0) +
//     (totalDataSection80D.mtc || 0) +
//     (totalDataSection80D.tbpm || 0);

//   // const handleSubmitSection80D = () => {
//   //   const infoSection80DCopy = {
//   //     ...infoSection80D,
//   //     empId: employeeId,
//   //     flag: 1,
//   //   };
//   //   setValue1(true);
//   //   Service.postSection80DDataFirst(infoSection80DCopy).then((response) => {
//   //     Service.getSection80DByEmpId(employeeId).then((response) => {
//   //       setTotalDataSection80D(response?.data?.data);
//   //       setAmountStatus80D(response?.data?.data?.flag || 0);
//   //     });
//   //   });
//   // };

//   const [infoSection80E, setInfoSection80E] = useState("");

//   const handleChangeIT_DeclarationSection80E = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;
//     setInfoSection80E({ ...infoSection80E, [key]: value });
//   };

//   const [totalDataSection80E, setTotalDataSection80E] = useState("");

//   const totalSumSection80E =
//     (totalDataSection80E.loan || 0) +
//     (totalDataSection80E.rent || 0) +
//     (totalDataSection80E.housingLoan || 0);

//   // const handleSubmitSection80E = () => {
//   //   const infoSection80ECopy = {
//   //     ...infoSection80E,
//   //     empId: employeeId,
//   //     flag: 1,
//   //   };
//   //   setValue2(true);
//   //   Service.postSection80EDataFirst(infoSection80ECopy).then((response) => {
//   //     Service.getSection80EByEmpId(employeeId).then((response) => {
//   //       setTotalDataSection80E(response?.data?.data);
//   //       setAmountStatus80E(response?.data?.data?.flag || 0);
//   //     });
//   //   });
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
//                 {amountStatus80C === 1 ? (
//                   <div className="flex flex-col items-center pb-2">
//                     <div className="text-gray-400 text-lg font-semibold">
//                       Declared Amount
//                     </div>
//                     <div className="text-gray-600 text-xl text-gray-400">
//                       {totalSumSection80C}
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
//                 {amountStatus80D === 1 ? (
//                   <div className="flex flex-col items-center pb-2">
//                     <div className="text-gray-400 text-lg font-semibold">
//                       Declared Amount
//                     </div>
//                     <div className="text-gray-600 text-xl text-gray-400">
//                       {totalSumSection80D}
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
//                 {amountStatus80E === 1 ? (
//                   <div className="flex flex-col items-center pb-2">
//                     <div className="text-gray-400 text-lg font-semibold">
//                       Declared Amount
//                     </div>
//                     <div className="text-gray-600 text-xl text-gray-400">
//                       {totalSumSection80E}
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
//         {/*
//         <div className="mt-20 pb-14">
//           <div className="grid lg:grid-cols-12">
//             <div className="lg:col-span-9">
//               <div className="md:py-10  py-2 border-[1px] border-gray-500 md:text-xl text-md">
//                 <div className="flex md:space-x-5 space-x-1 items-center md:ml-[200px] lg:ml-[700px] ml-[2px] text-gray-500 font-semibold">
//                   <div className="text-2xl">
//                     <HiOutlineInformationCircle />
//                   </div>
//                   <div>Click Next to choose Regime </div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-3 ">
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
//                   <div className="ml-5 ml-1">Next</div>
//                   <div className="ml-1">
//                     <FaArrowRight className="md:mr-4 mr-1 text-lg" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div> */}

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
//                   INR {totalSumSection80C || 0}
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
//                   ?.filter(
//                     (section) => section.itDecId >= 1 && section.itDecId < 4
//                   )
//                   ?.map((section, index) => (
//                     <div
//                       className="md:col-span-1 col-span-2"
//                       key={section.itDecId || index}
//                     >
//                       <div className="ml-12 mt-5">
//                         <label className="font-medium text-gray-900">
//                           {section.name} <br />
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
//                               onChange={(e) =>
//                                 handleChangeIT_DeclarationSection80(e, index)
//                               }

//                               // value={
//                               //   totalDataSection80C[
//                               //     section.name.toLowerCase().replace(/ /g, "_")
//                               //   ] || ""
//                               // }
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>

//               {/*
//               <div className="grid grid-cols-2">
//                 <div className="md:col-span-1 col-span-2">
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
//                           type="number"
//                           className="w-[180px] outline-none"
//                           name="cee"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.cee}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}
//               {/* <div className="grid grid-cols-2">
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
//                           type="number"
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
//                           type="number"
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
//                           type="number"
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
//                           type="number"
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
//                           type="number"
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
//                           type="number"
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
//                           type="number"
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
//                           type="number"
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
//                           type="number"
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
//                           type="number"
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
//                           type="number"
//                           className="w-[180px] outline-none"
//                           name="dsss"
//                           onChange={handleChangeIT_DeclarationSection80C}
//                           value={totalDataSection80C.dsss}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}
//             </div>

//             <div className="flex justify-center">
//               <div className="flex mt-16  space-x-10 pb-10">
//                 <div>
//                   {value ? (
//                     <button className="py-[10px] px-4 bg-red-700 text-white  font-semibold cursor-not-allowed">
//                       Saved
//                     </button>
//                   ) : (
//                     <button
//                       className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                       onClick={handleSubmitSection80}
//                     >
//                       Save
//                     </button>
//                   )}
//                 </div>

//                 <div>
//                   {value ? (
//                     ""
//                   ) : (
//                     <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//                       Clear
//                     </button>
//                   )}
//                 </div>
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
//                 <h2 className="text-xl font-gray-700 font-medium">
//                   INR {totalSumSection80D || 0}
//                 </h2>
//               </div>

//               <div className="md:border-r-[1px] md:border-gray-600 bg-blue-900"></div>
//             </div>

//             <div className="grid grid-cols-1">
//               {allSectionName
//                 ?.filter(
//                   (section) => section.itDecId >= 4 && section.itDecId < 6
//                 ) // Filter sections with itDecId >= 6
//                 .map((section, index) => {
//                   const adjustedIndex = index + 3; // Adjust the index to start from 6
//                   return (
//                     <div
//                       className="md:col-span-1 col-span-2"
//                       key={section.itDecId || adjustedIndex}
//                     >
//                       <div className="ml-12 mt-5">
//                         <label className="font-medium text-gray-900">
//                           {section.name} <br />
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
//                               onChange={(e) =>
//                                 handleChangeIT_DeclarationSection80(
//                                   e,
//                                   adjustedIndex
//                                 )
//                               }
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>
//             {/*
//             <div className="grid grid-cols-1">
//               {allSectionName
//                 ?.filter((section) => section.itDecId >= 4) // Filter sections with itDecId >= 4
//                 .map((section, index) => (
//                   <div
//                     className="md:col-span-1 col-span-2"
//                     key={section.itDecId || index}
//                   >
//                     <div className="ml-12 mt-5">
//                       <label className="font-medium text-gray-900">
//                         {section.name} <br />
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
//                             onChange={(e) =>
//                               handleChangeIT_DeclarationSection80(e, index)
//                             }
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div> */}

//             {/*
//             <div className="grid grid-cols-1">
//               {allSectionName?.map((section, index) => (

//                 <div
//                   className="md:col-span-1 col-span-2"
//                   key={section.itDecId || index}
//                 >
//                   <div className="ml-12 mt-5">
//                     <label className="font-medium text-gray-900">
//                       {section.name} <br />
//                       <span className="font-medium text-gray-500">
//                         {section.additionalInformation}
//                       </span>
//                     </label>
//                     <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
//                         INR
//                       </div>
//                       <div className="bg-blue-700 ml-3">
//                         <input
//                           type="number"
//                           className="w-[180px] outline-none"
//                           name="declarationAmount"
//                           onChange={(e) =>
//                             handleChangeIT_DeclarationSection80(e, index)
//                           }

//                           // value={
//                           //   totalDataSection80C[
//                           //     section.name.toLowerCase().replace(/ /g, "_")
//                           //   ] || ""
//                           // }
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div> */}

//             {/* <div className="pr-2">
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
//                       type="number"
//                       className="w-[180px] outline-none"
//                       name="nps"
//                       value={totalDataSection80D.nps}
//                       onChange={handleChangeIT_DeclarationSection80D}
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
//                       type="number"
//                       className="w-[180px] outline-none"
//                       name="mpsc"
//                       value={totalDataSection80D.mpsc}
//                       onChange={handleChangeIT_DeclarationSection80D}
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
//                       type="number"
//                       className="w-[180px] outline-none"
//                       name="mpp"
//                       value={totalDataSection80D.mpp}
//                       onChange={handleChangeIT_DeclarationSection80D}
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
//                       type="number"
//                       className="w-[180px] outline-none"
//                       name="mppsc"
//                       value={totalDataSection80D.mppsc}
//                       onChange={handleChangeIT_DeclarationSection80D}
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
//                       type="number"
//                       className="w-[180px] outline-none"
//                       name="mth"
//                       value={totalDataSection80D.mth}
//                       onChange={handleChangeIT_DeclarationSection80D}
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
//                       type="number"
//                       className="w-[180px] outline-none"
//                       name="mtc"
//                       value={totalDataSection80D.mtc}
//                       onChange={handleChangeIT_DeclarationSection80D}
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
//                       type="number"
//                       className="w-[180px] outline-none"
//                       name="tbpm"
//                       value={totalDataSection80D.tbpm}
//                       onChange={handleChangeIT_DeclarationSection80D}
//                     ></input>
//                   </div>
//                 </div>
//               </div>
//             </div> */}

//             <div className="flex justify-center">
//               <div className="flex mt-16  space-x-10 pb-10">
//                 <div>
//                   {value1 ? (
//                     <button className="py-[10px] px-4 bg-red-700 text-white  font-semibold cursor-not-allowed">
//                       Saved
//                     </button>
//                   ) : (
//                     <button
//                       className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                       onClick={handleSubmitSection80}
//                     >
//                       Save
//                     </button>
//                   )}
//                 </div>

//                 <div>
//                   {value1 ? (
//                     ""
//                   ) : (
//                     <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//                       Clear
//                     </button>
//                   )}
//                 </div>
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
//                   INR {totalSumSection80E || 0}{" "}
//                 </h2>
//               </div>
//               <div className="md:border-r-[1px] md:border-gray-600 bg-blue-900"></div>
//             </div>

//             <div className="grid grid-cols-1">
//               {allSectionName
//                 ?.filter((section) => section.itDecId >= 6) // Filter sections with itDecId >= 6
//                 .map((section, index) => {
//                   const adjustedIndex = index + 5; // Adjust the index to start from 6
//                   return (
//                     <div
//                       className="md:col-span-1 col-span-2"
//                       key={section.itDecId || adjustedIndex}
//                     >
//                       <div className="ml-12 mt-5">
//                         <label className="font-medium text-gray-900">
//                           {section.name} <br />
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
//                               onChange={(e) =>
//                                 handleChangeIT_DeclarationSection80(
//                                   e,
//                                   adjustedIndex
//                                 )
//                               }
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>

//             {/*
//             <div className="grid grid-cols-1">
//               {allSectionName
//                 ?.filter((section) => section.itDecId >= 6) // Filter sections with itDecId >= 4
//                 .map((section, index) => (
//                   <div
//                     className="md:col-span-1 col-span-2"
//                     key={section.itDecId || index}
//                   >
//                     <div className="ml-12 mt-5">
//                       <label className="font-medium text-gray-900">
//                         {section.name} <br />
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
//                             onChange={(e) =>
//                               handleChangeIT_DeclarationSection80(e, index)
//                             }
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div> */}

//             {/*
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
//                       type="number"
//                       className="w-[180px] outline-none"
//                       name="loan"
//                       value={totalDataSection80E.loan}
//                       onChange={handleChangeIT_DeclarationSection80E}
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
//                       type="number"
//                       className="w-[180px] outline-none"
//                       name="rent"
//                       value={totalDataSection80E.rent}
//                       onChange={handleChangeIT_DeclarationSection80E}
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
//                       type="number"
//                       className="w-[180px] outline-none"
//                       name="housingLoan"
//                       value={totalDataSection80E.housingLoan}
//                       onChange={handleChangeIT_DeclarationSection80E}
//                     ></input>
//                   </div>
//                 </div>
//               </div>
//             </div> */}

//             <div className="flex justify-center">
//               <div className="flex md:mt-16  space-x-10 pb-10">
//                 <div>
//                   {value2 ? (
//                     <button className="py-[10px] px-4 bg-red-700 text-white  font-semibold cursor-not-allowed">
//                       Saved
//                     </button>
//                   ) : (
//                     <button
//                       className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                       onClick={handleSubmitSection80}
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
//                 </div>
//               </div>
//             </div>
//           </Box>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default IT_Declaration_Display;

// import { Box, Modal } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { HiOutlineInformationCircle } from "react-icons/hi2";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";
// import { ImCancelCircle } from "react-icons/im";
// import Service from "./Service";
// import useFileStore from "./Zustand";
// import { useStoreFinancialYear } from "./useFileStore";

// function IT_Declaration_Display() {
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

//   const [amountStatus80C, setAmountStatus80C] = useState(0);
//   const [amountStatus80D, setAmountStatus80D] = useState(0);
//   const [amountStatus80E, setAmountStatus80E] = useState(0);
//   // ------------------------------------------------------

//   useEffect(() => {
//     handleSubmitSection80CAuto();
//     handleSubmitSection80DAuto();
//     handleSubmitSection80EAuto();
//   }, [open || open1 || open2]);

//   const handleSubmitSection80CAuto = () => {
//     Service.getSection80CByEmpId(employeeId).then((res) => {
//       setTotalDataSection80C(res?.data?.data || "");
//       setAmountStatus80C(res?.data?.data?.flag || 0);
//       if (res?.data?.data === undefined) {
//         setValue(false);
//       } else {
//         setValue(true);
//       }
//     });
//   };

//   const handleSubmitSection80DAuto = () => {
//     Service.getSection80DByEmpId(employeeId).then((res) => {
//       setTotalDataSection80D(res?.data?.data || "");
//       setAmountStatus80D(res?.data?.data?.flag || 0);
//       if (res?.data?.data === undefined) {
//         setValue1(false);
//       } else {
//         setValue1(true);
//       }
//     });
//   };

//   const handleSubmitSection80EAuto = () => {
//     Service.getSection80EByEmpId(employeeId).then((res) => {
//       setTotalDataSection80E(res?.data?.data || "");
//       setAmountStatus80E(res?.data?.data?.flag || 0);
//       if (res?.data?.data === undefined) {
//         setValue2(false);
//       } else {
//         setValue2(true);
//       }
//     });
//   };

//   //  section 80c

//   const [infoSection80C, setInfoSection80C] = useState("");
//   const [totalDataSection80C, setTotalDataSection80C] = useState("");
//   console.log(totalDataSection80C, "totalDataSection80C");

//   const totalSumSection80C =
//     (totalDataSection80C.cpf || 0) +
//     (totalDataSection80C.lip || 0) +
//     (totalDataSection80C.ppf || 0) +
//     (totalDataSection80C.ulip || 0) +
//     (totalDataSection80C.ion || 0) +
//     (totalDataSection80C.nss || 0) +
//     (totalDataSection80C.hlp || 0) +
//     (totalDataSection80C.fds || 0) +
//     (totalDataSection80C.lss || 0) +
//     (totalDataSection80C.cee || 0) +
//     (totalDataSection80C.dsss || 0);

//   // const [allSectionName, setAllSectionName] = useState([]);
//   // useEffect(() => {
//   //   axios
//   //     .get("http://localhost:8080/it-declaration-master/get-all")
//   //     .then((res) => {
//   //       setAllSectionName(res?.data);
//   //     });
//   // }, []);

//   // const handleChangeIT_DeclarationSection80C = (e) => {
//   //   const key = e.target.name;
//   //   const value = e.target.value;
//   //   setInfoSection80C({ ...infoSection80C, [key]: value });
//   // };

//   // console.log(infoSection80C);

//   // useEffect(() => {
//   //   // Check if `allSectionName` and `infoSection80C` are valid
//   //   if (allSectionName.length > 0 && infoSection80C) {
//   //     const updatedSections = allSectionName.map((section) => {
//   //       if (infoSection80C.hasOwnProperty(section.name)) {
//   //         return {
//   //           ...allSectionName,
//   //           infoValue: infoSection80C[section.name], // Add new property
//   //         };
//   //       }
//   //       return section; // Keep section as is if condition not met
//   //     });

//   //     console.log(updatedSections, "Updated Sections");
//   //     // Do something with `updatedSections` if needed
//   //   }
//   // }, [infoSection80C]);

//   // console.log(allSectionName, "allSectionName????");

//   const [allSectionName, setAllSectionName] = useState([]);

//   const fetchAllSectionNameInitially = () => {
//     axios
//       .get("http://localhost:8080/it-declaration-master/get-all")
//       .then((res) => {
//         setAllSectionName(res?.data);
//       });
//   };

//   useEffect(() => {
//     fetchAllSectionNameInitially();
//   }, []);

//   const [existingAllSectionName, setExistingAllSectionName] = useState([]);

//   console.warn(existingAllSectionName, "existingAllSectionName************");

//   const handleChangeIT_DeclarationSection80 = (e, itDecId) => {
//     const key = e.target.name; // Dynamic key from input name
//     const value = e.target.value; // Input value

//     let updatedSections = [];

//     if (empIdAndFinancialYearStatus === false) {
//       // Map through allSectionName to add empId and financialYear
//       updatedSections = allSectionName.map((section) => ({
//         ...section,
//         empId: employeeId,
//         financialYear: submitFinancialYear,
//       }));
//     } else {
//       // Merge existingAllSectionName and allSectionName based on itDecId
//       updatedSections = existingAllSectionName.map((item1) => {
//         const matchingItem = allSectionName.find(
//           (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//         );
//         return matchingItem ? { ...item1, ...matchingItem } : item1;
//       });
//     }

//     console.warn(
//       updatedSections,
//       "updatedSections after merge and before modification"
//     );

//     // Define additional info for all sections
//     const additionalInfo = {
//       taxRegime: regime === "Old Regime" ? 0 : 1,
//     };

//     // Update the specific section based on itDecId
//     updatedSections = updatedSections.map((section) =>
//       section.itDecId === itDecId
//         ? {
//             ...section,
//             ...additionalInfo, // Add additional info
//             [key]: value, // Update the dynamic key-value pair
//           }
//         : section
//     );

//     console.warn(updatedSections, "updatedSections after modification");

//     // Update the state with the modified data
//     setAllSectionName(updatedSections);
//   };

//   // const handleChangeIT_DeclarationSection80 = (e, index) => {
//   //   console.log(allSectionName, "allSectionName%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
//   //   const key = e.target.name;
//   //   const value = e.target.value;

//   //   let updatedSections = [];

//   //   if (empIdAndFinancialYearStatus === false) {
//   //     const updatedAllSectionName = allSectionName.map((section) => ({
//   //       ...section,
//   //       empId: employeeId,
//   //       financialYear: submitFinancialYear,
//   //     }));

//   //     // Create a copy of the current state
//   //     updatedSections = [...updatedAllSectionName];
//   //   } else {
//   //     const mergedArray = existingAllSectionName.map((item1) => {
//   //       const matchingItem = allSectionName.find(
//   //         (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//   //       );

//   //       console.warn(matchingItem, "{{{{{{{{{{{{{MMMMMMMMMMM");

//   //       if (matchingItem) {
//   //         // Merge the existing item and the matching item
//   //         return { ...item1, ...matchingItem };
//   //       }

//   //       // Return the original item if no match is found
//   //       return item1;
//   //     });

//   //     updatedSections = [...mergedArray];

//   //     // // Create a new array to hold the merged objects
//   //     // const mergedArray = [];

//   //     // // Iterate over the first array
//   //     // for (let i = 0; i < existingAllSectionName.length; i++) {
//   //     //   const item1 = existingAllSectionName[i];

//   //     //   console.log(allSectionName, "allSectionName^^^^^^^^^^^^^^");

//   //     //   // Find the matching item from the second array
//   //     //   const matchedItem = allSectionName.find(
//   //     //     (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//   //     //   );

//   //     //   // If a match is found, merge both items and add extra fields
//   //     //   if (matchedItem) {
//   //     //     const mergedItem = {
//   //     //       ...item1,
//   //     //       ...matchedItem,
//   //     //     };
//   //     //     mergedArray.push(mergedItem);
//   //     //   } else {
//   //     //     // If no match is found, just add the item from the first array
//   //     //     mergedArray.push({
//   //     //       ...item1,
//   //     //     });
//   //     //   }
//   //     // }

//   //     // console.log(mergedArray);
//   //     // updatedSections = [...mergedArray];

//   //     console.warn(
//   //       updatedSections,
//   //       "updatedSections&&&&&&&&&&&&&&&&^^^^^^^^^^^^^^^^^^^^^^^++++++++++"
//   //     );
//   //   }

//   //   // Define the additional information to be added to each section
//   //   const additionalInfo = {
//   //     taxRegime: regime === "Old Regime" ? 0 : 1,
//   //   };

//   //   // Update the specific section at the given index
//   //   if (updatedSections[index]) {
//   //     updatedSections[index] = {
//   //       ...updatedSections[index],
//   //       ...additionalInfo, // Spread the additional info to include it in the section
//   //       [key]: value, // Add or update the dynamic key-value pair
//   //     };
//   //   }

//   //   console.warn(updatedSections, "updatedSections after modification");

//   //   // Update the state with the modified data
//   //   setAllSectionName(updatedSections);
//   // };

//   // const [existingAllSectionName, setExistingAllSectionName] = useState([]);

//   // console.warn(existingAllSectionName, "existingAllSectionName************");

//   // const handleChangeIT_DeclarationSection80 = (e, index) => {
//   //   const key = e.target.name;
//   //   const value = e.target.value;

//   //   let updatedSections = [];

//   //   if (empIdAndFinancialYearStatus === false) {
//   //     const updatedAllSectionName = allSectionName.map((section) => ({
//   //       ...section,
//   //       empId: employeeId,
//   //       financialYear: submitFinancialYear,
//   //     }));
//   //     // Create a copy of the current state
//   //     updatedSections = [...updatedAllSectionName];
//   //   } else {
//   //     // // // Copy all key-value pairs from allSectionName to existingAllSectionName
//   //     // const updatedExistingAllSectionName = allSectionName.map((section) => ({
//   //     //   ...section, // Spread all key-value pairs
//   //     // }));

//   //     // // Assign it to existingAllSectionName if needed
//   //     // existingAllSectionName = [...updatedExistingAllSectionName];

//   //     const mergedArray = existingAllSectionName.map((item1) => {
//   //       // Find the matching item from the second array
//   //       const matchingItem = allSectionName.find(
//   //         (item2) => item2.itDecId === item1.itDecId
//   //       );

//   //       // If a match is found, merge the properties from the second array object into the first array object
//   //       if (matchingItem) {
//   //         return { ...item1, ...matchingItem }; // Merge both objects
//   //       }

//   //       // // If no match is found, return the original first array item
//   //       // return item1;
//   //     });

//   //     updatedSections = [...mergedArray];

//   //     console.log(
//   //       updatedSections,
//   //       "updatedSections&&&&&&&&&&&&&&&&^^^^^^^^^^^^^^^^^^^^^^^++++++++++"
//   //     );
//   //     // updatedSections = [
//   //     //   ...[...allSectionName.map((section) => ({ ...section }))],
//   //     // ];
//   //     // // setExistingAllSectionName(updatedSections); // Update state for `existingAllSectionName`

//   //     // let existingAllSectionName; // Ensure it is mutable
//   //     // updatedSections = existingAllSectionName = [
//   //     //   ...existingAllSectionName, // Keep the existing data
//   //     //   ...allSectionName.map((section) => ({ ...section })), // Add shallow-copied new data
//   //     // ];
//   //   }

//   //   // Define the JSON object you want to add to each section
//   //   const additionalInfo = {
//   //     taxRegime: regime === "Old Regime" ? 0 : 1,
//   //   };

//   //   // Update the specific section at the given index
//   //   if (updatedSections[index]) {
//   //     updatedSections[index] = {
//   //       ...updatedSections[index],
//   //       ...additionalInfo, // Spread the additional info to include it in the section
//   //       [key]: value, // Add or update the dynamic key-value pair
//   //     };
//   //   }

//   //   console.warn(updatedSections, "updatedSections");

//   //   // Update the state with the modified data
//   //   setAllSectionName(updatedSections);
//   // };

//   // const handleChangeIT_DeclarationSection80 = (e, index) => {
//   //   const key = e.target.name;
//   //   const value = e.target.value;

//   //   let updatedSections = [];

//   //   if (empIdAndFinancialYearStatus == false) {
//   //     const updatedAllSectionName = allSectionName.map((section) => ({
//   //       ...section,
//   //       empId: employeeId,
//   //       financialYear: submitFinancialYear,
//   //     }));
//   //     // Create a copy of the current state
//   //     updatedSections = [...updatedAllSectionName];
//   //   } else {

//   //     updatedSections = [...existingAllSectionName];
//   //   }

//   //   // Define the JSON object you want to add to each section
//   //   const additionalInfo = {
//   //     // empId: employeeId,
//   //     // signaturePlace: "Pune",
//   //     // signatureDate: "2023-11-30",
//   //     // hrSignaturePlace: "Mumbai",
//   //     // hrSignatureDate: "2023-12-01",
//   //     // financialYear: submitFinancialYear,
//   //     taxRegime: regime === "Old Regime" ? 0 : 1,
//   //     //is_submitted: true,
//   //     // instituteName: "XYZ Housing Finance",
//   //     // loanAmount: 5000000.0,
//   //     // loanDate: "2022-05-15",
//   //     // interest: 7.5,
//   //   };

//   //   // Update the specific section at the given index
//   //   if (updatedSections[index]) {
//   //     updatedSections[index] = {
//   //       ...updatedSections[index],
//   //       ...additionalInfo, // Spread the additional info to include it in the section
//   //       [key]: value, // Add or update the dynamic key-value pair
//   //     };
//   //   }

//   //   console.warn(updatedSections, "updatedSections");

//   //   // Update the state with the modified data
//   //   setAllSectionName(updatedSections);
//   // };

//   // const handleChangeIT_DeclarationSection80C = (e, index) => {
//   //   const key = e.target.name;
//   //   const value = e.target.value;

//   //   // Create a copy of the current state
//   //   const updatedSections = [...allSectionName];

//   //   // Update the specific section at the given index
//   //   if (updatedSections[index]) {
//   //     updatedSections[index] = {
//   //       ...updatedSections[index],
//   //       [key]: value, // Add or update the key-value pair
//   //     };
//   //   }

//   //   // Update the state with the modified data
//   //   setAllSectionName(updatedSections);
//   // };

//   console.log(allSectionName, "allSectionName");

//   // for(let i of allSectionName){
//   //   if(infoSection80C.hasOwnProperty(i.name)){
//   //        {...i,i.name,infoSection80C[i.name]}
//   //   }
//   // }

//   // save section 80c

//   // const handleSubmitSection80C = () => {
//   //   const infoSection80CCopy = {
//   //     ...infoSection80C,
//   //     empId: employeeId,
//   //     flag: 1,
//   //   };
//   //   setValue(true);
//   //   Service.postSection80CDataFirst(infoSection80CCopy).then((response) => {
//   //     Service.getSection80CByEmpId(employeeId).then((response) => {
//   //       setTotalDataSection80C(response?.data?.data);
//   //       setAmountStatus80C(response?.data?.data?.flag || 0);
//   //     });
//   //   });
//   // };

//   const [empIdAndFinancialYearStatus, setEmpIdAndFinancialYearStatus] =
//     useState(null);

//   // useEffect(() => {
//   //   axios
//   //     .get("http://localhost:8080/it-declaration-info/get/2/2024-2025")
//   //     .then((res) => {
//   //       setEmpIdAndFinancialYearStatus(true);
//   //       // let existingAllSectionName; // Ensure it is mutable
//   //       // updatedSections = existingAllSectionName = [
//   //       //   ...existingAllSectionName, // Keep the existing data
//   //       //   ...allSectionName.map((section) => ({ ...section })), // Add shallow-copied new data
//   //       // ];
//   //       // setExistingAllSectionName(res.data);
//   //       setExistingAllSectionName([
//   //         ...res.data, // Keep the existing data
//   //         ...allSectionName.map((section) => ({ ...section })), // Add shallow-copied new data
//   //       ]);
//   //     })
//   //     .catch((error) => {
//   //       setEmpIdAndFinancialYearStatus(false);
//   //     });
//   // }, []);
//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/it-declaration-info/get/2/2024-2025")
//       .then((res) => {
//         setEmpIdAndFinancialYearStatus(true);

//         // // Combine res.data with 'description' field from each corresponding object in allSectionName
//         // const combinedData = res.data.map((dataItem, index) => ({
//         //   ...dataItem, // Keep all fields from res.data
//         //   description:
//         //     allSectionName[index]?.description || "default description", // Add 'description' field from allSectionName
//         // }));

//         // Update state with combined data
//         setExistingAllSectionName(res.data);
//       })
//       .catch((error) => {
//         setEmpIdAndFinancialYearStatus(false);
//       });
//   }, [allSectionName]); // Include allSectionName in dependency array if it's not constant

//   console.warn(
//     empIdAndFinancialYearStatus,
//     "empIdAndFinancialYearStatus)))))))))))))))"
//   );

//   // const validator = () => {
//   //   axios
//   //     .get("http://localhost:8080/it-declaration-info/get/3/2024-2025")
//   //     .then((res) => {
//   //       if (res.status === 200) {
//   //         console.log(res.data); // Handle successful response
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       if (error.response && error.response.status === 400) {
//   //         console.log("Error: Bad Request (400)");
//   //       } else {
//   //         console.log("Error:", error.message);
//   //       }
//   //     });
//   // };

//   // const handleSubmitSection80 = () => {
//   //   console.warn(allSectionName, "allSectionName+++++++++++________________");
//   //   Service.postSection80CDataFirst(allSectionName).then((response) => {
//   //     alert("saved");
//   //     // Service.getSection80CByEmpId(employeeId).then((response) => {
//   //     //   setTotalDataSection80C(response?.data?.data);
//   //     //   setAmountStatus80C(response?.data?.data?.flag || 0);
//   //     // });
//   //   });
//   // };

//   // const handleSubmitSection80 = () => {
//   //   axios
//   //     .get("http://localhost:8080/it-declaration-info/get/3/2024-2025")
//   //     .then((res) => {
//   //       setExistingAllSectionName(res.data);
//   //     })
//   //     .catch((error) => {
//   //       Service.postSection80CDataFirst(allSectionName).then((response) => {
//   //         alert("saved");
//   //       });
//   //     });
//   //   console.warn(allSectionName, "allSectionName+++++++++++________________");
//   // };

//   // const { saveStatusSection80C, setSaveStatusSection80C } =
//   //   useStoreSaveStatusSection80c();

//   // useEffect(() => {
//   //  const date=new Date();
//   //  const year=
//   // }, []);

//   // const saveStatus80cFunction = () => {
//   //   axios.po;
//   // };

//   console.warn(existingAllSectionName, "eeeeeeeeeeeeeeeeeeeeeeeee");

//   const [saveStatusSection80C, setSaveStatusSection80C] = useState();

//   useEffect(() => {
//     getSaveStatus80cFunction();
//   }, []);

//   const getSaveStatus80cFunction = () => {
//     axios
//       .get(
//         "http://localhost:8080/it-declaration-info/get-save-status/2/2024-2025"
//       )
//       .then((res) => setSaveStatusSection80C(res.data))
//       .catch((error) => console.log(error));
//   };

//   const [totalAmountSection80c, setTotalAmountSection80c] = useState(0);
//   const calculateSumFunction = () => {
//     const sum = allSectionName
//       ?.filter((section) => section.itDecId > 1 && section.itDecId <= 4)
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
//         alert("save status");
//         calculateSumFunction();
//         // getTotalAmountSection80c();
//         getSaveStatus80cFunction();
//       });
//   };

//   const handleSubmitSection80C = () => {
//     Service.postSection80CDataFirst(allSectionName).then((response) => {
//       alert("saved");
//       //  setSaveStatusSection80C(true);
//       setSaveStatus80cFunction();
//     });
//     console.warn(allSectionName, "allSectionName+++++++++++________________");
//   };

//   const handleSubmitSection80D = () => {
//     Service.postSection80CDataFirst(allSectionName).then((response) => {
//       alert("saved");
//     });
//     console.warn(allSectionName, "allSectionName+++++++++++________________");
//   };

//   const handleSubmitSection80E = () => {
//     Service.postSection80CDataFirst(allSectionName).then((response) => {
//       alert("saved");
//     });
//     console.warn(allSectionName, "allSectionName+++++++++++________________");
//   };

//   const [infoSection80D, setInfoSection80D] = useState("");

//   const handleChangeIT_DeclarationSection80D = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;
//     setInfoSection80D({ ...infoSection80D, [key]: value });
//   };

//   const [totalDataSection80D, setTotalDataSection80D] = useState("");

//   const totalSumSection80D =
//     (totalDataSection80D.nps || 0) +
//     (totalDataSection80D.mpsc || 0) +
//     (totalDataSection80D.mpp || 0) +
//     (totalDataSection80D.mppsc || 0) +
//     (totalDataSection80D.mth || 0) +
//     (totalDataSection80D.mtc || 0) +
//     (totalDataSection80D.tbpm || 0);

//   // const handleSubmitSection80D = () => {
//   //   const infoSection80DCopy = {
//   //     ...infoSection80D,
//   //     empId: employeeId,
//   //     flag: 1,
//   //   };
//   //   setValue1(true);
//   //   Service.postSection80DDataFirst(infoSection80DCopy).then((response) => {
//   //     Service.getSection80DByEmpId(employeeId).then((response) => {
//   //       setTotalDataSection80D(response?.data?.data);
//   //       setAmountStatus80D(response?.data?.data?.flag || 0);
//   //     });
//   //   });
//   // };

//   const [infoSection80E, setInfoSection80E] = useState("");

//   const handleChangeIT_DeclarationSection80E = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;
//     setInfoSection80E({ ...infoSection80E, [key]: value });
//   };

//   const [totalDataSection80E, setTotalDataSection80E] = useState("");

//   const totalSumSection80E =
//     (totalDataSection80E.loan || 0) +
//     (totalDataSection80E.rent || 0) +
//     (totalDataSection80E.housingLoan || 0);

//   // const handleSubmitSection80E = () => {
//   //   const infoSection80ECopy = {
//   //     ...infoSection80E,
//   //     empId: employeeId,
//   //     flag: 1,
//   //   };
//   //   setValue2(true);
//   //   Service.postSection80EDataFirst(infoSection80ECopy).then((response) => {
//   //     Service.getSection80EByEmpId(employeeId).then((response) => {
//   //       setTotalDataSection80E(response?.data?.data);
//   //       setAmountStatus80E(response?.data?.data?.flag || 0);
//   //     });
//   //   });
//   // };

//   const [declarationValues, setDeclarationValues] = useState();

//   // useEffect(() => {
//   //   setDeclarationValues(
//   //     Object.fromEntries(allSectionName.map((section) => [section.itDecId, ""]))
//   //   );
//   // }, []);

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
//                 {totalAmountSection80c !=0 ? (
//                   <div className="flex flex-col items-center pb-2">
//                     <div className="text-gray-400 text-lg font-semibold">
//                       Declared Amount
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
//                 {amountStatus80D === 1 ? (
//                   <div className="flex flex-col items-center pb-2">
//                     <div className="text-gray-400 text-lg font-semibold">
//                       Declared Amount
//                     </div>
//                     <div className="text-gray-600 text-xl text-gray-400">
//                       {totalSumSection80D}
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
//                 {amountStatus80E === 1 ? (
//                   <div className="flex flex-col items-center pb-2">
//                     <div className="text-gray-400 text-lg font-semibold">
//                       Declared Amount
//                     </div>
//                     <div className="text-gray-600 text-xl text-gray-400">
//                       {totalSumSection80E}
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

//               {/*
//               <div className="grid grid-cols-2">
//                 {allSectionName
//                   ?.filter(
//                     (section) => section.itDecId > 1 && section.itDecId < 4
//                   )
//                   ?.map((section, index) => (
//                     <div
//                       className="md:col-span-1 col-span-2"
//                       key={section.itDecId || index}
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
//                               //value={section.declarationAmount || ""}
//                               // value={declarationValues[section.itDecId] || ""}
//                               onChange={(e) =>
//                                 handleChangeIT_DeclarationSection80(e, index)
//                               }
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div> */}
//             </div>

//             <div className="flex justify-center">
//               <div className="flex mt-16  space-x-10 pb-10">
//                 <div>
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
//                 </div>

//                 <div>
//                   {saveStatusSection80C ? (
//                     ""
//                   ) : (
//                     <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//                       Clear
//                     </button>
//                   )}
//                 </div>
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
//                 <h2 className="text-xl font-gray-700 font-medium">
//                   INR {totalSumSection80D || 0}
//                 </h2>
//               </div>

//               <div className="md:border-r-[1px] md:border-gray-600 bg-blue-900"></div>
//             </div>

//             <div className="grid grid-cols-1">
//               {allSectionName
//                 ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
//                 ?.filter(
//                   (section) => section.itDecId >= 4 && section.itDecId < 6
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

//             {/* <div className="grid grid-cols-1">
//               {allSectionName
//                 ?.filter(
//                   (section) => section.itDecId >= 4 && section.itDecId < 6
//                 ) // Filter sections with itDecId >= 6
//                 .map((section, index) => {
//                   const adjustedIndex = index + 3; // Adjust the index to start from 6
//                   return (
//                     <div
//                       className="md:col-span-1 col-span-2"
//                       key={section.itDecId || adjustedIndex}
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
//                               onChange={(e) =>
//                                 handleChangeIT_DeclarationSection80(
//                                   e,
//                                   adjustedIndex
//                                 )
//                               }
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div> */}

//             <div className="flex justify-center">
//               <div className="flex mt-16  space-x-10 pb-10">
//                 <div>
//                   {value1 ? (
//                     <button className="py-[10px] px-4 bg-red-700 text-white  font-semibold cursor-not-allowed">
//                       Saved
//                     </button>
//                   ) : (
//                     <button
//                       className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                       onClick={handleSubmitSection80D}
//                     >
//                       Save
//                     </button>
//                   )}
//                 </div>

//                 <div>
//                   {value1 ? (
//                     ""
//                   ) : (
//                     <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//                       Clear
//                     </button>
//                   )}
//                 </div>
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
//                   INR {totalSumSection80E || 0}{" "}
//                 </h2>
//               </div>
//               <div className="md:border-r-[1px] md:border-gray-600 bg-blue-900"></div>
//             </div>
//             {/*
//             <div className="grid grid-cols-1">
//               {allSectionName
//                 ?.filter((section) => section.itDecId >= 6) // Filter sections with itDecId >= 6
//                 .map((section, index) => {
//                   const adjustedIndex = index + 5; // Adjust the index to start from 6
//                   return (
//                     <div
//                       className="md:col-span-1 col-span-2"
//                       key={section.itDecId || adjustedIndex}
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
//                               onChange={(e) =>
//                                 handleChangeIT_DeclarationSection80(
//                                   e,
//                                   adjustedIndex
//                                 )
//                               }
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div> */}

//             <div className="grid grid-cols-1">
//               {allSectionName
//                 ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
//                 ?.filter(
//                   (section) => section.itDecId >= 6 && section.itDecId < 10
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
//                 </div>
//               </div>
//             </div>
//           </Box>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default IT_Declaration_Display;

// import { Box, Modal } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { HiOutlineInformationCircle } from "react-icons/hi2";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";
// import { ImCancelCircle } from "react-icons/im";
// import Service from "./Service";
// import useFileStore from "./Zustand";
// import { useStoreFinancialYear } from "./useFileStore";

// function IT_Declaration_Display() {
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

//   const [allSectionName, setAllSectionName] = useState([]);

//   const fetchAllSectionNameInitially = () => {
//     axios
//       .get("http://localhost:8080/it-declaration-master/get-all")
//       .then((res) => {
//         setAllSectionName(res?.data);
//       });
//   };

//   useEffect(() => {
//     fetchAllSectionNameInitially();
//   }, []);

//   const [existingAllSectionName, setExistingAllSectionName] = useState([]);

//   console.warn(existingAllSectionName, "existingAllSectionName************");

//   const handleChangeIT_DeclarationSection80 = (e, itDecId) => {
//     const key = e.target.name;
//     const value = e.target.value;
//     let updatedSections = [];

//     if (empIdAndFinancialYearStatus === false) {
//       // Map through allSectionName to add empId and financialYear
//       updatedSections = allSectionName.map((section) => ({
//         ...section,
//         empId: employeeId,
//         financialYear: submitFinancialYear,
//       }));
//     } else {
//       // Merge existingAllSectionName and allSectionName based on itDecId
//       updatedSections = existingAllSectionName.map((item1) => {
//         const matchingItem = allSectionName.find(
//           (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//         );
//         return matchingItem ? { ...item1, ...matchingItem } : item1;
//       });
//     }

//     console.warn(
//       updatedSections,
//       "updatedSections after merge and before modification"
//     );

//     // Define additional info for all sections
//     const additionalInfo = {
//       taxRegime: regime === "Old Regime" ? 0 : 1,
//     };

//     // Update the specific section based on itDecId
//     updatedSections = updatedSections.map((section) =>
//       section.itDecId === itDecId
//         ? {
//             ...section,
//             ...additionalInfo, // Add additional info
//             [key]: value, // Update the dynamic key-value pair
//           }
//         : section
//     );

//     console.warn(updatedSections, "updatedSections after modification");

//     // Update the state with the modified data
//     setAllSectionName(updatedSections);
//   };

//   console.log(allSectionName, "allSectionName");

//   const [empIdAndFinancialYearStatus, setEmpIdAndFinancialYearStatus] =
//     useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/it-declaration-info/get/2/2024-2025")
//       .then((res) => {
//         setEmpIdAndFinancialYearStatus(true);
//         // Update state with combined data
//         setExistingAllSectionName(res.data);
//       })
//       .catch((error) => {
//         setEmpIdAndFinancialYearStatus(false);
//       });
//   }, [allSectionName]);

//   console.warn(
//     empIdAndFinancialYearStatus,
//     "empIdAndFinancialYearStatus)))))))))))))))"
//   );

//   console.warn(existingAllSectionName, "eeeeeeeeeeeeeeeeeeeeeeeee");

//   // section 80 c
//   const [saveStatusSection80C, setSaveStatusSection80C] = useState();

//   useEffect(() => {
//     getSaveStatus80cFunction();
//   }, []);

//   const getSaveStatus80cFunction = () => {
//     axios
//       .get(
//         "http://localhost:8080/it-declaration-info/get-save-status/2/2024-2025"
//       )
//       .then((res) => setSaveStatusSection80C(res.data))
//       .catch((error) => console.log(error));
//   };

//   const [totalAmountSection80c, setTotalAmountSection80c] = useState(0);
//   const calculateSumFunction = () => {
//     const sum = allSectionName
//       ?.filter((section) => section.itDecId > 1 && section.itDecId < 3)
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
//       });

//     console.log(sum, "sum+++++++++++++++++++++");
//   };

//   // useEffect(() => {
//   //   getTotalAmountSection80c();
//   // }, [totalAmountSection80c]);

//   useEffect(() => {
//     getTotalAmountSection80c();
//   }, []);

//   useEffect(() => {
//     if (totalAmountSection80c) {
//       getTotalAmountSection80c();
//     }
//   }, [totalAmountSection80c]);

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
//         // getTotalAmountSection80c();
//         getSaveStatus80cFunction();
//       });
//   };

//   const handleSubmitSection80C = () => {
//     Service.postSection80CDataFirst(allSectionName).then((response) => {
//       //alert("saved");
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
//         // alert("save status");
//         calculateSumDFunction();
//         getSaveStatus80dFunction();
//       });
//   };

//   const handleSubmitSection80D = () => {
//     Service.postSection80CDataFirst(allSectionName).then((response) => {
//       // alert("saved");
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
//         // alert("save status");
//         calculateSumEFunction();
//         getSaveStatus80eFunction();
//       });
//   };

//   const handleSubmitSection80E = () => {
//     Service.postSection80CDataFirst(allSectionName).then((response) => {
//       // alert("saved");
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
//                     <div className="text-gray-400 text-lg font-semibold">
//                       Declared Amount
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
//                     <div className="text-gray-400 text-lg font-semibold">
//                       Declared Amount
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
//                     <div className="text-gray-400 text-lg font-semibold">
//                       Declared Amount
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
//                 </div>

//                 <div>
//                   {saveStatusSection80C ? (
//                     ""
//                   ) : (
//                     <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//                       Clear
//                     </button>
//                   )}
//                 </div>
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
//                   {saveStatusSection80D ? (
//                     <button className="py-[10px] px-4 bg-red-700 text-white  font-semibold cursor-not-allowed">
//                       Saved
//                     </button>
//                   ) : (
//                     <button
//                       className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//                       onClick={handleSubmitSection80D}
//                     >
//                       Save
//                     </button>
//                   )}
//                 </div>

//                 <div>
//                   {saveStatusSection80D ? (
//                     ""
//                   ) : (
//                     <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
//                       Clear
//                     </button>
//                   )}
//                 </div>
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
//                 </div>
//               </div>
//             </div>
//           </Box>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default IT_Declaration_Display;

import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { ImCancelCircle } from "react-icons/im";
import Service from "./Service";
import useFileStore from "./Zustand";
import { useStoreFinancialYear } from "./useFileStore";

function IT_Declaration_Display() {
  const { regime } = useFileStore();
  const { submitFinancialYear } = useStoreFinancialYear();

  const employeeId = 2;

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(false);
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);

  console.warn(value2, "vvvvvvvvvv");

  const navigate = useNavigate();

  const handleITDecScreenBack = () => {
    navigate("/");
  };

  const handleSelectRegime = () => {
    navigate("/select-regime");
  };

  const [allSectionName, setAllSectionName] = useState([]);

  const fetchAllSectionNameInitially = () => {
    axios
      .get("http://localhost:8080/it-declaration-master/get-all")
      .then((res) => {
        setAllSectionName(res?.data?.data);
      });
  };

  useEffect(() => {
    fetchAllSectionNameInitially();
  }, []);

  const [existingAllSectionName, setExistingAllSectionName] = useState([]);

  console.warn(existingAllSectionName, "existingAllSectionName************");

  const handleChangeIT_DeclarationSection80 = (e, itDecId) => {
    const key = e.target.name;
    const value = e.target.value;
    let updatedSections = [];

    if (empIdAndFinancialYearStatus === false) {
      // Map through allSectionName to add empId and financialYear
      updatedSections = allSectionName.map((section) => ({
        ...section,
        empId: employeeId,
        financialYear: submitFinancialYear,
      }));
    } else {
      // Merge existingAllSectionName and allSectionName based on itDecId
      updatedSections = existingAllSectionName.map((item1) => {
        const matchingItem = allSectionName.find(
          (item2) => Number(item2.itDecId) === Number(item1.itDecId)
        );
        return matchingItem ? { ...item1, ...matchingItem } : item1;
      });
    }

    console.warn(
      updatedSections,
      "updatedSections after merge and before modification"
    );

    // Define additional info for all sections
    const additionalInfo = {
      taxRegime: regime === "Old Regime" ? 0 : 1,
    };

    // Update the specific section based on itDecId
    updatedSections = updatedSections.map((section) =>
      section.itDecId === itDecId
        ? {
            ...section,
            ...additionalInfo, // Add additional info
            [key]: value, // Update the dynamic key-value pair
          }
        : section
    );

    console.warn(updatedSections, "updatedSections after modification");

    // Update the state with the modified data
    setAllSectionName(updatedSections);
  };

  console.log(allSectionName, "allSectionName");

  const [empIdAndFinancialYearStatus, setEmpIdAndFinancialYearStatus] =
    useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/it-declaration-info/get/2/2024-2025")
      .then((res) => {
        setEmpIdAndFinancialYearStatus(true);
        // Update state with combined data
        setExistingAllSectionName(res?.data?.data);
      })
      .catch((error) => {
        setEmpIdAndFinancialYearStatus(false);
      });
  }, [allSectionName]);

  console.warn(
    empIdAndFinancialYearStatus,
    "empIdAndFinancialYearStatus)))))))))))))))"
  );

  console.warn(existingAllSectionName, "eeeeeeeeeeeeeeeeeeeeeeeee");

  // section 80 c
  const [saveStatusSection80C, setSaveStatusSection80C] = useState();

  useEffect(() => {
    getSaveStatus80cFunction();
  }, []);

  const getSaveStatus80cFunction = () => {
    axios
      .get(
        "http://localhost:8080/it-declaration-info/get-save-status/2/2024-2025"
      )
      .then((res) => setSaveStatusSection80C(res?.data?.data))
      .catch((error) => console.log(error));
  };

  const [totalAmountSection80c, setTotalAmountSection80c] = useState(0);
  const calculateSumFunction = () => {
    const sum = allSectionName
      ?.filter((section) => section.itDecId > 1 && section.itDecId < 3)
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
        setTotalAmountSection80c(res?.data?.data?.declarationAmount);
      });

    console.log(sum, "sum+++++++++++++++++++++");
  };

  // useEffect(() => {
  //   getTotalAmountSection80c();
  // }, [totalAmountSection80c]);

  useEffect(() => {
    getTotalAmountSection80c();
  }, []);

  useEffect(() => {
    if (totalAmountSection80c) {
      getTotalAmountSection80c();
    }
  }, [totalAmountSection80c]);

  const getTotalAmountSection80c = () => {
    axios
      .get(
        "http://localhost:8080/it-declaration-info/get-total-amount-80c/2/2024-2025"
      )
      .then((res) => {
        setTotalAmountSection80c(res?.data?.data);
      });
  };

  const setSaveStatus80cFunction = () => {
    axios
      .post("http://localhost:8080/it-declaration-info/save-status/2/2024-2025")
      .then((res) => {
        // alert("save status");
        calculateSumFunction();
        // getTotalAmountSection80c();
        getSaveStatus80cFunction();
      });
  };

  const handleSubmitSection80C = () => {
    Service.postSection80CDataFirst(allSectionName).then((response) => {
      //alert("saved");
      //  setSaveStatusSection80C(true);
      setSaveStatus80cFunction();
    });
    console.warn(allSectionName, "allSectionName+++++++++++________________");
  };

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
      .then((res) => setSaveStatusSection80D(res?.data?.data))
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
        setTotalAmountSection80d(res?.data?.data?.declarationAmount);
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
        setTotalAmountSection80d(res?.data?.data);
      });
  };

  const setSaveStatus80dFunction = () => {
    axios
      .post(
        "http://localhost:8080/it-declaration-info/save-status-80d/2/2024-2025"
      )
      .then((res) => {
        // alert("save status");
        calculateSumDFunction();
        getSaveStatus80dFunction();
      });
  };

  const handleSubmitSection80D = () => {
    Service.postSection80CDataFirst(allSectionName).then((response) => {
      // alert("saved");
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
      .then((res) => setSaveStatusSection80E(res?.data?.data))
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
        setTotalAmountSection80e(res?.data?.data?.declarationAmount);
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
        setTotalAmountSection80e(res?.data?.data);
      });
  };

  const setSaveStatus80eFunction = () => {
    axios
      .post("http://localhost:8080/it-declaration-info/save-status/2/2024-2025")
      .then((res) => {
        // alert("save status");
        calculateSumEFunction();
        getSaveStatus80eFunction();
      });
  };

  const handleSubmitSection80E = () => {
    Service.postSection80CDataFirst(allSectionName).then((response) => {
      // alert("saved");
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
                    <div className="text-gray-400 text-lg font-semibold">
                      Declared Amount
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
                    <div className="text-gray-400 text-lg font-semibold">
                      Declared Amount
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
                    <div className="text-gray-400 text-lg font-semibold">
                      Declared Amount
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
                  {saveStatusSection80C ? (
                    <button className="py-[10px] px-4 bg-red-700 text-white  font-semibold cursor-not-allowed">
                      Saved
                    </button>
                  ) : (
                    <button
                      className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
                      onClick={handleSubmitSection80C}
                    >
                      Save
                    </button>
                  )}
                </div>

                <div>
                  {saveStatusSection80C ? (
                    ""
                  ) : (
                    <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
                      Clear
                    </button>
                  )}
                </div>
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
                ?.sort((a, b) => a.itDecId - b.itDecId)
                ?.filter(
                  (section) => section.itDecId >= 4 && section.itDecId <= 6
                )
                ?.map((section) => (
                  <div
                    className="md:col-span-1 col-span-2"
                    key={section.itDecId}
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
                  {saveStatusSection80D ? (
                    <button className="py-[10px] px-4 bg-red-700 text-white  font-semibold cursor-not-allowed">
                      Saved
                    </button>
                  ) : (
                    <button
                      className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
                      onClick={handleSubmitSection80D}
                    >
                      Save
                    </button>
                  )}
                </div>

                <div>
                  {saveStatusSection80D ? (
                    ""
                  ) : (
                    <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
                      Clear
                    </button>
                  )}
                </div>
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
                ?.sort((a, b) => a.itDecId - b.itDecId)
                ?.filter(
                  (section) => section.itDecId > 7 && section.itDecId < 10
                )
                ?.map((section) => (
                  <div
                    className="md:col-span-1 col-span-2"
                    key={section.itDecId}
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
                  {value2 ? (
                    <button className="py-[10px] px-4 bg-red-700 text-white  font-semibold cursor-not-allowed">
                      Saved
                    </button>
                  ) : (
                    <button
                      className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
                      onClick={handleSubmitSection80E}
                    >
                      Save
                    </button>
                  )}
                </div>

                <div>
                  {value2 ? (
                    ""
                  ) : (
                    <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default IT_Declaration_Display;
