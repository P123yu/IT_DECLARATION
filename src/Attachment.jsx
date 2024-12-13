// import { Button } from "@mui/material";
// import React from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// import useFileStore from "./Zustand"; // Import the Zustand store

// function Attachment() {
//   const files = useFileStore((state) => state.files); // Access files state from the Zustand store
//   const addFiles = useFileStore((state) => state.addFiles); // Access addFiles action from the Zustand store

//   const handleAddFiles = (e) => {
//     const fileList = Array.from(e.target.files).map((file, index) => ({
//       name: `${file.name} (${index + 1})`,
//       file: file,
//     }));
//     addFiles(fileList); // Update files state using the addFiles action
//   };

//   console.log(addFiles, "addFiles?+++++++++++++++++++}}}}}}}}}}}}}}");

//   // const handleRemoveFile = (index) => {
//   //   useFileStore.removeFile(index); // Remove file from the files state using the removeFile action
//   //   console.log("hello...");
//   // };

//   // Function to remove a file
//   const handleRemoveFile = (index) => {
//     useFileStore.getState().removeFile(index); // Corrected usage to call removeFile within the hook context
//     console.log("hello...");
//   };

//   const [flag, setFlag] = React.useState(true);
//   const handleOff = () => {
//     setFlag(false);
//   };

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex space-x-10 justify-between items-center">
//             <div className="font-semibold">Attachments ({files.length})</div>
//             <ImCross onClick={handleOff} className="cursor-pointer" />
//           </div>
//           <div className="border-b-2 border-gray-500"></div>
//           <div className="">
//             {files.map((file, index) => (
//               <div key={index}>
//                 <div className="flex space-x-10 items-center">
//                   <div className="grid grid-cols-4">
//                     <div className="col-span-3">
//                       <Button
//                         component="label"
//                         startIcon={<ImAttachment className="outline-none" />}
//                       >
//                         {file.name}
//                         <input
//                           type="file"
//                           style={{ display: "none" }}
//                           onChange={handleAddFiles}
//                           multiple
//                         />
//                       </Button>
//                     </div>
//                     <div className="col-span-1 mt-5">
//                       <BsTrash
//                         onClick={() => handleRemoveFile(index)}
//                         className="text-xl"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div className="flex space-x-10 items-center">
//               <Button
//                 component="label"
//                 startIcon={<ImAttachment className="outline-none" />}
//               >
//                 Upload file
//                 <input
//                   type="file"
//                   style={{ display: "none" }}
//                   onChange={handleAddFiles}
//                   multiple
//                 />
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import axios from "axios";
// import React from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// import useFileStore from "./Zustand"; // Import the Zustand store

// function Attachment() {
//   const files = useFileStore((state) => state.files); // Access files state from Zustand
//   const addFiles = useFileStore((state) => state.addFiles); // Access addFiles action from Zustand
//   const [flag, setFlag] = React.useState(true);

//   const handleAddFiles = (e) => {
//     const fileList = Array.from(e.target.files).map((file, index) => ({
//       name: `${file.name} (${index + 1})`,
//       file: file,
//     }));
//     addFiles(fileList); // Update files state using the addFiles action
//   };

//   const handleRemoveFile = (index) => {
//     useFileStore.getState().removeFile(index); // Corrected usage to call removeFile within the hook context
//   };

//   const handleOff = () => {
//     setFlag(false);
//   };

//   // Submit files as a multipart form-data request
//   const handleSubmit = async () => {
//     const formData = new FormData();
//     files.forEach((fileObj, index) => {
//       formData.append("files", fileObj.file); // Append each file to formData
//     });

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/it-declaration-file/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Files uploaded successfully:", response.data);
//     } catch (error) {
//       console.error("Error uploading files:", error);
//     }
//   };

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex space-x-10 justify-between items-center">
//             <div className="font-semibold">Attachments ({files.length})</div>
//             <ImCross onClick={handleOff} className="cursor-pointer" />
//           </div>
//           <div className="border-b-2 border-gray-500"></div>
//           <div className="">
//             {files.map((file, index) => (
//               <div key={index}>
//                 <div className="flex space-x-10 items-center">
//                   <div className="grid grid-cols-4">
//                     <div className="col-span-3">
//                       <Button
//                         component="label"
//                         startIcon={<ImAttachment className="outline-none" />}
//                       >
//                         {file.name}
//                         <input
//                           type="file"
//                           style={{ display: "none" }}
//                           onChange={handleAddFiles}
//                           multiple
//                         />
//                       </Button>
//                     </div>
//                     <div className="col-span-1 mt-5">
//                       <BsTrash
//                         onClick={() => handleRemoveFile(index)}
//                         className="text-xl cursor-pointer"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div className="flex space-x-10 items-center">
//               <Button
//                 component="label"
//                 startIcon={<ImAttachment className="outline-none" />}
//               >
//                 Upload file
//                 <input
//                   type="file"
//                   style={{ display: "none" }}
//                   onChange={handleAddFiles}
//                   multiple
//                 />
//               </Button>
//             </div>
//           </div>
//           {/* Submit Button to upload all files */}
//           <div className="mt-4">
//             <Button variant="contained" color="primary" onClick={handleSubmit}>
//               Submit Files
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import axios from "axios";
// import React from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// import useFileStore from "./Zustand"; // Import the Zustand store

// function Attachment() {
//   const employeeId = 2;
//   const files = useFileStore((state) => state.files); // Access files state from Zustand
//   const addFiles = useFileStore((state) => state.addFiles); // Access addFiles action from Zustand
//   const [uploadedFiles, setUploadedFiles] = React.useState([]); // State to store uploaded file info
//   const [flag, setFlag] = React.useState(true);

//   const handleAddFiles = (e) => {
//     const fileList = Array.from(e.target.files).map((file, index) => ({
//       name: `${file.name} (${index + 1})`,
//       file: file,
//     }));
//     addFiles(fileList); // Update files state using the addFiles action
//   };

//   const handleRemoveFile = (index) => {
//     useFileStore.getState().removeFile(index); // Corrected usage to call removeFile within the hook context
//   };

//   const handleOff = () => {
//     setFlag(false);
//   };

//   // Submit files as a multipart form-data request
//   const handleSubmit = async () => {
//     const formData = new FormData();
//     files.forEach((fileObj) => {
//       formData.append("files", fileObj.file); // Append each file to formData
//     });

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Files uploaded successfully:", response.data);

//       // Update uploadedFiles state with response data
//       setUploadedFiles(response.data.data); // Assuming response.data.data contains the uploaded files info
//     } catch (error) {
//       console.error("Error uploading files:", error);
//     }
//   };

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex space-x-10 justify-between items-center">
//             <div className="font-semibold">Attachments ({files.length})</div>
//             <ImCross onClick={handleOff} className="cursor-pointer" />
//           </div>
//           <div className="border-b-2 border-gray-500"></div>
//           <div className="">
//             {files.map((file, index) => (
//               <div key={index}>
//                 <div className="flex space-x-10 items-center">
//                   <div className="grid grid-cols-4">
//                     <div className="col-span-3">
//                       <Button
//                         component="label"
//                         startIcon={<ImAttachment className="outline-none" />}
//                       >
//                         {file.name}
//                         <input
//                           type="file"
//                           style={{ display: "none" }}
//                           onChange={handleAddFiles}
//                           multiple
//                         />
//                       </Button>
//                     </div>
//                     <div className="col-span-1 mt-5">
//                       <BsTrash
//                         onClick={() => handleRemoveFile(index)}
//                         className="text-xl cursor-pointer"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div className="flex space-x-10 items-center">
//               <Button
//                 component="label"
//                 startIcon={<ImAttachment className="outline-none" />}
//               >
//                 Upload file
//                 <input
//                   type="file"
//                   style={{ display: "none" }}
//                   onChange={handleAddFiles}
//                   multiple
//                 />
//               </Button>
//             </div>
//           </div>
//           {/* Submit Button to upload all files */}
//           <div className="mt-4">
//             <Button variant="contained" color="primary" onClick={handleSubmit}>
//               Submit Files
//             </Button>
//           </div>
//           {/* Display uploaded files info */}
//           {uploadedFiles.length > 0 && (
//             <div className="mt-4">
//               <h3>Uploaded Files:</h3>
//               <ul>
//                 {uploadedFiles.map((file, index) => (
//                   <li key={index}>
//                     <strong>ID:</strong> {file.fileId} <br />
//                     <strong>Name:</strong> {file.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import axios from "axios";
// import React from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// import useFileStore from "./Zustand"; // Zustand store

// function Attachment() {
//   const employeeId = 2;

//   // Zustand hooks to manage files
//   const files = useFileStore((state) => state.files); // Access files state
//   const addFiles = useFileStore((state) => state.addFiles); // Add files action
//   const removeFile = useFileStore((state) => state.removeFile); // Remove files action

//   const [flag, setFlag] = React.useState(true); // To toggle visibility
//   const [uploadedFiles, setUploadedFiles] = React.useState([]); // Uploaded files info

//   // Handle file input change
//   const handleAddFiles = (e) => {
//     const fileList = Array.from(e.target.files).map((file, index) => ({
//       name: file.name,
//       file: file,
//     }));
//     addFiles(fileList); // Add new files to Zustand
//   };

//   // Handle file removal
//   const handleRemoveFile = (index) => {
//     removeFile(index); // Remove the file from Zustand state
//   };

//   // Hide attachment section
//   const handleOff = () => {
//     setFlag(false);
//   };

//   // Submit files as a single API call

//   let a="true";

//   if(a==="true"){
//   const handleSubmit = async () => {
//     if (files.length === 0) {
//       console.error("No files to upload");
//       return;
//     }

//     const formData = new FormData();
//     files.forEach((fileObj) => {
//       formData.append("files", fileObj.file); // Append each file to formData
//     });

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Files uploaded successfully:", response.data);

//       // Update uploadedFiles state
//       setUploadedFiles(response.data.data); // Assuming response contains file info
//     } catch (error) {
//       console.error("Error uploading files:", error);
//     }
//   };
// }

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex space-x-10 justify-between items-center">
//             <div className="font-semibold">Attachments ({files.length})</div>
//             <ImCross onClick={handleOff} className="cursor-pointer" />
//           </div>
//           <div className="border-b-2 border-gray-500 mb-4"></div>
//           <div>
//             {files.map((file, index) => (
//               <div key={index} className="flex space-x-10 items-center mb-2">
//                 <span>{file.name}</span>
//                 <BsTrash
//                   onClick={() => handleRemoveFile(index)}
//                   className="text-xl cursor-pointer text-red-500"
//                 />
//               </div>
//             ))}
//             <Button
//               component="label"
//               variant="outlined"
//               startIcon={<ImAttachment />}
//             >
//               Add Files
//               <input
//                 type="file"
//                 style={{ display: "none" }}
//                 onChange={handleAddFiles}
//                 multiple
//               />
//             </Button>
//           </div>
//           {/* <div className="mt-4">
//             <Button variant="contained" color="primary" onClick={handleSubmit}>
//               Submit All Files
//             </Button>
//           </div> */}
//           {uploadedFiles.length > 0 && (
//             <div className="mt-4">
//               <h3>Uploaded Files:</h3>
//               <ul>
//                 {uploadedFiles.map((file, index) => (
//                   <li key={index}>
//                     <strong>ID:</strong> {file.fileId} <br />
//                     <strong>Name:</strong> {file.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import axios from "axios";
// import React, { useEffect } from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// import { useSessionStorage } from "react-use";
// import useFileStore from "./Zustand"; // Zustand store

// function Attachment() {
//   const employeeId = 2;

//   const [fileStatus, setFileStatus] = useSessionStorage("file-status", "false");
//   console.log(typeof fileStatus, "fileStatus");

//   // Zustand hooks to manage files
//   const files = useFileStore((state) => state.files); // Access files state
//   const addFiles = useFileStore((state) => state.addFiles); // Add files action
//   const removeFile = useFileStore((state) => state.removeFile); // Remove files action

//   const [uploadedFiles, setUploadedFiles] = React.useState([]); // Uploaded files info
//   const [flag, setFlag] = React.useState(true); // To toggle visibility

//   // let a = "true"; // Control variable to decide upload action

//   // Function to handle file upload
//   const handleSubmit = async () => {
//     if (files.length === 0) {
//       console.error("No files to upload");
//       return;
//     }

//     const formData = new FormData();
//     files.forEach((fileObj) => {
//       formData.append("files", fileObj.file); // Append each file to formData
//     });

//     console.log(formData, "formData");

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Files uploaded successfully:", response.data);

//       // Update uploadedFiles state
//       setUploadedFiles(response.data.data); // Assuming response contains file info
//     } catch (error) {
//       console.error("Error uploading files:", error);
//     }
//   };

//   // Trigger file upload when `a` is "true"
//   useEffect(() => {
//     if (fileStatus === "true") {
//       handleSubmit(); // Automatically upload files
//     }
//   }, [fileStatus]); // Dependency array monitors changes to `a`

//   // Handle file input change
//   const handleAddFiles = (e) => {
//     const fileList = Array.from(e.target.files).map((file) => ({
//       name: file.name,
//       file: file,
//     }));
//     addFiles(fileList); // Add new files to Zustand
//   };

//   // Handle file removal
//   const handleRemoveFile = (index) => {
//     removeFile(index); // Remove the file from Zustand state
//   };

//   // Hide attachment section
//   const handleOff = () => {
//     setFlag(false);
//   };

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex space-x-10 justify-between items-center">
//             <div className="font-semibold">Attachments ({files.length})</div>
//             <ImCross onClick={handleOff} className="cursor-pointer" />
//           </div>
//           <div className="border-b-2 border-gray-500 mb-4"></div>
//           <div>
//             {files.map((file, index) => (
//               <div key={index} className="flex space-x-10 items-center mb-2">
//                 <span>{file.name}</span>
//                 <BsTrash
//                   onClick={() => handleRemoveFile(index)}
//                   className="text-xl cursor-pointer text-red-500"
//                 />
//               </div>
//             ))}
//             <Button
//               component="label"
//               variant="outlined"
//               startIcon={<ImAttachment />}
//             >
//               Add Files
//               <input
//                 type="file"
//                 style={{ display: "none" }}
//                 onChange={handleAddFiles}
//                 multiple
//               />
//             </Button>
//           </div>
//           {uploadedFiles.length > 0 && (
//             <div className="mt-4">
//               <h3>Uploaded Files:</h3>
//               <ul>
//                 {uploadedFiles.map((file, index) => (
//                   <li key={index}>
//                     <strong>ID:</strong> {file.fileId} <br />
//                     <strong>Name:</strong> {file.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import axios from "axios";
// import React from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// import { useSessionStorage } from "react-use";

// function Attachment() {
//   const employeeId = 2;

//   // Centralized state to persist uploaded files across interactions
//   const [uploadedFiles, setUploadedFiles] = useSessionStorage(
//     "uploaded-files",
//     [] // Initialize with an empty array
//   );

//   // Local state for managing files being added before upload
//   const [localFiles, setLocalFiles] = React.useState([]);
//   const [flag, setFlag] = React.useState(true); // To toggle visibility

//   // Handle file input change
//   const handleAddFiles = (e) => {
//     const newFiles = Array.from(e.target.files).map((file) => ({
//       name: file.name,
//       file: file,
//     }));
//     setLocalFiles((prevFiles) => [...prevFiles, ...newFiles]); // Append new files to the existing list
//   };

//   // Handle file removal (local)
//   const handleRemoveLocalFile = (index) => {
//     setLocalFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//   };

//   // Handle file removal (uploaded)
//   const handleRemoveUploadedFile = (index) => {
//     setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//   };

//   // Submit files as a single API call
//   const handleSubmit = async () => {
//     if (localFiles.length === 0) {
//       console.error("No files to upload");
//       return;
//     }

//     const formData = new FormData();
//     localFiles.forEach((fileObj) => {
//       formData.append("files", fileObj.file);
//     });

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Files uploaded successfully:", response.data);

//       // Update uploadedFiles state with response data
//       setUploadedFiles((prevUploaded) => [
//         ...prevUploaded,
//         ...response.data.data, // Assuming response.data.data contains uploaded file info
//       ]);

//       // Clear localFiles after successful upload
//       setLocalFiles([]);
//     } catch (error) {
//       console.error("Error uploading files:", error);
//     }
//   };

//   // Hide attachment section
//   const handleOff = () => {
//     setFlag(false);
//   };

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex space-x-10 justify-between items-center">
//             <div className="font-semibold">
//               Attachments ({localFiles.length + uploadedFiles.length})
//             </div>
//             <ImCross onClick={handleOff} className="cursor-pointer" />
//           </div>
//           <div className="border-b-2 border-gray-500 mb-4"></div>
//           <div>
//             {/* Uploaded Files */}
//             {uploadedFiles.map((file, index) => (
//               <div key={index} className="flex space-x-10 items-center mb-2">
//                 <span>{file.name}</span>
//                 <BsTrash
//                   onClick={() => handleRemoveUploadedFile(index)}
//                   className="text-xl cursor-pointer text-red-500"
//                 />
//               </div>
//             ))}

//             {/* Local Files */}
//             {localFiles.map((file, index) => (
//               <div key={index} className="flex space-x-10 items-center mb-2">
//                 <span>{file.name}</span>
//                 <BsTrash
//                   onClick={() => handleRemoveLocalFile(index)}
//                   className="text-xl cursor-pointer text-red-500"
//                 />
//               </div>
//             ))}

//             {/* Add Files Button */}
//             <Button
//               component="label"
//               variant="outlined"
//               startIcon={<ImAttachment />}
//             >
//               Add Files
//               <input
//                 type="file"
//                 style={{ display: "none" }}
//                 onChange={handleAddFiles}
//                 multiple
//               />
//             </Button>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-4">
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSubmit}
//               disabled={localFiles.length === 0}
//             >
//               Submit Files
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// import useFileStore from "./useFileStore"; // Zustand Store for Global State

// function Attachment() {
//   const employeeId = 2;

//   // Access global state using Zustand
//   const globalFiles = useFileStore((state) => state.files); // Global files
//   const addFiles = useFileStore((state) => state.addFiles); // Add files globally
//   const removeFile = useFileStore((state) => state.removeFile); // Remove files globally
//   const clearFiles = useFileStore((state) => state.clearFiles); // Clear files globally

//   const [localFiles, setLocalFiles] = useState([]); // Local files for the current attachment
//   const [flag, setFlag] = useState(true); // Visibility toggle

//   // Handle file addition
//   const handleAddFiles = (e) => {
//     const newFiles = Array.from(e.target.files).map((file) => ({
//       name: file.name,
//       file: file,
//     }));
//     setLocalFiles((prev) => [...prev, ...newFiles]); // Append to local files
//     addFiles(newFiles); // Add to global state
//   };

//   // Handle file removal from local state
//   const handleRemoveFile = (index) => {
//     const removedFile = localFiles[index];
//     setLocalFiles((prev) => prev.filter((_, i) => i !== index)); // Update local state
//     removeFile(removedFile.name); // Remove from global state using unique file name
//   };

//   // Global Submit Handler
//   const handleSubmit = async () => {
//     if (globalFiles.length === 0) {
//       console.error("No files to upload");
//       return;
//     }

//     const formData = new FormData();
//     globalFiles.forEach((fileObj) => {
//       formData.append("files", fileObj.file); // Append files to FormData
//     });

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Files uploaded successfully:", response.data);

//       clearFiles(); // Clear global state after upload
//     } catch (error) {
//       console.error("Error uploading files:", error);
//     }
//   };

//   // Hide attachment section
//   const handleOff = () => {
//     setFlag(false);
//   };

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex space-x-10 justify-between items-center">
//             <div className="font-semibold">
//               Attachments ({globalFiles.length})
//             </div>
//             <ImCross onClick={handleOff} className="cursor-pointer" />
//           </div>
//           <div className="border-b-2 border-gray-500 mb-4"></div>
//           <div>
//             {localFiles.map((file, index) => (
//               <div key={index} className="flex space-x-10 items-center mb-2">
//                 <span>{file.name}</span>
//                 <BsTrash
//                   onClick={() => handleRemoveFile(index)}
//                   className="text-xl cursor-pointer text-red-500"
//                 />
//               </div>
//             ))}
//             <Button
//               component="label"
//               variant="outlined"
//               startIcon={<ImAttachment />}
//             >
//               Add Files
//               <input
//                 type="file"
//                 style={{ display: "none" }}
//                 onChange={handleAddFiles}
//                 multiple
//               />
//             </Button>
//           </div>

//           <div className="mt-4">
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSubmit}
//               disabled={globalFiles.length === 0}
//             >
//               Submit All Files
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// ==================================================================================>

// import { Button } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// import { useFileStore, useStore } from "./useFileStore"; // Zustand Store for Global State

// function Attachment() {
//   const employeeId = 2;

//   // Access global state using Zustand
//   const globalFiles = useFileStore((state) => state.files); // Global files
//   const addFiles = useFileStore((state) => state.addFiles); // Add files globally
//   const removeFile = useFileStore((state) => state.removeFile); // Remove files globally
//   const clearFiles = useFileStore((state) => state.clearFiles); // Clear files globally

//   const [localFiles, setLocalFiles] = useState([]); // Local files for the current attachment
//   const [flag, setFlag] = useState(true); // Visibility toggle

//   // Handle file addition
//   const handleAddFiles = (e) => {
//     const newFiles = Array.from(e.target.files).map((file) => ({
//       name: file.name,
//       file: file,
//     }));
//     setLocalFiles((prev) => [...prev, ...newFiles]); // Append to local files
//     addFiles(newFiles); // Add to global state
//   };

//   // Handle file removal from local state
//   const handleRemoveFile = (index) => {
//     const removedFile = localFiles[index];
//     setLocalFiles((prev) => prev.filter((_, i) => i !== index)); // Update local state
//     removeFile(removedFile.name); // Remove from global state using unique file name
//   };

//   // Global Submit Handler
//   const handleSubmit = async () => {
//     if (globalFiles.length === 0) {
//       console.error("No files to upload");
//       return;
//     }

//     const formData = new FormData();
//     globalFiles.forEach((fileObj) => {
//       formData.append("files", fileObj.file); // Append files to FormData
//     });

//     alert("file called");

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Files uploaded successfully:", response.data);

//       // clearFiles(); // Clear global state after upload
//     } catch (error) {
//       console.error("Error uploading files:", error);
//     }
//   };

//   // Hide attachment section
//   const handleOff = () => {
//     setFlag(false);
//   };

//   const { submitFileStatus } = useStore();

//   useEffect(() => {
//     if (submitFileStatus === "true") {
//       handleSubmit();
//     }
//   }, [submitFileStatus]);

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex space-x-10 justify-between items-center">
//             <div className="font-semibold">
//               Attachments ({globalFiles.length})
//             </div>
//             <ImCross onClick={handleOff} className="cursor-pointer" />
//           </div>
//           <div className="border-b-2 border-gray-500 mb-4"></div>
//           <div>
//             {localFiles.map((file, index) => (
//               <div key={index} className="flex space-x-10 items-center mb-2">
//                 <span>{file.name}</span>
//                 <BsTrash
//                   onClick={() => handleRemoveFile(index)}
//                   className="text-xl cursor-pointer text-red-500"
//                 />
//               </div>
//             ))}
//             <Button
//               component="label"
//               variant="outlined"
//               startIcon={<ImAttachment />}
//             >
//               Add Files
//               <input
//                 type="file"
//                 style={{ display: "none" }}
//                 onChange={handleAddFiles}
//                 multiple
//               />
//             </Button>
//           </div>

//           {/* <div className="mt-4">
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSubmit}
//               disabled={globalFiles.length === 0}
//             >
//               Submit All Files
//             </Button>
//           </div> */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// import useFileStore from "./useFileStore"; // Zustand Store for Global State

// function Attachment() {
//   const employeeId = 2;

//   // Access global state using Zustand
//   const globalFiles = useFileStore((state) => state.files); // Global files
//   const addFiles = useFileStore((state) => state.addFiles); // Add files globally
//   const removeFile = useFileStore((state) => state.removeFile); // Remove files globally
//   const clearFiles = useFileStore((state) => state.clearFiles); // Clear files globally

//   //const [fileStatus, setFileStatus] = useSessionStorage("file-status", "false");

//   const fileStatus = useFileStore((state) => state.fileStatus);

//   console.log(fileStatus, "fileStatus");
//   const [localFiles, setLocalFiles] = useState([]); // Local files for the current attachment
//   const [flag, setFlag] = useState(true); // Visibility toggle

//   // Handle file addition
//   const handleAddFiles = (e) => {
//     const newFiles = Array.from(e.target.files).map((file) => ({
//       name: file.name,
//       file: file,
//     }));
//     setLocalFiles((prev) => [...prev, ...newFiles]); // Append to local files
//     addFiles(newFiles); // Add to global state
//   };

//   // Handle file removal from local state
//   const handleRemoveFile = (index) => {
//     const removedFile = localFiles[index];
//     setLocalFiles((prev) => prev.filter((_, i) => i !== index)); // Update local state
//     removeFile(removedFile.name); // Remove from global state using unique file name
//   };

//   // Global Submit Handler
//   const handleSubmit = async () => {
//     if (globalFiles.length === 0) {
//       console.error("No files to upload");
//       return;
//     }

//     const formData = new FormData();
//     globalFiles.forEach((fileObj) => {
//       formData.append("files", fileObj.file); // Append files to FormData
//     });

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Files uploaded successfully:", response.data);

//       clearFiles(); // Clear global state after upload
//     } catch (error) {
//       console.error("Error uploading files:", error);
//     }
//   };

//   // Trigger file upload when `a` is "true"
//   useEffect(() => {
//     if (fileStatus === "true") {
//       handleSubmit(); // Automatically upload files
//     }
//   }, [fileStatus]); // Dependency array monitors changes to `a`

//   // Hide attachment section
//   const handleOff = () => {
//     setFlag(false);
//   };

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex space-x-10 justify-between items-center">
//             <div className="font-semibold">
//               Attachments ({globalFiles.length})
//             </div>
//             <ImCross onClick={handleOff} className="cursor-pointer" />
//           </div>
//           <div className="border-b-2 border-gray-500 mb-4"></div>
//           <div>
//             {localFiles.map((file, index) => (
//               <div key={index} className="flex space-x-10 items-center mb-2">
//                 <span>{file.name}</span>
//                 <BsTrash
//                   onClick={() => handleRemoveFile(index)}
//                   className="text-xl cursor-pointer text-red-500"
//                 />
//               </div>
//             ))}
//             <Button
//               component="label"
//               variant="outlined"
//               startIcon={<ImAttachment />}
//             >
//               Add Files
//               <input
//                 type="file"
//                 style={{ display: "none" }}
//                 onChange={handleAddFiles}
//                 multiple
//               />
//             </Button>
//           </div>

//           <div className="mt-4">
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSubmit}
//               disabled={globalFiles.length === 0}
//             >
//               Submit All Files
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// import { useFileStore, useStore } from "./useFileStore"; // Zustand Store for Global State

// function Attachment({ rowId }) {
//   console.log(
//     rowId,
//     "rrrrrrrrrrrrrrrrrrrrrrrrooooooooooooooowwwwwwwwwwwwiiiiiiiidddddddddddd"
//   );
//   const employeeId = 2;

//   // Access global state using Zustand
//   const globalFiles = useFileStore((state) => state.files); // Global files
//   const addFiles = useFileStore((state) => state.addFiles); // Add files globally
//   const removeFile = useFileStore((state) => state.removeFile); // Remove files globally
//   const clearFiles = useFileStore((state) => state.clearFiles); // Clear files globally

//   const [localFiles, setLocalFiles] = useState([]); // Local files for the current attachment
//   const [flag, setFlag] = useState(true); // Visibility toggle

//   // Handle file addition
//   const handleAddFiles = (e) => {
//     const newFiles = Array.from(e.target.files).map((file) => ({
//       name: file.name,
//       file: file,
//     }));
//     setLocalFiles((prev) => [...prev, ...newFiles]); // Append to local files
//     addFiles(newFiles); // Add to global state
//   };

//   // Handle file removal from local state
//   const handleRemoveFile = (index) => {
//     const removedFile = localFiles[index];
//     setLocalFiles((prev) => prev.filter((_, i) => i !== index)); // Update local state
//     removeFile(removedFile.name); // Remove from global state using unique file name
//   };

//   // Global Submit Handler
//   const handleSubmit = () => {
//     if (globalFiles.length === 0) {
//       console.error("No files to upload");
//       return;
//     }

//     const formData = new FormData();
//     globalFiles.forEach((fileObj) => {
//       formData.append("files", fileObj.file); // Append files to FormData
//     });

//     alert("file called");

//     axios
//       .post(
//         `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       )
//       .then((response) => {
//         console.log("Files uploaded successfully:", response.data);
//         // clearFiles(); // Clear global state after upload
//       })
//       .catch((error) => {
//         console.error("Error uploading files:", error);
//       });
//   };

//   // Hide attachment section
//   const handleOff = () => {
//     setFlag(false);
//   };

//   const { submitFileStatus } = useStore();

//   useEffect(() => {
//     if (submitFileStatus === "true") {
//       handleSubmit();
//     }
//   }, [submitFileStatus]);

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex space-x-10 justify-between items-center">
//             <div className="font-semibold">
//               Attachments ({globalFiles.length})
//             </div>
//             <ImCross onClick={handleOff} className="cursor-pointer" />
//           </div>
//           <div className="border-b-2 border-gray-500 mb-4"></div>
//           <div>
//             {localFiles.map((file, index) => (
//               <div key={index} className="flex space-x-10 items-center mb-2">
//                 <span>{file.name}</span>
//                 <BsTrash
//                   onClick={() => handleRemoveFile(index)}
//                   className="text-xl cursor-pointer text-red-500"
//                 />
//               </div>
//             ))}
//             <Button
//               component="label"
//               variant="outlined"
//               startIcon={<ImAttachment />}
//             >
//               Add Files
//               <input
//                 type="file"
//                 style={{ display: "none" }}
//                 onChange={handleAddFiles}
//                 multiple
//               />
//             </Button>
//           </div>

//           <div className="mt-4">
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSubmit}
//               disabled={globalFiles.length === 0}
//             >
//               Submit All Files
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// import { useFileStore, useStore } from "./useFileStore"; // Zustand Store for Global State

// function Attachment({ rowId }) {
//   console.log(
//     rowId,
//     "rrrrrrrrrrrrrrrrrrrrrrrrooooooooooooooowwwwwwwwwwwwiiiiiiiidddddddddddd"
//   );
//   const employeeId = 2;

//   const { addItDecId, itDecId } = useFileStore();

//   // useEffect(() => {
//   //   // Add rowId to the itDecId list
//   //   addItDecId(rowId);

//   //   // Debug log
//   //   console.log("Row ID added:", rowId);
//   //   console.log("Updated itDecId list:", itDecId);
//   // }, [addItDecId]);

//   console.log(itDecId, "itDecId*******************************");

//   // Access global state using Zustand
//   const globalFiles = useFileStore((state) => state.files); // Global files
//   const globalITDECID = useFileStore((state) => state.itDecId); // Global files
//   const addFiles = useFileStore((state) => state.addFiles); // Add files globally
//   const removeFile = useFileStore((state) => state.removeFile); // Remove files globally
//   const clearFiles = useFileStore((state) => state.clearFiles); // Clear files globally

//   console.log(
//     globalFiles,
//     "globalFiles))))))))))))))))))))))))))))globalFiles"
//   );

//   const [localFiles, setLocalFiles] = useState([]); // Local files for the current attachment
//   const [flag, setFlag] = useState(true); // Visibility toggle

//   // // Handle file addition
//   // const handleAddFiles = (e) => {
//   //   const newFiles = Array.from(e.target.files).map((file) => ({
//   //     name: file.name,
//   //     file: file,
//   //   }));
//   //   setLocalFiles((prev) => [...prev, ...newFiles]); // Append to local files
//   //   addFiles(newFiles); // Add to global state
//   // };
//   // const handleAddFiles = (e, rowId) => {
//   //   const newFiles = Array.from(e.target.files).map((file) => ({
//   //     name: file.name,
//   //     file: file,
//   //   }));

//   //   // Update local files state
//   //   setLocalFiles((prev) => [...prev, ...newFiles]);

//   //   // Update global state with new files
//   //   addFiles(newFiles);

//   //   // // Add the row ID to the list corresponding to the number of files uploaded
//   //   // const rowIdEntries = Array(newFiles.length).fill(rowId);
//   //   // addItDecId((prev) => [...prev, ...rowIdEntries]); // Add to global `itDecId`
//   //   addItDecId(); // Add to global `itDecId`

//   //   console.log("Files added:", newFiles);
//   //   console.log("Updated itDecId:", itDecId);
//   // };

//   const handleAddFiles = (e, rowId) => {
//     // Get the files that were selected
//     const newFiles = Array.from(e.target.files).map((file) => ({
//       name: file.name,
//       file: file,
//     }));

//     // Update local state with new files
//     setLocalFiles((prev) => [...prev, ...newFiles]);

//     // Add new files to the global state
//     addFiles(newFiles);

//     // Add the rowId to the itDecId list for each file uploaded
//     const rowIdEntries = Array(newFiles.length).fill(rowId); // Correctly fill the rowId for each file

//     // Update the itDecId state to include the rowId for each file uploaded
//     addItDecId((prev) => [...prev, ...rowIdEntries]);

//     console.log("Files added:", newFiles);
//     console.log("Updated itDecId list:", itDecId); // This should now show the correct rowId values
//   };

//   // Handle file removal from local state
//   const handleRemoveFile = (index) => {
//     const removedFile = localFiles[index];
//     setLocalFiles((prev) => prev.filter((_, i) => i !== index)); // Update local state
//     removeFile(removedFile.name); // Remove from global state using unique file name
//   };

//   // // Global Submit Handler
//   // const handleSubmit = () => {
//   //   if (globalFiles.length === 0) {
//   //     console.error("No files to upload");
//   //     return;
//   //   }

//   //   const formData = new FormData();
//   //   globalFiles.forEach((fileObj) => {
//   //     formData.append("files", fileObj.file); // Append files to FormData
//   //     // formData.append("itDecId", rowId); // Append rowId to FormData for each file
//   //     console.log(`Uploading file: ${fileObj.name}`); // Log the rowId with file details
//   //   });

//   //   globalITDECID.forEach((itDecIdObj) => {
//   //     // formData.append("files", fileObj.file); // Append files to FormData
//   //     formData.append("itDecId", itDecIdObj.rowId); // Append rowId to FormData for each file
//   //     console.log(`rowId: ${rowId}`); // Log the rowId with file details
//   //   });

//   //   alert("file called");

//   //   axios
//   //     .post(
//   //       `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
//   //       formData,
//   //       {
//   //         headers: {
//   //           "Content-Type": "multipart/form-data",
//   //         },
//   //       }
//   //     )
//   //     .then((response) => {
//   //       console.log("Files uploaded successfully:", response.data);
//   //       // clearFiles(); // Clear global state after upload
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error uploading files:", error);
//   //     });
//   // };

//   // Global Submit Handler
//   const handleSubmit = () => {
//     if (globalFiles.length === 0) {
//       console.error("No files to upload");
//       return;
//     }

//     const formData = new FormData();

//     // Append all files to FormData
//     globalFiles.forEach((fileObj) => {
//       formData.append("files", fileObj.file); // Attach file objects
//     });

//     // Append all itDecId values to FormData
//     globalITDECID.forEach((id) => {
//       formData.append("itDecId", id); // Attach each itDecId
//     });

//     // Debugging: Check FormData contents
//     for (const pair of formData.entries()) {
//       console.log(`${pair[0]}:`, pair[1]);
//     }

//     alert("Submitting files...");

//     // Axios POST request
//     axios
//       .post(
//         `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       )
//       .then((response) => {
//         console.log("Files uploaded successfully:", response.data);
//         clearFiles(); // Clear global state after successful upload
//       })
//       .catch((error) => {
//         console.error("Error uploading files:", error);
//       });
//   };

//   // Hide attachment section
//   const handleOff = () => {
//     setFlag(false);
//   };

//   const { submitFileStatus } = useStore();

//   useEffect(() => {
//     if (submitFileStatus === "true") {
//       handleSubmit();
//     }
//   }, [submitFileStatus]);

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex space-x-10 justify-between items-center">
//             <div className="font-semibold">
//               Attachments ({globalFiles.length})
//             </div>
//             <ImCross onClick={handleOff} className="cursor-pointer" />
//           </div>
//           <div className="border-b-2 border-gray-500 mb-4"></div>
//           <div>
//             {localFiles.map((file, index) => (
//               <div key={index} className="flex space-x-10 items-center mb-2">
//                 <span>{file.name}</span>
//                 <BsTrash
//                   onClick={() => handleRemoveFile(index)}
//                   className="text-xl cursor-pointer text-red-500"
//                 />
//               </div>
//             ))}
//             <Button
//               component="label"
//               variant="outlined"
//               startIcon={<ImAttachment />}
//             >
//               Add Files
//               <input
//                 type="file"
//                 style={{ display: "none" }}
//                 onChange={handleAddFiles}
//                 multiple
//               />
//             </Button>
//           </div>

//           <div className="mt-4">
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSubmit}
//               disabled={globalFiles.length === 0}
//             >
//               Submit All Files
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// import { useFileStore, useStore } from "./useFileStore"; // Zustand Store for Global State

// function Attachment({ rowId }) {
//   const employeeId = 2;

//   const { addItDecId, itDecId } = useFileStore();
//   const globalFiles = useFileStore((state) => state.files); // Global files
//   const globalITDECID = useFileStore((state) => state.itDecId); // Global files
//   const addFiles = useFileStore((state) => state.addFiles); // Add files globally
//   const removeFile = useFileStore((state) => state.removeFile); // Remove files globally
//   const clearFiles = useFileStore((state) => state.clearFiles); // Clear files globally

//   const [localFiles, setLocalFiles] = useState([]); // Local files for the current attachment
//   const [flag, setFlag] = useState(true); // Visibility toggle
//   const [rowClicked, setRowClicked] = useState(false); // Track if the row has been clicked

//   const [currentData, setCurrentData] = useState(0);

//   useEffect(() => {
//     setCurrentData(rowId);
//   }, [rowId]);

//   console.log(rowClicked, "rowClicked");

//   console.log(
//     globalFiles,
//     "globalFiles))))))))))))))))))))))))))))globalFiles"
//   );

//   console.log(
//     globalITDECID,
//     "globalITDECID))))))))))))))))))))))))))))globalITDECID"
//   );

//   const handleAddFiles = (e, rowId) => {
//     // Get the files that were selected
//     const newFiles = Array.from(e.target.files).map((file) => ({
//       name: file.name,
//       file: file,
//     }));

//     // Update local state with new files
//     setLocalFiles((prev) => [...prev, ...newFiles]);

//     // Add new files to the global state
//     addFiles(newFiles);

//     console.log(
//       rowId,
//       "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&rrrrrrrrrrrrrrrrrrrrrrrrrrrr"
//     );

//     addItDecId(rowId);

//     // // Handle adding the rowId to itDecId list
//     // if (!rowClicked) {
//     //   // Add the rowId once the first time the button is clicked
//     //   addItDecId((prev) => [...prev, rowId]);
//     //   setRowClicked(true); // Mark that the row has been clicked
//     // } else {
//     //   console.log(rowId, "+++++++++++++++++++(((((((((");
//     //   console.log(typeof rowId, "+++++++++++++++++++(((((((((");
//     //   // If the row is clicked again, add the rowId for each new file uploaded
//     //   const rowIdEntries = Array(newFiles.length - 1).fill(rowId); // Add one less time (since we already added once)
//     //   addItDecId(rowIdEntries);
//     // }

//     console.log("Files added:", newFiles);
//     console.log("Updated itDecId list:", itDecId); // This should now show the correct rowId values
//   };

//   // Handle file removal from local state
//   const handleRemoveFile = (index) => {
//     const removedFile = localFiles[index];
//     setLocalFiles((prev) => prev.filter((_, i) => i !== index)); // Update local state
//     removeFile(removedFile.name); // Remove from global state using unique file name
//   };

//   // Global Submit Handler
//   const handleSubmit = () => {
//     if (globalFiles.length === 0) {
//       console.error("No files to upload");
//       return;
//     }

//     const formData = new FormData();

//     // Append all files to FormData
//     globalFiles.forEach((fileObj) => {
//       formData.append("files", fileObj.file); // Attach file objects
//     });

//     // Append all itDecId values to FormData
//     globalITDECID.forEach((id) => {
//       formData.append("itDecId", id); // Attach each itDecId
//     });

//     // Debugging: Check FormData contents
//     for (const pair of formData.entries()) {
//       console.log(`${pair[0]}:`, pair[1]);
//     }

//     alert("Submitting files...");

//     // Axios POST request
//     axios
//       .post(
//         `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       )
//       .then((response) => {
//         console.log("Files uploaded successfully:", response.data);
//         clearFiles(); // Clear global state after successful upload
//       })
//       .catch((error) => {
//         console.error("Error uploading files:", error);
//       });
//   };

//   // Hide attachment section
//   const handleOff = () => {
//     setFlag(false);
//   };

//   const { submitFileStatus } = useStore();

//   useEffect(() => {
//     if (submitFileStatus === "true") {
//       handleSubmit();
//     }
//   }, [submitFileStatus]);

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex space-x-10 justify-between items-center">
//             <div className="font-semibold">
//               Attachments ({globalFiles.length})
//             </div>
//             <ImCross onClick={handleOff} className="cursor-pointer" />
//           </div>
//           <div className="border-b-2 border-gray-500 mb-4"></div>
//           <div>
//             {localFiles.map((file, index) => (
//               <div key={index} className="flex space-x-10 items-center mb-2">
//                 <span>{file.name}</span>
//                 <BsTrash
//                   onClick={() => handleRemoveFile(index)}
//                   className="text-xl cursor-pointer text-red-500"
//                 />
//               </div>
//             ))}
//             <Button
//               component="label"
//               variant="outlined"
//               startIcon={<ImAttachment />}
//             >
//               Add Files
//               <input
//                 type="file"
//                 style={{ display: "none" }}
//                 onChange={(e) => handleAddFiles(e, rowId)}
//                 multiple
//               />
//             </Button>
//           </div>

//           <div className="mt-4">
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleSubmit}
//               disabled={globalFiles.length === 0}
//             >
//               Submit All Files
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// =================================================================================================

import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { ImAttachment, ImCross } from "react-icons/im";
import { useFileStore, useStore } from "./useFileStore"; // Zustand Store for Global State

function Attachment({ rowId }) {
  const employeeId = 2;

  const { addItDecId, itDecId } = useFileStore();
  const globalFiles = useFileStore((state) => state.files); // Global files
  const globalITDECID = useFileStore((state) => state.itDecId); // Global files
  const addFiles = useFileStore((state) => state.addFiles); // Add files globally
  const removeFile = useFileStore((state) => state.removeFile); // Remove files globally
  const clearFiles = useFileStore((state) => state.clearFiles); // Clear files globally

  const [localFiles, setLocalFiles] = useState([]); // Local files for the current attachment
  const [flag, setFlag] = useState(true); // Visibility toggle
  const [rowClicked, setRowClicked] = useState(false); // Track if the row has been clicked

  console.log(rowClicked, "rowClicked");

  console.log(
    globalFiles,
    "globalFiles))))))))))))))))))))))))))))globalFiles"
  );

  console.log(
    globalITDECID,
    "globalITDECID))))))))))))))))))))))))))))globalITDECID"
  );

  const handleAddFiles = (e, rowId) => {
    // Get the files that were selected
    const newFiles = Array.from(e.target.files).map((file) => ({
      name: file.name,
      file: file,
    }));

    // Update local state with new files
    setLocalFiles((prev) => [...prev, ...newFiles]);

    // Add new files to the global state
    addFiles(newFiles);

    console.log(
      rowId,
      "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&rrrrrrrrrrrrrrrrrrrrrrrrrrrr"
    );

    addItDecId(rowId);

    console.log("Files added:", newFiles);
    console.log("Updated itDecId list:", itDecId); // This should now show the correct rowId values
  };

  // Handle file removal from local state
  const handleRemoveFile = (index) => {
    const removedFile = localFiles[index];
    setLocalFiles((prev) => prev.filter((_, i) => i !== index)); // Update local state
    removeFile(removedFile.name); // Remove from global state using unique file name
  };

  // Global Submit Handler
  const handleSubmit = () => {
    if (globalFiles.length === 0) {
      console.error("No files to upload");
      return;
    }

    const formData = new FormData();

    // Append all files to FormData
    globalFiles.forEach((fileObj) => {
      formData.append("files", fileObj.file); // Attach file objects
    });

    // Append all itDecId values to FormData
    globalITDECID.forEach((id) => {
      formData.append("itDecId", id); // Attach each itDecId
    });

    // Debugging: Check FormData contents
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    alert("Submitting files...");

    // Axios POST request
    axios
      .post(
        `http://localhost:8080/it-declaration-file/upload/${employeeId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log("Files uploaded successfully:", response.data);
        clearFiles(); // Clear global state after successful upload
      })
      .catch((error) => {
        console.error("Error uploading files:", error);
      });
  };

  // Hide attachment section
  const handleOff = () => {
    setFlag(false);
  };

  const { submitFileStatus } = useStore();

  useEffect(() => {
    if (submitFileStatus === "true") {
      handleSubmit();
    }
  }, [submitFileStatus]);

  return (
    <div>
      {flag && (
        <div className="w-full border-[1px] border-black p-2">
          <div className="flex space-x-10 justify-between items-center">
            <div className="font-semibold">
              Attachments ({globalFiles.length})
            </div>
            <ImCross onClick={handleOff} className="cursor-pointer" />
          </div>
          <div className="border-b-2 border-gray-500 mb-4"></div>
          <div>
            {localFiles.map((file, index) => (
              <div key={index} className="flex space-x-10 items-center mb-2">
                <span>{file.name}</span>
                <BsTrash
                  onClick={() => handleRemoveFile(index)}
                  className="text-xl cursor-pointer text-red-500"
                />
              </div>
            ))}
            <Button
              component="label"
              variant="outlined"
              startIcon={<ImAttachment />}
            >
              Add Files
              <input
                type="file"
                style={{ display: "none" }}
                onChange={(e) => handleAddFiles(e, rowId)}
                multiple
              />
            </Button>
          </div>

          <div className="mt-4">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={globalFiles.length === 0}
            >
              Submit All Files
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Attachment;
