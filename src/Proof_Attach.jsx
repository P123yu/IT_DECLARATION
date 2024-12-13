// import { Box, Modal } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { BiComment } from "react-icons/bi";
// import { BsCheck2Circle } from "react-icons/bs";
// import { FaArrowLeft } from "react-icons/fa";
// import { ImAttachment, ImCancelCircle } from "react-icons/im";
// import { TbCircleCheckFilled } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";
// import { useLocalStorage, useSessionStorage } from "react-use";
// import Attachment from "./Attachment";
// import Service from "./Service";
// import { useFileStore, useStore } from "./useFileStore";

// function Proof_Attach() {
//   const employeeId = 2;
//   const navigate = useNavigate();

//   const [proofSubmitStatus, setProofSubmitStatus] = useLocalStorage(
//     "proof_submit_status",
//     "false"
//   );

//   const [fileStatus, setFileStatus] = useSessionStorage("file-status", "false");

//   const { setSubmitFileStatus } = useStore();

//   const { regime } = useFileStore();

//   const files = useFileStore((state) => state.files);

//   const [open, setOpen] = useState(false);

//   const [message, setMessage] = useState(false);
//   const handleMessage = () => {
//     window.scrollTo(0, 0);
//     setMessage(true);
//   };

//   const handleProofOfInvestmentScreenBack = () => {
//     navigate("/");
//   };

//   const [openCommentIndex, setOpenCommentIndex] = useState(null);

//   const [openAttachIndex, setOpenAttachIndex] = useState(null);

//   const [indexInfo, setIndexInfo] = useState(0);
//   const handleCommentClick = (index) => {
//     setOpenCommentIndex(openCommentIndex === index ? null : index);
//   };

//   const handleAttachClick = (index) => {
//     setIndexInfo(index);
//     setOpenAttachIndex(openAttachIndex === index ? null : index);
//   };

//   // useEffect(() => {
//   //   useFileStore.getState().clearFiles();
//   // }, [indexInfo]);

//   // useEffect(() => {
//   //   setOpenAttachIndex(null);
//   // }, [openAttachIndex]);

//   // Function to remove a file
//   // const handleRemoveFile = (index) => {
//   //   useFileStore.getState().removeFile(index);
//   // };

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
//       setNetData80C(res?.data?.data);
//     });
//   };

//   const getTotalSection80D = () => {
//     Service.getSection80DByEmpId(employeeId).then((res) => {
//       setNetData80D(res?.data?.data);
//     });
//   };

//   const getTotalSection80E = () => {
//     Service.getSection80EByEmpId(employeeId).then((res) => {
//       setNetData80E(res?.data?.data);
//     });
//   };

//   const [actual80c, setActual80c] = useState("");
//   const [actual80d, setActual80d] = useState("");
//   const [actual80e, setActual80e] = useState("");

//   useEffect(() => {
//     handleDisplayActual80c();
//     handleDisplayActual80d();
//     handleDisplayActual80e();
//   }, []);

//   const handleDisplayActual80c = () => {
//     Service.getSection80CActualValue(employeeId).then((res) => {
//       setActual80c(res?.data?.data);
//     });
//   };

//   const handleDisplayActual80d = () => {
//     Service.getSection80DActualValue(employeeId).then((res) => {
//       setActual80d(res?.data?.data);
//     });
//   };

//   const handleDisplayActual80e = () => {
//     Service.getSection80EActualValue(employeeId).then((res) => {
//       setActual80e(res?.data?.data);
//     });
//   };

//   const handleNavigateProof = () => {
//     navigate("/proof_of_investment_update");
//   };

//   const [toggle, setToggle] = useState(false);
//   const openComment = () => {
//     setToggle(!toggle);
//   };

//   const handleSubmitButton = () => {
//     setProofSubmitStatus("true");
//     navigate("/proof_of_investment_edit");
//   };

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 800,
//     bgcolor: "white",
//     border: "2px solid #000",
//     boxShadow: 25,
//     p: 2,
//     height: 300,
//     "@media (max-width: 768px)": {
//       width: "90%", // Adjusted width for screens below the 'md' breakpoint
//     },

//     // const handleSubmit = () => {
//     //   const formData = new FormData();
//     //   for (let i = 0; i < files.length; i++) {
//     //     formData.append("files", files[i].file); // Append the file data, not the file object itself
//     //   }

//     //   console.log(formData);

//     //   axios
//     //     .post("http://localhost:8080/files/upload", formData)
//     //     .then((res) => console.log("inserted"))
//     //     .catch((error) => console.error("Error inserting:", error));
//     // };
//   };

//   return (
//     <div className="px-4">
//       <div className="flex space-x-10 items-center px-4 mb-2 mt-7">
//         <div className="text-gray-400 text-xl ml-4 cursor-pointer">
//           <FaArrowLeft onClick={handleProofOfInvestmentScreenBack} />
//         </div>
//         <div className="text-gray-700 font-semibold text-xl ">
//           Proof of Investments
//         </div>

//         {message && (
//           <div className="flex text-yellow-500 items-center space-x-5  font-semibold ml-96">
//             <BsCheck2Circle className="text-4xl" />
//             <h2 className="text-xl">
//               Your Proof of investment details have been saved successfully
//             </h2>
//           </div>
//         )}
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
//         <div className="col-span-10 ">
//           <div className="flex justify-between px-2 font-semibold mt-5 mb-5">
//             <div className="text-xl ">Declaration Summary</div>
//             <div className="text-gray-600 ml-11 text-xl">
//               Financial Year: <span className="text-black">2024-2025</span>
//             </div>
//           </div>

//           <div className="border-[1px] border-gray-400 mt-0 pl-5">
//             <div className="flex space-x-[400px] text-md font-semibold bg-gray-100 pt-2 pb-4">
//               <div>Particulars</div>
//               <div className="flex space-x-10 items-center ">
//                 <h2>Declared Amount</h2>
//                 <h2>Actual Amount</h2>
//                 <h2>Proofs</h2>
//                 <h2>Comments</h2>
//               </div>
//             </div>

//             <h1 className="text-lg font-semibold text-gray-700 mt-4">
//               Deduction under section 80 C
//             </h1>

//             <div>
//               <div>
//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6 my-2">
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
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.cpf}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(0)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[40px]">
//                     {openAttachIndex === 0 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(0)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[40px] ">
//                     {openCommentIndex === 0 && (
//                       <textarea
//                         placeholder="Write your comment1..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Life Insurance Premium
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.lip}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.lip}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(1)}
//                     />
//                   </div>

//                   <div className="absolute ml-[1080px] mt-[20px] ">
//                     {openAttachIndex === 1 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(1)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[20px] ">
//                     {openCommentIndex === 1 && (
//                       <textarea
//                         placeholder="Write your comment2..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Public Provident Fund
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.ppf}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.ppf}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(2)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[60px] ">
//                     {openAttachIndex === 2 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(2)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[60px] ">
//                     {openCommentIndex === 2 && (
//                       <textarea
//                         placeholder="Write your comment3..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">ULIP</h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.ulip}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.ulip}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(3)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[120px] ">
//                     {openAttachIndex === 3 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(3)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[120px] ">
//                     {openCommentIndex === 3 && (
//                       <textarea
//                         placeholder="Write your comment4..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       VIII Issue of NSC
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.ion}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.ion}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(4)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[160px] ">
//                     {openAttachIndex === 4 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(4)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[160px] ">
//                     {openCommentIndex === 4 && (
//                       <textarea
//                         placeholder="Write your comment5..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5 font-semibold text-gray-700">
//                       National Savings Scheme
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.nss}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.nss}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(5)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[200px] ">
//                     {openAttachIndex === 5 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(5)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[200px] ">
//                     {openCommentIndex === 5 && (
//                       <textarea
//                         placeholder="Write your comment6..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Repayment of housing Loan Principle
//                       <span className="text-gray-500">
//                         (Max. Rs. 1,50,000 /-)
//                       </span>
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.hlp}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1 ">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.hlp}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(6)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[240px] ">
//                     {openAttachIndex === 6 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(6)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[240px] ">
//                     {openCommentIndex === 6 && (
//                       <textarea
//                         placeholder="Write your comment7..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Fixed Deposit Savings for 5 years
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.fds}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.fds}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(7)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[300px] ">
//                     {openAttachIndex === 7 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(7)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[300px] ">
//                     {openCommentIndex === 7 && (
//                       <textarea
//                         placeholder="Write your comment8..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
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
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.lss}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(8)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[340px] ">
//                     {openAttachIndex === 8 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(8)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[340px] ">
//                     {openCommentIndex === 8 && (
//                       <textarea
//                         placeholder="Write your comment9..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Children's Education Expenses
//                       <span className="text-gray-500">
//                         (Max. Rs. 1,50,000 /-)
//                       </span>{" "}
//                       <br></br>
//                       Restricted to Two Children
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.cee}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.cee}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(9)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[380px] ">
//                     {openAttachIndex === 9 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(9)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[380px] ">
//                     {openCommentIndex === 9 && (
//                       <textarea
//                         placeholder="Write your comment10..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Deposite in Sukanya Samriddhi Scheme
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.dsss}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.dsss}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(10)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[460px] ">
//                     {openAttachIndex === 10 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(10)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[460px] ">
//                     {openCommentIndex === 10 && (
//                       <textarea
//                         placeholder="Write your comment11..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <h2 className="text-lg font-semibold text-gray-700 mt-4">
//                   Deduction under section 80 CCD
//                 </h2>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6 ml-5">
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

//                   <div className="col-span-2">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.nps}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(11)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[30px] ">
//                     {openAttachIndex === 11 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(11)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[30px] ">
//                     {openCommentIndex === 11 && (
//                       <textarea
//                         placeholder="Write your comment12..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <h2 className="text-lg font-semibold text-gray-700 mt-4">
//                   Deduction under section 80 D - Medicliam Policy (Excluding
//                   Through CMS)
//                 </h2>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6 ml-5">
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

//                   <div className="col-span-2">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.mpsc}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(12)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[20px] ">
//                     {openAttachIndex === 12 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(12)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[20px] ">
//                     {openCommentIndex === 12 && (
//                       <textarea
//                         placeholder="Write your comment13..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>

//                   <div className="col-span-6 ml-5">
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

//                   <div className="col-span-2">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.mpp}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(13)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[60px] ">
//                     {openAttachIndex === 13 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(13)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[60px] ">
//                     {openCommentIndex === 13 && (
//                       <textarea
//                         placeholder="Write your comment14..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>

//                   <div className="col-span-6 ml-5">
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

//                   <div className="col-span-2">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.mppsc}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(14)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[130px] ">
//                     {openAttachIndex === 14 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(14)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[130px] ">
//                     {openCommentIndex === 14 && (
//                       <textarea
//                         placeholder="Write your comment15..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6">
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

//                   <div className="col-span-2 mt-10 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80D?.mth}
//                   </div>

//                   <div className="col-span-2 mt-12">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.mth}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800 mt-12">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(15)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openAttachIndex === 15 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800 mt-12">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(15)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openCommentIndex === 15 && (
//                       <textarea
//                         placeholder="Write your comment16..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6">
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

//                   <div className="col-span-2 mt-10">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.mtc}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800 mt-12">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(16)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openAttachIndex === 16 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800 mt-12">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(16)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openCommentIndex === 16 && (
//                       <textarea
//                         placeholder="Write your comment17..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6">
//                     <h2 className="text-lg text-gray-800 py-3 font-medium">
//                       Deduction in respect of Totally Blind Physically
//                       handicapped or mentally retarded person [Sec. 80U] max Rs.
//                       75,000 /-
//                     </h2>
//                     <div className="font-semibold text-gray-700">
//                       <h2 className="ml-5">
//                         Yes / No (if yes please enclose the certificate)
//                       </h2>
//                     </div>
//                   </div>

//                   <div className="col-span-2 py-4 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80D?.tbpm}
//                   </div>

//                   <div className="col-span-2 mt-12">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.tbpm}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800 mt-12">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(17)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openAttachIndex === 17 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800 mt-12">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(17)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openCommentIndex === 17 && (
//                       <textarea
//                         placeholder="Write your comment18..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6">
//                     <h2 className="text-lg text-gray-800 pt-3 font-medium">
//                       Deduction in respect of repayment of Loan "Only interest
//                       on Loan" Taken for Higher Eduction [Sec. 80E]
//                     </h2>
//                   </div>

//                   <div className="col-span-2 mt-10 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80E?.loan}
//                   </div>

//                   <div className="col-span-2 mt-10">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80e?.loan}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800 mt-10">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(18)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openAttachIndex === 18 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800 mt-10">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(18)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openCommentIndex === 18 && (
//                       <textarea
//                         placeholder="Write your comment19..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6">
//                     <h2 className="text-lg text-gray-800 pt-3 font-medium">
//                       House Rent Exemption unser Section 10 (13A) <br></br>
//                     </h2>
//                     <div className="font-semibold text-gray-700 ">
//                       <h2 className="ml-5">Rent payable per month</h2>
//                     </div>
//                   </div>

//                   <div className="col-span-2 mt-10 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80E?.rent}
//                   </div>

//                   <div className="col-span-2 mt-10">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80e?.rent}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800 mt-10">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(19)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openAttachIndex === 19 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800 mt-10">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(19)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openCommentIndex === 19 && (
//                       <textarea
//                         placeholder="Write your comment20..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6">
//                     <h2 className="text-lg text-gray-800 py-3 font-medium">
//                       Interest paid on housingloan from approved Financial
//                       Institution
//                     </h2>
//                   </div>

//                   <div className="col-span-2 mt-5 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80E?.housingLoan}
//                   </div>

//                   <div className="col-span-2 mt-5">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80e?.housingLoan}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800 mt-5">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(20)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[10px] ">
//                     {openAttachIndex === 20 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800 mt-5">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(20)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[10px]">
//                     {openCommentIndex === 20 && (
//                       <textarea
//                         placeholder="Write your comment21..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {proofSubmitStatus === "false" ? (
//         <div className="flex space-x-20 items-center ml-[1000px] mt-10 pb-10">
//           <button
//             className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//             onClick={() => {
//               handleNavigateProof();
//               setOpen(true);
//               handleMessage();
//               setSubmitFileStatus("true");
//             }}
//           >
//             Submit
//           </button>
//         </div>
//       ) : (
//         ""
//       )}

//       {open === true && (
//         <div>
//           <Modal open={open} onClose={() => setOpen(false)}>
//             <Box sx={style}>
//               <div
//                 onClick={() => setOpen(false)}
//                 style={{
//                   cursor: "pointer",
//                   fontSize: "30px",
//                   backgroundColor: "blue",
//                 }}
//               >
//                 <ImCancelCircle className="float-end" />
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   gap: 120,
//                   alignItems: "center",
//                   marginTop: "80px",
//                 }}
//               >
//                 <h3 className="text-xl font-semibold text-gray-800 md:ml-[170px] ml-40px md:px-0 px-4">
//                   Are you sure you want to submit POI ?
//                 </h3>
//               </div>
//               <h2 sx={{ mt: 8 }} className="space-x-10 text-center mt-10">
//                 <button
//                   className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2"
//                   onClick={handleSubmitButton}
//                 >
//                   Submit
//                 </button>
//                 <button
//                   className="bg-blue-800 px-4 py-2 text-white font-medium tracking-wide"
//                   onClick={() => setOpen(false)}
//                 >
//                   Cancel
//                 </button>
//               </h2>
//             </Box>
//           </Modal>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Proof_Attach;

// import { Box, Modal } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { BiComment } from "react-icons/bi";
// import { BsCheck2Circle } from "react-icons/bs";
// import { FaArrowLeft } from "react-icons/fa";
// import { ImAttachment, ImCancelCircle } from "react-icons/im";
// import { TbCircleCheckFilled } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";
// import { useLocalStorage, useSessionStorage } from "react-use";
// import Attachment from "./Attachment";
// import { useFileStore, useStore } from "./useFileStore";

// function Proof_Attach() {
//   const employeeId = 2;
//   const navigate = useNavigate();

//   const [proofSubmitStatus, setProofSubmitStatus] = useLocalStorage(
//     "proof_submit_status",
//     "false"
//   );

//   const [fileStatus, setFileStatus] = useSessionStorage("file-status", "false");

//   const { setSubmitFileStatus } = useStore();

//   const { regime } = useFileStore();

//   const files = useFileStore((state) => state.files);

//   const [open, setOpen] = useState(false);

//   const [message, setMessage] = useState(false);
//   const handleMessage = () => {
//     window.scrollTo(0, 0);
//     setMessage(true);
//   };

//   const handleProofOfInvestmentScreenBack = () => {
//     navigate("/");
//   };

//   const [openCommentIndex, setOpenCommentIndex] = useState(null);

//   const [openAttachIndex, setOpenAttachIndex] = useState(null);

//   const [indexInfo, setIndexInfo] = useState(0);
//   const handleCommentClick = (itDecId) => {
//     setOpenCommentIndex(openCommentIndex === itDecId ? null : itDecId);
//   };

//   const handleAttachClick = (itDecId) => {
//     setIndexInfo(itDecId);
//     setOpenAttachIndex(openAttachIndex === itDecId ? null : itDecId);
//   };

//   // useEffect(() => {
//   //   useFileStore.getState().clearFiles();
//   // }, [indexInfo]);

//   // useEffect(() => {
//   //   setOpenAttachIndex(null);
//   // }, [openAttachIndex]);

//   // Function to remove a file
//   // const handleRemoveFile = (index) => {
//   //   useFileStore.getState().removeFile(index);
//   // };

//   // const [netData80C, setNetData80C] = useState("");
//   // const [netData80D, setNetData80D] = useState("");
//   // const [netData80E, setNetData80E] = useState("");

//   // useEffect(() => {
//   //   getTotalSection80C();
//   //   getTotalSection80D();
//   //   getTotalSection80E();
//   // }, []);

//   // const getTotalSection80C = () => {
//   //   Service.getSection80CByEmpId(employeeId).then((res) => {
//   //     setNetData80C(res?.data?.data);
//   //   });
//   // };

//   // const getTotalSection80D = () => {
//   //   Service.getSection80DByEmpId(employeeId).then((res) => {
//   //     setNetData80D(res?.data?.data);
//   //   });
//   // };

//   // const getTotalSection80E = () => {
//   //   Service.getSection80EByEmpId(employeeId).then((res) => {
//   //     setNetData80E(res?.data?.data);
//   //   });
//   // };

//   // const [actual80c, setActual80c] = useState("");
//   // const [actual80d, setActual80d] = useState("");
//   // const [actual80e, setActual80e] = useState("");

//   // useEffect(() => {
//   //   handleDisplayActual80c();
//   //   handleDisplayActual80d();
//   //   handleDisplayActual80e();
//   // }, []);

//   // const handleDisplayActual80c = () => {
//   //   Service.getSection80CActualValue(employeeId).then((res) => {
//   //     setActual80c(res?.data?.data);
//   //   });
//   // };

//   // const handleDisplayActual80d = () => {
//   //   Service.getSection80DActualValue(employeeId).then((res) => {
//   //     setActual80d(res?.data?.data);
//   //   });
//   // };

//   // const handleDisplayActual80e = () => {
//   //   Service.getSection80EActualValue(employeeId).then((res) => {
//   //     setActual80e(res?.data?.data);
//   //   });
//   // };

//   // const handleNavigateProof = () => {
//   //   navigate("/proof_of_investment_update");
//   // };

//   // const [toggle, setToggle] = useState(false);
//   // const openComment = () => {
//   //   setToggle(!toggle);
//   // };

//   // const handleSubmitButton = () => {
//   //   //setProofSubmitStatus("true");
//   //   navigate("/proof-of-investment-edit");
//   // };

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 800,
//     bgcolor: "white",
//     border: "2px solid #000",
//     boxShadow: 25,
//     p: 2,
//     height: 300,
//     "@media (max-width: 768px)": {
//       width: "90%", // Adjusted width for screens below the 'md' breakpoint
//     },

//     // const handleSubmit = () => {
//     //   const formData = new FormData();
//     //   for (let i = 0; i < files.length; i++) {
//     //     formData.append("files", files[i].file); // Append the file data, not the file object itself
//     //   }

//     //   console.log(formData);

//     //   axios
//     //     .post("http://localhost:8080/files/upload", formData)
//     //     .then((res) => console.log("inserted"))
//     //     .catch((error) => console.error("Error inserting:", error));
//     // };
//   };

//   // const [info, setInfo] = useState([]);
//   // const [master, setMaster] = useState([]);
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

//   // // Update allSectionName whenever info or master changes
//   // useEffect(() => {
//   //   const combinedData = info.map((item1) => {
//   //     const matchingItem = master.find(
//   //       (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//   //     );
//   //     return matchingItem ? { ...item1, ...matchingItem } : item1;
//   //   });
//   //   setAllSectionName(combinedData);
//   // }, [info, master]);

//   // const [allSectionNames, setAllSectionNames] = useState([]);

//   // ===================================================================================

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

//   useEffect(() => {
//     getStatusForProofOfInvestmentFunction();
//   }, []);

//   const handleSaveProofOfInvestment = () => {
//     setAllSectionDataProofOfInvestmentFunction();
//     setStatusForProofOfInvestmentFunction();
//     getStatusForProofOfInvestmentFunction();
//   };

//   const setAllSectionDataProofOfInvestmentFunction = () => {
//     axios
//       .post("http://localhost:8080/proof-of-investment/add", allSectionName)
//       .then((res) => {
//         alert("saved");
//       });
//   };

//   const setStatusForProofOfInvestmentFunction = () => {
//     axios
//       .get(
//         "http://localhost:8080/proof-of-investment/set-status-proof/2/2024-2025"
//       )
//       .then((res) => {
//         alert("status saved");
//       });
//   };

//   // const [proofSaveStatus, setProofSaveStatus] = useState(false);

//   // useEffect(() => {
//   //   navigate("/proof-of-investment-update");
//   // }, [proofSaveStatus === true]);

//   const getStatusForProofOfInvestmentFunction = () => {
//     axios
//       .get(
//         "http://localhost:8080/proof-of-investment/get-status-proof/2/2024-2025"
//       )
//       .then((res) => {
//         setProofSaveStatus(res?.data);
//       });
//   };

//   const [allDataProofOfInvestment, setAllDataProofOfInvestment] = useState([]);
//   useEffect(() => {
//     axios
//       .get(
//         "http://localhost:8080/proof-of-investment/get-all-proof/2/2024-2025"
//       )
//       .then((res) => {
//         setAllDataProofOfInvestment(res.data);
//       });
//   }, []);

//   const [overAllData, setOverAllData] = useState([]);

//   useEffect(() => {
//     const updatedSections = allDataProofOfInvestment.map((item1) => {
//       const matchingItem = allSectionName.find(
//         (item2) => Number(item2.itDecId) === Number(item1.itDecId)
//       );
//       return matchingItem ? { ...item1, ...matchingItem } : item1;
//     });

//     setAllSectionName(updatedSections);
//   }, [allDataProofOfInvestment]);

//   console.warn(overAllData, "overAllData++++****************");

//   console.warn(
//     allDataProofOfInvestment,
//     "allDataProofOfInvestment============================>>>>>>>>>>>>>"
//   );

//   const handleSubmitFunction = () => {
//     setSubmitStatusForProofOfInvestment();
//     //getSubmitStatusForProofOfInvestment();
//   };

//   const setSubmitStatusForProofOfInvestment = () => {
//     axios
//       .get(
//         "http://localhost:8080/proof-of-investment/set-submit-status-proof/2/2024-2025/true"
//       )
//       .then((res) => {
//         getSubmitStatusForProofOfInvestment();
//         // navigate("/proof-of-investment-edit");
//       });
//   };

//   const [proofOfInvestmentSubmitStatus, setProofOfInvestmentSubmitStatus] =
//     useState(false);
//   const getSubmitStatusForProofOfInvestment = () => {
//     axios
//       .get(
//         "http://localhost:8080/proof-of-investment/get-submit-status-proof/2/2024-2025"
//       )
//       .then((res) => {
//         console.warn(
//           "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
//         );
//         console.log(res, "res.....===================+++++++++++++++++++");
//         setProofOfInvestmentSubmitStatus(res?.data);
//         navigate("/proof-of-investment-edit");
//       });
//   };

//   useEffect(() => {
//     getSubmitStatusForProofOfInvestment();
//   }, []);

//   console.warn(
//     proofOfInvestmentSubmitStatus,
//     "proofOfInvestmentSubmitStatus+++++++++==================<<<<<<<<<<"
//   );

//   return (
//     <div className="">
//       <div className="flex space-x-10 items-center px-4 mb-2 mt-7">
//         <div className="text-gray-400 text-xl ml-4 cursor-pointer">
//           <FaArrowLeft onClick={handleProofOfInvestmentScreenBack} />
//         </div>
//         <div className="text-gray-700 font-semibold text-xl ">
//           Proof of Investments
//         </div>

//         {message && (
//           <div className="flex text-yellow-500 items-center space-x-5  font-semibold ml-96">
//             <BsCheck2Circle className="text-4xl" />
//             <h2 className="text-xl">
//               Your Proof of investment details have been saved successfully
//             </h2>
//           </div>
//         )}
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
//         <div className="col-span-10 ">
//           <div className="flex justify-between px-2 font-semibold mt-5 mb-5">
//             <div className="text-xl ">Declaration Summary</div>
//             <div className="text-gray-600 ml-11 text-xl">
//               Financial Year: <span className="text-black">2024-2025</span>
//             </div>
//           </div>

//           <div className="border-[1px] border-gray-400 rounded-md mt-5 shadow-xl">
//             <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
//               <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
//                 Deduction under section 80 C
//               </h2>
//               {/* <img
//                   className="h-12 w-12 ml-[75px] mt-5 mb-3"
//                   src="./src/assets/Medical.jpg"
//                 /> */}
//             </div>
//             <div className="grid grid-cols-12  p-5">
//               {allSectionName
//                 ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
//                 ?.filter(
//                   (section) => section.itDecId >= 1 && section.itDecId <= 3
//                 )
//                 ?.map((section) => (
//                   <div
//                     className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
//                     key={section.itDecId}
//                   >
//                     <div className="col-span-7 break-words whitespace-normal ">
//                       <label className="font-medium text-gray-600 text-lg">
//                         {section.declarationName}
//                       </label>
//                       {section.additionalInformation && (
//                         <p className="text-gray-500 ">
//                           {section.additionalInformation}
//                         </p>
//                       )}
//                     </div>
//                     <h2 className="text-gray-500 font-semibold">
//                       {section?.declarationAmount}
//                     </h2>

//                     {/* <div className="col-span-1"></div> */}

//                     <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
//                       <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
//                         INR
//                       </div>
//                       <input
//                         type="number"
//                         className="w-[88px] px-2 text-gray-500 outline-none"
//                         value={section?.revisedAmount}
//                         // name="revisedAmount"
//                         // onChange={(e) =>
//                         //   handleChangeProofOfInvestment(
//                         //     section.itDecId,
//                         //     e.target.value
//                         //   )
//                         // }
//                       />
//                     </div>
//                     <div className="col-span-1 text-blue-800">
//                       <ImAttachment
//                         className="cursor-pointer"
//                         onClick={() => handleAttachClick(section.itDecId)}
//                       />
//                     </div>

//                     <div className="col-span-1 text-blue-800">
//                       <BiComment
//                         className="cursor-pointer"
//                         onClick={() => handleCommentClick(section.itDecId)}
//                       />
//                     </div>

//                     <div
//                       className={`absolute ${
//                         openAttachIndex === section.itDecId
//                           ? "ml-[1080px] -mt-[40px]"
//                           : ""
//                       }`}
//                     >
//                       {openAttachIndex === section.itDecId && <Attachment />}
//                     </div>

//                     <div
//                       className={`absolute ${
//                         openCommentIndex === section.itDecId
//                           ? "ml-[1120px] -mt-[40px]"
//                           : ""
//                       }`}
//                     >
//                       {openCommentIndex === section.itDecId && (
//                         <textarea
//                           placeholder="Write your comment21..."
//                           rows={4}
//                           cols={25}
//                           className="border-[1px] border-black outline-none"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 ))}
//             </div>

//             <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
//               <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
//                 Section 80D/80DD/80DDB/80U
//               </h2>
//               {/* <img
//                   className="h-12 w-12 ml-[75px] mt-5 mb-3"
//                   src="./src/assets/Medical.jpg"
//                 /> */}
//             </div>
//             <div className="grid grid-cols-12  p-5">
//               {allSectionName
//                 ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
//                 ?.filter(
//                   (section) => section.itDecId >= 4 && section.itDecId <= 6
//                 )
//                 ?.map((section) => (
//                   <div
//                     className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
//                     key={section.itDecId}
//                   >
//                     <div className="col-span-7 break-words whitespace-normal ">
//                       <label className="font-medium text-gray-600 text-lg">
//                         {section.declarationName}
//                       </label>
//                       {section.additionalInformation && (
//                         <p className="text-gray-500 ">
//                           {section.additionalInformation}
//                         </p>
//                       )}
//                     </div>
//                     <h2 className="text-gray-500 font-semibold">
//                       {section?.declarationAmount}
//                     </h2>

//                     {/* <div className="col-span-1"></div> */}

//                     <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
//                       <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
//                         INR
//                       </div>
//                       <input
//                         type="number"
//                         className="w-[88px] px-2 text-gray-500 outline-none"
//                         value={section?.revisedAmount}
//                         // name="revisedAmount"
//                         // onChange={(e) =>
//                         //   handleChangeProofOfInvestment(
//                         //     section.itDecId,
//                         //     e.target.value
//                         //   )
//                         // }
//                       />
//                     </div>
//                     <div className="col-span-1 text-blue-800">
//                       <ImAttachment
//                         className="cursor-pointer"
//                         onClick={() => handleAttachClick(section.itDecId)}
//                       />
//                     </div>

//                     <div className="col-span-1 text-blue-800">
//                       <BiComment
//                         className="cursor-pointer"
//                         onClick={() => handleCommentClick(section.itDecId)}
//                       />
//                     </div>

//                     <div
//                       className={`absolute ${
//                         openAttachIndex === section.itDecId
//                           ? "ml-[1080px] -mt-[40px]"
//                           : ""
//                       }`}
//                     >
//                       {openAttachIndex === section.itDecId && <Attachment />}
//                     </div>

//                     <div
//                       className={`absolute ${
//                         openCommentIndex === section.itDecId
//                           ? "ml-[1120px] -mt-[40px]"
//                           : ""
//                       }`}
//                     >
//                       {openCommentIndex === section.itDecId && (
//                         <textarea
//                           placeholder="Write your comment21..."
//                           rows={4}
//                           cols={25}
//                           className="border-[1px] border-black outline-none"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 ))}
//             </div>

//             <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
//               <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
//                 Section 80E/10/Housing Loan
//               </h2>
//             </div>
//             <div className="grid grid-cols-12  p-5">
//               {allSectionName
//                 ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
//                 ?.filter(
//                   (section) => section.itDecId >= 6 && section.itDecId <= 10
//                 )
//                 ?.map((section) => (
//                   <div
//                     className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
//                     key={section.itDecId}
//                   >
//                     <div className="col-span-7 break-words whitespace-normal ">
//                       <label className="font-medium text-gray-600 text-lg">
//                         {section.declarationName}
//                       </label>
//                       {section.additionalInformation && (
//                         <p className="text-gray-500 ">
//                           {section.additionalInformation}
//                         </p>
//                       )}
//                     </div>
//                     <h2 className="text-gray-500 font-semibold">
//                       {section?.declarationAmount}
//                     </h2>

//                     {/* <div className="col-span-1"></div> */}

//                     <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
//                       <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
//                         INR
//                       </div>
//                       <input
//                         type="number"
//                         className="w-[88px] px-2 text-gray-500 outline-none"
//                         value={section?.revisedAmount}
//                         // name="revisedAmount"
//                         // onChange={(e) =>
//                         //   handleChangeProofOfInvestment(
//                         //     section.itDecId,
//                         //     e.target.value
//                         //   )
//                         // }
//                       />
//                     </div>
//                     <div className="col-span-1 text-blue-800">
//                       <ImAttachment
//                         className="cursor-pointer"
//                         onClick={() => handleAttachClick(section.itDecId)}
//                       />
//                     </div>

//                     <div className="col-span-1 text-blue-800">
//                       <BiComment
//                         className="cursor-pointer"
//                         onClick={() => handleCommentClick(section.itDecId)}
//                       />
//                     </div>

//                     <div
//                       className={`absolute ${
//                         openAttachIndex === section.itDecId
//                           ? "ml-[1080px] -mt-[40px]"
//                           : ""
//                       }`}
//                     >
//                       {openAttachIndex === section.itDecId && <Attachment />}
//                     </div>

//                     <div
//                       className={`absolute ${
//                         openCommentIndex === section.itDecId
//                           ? "ml-[1120px] -mt-[40px]"
//                           : ""
//                       }`}
//                     >
//                       {openCommentIndex === section.itDecId && (
//                         <textarea
//                           placeholder="Write your comment21..."
//                           rows={4}
//                           cols={25}
//                           className="border-[1px] border-black outline-none"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>

//           {/* <div className="border-[1px] border-gray-400 mt-0 pl-5">
//             <div className="flex space-x-[400px] text-md font-semibold bg-gray-100 pt-2 pb-4">
//               <div>Particulars</div>
//               <div className="flex space-x-10 items-center ">
//                 <h2>Declared Amount</h2>
//                 <h2>Actual Amount</h2>
//                 <h2>Proofs</h2>
//                 <h2>Comments</h2>
//               </div>
//             </div>

//             <h1 className="text-lg font-semibold text-gray-700 mt-4">
//               Deduction under section 80 C
//             </h1>

//             <div>
//               <div>
//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6 my-2">
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
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.cpf}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(0)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[40px]">
//                     {openAttachIndex === 0 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(0)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[40px] ">
//                     {openCommentIndex === 0 && (
//                       <textarea
//                         placeholder="Write your comment1..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Life Insurance Premium
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.lip}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.lip}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(1)}
//                     />
//                   </div>

//                   <div className="absolute ml-[1080px] mt-[20px] ">
//                     {openAttachIndex === 1 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(1)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[20px] ">
//                     {openCommentIndex === 1 && (
//                       <textarea
//                         placeholder="Write your comment2..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Public Provident Fund
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.ppf}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.ppf}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(2)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[60px] ">
//                     {openAttachIndex === 2 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(2)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[60px] ">
//                     {openCommentIndex === 2 && (
//                       <textarea
//                         placeholder="Write your comment3..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">ULIP</h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.ulip}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.ulip}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(3)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[120px] ">
//                     {openAttachIndex === 3 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(3)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[120px] ">
//                     {openCommentIndex === 3 && (
//                       <textarea
//                         placeholder="Write your comment4..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       VIII Issue of NSC
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.ion}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.ion}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(4)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[160px] ">
//                     {openAttachIndex === 4 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(4)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[160px] ">
//                     {openCommentIndex === 4 && (
//                       <textarea
//                         placeholder="Write your comment5..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5 font-semibold text-gray-700">
//                       National Savings Scheme
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.nss}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.nss}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(5)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[200px] ">
//                     {openAttachIndex === 5 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(5)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[200px] ">
//                     {openCommentIndex === 5 && (
//                       <textarea
//                         placeholder="Write your comment6..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Repayment of housing Loan Principle
//                       <span className="text-gray-500">
//                         (Max. Rs. 1,50,000 /-)
//                       </span>
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.hlp}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1 ">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.hlp}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(6)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[240px] ">
//                     {openAttachIndex === 6 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(6)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[240px] ">
//                     {openCommentIndex === 6 && (
//                       <textarea
//                         placeholder="Write your comment7..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Fixed Deposit Savings for 5 years
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.fds}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.fds}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(7)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[300px] ">
//                     {openAttachIndex === 7 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(7)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[300px] ">
//                     {openCommentIndex === 7 && (
//                       <textarea
//                         placeholder="Write your comment8..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
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
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.lss}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(8)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[340px] ">
//                     {openAttachIndex === 8 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(8)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[340px] ">
//                     {openCommentIndex === 8 && (
//                       <textarea
//                         placeholder="Write your comment9..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6 my-2">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Children's Education Expenses
//                       <span className="text-gray-500">
//                         (Max. Rs. 1,50,000 /-)
//                       </span>{" "}
//                       <br></br>
//                       Restricted to Two Children
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.cee}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.cee}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(9)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[380px] ">
//                     {openAttachIndex === 9 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(9)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[380px] ">
//                     {openCommentIndex === 9 && (
//                       <textarea
//                         placeholder="Write your comment10..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                   <div className="col-span-6">
//                     <h2 className="ml-5  font-semibold text-gray-700">
//                       Deposite in Sukanya Samriddhi Scheme
//                     </h2>
//                   </div>
//                   <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80C?.dsss}
//                   </div>
//                   <div className="col-span-2">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80c?.dsss}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(10)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[460px] ">
//                     {openAttachIndex === 10 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(10)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[460px] ">
//                     {openCommentIndex === 10 && (
//                       <textarea
//                         placeholder="Write your comment11..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <h2 className="text-lg font-semibold text-gray-700 mt-4">
//                   Deduction under section 80 CCD
//                 </h2>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6 ml-5">
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

//                   <div className="col-span-2">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.nps}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(11)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[30px] ">
//                     {openAttachIndex === 11 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(11)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[30px] ">
//                     {openCommentIndex === 11 && (
//                       <textarea
//                         placeholder="Write your comment12..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <h2 className="text-lg font-semibold text-gray-700 mt-4">
//                   Deduction under section 80 D - Medicliam Policy (Excluding
//                   Through CMS)
//                 </h2>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6 ml-5">
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

//                   <div className="col-span-2">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.mpsc}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(12)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[20px] ">
//                     {openAttachIndex === 12 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(12)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[20px] ">
//                     {openCommentIndex === 12 && (
//                       <textarea
//                         placeholder="Write your comment13..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>

//                   <div className="col-span-6 ml-5">
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

//                   <div className="col-span-2">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.mpp}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(13)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[60px] ">
//                     {openAttachIndex === 13 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(13)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[60px] ">
//                     {openCommentIndex === 13 && (
//                       <textarea
//                         placeholder="Write your comment14..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>

//                   <div className="col-span-6 ml-5">
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

//                   <div className="col-span-2">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.mppsc}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(14)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[130px] ">
//                     {openAttachIndex === 14 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(14)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[130px] ">
//                     {openCommentIndex === 14 && (
//                       <textarea
//                         placeholder="Write your comment15..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6">
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

//                   <div className="col-span-2 mt-10 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80D?.mth}
//                   </div>

//                   <div className="col-span-2 mt-12">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.mth}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800 mt-12">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(15)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openAttachIndex === 15 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800 mt-12">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(15)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openCommentIndex === 15 && (
//                       <textarea
//                         placeholder="Write your comment16..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6">
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

//                   <div className="col-span-2 mt-10">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.mtc}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800 mt-12">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(16)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openAttachIndex === 16 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800 mt-12">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(16)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openCommentIndex === 16 && (
//                       <textarea
//                         placeholder="Write your comment17..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6">
//                     <h2 className="text-lg text-gray-800 py-3 font-medium">
//                       Deduction in respect of Totally Blind Physically
//                       handicapped or mentally retarded person [Sec. 80U] max Rs.
//                       75,000 /-
//                     </h2>
//                     <div className="font-semibold text-gray-700">
//                       <h2 className="ml-5">
//                         Yes / No (if yes please enclose the certificate)
//                       </h2>
//                     </div>
//                   </div>

//                   <div className="col-span-2 py-4 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80D?.tbpm}
//                   </div>

//                   <div className="col-span-2 mt-12">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80d?.tbpm}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-span-1 text-blue-800 mt-12">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(17)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openAttachIndex === 17 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800 mt-12">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(17)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openCommentIndex === 17 && (
//                       <textarea
//                         placeholder="Write your comment18..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6">
//                     <h2 className="text-lg text-gray-800 pt-3 font-medium">
//                       Deduction in respect of repayment of Loan "Only interest
//                       on Loan" Taken for Higher Eduction [Sec. 80E]
//                     </h2>
//                   </div>

//                   <div className="col-span-2 mt-10 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80E?.loan}
//                   </div>

//                   <div className="col-span-2 mt-10">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80e?.loan}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800 mt-10">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(18)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openAttachIndex === 18 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800 mt-10">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(18)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openCommentIndex === 18 && (
//                       <textarea
//                         placeholder="Write your comment19..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6">
//                     <h2 className="text-lg text-gray-800 pt-3 font-medium">
//                       House Rent Exemption unser Section 10 (13A) <br></br>
//                     </h2>
//                     <div className="font-semibold text-gray-700 ">
//                       <h2 className="ml-5">Rent payable per month</h2>
//                     </div>
//                   </div>

//                   <div className="col-span-2 mt-10 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80E?.rent}
//                   </div>

//                   <div className="col-span-2 mt-10">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80e?.rent}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800 mt-10">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(19)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openAttachIndex === 19 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800 mt-10">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(19)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] mt-[10px] ">
//                     {openCommentIndex === 19 && (
//                       <textarea
//                         placeholder="Write your comment20..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

//                 <div className="grid grid-cols-12 gap-2">
//                   <div className="col-span-6">
//                     <h2 className="text-lg text-gray-800 py-3 font-medium">
//                       Interest paid on housingloan from approved Financial
//                       Institution
//                     </h2>
//                   </div>

//                   <div className="col-span-2 mt-5 ml-5 text-gray-500 font-medium text-lg">
//                     {netData80E?.housingLoan}
//                   </div>

//                   <div className="col-span-2 mt-5">
//                     <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
//                       <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
//                         INR
//                       </div>
//                       <div className="ml-1">
//                         <input
//                           type="text"
//                           className="w-[70px] outline-none"
//                           value={actual80e?.housingLoan}
//                           readOnly
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-1 text-blue-800 mt-5">
//                     <ImAttachment
//                       className="cursor-pointer"
//                       onClick={() => handleAttachClick(20)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[10px] ">
//                     {openAttachIndex === 20 && <Attachment />}
//                   </div>
//                   <div className="col-span-1 text-2xl text-blue-800 mt-5">
//                     <BiComment
//                       className="cursor-pointer"
//                       onClick={() => handleCommentClick(20)}
//                     />
//                   </div>
//                   <div className="absolute ml-[1080px] -mt-[10px]">
//                     {openCommentIndex === 20 && (
//                       <textarea
//                         placeholder="Write your comment21..."
//                         rows={4}
//                         cols={28}
//                         className="border-[1px] border-black outline-none"
//                       />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>

//       {/* {proofSubmitStatus === "false" ? (
//         <div className="flex space-x-20 items-center ml-[1000px] mt-10 pb-10">
//           <button
//             className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//             onClick={() => {
//               handleNavigateProof();
//               setOpen(true);
//               handleMessage();
//               setSubmitFileStatus("true");
//             }}
//           >
//             Submit
//           </button>
//         </div>
//       ) : (
//         ""
//       )} */}

//       {!proofOfInvestmentSubmitStatus ? (
//         <div className="flex space-x-20 items-center ml-[1000px] mt-10 pb-10">
//           <button
//             className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
//             onClick={() => {
//               // handleNavigateProof();
//               setOpen(true);
//               // handleMessage();
//               // setSubmitFileStatus("true");
//               //handleSubmitFunction();
//             }}
//           >
//             Submit
//           </button>
//         </div>
//       ) : (
//         ""
//       )}

//       {open === true && (
//         <div>
//           <Modal open={open} onClose={() => setOpen(false)}>
//             <Box sx={style}>
//               <div
//                 onClick={() => setOpen(false)}
//                 style={{
//                   cursor: "pointer",
//                   fontSize: "30px",
//                   backgroundColor: "blue",
//                 }}
//               >
//                 <ImCancelCircle className="float-end" />
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   gap: 120,
//                   alignItems: "center",
//                   marginTop: "80px",
//                 }}
//               >
//                 <h3 className="text-xl font-semibold text-gray-800 md:ml-[170px] ml-40px md:px-0 px-4">
//                   Are you sure you want to submit POI ?
//                 </h3>
//               </div>
//               <h2 sx={{ mt: 8 }} className="space-x-10 text-center mt-10">
//                 <button
//                   className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2"
//                   onClick={() => {
//                     handleSubmitFunction();
//                     setOpen(false);
//                   }}
//                 >
//                   Submit
//                 </button>
//                 <button
//                   className="bg-blue-800 px-4 py-2 text-white font-medium tracking-wide"
//                   onClick={() => setOpen(false)}
//                 >
//                   Cancel
//                 </button>
//               </h2>
//             </Box>
//           </Modal>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Proof_Attach;

import { Box, Modal } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiComment } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { ImAttachment, ImCancelCircle } from "react-icons/im";
import { TbCircleCheckFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Attachment from "./Attachment";
import { useFileStore, useStore } from "./useFileStore";

function Proof_Attach() {
  const employeeId = 2;
  const navigate = useNavigate();

  const { setSubmitFileStatus } = useStore();

  const { regime } = useFileStore();

  const files = useFileStore((state) => state.files);

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState(false);
  // const handleMessage = () => {
  //   window.scrollTo(0, 0);
  //   setMessage(true);
  // };

  const handleProofOfInvestmentScreenBack = () => {
    navigate("/");
  };

  const [openCommentIndex, setOpenCommentIndex] = useState(null);

  const [openAttachIndex, setOpenAttachIndex] = useState(null);

  const [indexInfo, setIndexInfo] = useState(0);
  const handleCommentClick = (itDecId) => {
    setOpenCommentIndex(openCommentIndex === itDecId ? null : itDecId);
  };

  const handleAttachClick = (itDecId) => {
    setIndexInfo(itDecId);
    setOpenAttachIndex(openAttachIndex === itDecId ? null : itDecId);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 25,
    p: 2,
    height: 300,
    "@media (max-width: 768px)": {
      width: "90%",
    },
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
  // }, [info, master, proof, proofSaveStatus]); // Update whenever any of the dependencies change

  // useEffect(() => {
  //   const combinedData = info.map((item1) => {
  //     const matchingItem = master.find(
  //       (item2) => Number(item2.itDecId) === Number(item1.itDecId)
  //     );
  //     return matchingItem ? { ...item1, ...matchingItem } : item1;
  //   });
  //   setAllSectionName(combinedData);
  // }, [info, master]);

  // Update allSectionName whenever info or master changes   ===============================>
  // useEffect(() => {
  //   const combinedData = info.map((item1) => {
  //     const matchingItem = master.find(
  //       (item2) => Number(item2.itDecId) === Number(item1.itDecId)
  //     );
  //     return matchingItem ? { ...item1, ...matchingItem } : item1;
  //   });
  //   setAllSectionName(combinedData);
  // }, [info, master, proofSaveStatus === true]);

  // const handleChangeProofOfInvestment = (id, newRevisedAmount) => {
  //   setAllSectionName((prevAllSectionName) =>
  //     prevAllSectionName.map((item) =>
  //       item.itDecId === id
  //         ? { ...item, revisedAmount: newRevisedAmount }
  //         : item
  //     )
  //   );
  // };

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

  console.log(allSectionName, "allSectionNames++++++===");

  useEffect(() => {
    getStatusForProofOfInvestmentFunction();
  }, []);

  const handleSaveProofOfInvestment = () => {
    setAllSectionDataProofOfInvestmentFunction();
    setStatusForProofOfInvestmentFunction();
    getStatusForProofOfInvestmentFunction();
  };

  const setAllSectionDataProofOfInvestmentFunction = () => {
    axios
      .post("http://localhost:8080/proof-of-investment/add", allSectionName)
      .then((res) => {
        alert("saved");
      });
  };

  const setStatusForProofOfInvestmentFunction = () => {
    axios
      .get(
        "http://localhost:8080/proof-of-investment/set-status-proof/2/2024-2025"
      )
      .then((res) => {
        alert("status saved");
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

  const [allDataProofOfInvestment, setAllDataProofOfInvestment] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/proof-of-investment/get-all-proof/2/2024-2025"
      )
      .then((res) => {
        setAllDataProofOfInvestment(res.data);
      });
  }, []);

  const [overAllData, setOverAllData] = useState([]);

  // useEffect(() => {
  //   const updatedSections = allDataProofOfInvestment.map((item1) => {
  //     const matchingItem = allSectionName.find(
  //       (item2) => Number(item2.itDecId) === Number(item1.itDecId)
  //     );
  //     return matchingItem ? { ...item1, ...matchingItem } : item1;
  //   });

  //   setAllSectionName(updatedSections);
  // }, [allDataProofOfInvestment]);

  console.warn(overAllData, "overAllData++++****************");

  console.warn(
    allDataProofOfInvestment,
    "allDataProofOfInvestment============================>>>>>>>>>>>>>"
  );

  const handleSubmitFunction = () => {
    setSubmitFileStatus("true");
    setSubmitStatusForProofOfInvestment();
    //getSubmitStatusForProofOfInvestment();
  };

  const setSubmitStatusForProofOfInvestment = () => {
    axios
      .get(
        "http://localhost:8080/proof-of-investment/set-submit-status-proof/2/2024-2025/true"
      )
      .then((res) => {
        getSubmitStatusForProofOfInvestment();
        // navigate("/proof-of-investment-edit");
      });
  };

  const [proofOfInvestmentSubmitStatus, setProofOfInvestmentSubmitStatus] =
    useState(false);
  const getSubmitStatusForProofOfInvestment = () => {
    axios
      .get(
        "http://localhost:8080/proof-of-investment/get-submit-status-proof/2/2024-2025"
      )
      .then((res) => {
        console.warn(
          "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
        );
        console.log(res, "res.....===================+++++++++++++++++++");
        setProofOfInvestmentSubmitStatus(res?.data);
        navigate("/proof-of-investment-edit");
      });
  };

  useEffect(() => {
    getSubmitStatusForProofOfInvestment();
  }, []);

  console.warn(
    proofOfInvestmentSubmitStatus,
    "proofOfInvestmentSubmitStatus+++++++++==================<<<<<<<<<<"
  );

  return (
    <div className="p-4">
      <div className="flex space-x-10 items-center px-4 mb-2 mt-7">
        <div className="text-gray-400 text-xl ml-4 cursor-pointer">
          <FaArrowLeft onClick={handleProofOfInvestmentScreenBack} />
        </div>
        <div className="text-gray-700 font-semibold text-xl ">
          Proof of Investments
        </div>

        {message && (
          <div className="flex text-yellow-500 items-center space-x-5  font-semibold ml-96">
            <BsCheck2Circle className="text-4xl" />
            <h2 className="text-xl">
              Your Proof of investment details have been saved successfully
            </h2>
          </div>
        )}
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
        <div className="col-span-10 ">
          <div className="flex justify-between px-2 font-semibold mt-5 mb-5">
            <div className="text-xl ">Declaration Summary</div>
            <div className="text-gray-600 ml-11 text-xl">
              Financial Year: <span className="text-black">2024-2025</span>
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
                ?.sort((a, b) => a.itDecId - b.itDecId)
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

                    {/* <div className="col-span-1"></div> */}

                    <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                      <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                        INR
                      </div>
                      <input
                        type="text"
                        className="w-[88px] px-2 text-gray-500 outline-none"
                        value={section?.revisedAmount}
                      />
                    </div>
                    <div className="col-span-1 text-blue-800">
                      <ImAttachment
                        className="cursor-pointer"
                        onClick={() => handleAttachClick(section.itDecId)}
                      />
                    </div>

                    <div className="col-span-1 text-blue-800">
                      <BiComment
                        className="cursor-pointer"
                        onClick={() => handleCommentClick(section.itDecId)}
                      />
                    </div>

                    <div
                      className={`absolute ${
                        openAttachIndex === section.itDecId
                          ? "ml-[1080px] -mt-[40px]"
                          : ""
                      }`}
                    >
                      {openAttachIndex === section.itDecId && (
                        <Attachment rowId={section.itDecId} />
                      )}
                    </div>

                    <div
                      className={`absolute ${
                        openCommentIndex === section.itDecId
                          ? "ml-[1120px] -mt-[40px]"
                          : ""
                      }`}
                    >
                      {openCommentIndex === section.itDecId && (
                        <textarea
                          placeholder="Write your comment21..."
                          rows={4}
                          cols={25}
                          className="border-[1px] border-black outline-none"
                        />
                      )}
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
                ?.sort((a, b) => a.itDecId - b.itDecId)
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

                    {/* <div className="col-span-1"></div> */}

                    <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                      <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                        INR
                      </div>
                      <input
                        type="text"
                        className="w-[88px] px-2 text-gray-500 outline-none"
                        value={section?.revisedAmount}
                      />
                    </div>
                    <div className="col-span-1 text-blue-800">
                      <ImAttachment
                        className="cursor-pointer"
                        onClick={() => handleAttachClick(section.itDecId)}
                      />
                    </div>

                    <div className="col-span-1 text-blue-800">
                      <BiComment
                        className="cursor-pointer"
                        onClick={() => handleCommentClick(section.itDecId)}
                      />
                    </div>

                    <div
                      className={`absolute ${
                        openAttachIndex === section.itDecId
                          ? "ml-[1080px] -mt-[40px]"
                          : ""
                      }`}
                    >
                      {openAttachIndex === section.itDecId && (
                        <Attachment rowId={section.itDecId} />
                      )}
                    </div>

                    <div
                      className={`absolute ${
                        openCommentIndex === section.itDecId
                          ? "ml-[1120px] -mt-[40px]"
                          : ""
                      }`}
                    >
                      {openCommentIndex === section.itDecId && (
                        <textarea
                          placeholder="Write your comment21..."
                          rows={4}
                          cols={25}
                          className="border-[1px] border-black outline-none"
                        />
                      )}
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
                ?.sort((a, b) => a.itDecId - b.itDecId)
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

                    {/* <div className="col-span-1"></div> */}

                    <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                      <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                        INR
                      </div>
                      <input
                        type="text"
                        className="w-[88px] px-2 text-gray-500 outline-none"
                        value={section?.revisedAmount}
                      />
                    </div>
                    <div className="col-span-1 text-blue-800">
                      <ImAttachment
                        className="cursor-pointer"
                        onClick={() => handleAttachClick(section.itDecId)}
                      />
                    </div>

                    <div className="col-span-1 text-blue-800">
                      <BiComment
                        className="cursor-pointer"
                        onClick={() => handleCommentClick(section.itDecId)}
                      />
                    </div>

                    <div
                      className={`absolute ${
                        openAttachIndex === section.itDecId
                          ? "ml-[1080px] -mt-[40px]"
                          : ""
                      }`}
                    >
                      {openAttachIndex === section.itDecId && (
                        <Attachment rowId={section.itDecId} />
                      )}
                    </div>

                    <div
                      className={`absolute ${
                        openCommentIndex === section.itDecId
                          ? "ml-[1120px] -mt-[40px]"
                          : ""
                      }`}
                    >
                      {openCommentIndex === section.itDecId && (
                        <textarea
                          placeholder="Write your comment21..."
                          rows={4}
                          cols={25}
                          className="border-[1px] border-black outline-none"
                        />
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {!proofOfInvestmentSubmitStatus ? (
        <div className="flex space-x-20 items-center ml-[1000px] mt-10 pb-10">
          <button
            className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
            onClick={() => {
              setOpen(true);
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        ""
      )}

      {open === true && (
        <div>
          <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={style}>
              <div
                onClick={() => setOpen(false)}
                style={{
                  cursor: "pointer",
                  fontSize: "30px",
                  backgroundColor: "blue",
                }}
              >
                <ImCancelCircle className="float-end" />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 120,
                  alignItems: "center",
                  marginTop: "80px",
                }}
              >
                <h3 className="text-xl font-semibold text-gray-800 md:ml-[170px] ml-40px md:px-0 px-4">
                  Are you sure you want to submit POI ?
                </h3>
              </div>
              <h2 sx={{ mt: 8 }} className="space-x-10 text-center mt-10">
                <button
                  className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2"
                  onClick={() => {
                    handleSubmitFunction();
                    setOpen(false);
                  }}
                >
                  Submit
                </button>
                <button
                  className="bg-blue-800 px-4 py-2 text-white font-medium tracking-wide"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </h2>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Proof_Attach;
