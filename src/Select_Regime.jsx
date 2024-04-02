// import Checkbox from '@mui/material/Checkbox';
// import React, { useState } from 'react';
// import { Checkmark } from 'react-checkmark';
// import { FaArrowLeft } from "react-icons/fa";
// import { HiOutlineInformationCircle } from "react-icons/hi2";

// function Select_Regime() {

//     const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
//     const [flag,setFlag]=useState(false);
//      const [flag1,setFlag1]=useState(false);

//     const handleTick=()=>{
//          setFlag(!flag);
//     }

//     const handle1Tick=()=>{
//         setFlag1(!flag);
//    }

//   return (
//     <div className='mt-10'>
//        <div className='flex'>
//         <div className='flex space-x-5 items-center px-4'>
//             <div className='text-gray-400 text-xl ml-4'>
//             <FaArrowLeft />
//             </div>
//             <div className='text-gray-400 font-semibold text-2xl'>
//                IT Declaration
//             </div>
//             </div>
//             <div className='border-r-2 border-gray-500 h-9'></div>

//             <div className='text-gray-700 font-semibold text-2xl ml-5'>
//                Select Regime
//             </div>
//         </div>

//         <div className='border-b-[2px] border-gray-300  px-4'></div>

//         <div>

//             <h2 className='text-center text-2xl font-semibold text-gray-600 mt-7'>Select any of the Regime before you Click Submit</h2>
//             <h2 className='text-center mt-2 text-gray-600 font-medium'>By Default Old Regime will be selected, you can change the Regime by selecting below</h2>

//             <div className='flex mt-8 ml-[500px] space-x-10'>
//                 <div className='flex space-x-3 items-center border-2 border-blue-700 p-4 rounded-xl shadow-md shadow-slate-900' onClick={handle1Tick}>
// <div className='text-2xl'>
// {flag==true? <Checkmark size='128px' color='blue' />: <HiOutlineInformationCircle />}
// </div>
// <div className='text-xl'>
//     Old Regime
// </div>
//                 </div>

//                 <div className='flex space-x-3 items-center shadow-[inset_0_4px_4px_rgba(0,0,0,0.6)] p-4 rounded-xl border-[1px] border-black  shadow-slate-900 shadow-md shadow-slate-900' onClick={handleTick}>

//                     <div className='text-2xl'>

//                         {flag==true? <Checkmark size='128px' color='blue' />: <HiOutlineInformationCircle />}

//                     </div>

//                     <div className='text-xl'>
//                     New Regime
//                     </div>

//                 </div>
//             </div>
//         </div>

//         <div className='mt-16 px-16'>
//             <h2 className='font-semibold text-gray-700 text-2xl mb-5'>Undertaking By Employee</h2>
//             <h2 className='font-medium text-gray-500 text-lg '>I hereby declare that the above information is correct and I shall be solely responsible for any queries that
//             may be raised by the Income Tax Department related to my investment proof and I shall identify the income tax liability if any asked by income department any additional
//              taxes coming in post declaration of this phone will be paid by me separately</h2>

//                 <div className='flex space-x-4 items-center -ml-4'>
// <Checkbox {...label} defaultChecked size="large" />
// <h2 className='font-semibold text-gray-700 text-lg'>I agree to the terms and conditions</h2>
// </div>
//         </div>

//         <div className='mt-12 pb-10'>

// <div className='grid grid-cols-12'>
//     <div className="col-span-9">
//     <div className='py-10  border-[1px] border-gray-500 '>
//         <div className='flex space-x-5 items-center ml-[650px] text-gray-500 font-semibold'>
//             <div className='text-3xl'><HiOutlineInformationCircle /></div>
//         <div className='text-xl'>Click Submit to declare your IT </div>
//         </div>

//         </div>
//     </div>
//     <div className="col-span-3 ">
//     <div className='py-10 border-b-[1px] border-t-[1px] border-r-[1px] border-gray-500'>

//         <div className='border-[1px] border-blue-700  text-xl font-semibold text-blue-700 cursor-pointer w-28 ml-24 text-center' >
// Submit

//         </div>
//     </div>

//     </div>
// </div>

// </div>

// </div>

//   )
// }

// export default Select_Regime

// shadow-[inset_0_4px_4px_rgba(0,0,0,0.6)]

import { Box, Modal } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";
import { Checkmark } from "react-checkmark";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import useFileStore from "./Zustand";

function Select_Regime() {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [newRegime, setNewRegime] = useState(false);
  const [oldRegime, setOldRegime] = useState(true);

  const { regime } = useFileStore();

  const handleChanges = (event) => {
    setOpen(false);
    setChecked(event.target.checked);
  };

  const { setRegime } = useFileStore();

  console.log(checked, "checked");

  const navigate = useNavigate();

  const handleToggleNewRegime = () => {
    setNewRegime(true);
    setOldRegime(false);
    setRegime("New Regime");
  };

  const handleToggleOldRegime = () => {
    setNewRegime(false);
    setOldRegime(true);
    setRegime("Old Regime");
  };

  const handleITDecDisp = () => {
    navigate("/disp");
  };

  console.log(open, "open");

  const handleSubmitButton = () => {
    navigate("/declarationSummary");
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
      width: "90%", // Adjusted width for screens below the 'md' breakpoint
    },
  };

  return (
    <div className="mt-10">
      <div className="flex">
        <div className="flex md:space-x-5 space-x-1 items-center px-4">
          <div
            className="text-gray-400 md:text-xl text-2xl md:ml-4 ml-2 cursor-pointer"
            onClick={handleITDecDisp}
          >
            <FaArrowLeft />
          </div>
          <div className="text-gray-400 font-semibold text-2xl">
            IT Declaration
          </div>
        </div>
        <div className="border-r-2 border-gray-500 h-9"></div>
        <div className="text-gray-700 font-semibold text-2xl md:ml-5 ml-2">
          Select Regime
        </div>
      </div>
      <div className="border-b-[2px] border-gray-300 md:px-4 px-1"></div>

      <div className="">
        <h2 className="text-center text-2xl lg:text-2xl md:text-3xl font-semibold text-gray-500 mt-7 md:px-0 px-7">
          Select any of the Regime before you Click Submit
        </h2>
        <h2 className="text-center mt-2 text-gray-600 font-medium md-text-md text-xl lg:text-xl md:text-2xl md:px-0 px-7">
          By Default Old Regime will be selected, you can change the Regime by
          selecting below
        </h2>
        <div className="flex mt-8 lg:ml-[500px] md:ml-[200px] ml-[10px] space-x-10 ">
          <div
            className={`flex space-x-3 items-center border-2 md:p-4 p-2 md:ml-0 ml-4 rounded-xl shadow-md cursor-pointer shadow-slate-900 ${
              oldRegime ? "border-blue-700" : "border-gray-500"
            }`}
            onClick={handleToggleOldRegime}
          >
            <div className="text-2xl">
              {oldRegime && regime != "New Regime" ? (
                <Checkmark size="30px" color="yellowGreen" />
              ) : (
                <HiOutlineInformationCircle />
              )}
            </div>

            {/* {oldRegime && <Checkmark size="30px" color="yellowGreen" />} */}
            <div className="text-xl">Old Regime</div>
          </div>
          <div
            className={`flex space-x-3 items-center  md:p-4 p-2 rounded-xl border-[1px] cursor-pointer border-black  shadow-slate-900 shadow-md ${
              newRegime ? "border-blue-700" : "border-gray-500"
            }`}
            onClick={handleToggleNewRegime}
          >
            <div className="text-2xl">
              {newRegime || regime === "New Regime" ? (
                <Checkmark size="30px" color="yellowGreen" />
              ) : (
                <HiOutlineInformationCircle />
              )}
            </div>
            {/* {newRegime && <Checkmark size="30px" color="yellowGreen" />} */}

            <div className="text-xl">New Regime</div>
          </div>
        </div>
      </div>

      <div className="mt-16 px-16">
        <h2 className="font-semibold text-gray-700  text-2xl lg:text-2xl md:text-3xl mb-5">
          Undertaking By Employee
        </h2>
        <h2 className="font-medium text-gray-500 text-lg lg:text-lg md:text-xl ">
          I hereby declare that the above information is correct and I shall be
          solely responsible for any queries that may be raised by the Income
          Tax Department related to my investment proof and I shall identify the
          income tax liability if any asked by income department any additional
          taxes coming in post declaration of this phone will be paid by me
          separately
        </h2>

        <div className="flex space-x-4 items-center lg:ml-4  md:-ml-4 -ml-5 md:mt-0 mt-5">
          <Checkbox checked={checked} onChange={handleChanges} size="large" />
          <h2 className="font-semibold text-gray-700 text-lg lg:text-lg md:text-xl">
            I agree to the terms and conditions
          </h2>
        </div>
      </div>
      <div className="mt-12 pb-10">
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <div className="md:py-10  py-2 border-[1px] border-gray-500 ">
              <div className="flex md:space-x-5 space-x-1 items-center lg:ml-[650px]  md:ml-[200px] ml-[0px] text-gray-500 font-semibold">
                <div className="md:text-3xl text-xl">
                  <HiOutlineInformationCircle />
                </div>
                <div className="text-xl">Click Submit to declare your IT </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="md:py-10 py-2 border-b-[1px] border-t-[1px] border-r-[1px] border-gray-500">
              {checked ? (
                <div
                  className={`md:border-[1px] border-[0px] ${
                    newRegime ? "border-blue-700" : "border-gray-700"
                  }  text-xl font-semibold ${
                    newRegime ? "text-blue-700" : "text-gray-700"
                  } cursor-pointer md:w-28 w-24 lg:ml-24 md:ml-12 ml-1 text-center`}
                  onClick={() => setOpen(true)}
                >
                  Submit
                </div>
              ) : (
                <div
                  className={`md:border-[1px] border-[0px] ${
                    newRegime ? "border-blue-700" : "border-gray-700"
                  }  text-xl font-semibold ${
                    newRegime ? "text-blue-700" : "text-gray-700"
                  } cursor-pointer md:w-28 w-24 lg:ml-24 md:ml-12 ml-1 text-center`}
                  onClick={() => setOpen(true)}
                >
                  <Tooltip title="First click on checkbox" arrow>
                    Submit
                  </Tooltip>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {checked === true && (
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
                  Are you sure you want to submit your IT Declaration ?
                </h3>
              </div>
              <h2 sx={{ mt: 8 }} className="space-x-10 text-center mt-10">
                <button
                  className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2"
                  onClick={handleSubmitButton}
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

export default Select_Regime;
