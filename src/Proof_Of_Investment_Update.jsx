// import { Box, Checkbox, Modal } from "@mui/material";
// import React, { useState } from "react";
// import { ImCancelCircle } from "react-icons/im";
// import { useNavigate } from "react-router-dom";
// import { useLocalStorage } from "react-use";
// import Proof_Attach from "./Proof_Attach";
// import useFileStore from "./Zustand";
// useEffe
// function Proof_Of_Investment_Update() {
//   const [localProofDispSaveStatus, setLocalProofDispSaveStatus, remove] =
//     useLocalStorage("disp_proof_save_status", "false");

//   const [proofSubmitStatus, setProofSubmitStatus] = useLocalStorage(
//     "proof_submit_status",
//     "false"
//   );

//   const [proofReviseClicked, setProofReviseClicked] = useLocalStorage(
//     "proof_revise_click_status",
//     "false"
//   );

//   const [open, setOpen] = useState(false);
//   const { regime } = useFileStore();

//   const navigate = useNavigate();

//   const [checked, setChecked] = useState(false);

//   const handleChanges = (event) => {
//     setChecked(event.target.checked);
//   };

//   const handlePOIUpdate = () => {
//     setLocalProofDispSaveStatus("false");
//     setProofSubmitStatus("false");
//     setProofReviseClicked("true");
//     navigate("/display-proof-of-investment");
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
//     height: 320,
//     "@media (max-width: 768px)": {
//       width: "90%",
//       height: 420, // Adjusted width for screens below the 'md' breakpoint
//     },
//   };

//   const handleSubmitFunction = () => {
//     setSubmitStatusForProofOfInvestment();
//     //getSubmitStatusForProofOfInvestment();
//   };

//   const setSubmitStatusForProofOfInvestment = () => {
//     axios
//       .get(
//         "http://localhost:8080/proof-of-investment/set-submit-status-proof/2/2024-2025"
//       )
//       .then((res) => {
//         getSubmitStatusForProofOfInvestment();
//       });
//   };

//   const [proofOfInvestmentSubmitStatus, setProofOfInvestmentSubmitStatus] =
//     useState("false");
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
//     <div>
//       <div className="grid lg:grid-cols-12 px-4 ">
//         <div className="lg:col-span-10">
//           <Proof_Attach />
//         </div>
//         <div className="lg:col-span-2  -ml-20 mt-[242px] border-b-[1px] border-l-[1px] border-r-[1px] md:border-t-[1px] border-t-[1px] border-gray-400 md:h-[500px] h-[400px] shadow-2xl">
//           {/* <div className="col-span-9 lg:col-span-2 border-b-[1px] border-l-[1px] border-r-[1px] md:border-t-[0px] border-t-[1px] border-gray-400 md:h-[500px] h-[400px] shadow-2xl"> */}
//           <div className="">
//             <h2 className="font-semibold text-lg ml-6 mt-5">POI Status</h2>

//             <div className="flex justify-center">
//               <div className="bg-green-500 font-semibold  w-[200px] text-center text-lg mt-5 p-2 cursor-not-allowed">
//                 Awaiting For Approval
//               </div>
//             </div>
//             <h2 className="mt-5 text-gray-500 font-semibold lg:text-lg text-lg md:text-2xl px-4  text-center ">
//               You have submitted IT Declaration as per the {regime}
//             </h2>

//             <div className="flex justify-center">
//               <div
//                 className="bg-blue-500 font-semibold  text-center  text-xl mt-5 w-[230px] p-2 text-white cursor-pointer"
//                 onClick={() => {
//                   setOpen(true);
//                   handleSubmitFunction();
//                 }}
//               >
//                 Edit POI
//               </div>
//             </div>

//             <h2 className="mt-5 text-gray-500 font-semibold lg:text-lg text-lg md:text-2xl pl-4 md:text-center">
//               You can still make a changes and resubmit for the review while the
//               window is still open
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div>
//         <Modal open={open} onClose={() => setOpen(false)}>
//           <Box sx={style}>
//             <div
//               onClick={() => setOpen(false)}
//               style={{
//                 cursor: "pointer",
//                 fontSize: "30px",
//                 backgroundColor: "blue",
//               }}
//             >
//               <ImCancelCircle className="float-end" />
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 gap: 80,
//                 alignItems: "center",
//                 marginTop: "80px",
//               }}
//             >
//               <h3 className="text-xl font-semibold text-gray-800 md:ml-[60px] ml-7">
//                 Are you sure you want to withdraw the already submitted POI ?
//                 you can revise your POI while the window is Open
//               </h3>
//             </div>

//             <div className="flex space-x-4 items-center ml-12">
//               <Checkbox
//                 checked={checked}
//                 onChange={handleChanges}
//                 size="large"
//               />
//               <h2 className="font-semibold text-gray-700 text-lg">I agree</h2>
//             </div>

//             <h2 sx={{ mt: 8 }} className="space-x-10 text-center mt-7">
//               {checked ? (
//                 <button
//                   className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2"
//                   onClick={handlePOIUpdate}
//                 >
//                   Revise
//                 </button>
//               ) : (
//                 <button className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2">
//                   Revise
//                 </button>
//               )}

//               <button
//                 className="bg-blue-800 px-4 py-2 text-white font-medium tracking-wide"
//                 onClick={() => setOpen(false)}
//               >
//                 Cancel
//               </button>
//             </h2>
//           </Box>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default Proof_Of_Investment_Update;

// import { Box, Checkbox, Modal } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import { ImCancelCircle } from "react-icons/im";
// import { useNavigate } from "react-router-dom";
// import { useLocalStorage } from "react-use";
// import Proof_Attach from "./Proof_Attach";
// import useFileStore from "./Zustand";

// function Proof_Of_Investment_Update() {
//   const [localProofDispSaveStatus, setLocalProofDispSaveStatus, remove] =
//     useLocalStorage("disp_proof_save_status", "false");

//   const [proofSubmitStatus, setProofSubmitStatus] = useLocalStorage(
//     "proof_submit_status",
//     "false"
//   );

//   const [proofReviseClicked, setProofReviseClicked] = useLocalStorage(
//     "proof_revise_click_status",
//     "false"
//   );

//   const [open, setOpen] = useState(false);
//   const { regime } = useFileStore();

//   const navigate = useNavigate();

//   const [checked, setChecked] = useState(false);

//   const handleChanges = (event) => {
//     setChecked(event.target.checked);
//   };

//   const setSaveStatus80Function = () => {
//     axios
//       .get(
//         "http://localhost:8080/proof-of-investment/set-status-proof/2/2024-2025/false"
//       )
//       .then((res) => {
//         alert("save  status changed");
//         setSubmitStatusForProofOfInvestment();
//       });
//   };

//   const setSubmitStatusForProofOfInvestment = () => {
//     axios
//       .get(
//         "http://localhost:8080/proof-of-investment/set-submit-status-proof/2/2024-2025/false"
//       )
//       .then((res) => {
//         navigate("/display-proof-of-investment");
//       });
//   };

//   const handlePOIUpdate = () => {
//     // setLocalProofDispSaveStatus("false");
//     // setProofSubmitStatus("false");
//     // setProofReviseClicked("true");

//     setSaveStatus80Function();
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
//     height: 320,
//     "@media (max-width: 768px)": {
//       width: "90%",
//       height: 420, // Adjusted width for screens below the 'md' breakpoint
//     },
//   };

//   return (
//     <div>
//       <div className="grid lg:grid-cols-12 px-2 ">
//         <div className="lg:col-span-10 ">
//           <Proof_Attach />
//         </div>
//         <div className="lg:col-span-2  -ml-20 mt-[242px] border-b-[1px] border-l-[1px] border-r-[1px] md:border-t-[1px] border-t-[1px] border-gray-400 md:h-[500px] h-[400px] shadow-2xl">
//           {/* <div className="col-span-9 lg:col-span-2 border-b-[1px] border-l-[1px] border-r-[1px] md:border-t-[0px] border-t-[1px] border-gray-400 md:h-[500px] h-[400px] shadow-2xl"> */}
//           <div className="">
//             <h2 className="font-semibold text-lg ml-6 mt-5">POI Status</h2>

//             <div className="flex justify-center">
//               <div className="bg-green-500 font-semibold  w-[200px] text-center text-lg mt-5 p-2 cursor-not-allowed">
//                 Awaiting For Approval
//               </div>
//             </div>
//             <h2 className="mt-5 text-gray-500 font-semibold lg:text-lg text-lg md:text-2xl px-4  text-center ">
//               You have submitted IT Declaration as per the {regime}
//             </h2>

//             <div className="flex justify-center">
//               <div
//                 className="bg-blue-500 font-semibold  text-center  text-xl mt-5 w-[230px] p-2 text-white cursor-pointer"
//                 onClick={() => {
//                   setOpen(true);
//                 }}
//               >
//                 Edit POI
//               </div>
//             </div>

//             <h2 className="mt-5 text-gray-500 font-semibold lg:text-lg text-lg md:text-2xl pl-4 md:text-center">
//               You can still make a changes and resubmit for the review while the
//               window is still open
//             </h2>
//           </div>
//         </div>
//       </div>

//       <div>
//         <Modal open={open} onClose={() => setOpen(false)}>
//           <Box sx={style}>
//             <div
//               onClick={() => setOpen(false)}
//               style={{
//                 cursor: "pointer",
//                 fontSize: "30px",
//                 backgroundColor: "blue",
//               }}
//             >
//               <ImCancelCircle className="float-end" />
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 gap: 80,
//                 alignItems: "center",
//                 marginTop: "80px",
//               }}
//             >
//               <h3 className="text-xl font-semibold text-gray-800 md:ml-[60px] ml-7">
//                 Are you sure you want to withdraw the already submitted POI ?
//                 you can revise your POI while the window is Open
//               </h3>
//             </div>

//             <div className="flex space-x-4 items-center ml-12">
//               <Checkbox
//                 checked={checked}
//                 onChange={handleChanges}
//                 size="large"
//               />
//               <h2 className="font-semibold text-gray-700 text-lg">I agree</h2>
//             </div>

//             <h2 sx={{ mt: 8 }} className="space-x-10 text-center mt-7">
//               {checked ? (
//                 <button
//                   className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2"
//                   onClick={handlePOIUpdate}
//                 >
//                   Revise
//                 </button>
//               ) : (
//                 <button className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2">
//                   Revise
//                 </button>
//               )}

//               <button
//                 className="bg-blue-800 px-4 py-2 text-white font-medium tracking-wide"
//                 onClick={() => setOpen(false)}
//               >
//                 Cancel
//               </button>
//             </h2>
//           </Box>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default Proof_Of_Investment_Update;

import { Box, Checkbox, Modal } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Proof_Attach from "./Proof_Attach";
import useFileStore from "./Zustand";

function Proof_Of_Investment_Update() {
  const [open, setOpen] = useState(false);
  const { regime } = useFileStore();

  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const handleChanges = (event) => {
    setChecked(event.target.checked);
  };

  const setSaveStatus80Function = () => {
    axios
      .get(
        "http://localhost:8080/proof-of-investment/set-status-proof/2/2024-2025/false"
      )
      .then((res) => {
        alert("save  status changed");
        setSubmitStatusForProofOfInvestment();
      });
  };

  const setSubmitStatusForProofOfInvestment = () => {
    axios
      .get(
        "http://localhost:8080/proof-of-investment/set-submit-status-proof/2/2024-2025/false"
      )
      .then((res) => {
        navigate("/display-proof-of-investment");
      });
  };

  const handlePOIUpdate = () => {
    setSaveStatus80Function();
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
    height: 320,
    "@media (max-width: 768px)": {
      width: "90%",
      height: 420,
    },
  };

  return (
    <div>
      <div className="grid lg:grid-cols-12 px-2 ">
        <div className="lg:col-span-10 ">
          <Proof_Attach />
        </div>
        <div className="lg:col-span-2  -ml-20 mt-[242px] border-b-[1px] border-l-[1px] border-r-[1px] md:border-t-[1px] border-t-[1px] border-gray-400 md:h-[500px] h-[400px] shadow-2xl">
          {/* <div className="col-span-9 lg:col-span-2 border-b-[1px] border-l-[1px] border-r-[1px] md:border-t-[0px] border-t-[1px] border-gray-400 md:h-[500px] h-[400px] shadow-2xl"> */}
          <div className="">
            <h2 className="font-semibold text-lg ml-6 mt-5">POI Status</h2>

            <div className="flex justify-center">
              <div className="bg-green-500 font-semibold  w-[200px] text-center text-lg mt-5 p-2 cursor-not-allowed">
                Awaiting For Approval
              </div>
            </div>
            <h2 className="mt-5 text-gray-500 font-semibold lg:text-lg text-lg md:text-2xl px-4  text-center ">
              You have submitted IT Declaration as per the {regime}
            </h2>

            <div className="flex justify-center">
              <div
                className="bg-blue-500 font-semibold  text-center  text-xl mt-5 w-[230px] p-2 text-white cursor-pointer"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Edit POI
              </div>
            </div>

            <h2 className="mt-5 text-gray-500 font-semibold lg:text-lg text-lg md:text-2xl pl-4 md:text-center">
              You can still make a changes and resubmit for the review while the
              window is still open
            </h2>
          </div>
        </div>
      </div>

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
                gap: 80,
                alignItems: "center",
                marginTop: "80px",
              }}
            >
              <h3 className="text-xl font-semibold text-gray-800 md:ml-[60px] ml-7">
                Are you sure you want to withdraw the already submitted POI ?
                you can revise your POI while the window is Open
              </h3>
            </div>

            <div className="flex space-x-4 items-center ml-12">
              <Checkbox
                checked={checked}
                onChange={handleChanges}
                size="large"
              />
              <h2 className="font-semibold text-gray-700 text-lg">I agree</h2>
            </div>

            <h2 sx={{ mt: 8 }} className="space-x-10 text-center mt-7">
              {checked ? (
                <button
                  className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2"
                  onClick={handlePOIUpdate}
                >
                  Revise
                </button>
              ) : (
                <button className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2">
                  Revise
                </button>
              )}

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
    </div>
  );
}

export default Proof_Of_Investment_Update;
