// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import React, { useState } from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";
// function Attachment() {
//   const [infoList, setInfoList] = useState([{ name: "" }]); // State to store the list of objects

//   const handleAddName = () => {
//     setInfoList([...infoList, { name: "" }]); // Add an empty object to the infoList
//   };

//   const handleRemoveName = (index) => {
//     const updatedList = [...infoList]; // Create a copy of the current list
//     updatedList.splice(index, 1); // Remove the item at the specified index
//     setInfoList(updatedList); // Update the infoList state
//   };

//   console.log(infoList, "infoList");

//   const handleChange = (e, index) => {
//     const { name, value } = e.target;
//     // Update the object at the specified index in the infoList
//     const updatedList = infoList.map((item, i) =>
//       i === index ? { ...item, [name]: value } : item
//     );
//     setInfoList(updatedList); // Update the infoList state
//   };

//   const VisuallyHiddenInput = styled("input")({
//     clip: "rect(0 0 0 0)",
//     clipPath: "inset(50%)",
//     height: 1,
//     overflow: "hidden",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     whiteSpace: "nowrap",
//     width: 1,
//   });

//   let c = 0;

//   for (let i in infoList) {
//     console.log(infoList[i].name, "i");
//     if (infoList[i].name != "") {
//       console.log(i.name, "p");
//       c += 1;
//     }
//   }

//   console.log(c, "c");

//   const [flag, setFlag] = useState(true);
//   const handleOff = () => {
//     setFlag(false);
//   };

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex justify-between">
//             <div className="font-semibold">Attachments ({c})</div>
//             <ImCross onClick={() => handleOff()} />
//           </div>

//           <div className="border-b-2 border-gray-500"></div>
//           <div className="">
//             {infoList.map((item, index) => (
//               <div key={index}>
//                 <div className="flex space-x-10 items-center">
//                   <Button
//                     component="label"
//                     startIcon={<ImAttachment className="outline-none" />}
//                   >
//                     Upload file{item.name}
//                     <VisuallyHiddenInput
//                       type="file"
//                       name="name"
//                       onChange={(e) => handleChange(e, index)}
//                     />
//                   </Button>
//                   {item.name != "" && (
//                     <BsTrash
//                       onClick={() => handleRemoveName(index)}
//                       className="text-xl"
//                     />
//                   )}
//                 </div>
//               </div>
//             ))}

//             {c > 0 && (
//               <button onClick={handleAddName}>Add More Attachments</button>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import React, { useState } from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";

// function Attachment() {
//   const [infoList, setInfoList] = useState([{ name: "" }]); // State to store the list of objects
//   const [flag, setFlag] = useState(true); // Flag to control the visibility of the attachment section

//   // Function to handle adding files
//   const handleAddFiles = (e) => {
//     const files = e.target.files; // Get the uploaded files
//     const newFiles = Array.from(files).map((file) => ({
//       name: file.name, // Store the name of each file
//     }));
//     setInfoList((prevInfoList) => [...prevInfoList, ...newFiles]); // Add the new files to the infoList
//   };

//   const handleRemoveName = (index) => {
//     const updatedList = [...infoList]; // Create a copy of the current list
//     updatedList.splice(index, 1); // Remove the item at the specified index
//     setInfoList(updatedList); // Update the infoList state
//   };

//   const handleOff = () => {
//     setFlag(false);
//   };

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex justify-between">
//             <div className="font-semibold">Attachments ({infoList.length})</div>
//             <ImCross onClick={handleOff} />
//           </div>
//           <div className="border-b-2 border-gray-500"></div>
//           <div className="">
//             {infoList.map((item, index) => (
//               <div key={index}>
//                 <div className="flex space-x-10 items-center">
//                   <Button
//                     component="label"
//                     startIcon={<ImAttachment className="outline-none" />}
//                   >
//                     {item.name}
//                     <input
//                       type="file"
//                       style={{ display: "none" }}
//                       onChange={handleAddFiles}
//                       multiple // Allow multiple files to be selected
//                     />
//                   </Button>
//                   <BsTrash
//                     onClick={() => handleRemoveName(index)}
//                     className="text-xl"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import React, { useState } from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";

// function Attachment() {
//   const [infoList, setInfoList] = useState([{ name: "" }]);
//   const [initialUpload, setInitialUpload] = useState(false); // State to track initial upload

//   const handleAddFiles = (e) => {
//     const files = e.target.files;
//     const newFiles = Array.from(files).map((file) => ({
//       name: file.name,
//     }));
//     setInfoList((prevInfoList) => [...prevInfoList, ...newFiles]);
//     setInitialUpload(true); // Set initialUpload to true after first upload
//   };

//   const handleRemoveName = (index) => {
//     const updatedList = [...infoList];
//     updatedList.splice(index, 1);
//     setInfoList(updatedList);
//   };

//   const handleOff = () => {
//     setInitialUpload(false); // Reset initialUpload when closing attachment section
//   };

//   return (
//     <div>
//       <div className="w-full border-[1px] border-black p-2">
//         <div className="flex justify-between">
//           <div className="font-semibold">Attachments ({infoList.length})</div>
//           <ImCross onClick={handleOff} />
//         </div>
//         <div className="border-b-2 border-gray-500"></div>
//         <div className="">
//           {infoList.map((item, index) => (
//             <div key={index}>
//               <div className="flex space-x-10 items-center">
//                 <Button
//                   component="label"
//                   startIcon={<ImAttachment className="outline-none" />}
//                 >
//                   {item.name ? item.name : "Upload file"}
//                   <input
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={handleAddFiles}
//                     multiple
//                   />
//                 </Button>
//                 {index > 0 || initialUpload ? (
//                   <BsTrash
//                     onClick={() => handleRemoveName(index)}
//                     className="text-xl"
//                   />
//                 ) : null}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import React, { useState } from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";

// function Attachment() {
//   const [infoList, setInfoList] = useState([{ name: "" }]);
//   const [initialUpload, setInitialUpload] = useState(false); // State to track initial upload

//   const handleAddFiles = (e) => {
//     const files = e.target.files;
//     const newFiles = Array.from(files).map((file) => ({
//       name: file.name,
//     }));
//     setInfoList((prevInfoList) => [...prevInfoList, ...newFiles]);
//     setInitialUpload(true); // Set initialUpload to true after first upload
//   };

//   const handleRemoveName = (index) => {
//     const updatedList = [...infoList];
//     updatedList.splice(index, 1);
//     setInfoList(updatedList);
//   };

//   const handleOff = () => {
//     setInitialUpload(false); // Reset initialUpload when closing attachment section
//   };

//   console.log(infoList, "infoList");

//   return (
//     <div>
//       <div className="w-full border-[1px] border-black p-2">
//         <div className="flex justify-between">
//           <div className="font-semibold">Attachments ({infoList.length})</div>
//           <ImCross onClick={handleOff} />
//         </div>
//         <div className="border-b-2 border-gray-500"></div>
//         <div className="">
//           {infoList.map((item, index) => (
//             <div key={index}>
//               <div className="flex space-x-10 items-center">
//                 <Button
//                   component="label"
//                   startIcon={<ImAttachment className="outline-none" />}
//                 >
//                   {item.name ? item.name : "Upload file"}
//                   <input
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={handleAddFiles}
//                     multiple
//                   />
//                 </Button>
//                 {((infoList.length > 1 && index > 0) ||
//                   (index === 0 && initialUpload)) && (
//                   <BsTrash
//                     onClick={() => handleRemoveName(index)}
//                     className="text-xl"
//                   />
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Attachment;

// import { Button } from "@mui/material";
// import React, { useState } from "react";
// import { BsTrash } from "react-icons/bs";
// import { ImAttachment, ImCross } from "react-icons/im";

// function Attachment() {
//   const [files, setFiles] = useState([]);

//   console.log(files, "files");

//   const handleAddFiles = (e) => {
//     const fileList = Array.from(e.target.files).map((file, index) => ({
//       name: `${file.name} (${index + 1})`, // Appending numerical index to the file name
//       file: file,
//     }));
//     setFiles((prevFiles) => [...prevFiles, ...fileList]);
//   };

//   const handleRemoveFile = (index) => {
//     const updatedFiles = [...files];
//     updatedFiles.splice(index, 1);
//     setFiles(updatedFiles);
//   };

//   const [flag, setFlag] = useState(true);
//   const handleOff = () => {
//     //setFiles([]); // Clear files when closing attachment section
//     setFlag(false);
//   };

//   return (
//     <div>
//       {flag && (
//         <div className="w-full border-[1px] border-black p-2">
//           <div className="flex justify-between">
//             <div className="font-semibold">Attachments ({files.length})</div>
//             <ImCross onClick={handleOff} />
//           </div>
//           <div className="border-b-2 border-gray-500"></div>
//           <div className="">
//             {files.map((file, index) => (
//               <div key={index}>
//                 <div className="flex space-x-10 items-center">
//                   <Button
//                     component="label"
//                     startIcon={<ImAttachment className="outline-none" />}
//                   >
//                     {file.name}
//                     <input
//                       type="file"
//                       style={{ display: "none" }}
//                       onChange={handleAddFiles}
//                       multiple
//                     />
//                   </Button>
//                   <BsTrash
//                     onClick={() => handleRemoveFile(index)}
//                     className="text-xl"
//                   />
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

import { Button } from "@mui/material";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { ImAttachment, ImCross } from "react-icons/im";
import useFileStore from "./Zustand"; // Import the Zustand store

function Attachment() {
  const files = useFileStore((state) => state.files); // Access files state from the Zustand store
  const addFiles = useFileStore((state) => state.addFiles); // Access addFiles action from the Zustand store

  const handleAddFiles = (e) => {
    const fileList = Array.from(e.target.files).map((file, index) => ({
      name: `${file.name} (${index + 1})`,
      file: file,
    }));
    addFiles(fileList); // Update files state using the addFiles action
  };

  // const handleRemoveFile = (index) => {
  //   useFileStore.removeFile(index); // Remove file from the files state using the removeFile action
  //   console.log("hello...");
  // };

  // Function to remove a file
  const handleRemoveFile = (index) => {
    useFileStore.getState().removeFile(index); // Corrected usage to call removeFile within the hook context
    console.log("hello...");
  };

  const [flag, setFlag] = React.useState(true);
  const handleOff = () => {
    setFlag(false);
  };

  return (
    <div>
      {flag && (
        <div className="w-full border-[1px] border-black p-2">
          <div className="flex justify-between">
            <div className="font-semibold">Attachments ({files.length})</div>
            <ImCross onClick={handleOff} />
          </div>
          <div className="border-b-2 border-gray-500"></div>
          <div className="">
            {files.map((file, index) => (
              <div key={index}>
                <div className="flex space-x-10 items-center">
                  <Button
                    component="label"
                    startIcon={<ImAttachment className="outline-none" />}
                  >
                    {file.name}
                    <input
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleAddFiles}
                      multiple
                    />
                  </Button>
                  <BsTrash
                    onClick={() => handleRemoveFile(index)}
                    className="text-xl"
                  />
                </div>
              </div>
            ))}
            <div className="flex space-x-10 items-center">
              <Button
                component="label"
                startIcon={<ImAttachment className="outline-none" />}
              >
                Upload file
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleAddFiles}
                  multiple
                />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Attachment;
