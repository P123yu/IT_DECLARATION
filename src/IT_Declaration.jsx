// import React, { useState } from "react";

// import { Typography } from "@mui/material";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import Tabs from "@mui/material/Tabs";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { useLocalStorage } from "react-use";
// import "./IT_Declaration.css";
// import Proof_Of_Investment from "./Proof_Of_Investment";

// function IT_Declaration() {
//   const navigate = useNavigate();
//   const [restrict, setRestrict, remove] = useLocalStorage("restrict", "false");
//   const [value, setValue] = useState("one");

//   const options1 = ["2024-2025", "2024", "2025"];
//   const defaultOption1 = options1[0];

//   const handleSelect = (selectedOption) => {
//     console.log(`Selected option: ${selectedOption.value}`);
//   };

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const itDecWindow = () => {
//     navigate("/disp");
//   };

//   const proofInvestWindow = () => {
//     navigate("/dispProofOfInvestment");
//   };

//   return (
//     <div className="p-4">
//       <Box sx={{ width: "100%" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           textColor="secondary"
//           indicatorColor="secondary"
//         >
//           <Tab
//             value="one"
//             label={
//               <Typography
//                 style={{
//                   fontWeight: "bolder",
//                   textTransform: "none", // Set text-transform to none
//                 }}
//               >
//                 IT Declaration
//               </Typography>
//             }
//           />
//           <Tab
//             value="two"
//             label={
//               <Typography
//                 style={{
//                   fontWeight: "bolder",
//                   textTransform: "none", // Set text-transform to none
//                 }}
//               >
//                 Proof of Investments
//               </Typography>
//             }
//           />
//         </Tabs>
//       </Box>

//       <div className="border-b-[2px] border-gray-300 mt-2"></div>

//       {value === "one" ? (
//         <div>
//           <div className="flex space-x-1 items-center mt-8 md:ml-[250px] lg:ml-[500px] ml-[40px] curor-pointer">
//             <div className="text-xl text-gray-600 tracking-normal font-medium md:-mt-0 -mt-1">
//               Financial Year :
//             </div>
//             <Dropdown
//               options={options1}
//               onChange={handleSelect}
//               value={defaultOption1}
//               disabled={restrict === true}
//             />
//           </div>

//           <div className="grid grid-cols-2  mt-20 -ml-32">
//             <div className="lg:col-span-1 col-span-2 ">
//               <div className="grid grid-cols-2 ">
//                 <div className="md:col-span-1"></div>
//                 <div className="md:col-span-1 col-span-2 ">
//                   <img
//                     className="md:h-64 md:w-full  h-52 w-[340px] lg:ml-0 ml-4 md:-ml-52 rounded-xl"
//                     src="./src/assets/IT Savings.jpg"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-1 col-span-2 md:ml-[40px]  px-10">
//               <div className="grid grid-cols-5">
//                 <div className="lg:col-span-4   col-span-5 pt-4 ">
//                   <h1 className="text-2xl font-bold md:ml-28 lg:ml-0 ml-0">
//                     IT Declaration is {restrict ? "close" : "open"} now !
//                   </h1>
//                   <h6 className="text-lg md:text-2xl lg:text-lg font-semibold mt-3 md:max-lg:text-center">
//                     Hurry! Declare your Investment to reduce the Taxable income
//                     and thereby decrease your income tax
//                   </h6>

//                   {restrict ? (
//                     ""
//                   ) : (
//                     <>
//                       <div
//                         className="border-2 border-blue-900 items-center flex space-x-5 w-[330px] p-3 mt-12 cursor-pointer md:max-lg:ml-[100px]"
//                         onClick={itDecWindow}
//                       >
//                         <div className="ml-2 text-2xl text-blue-900">
//                           Declarative Investments
//                         </div>
//                         <div className="text-xl">
//                           <FaArrowRightLong />
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <Proof_Of_Investment />
//       )}
//     </div>
//   );
// }

// export default IT_Declaration;

// import React, { useState } from "react";

// import { Typography } from "@mui/material";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import Tabs from "@mui/material/Tabs";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { useLocalStorage } from "react-use";
// import "./IT_Declaration.css";
// import Proof_Of_Investment from "./Proof_Of_Investment";
// import { useStoreFinancialYear } from "./useFileStore";

// function IT_Declaration() {
//   const { setSubmitFinancialYear } = useStoreFinancialYear();
//   const navigate = useNavigate();
//   const [restrict, setRestrict, remove] = useLocalStorage("restrict", "false");
//   const [value, setValue] = useState("one");

//   const options1 = [
//     "Select Year",
//     "2024-2025",
//     "2025-2026",
//     "2026-2027",
//     "2027-2028",
//   ];
//   const defaultOption1 = options1[0];

//   // const handleSelect = (selectedOption) => {
//   //   console.log(`Selected option: ${selectedOption.value}`);
//   // };

//   const handleSelect = (selectedOption) => {
//     setSubmitFinancialYear(`${selectedOption.value}`);
//   };

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const itDecWindow = () => {
//     navigate("/declaration-dashboard");
//   };

//   const proofInvestWindow = () => {
//     navigate("/dispProofOfInvestment");
//   };

//   return (
//     <div className="p-4">
//       <Box sx={{ width: "100%" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           textColor="secondary"
//           indicatorColor="secondary"
//         >
//           <Tab
//             value="one"
//             label={
//               <Typography
//                 style={{
//                   fontWeight: "bolder",
//                   textTransform: "none", // Set text-transform to none
//                 }}
//               >
//                 IT Declaration
//               </Typography>
//             }
//           />
//           <Tab
//             value="two"
//             label={
//               <Typography
//                 style={{
//                   fontWeight: "bolder",
//                   textTransform: "none", // Set text-transform to none
//                 }}
//               >
//                 Proof of Investments
//               </Typography>
//             }
//           />
//         </Tabs>
//       </Box>

//       <div className="border-b-[2px] border-gray-300 mt-2"></div>

//       {value === "one" ? (
//         <div className="">
//           {/* <div className="flex justify-center">
//             <div className="flex space-x-1 items-center  curor-pointer float-center mt-5">
//               <div className="text-xl text-gray-600 tracking-normal font-medium ">
//                 Financial Year :
//               </div>
//               <Dropdown
//                 options={options1}
//                 onChange={handleSelect}
//                 value={defaultOption1}
//               />
//             </div>
//           </div> */}

//           <div className="flex  justify-center">
//             <div className="grid lg:grid-cols-2 mt-20 ">
//               <div className="col-span-1">
//                 <div className="flex justify-center">
//                   <img
//                     className="h-64 w-[340px]  rounded-xl mt-20"
//                     src="./src/assets/IT Savings.jpg"
//                   />
//                 </div>
//               </div>

//               <div className="col-span-1">
//                 <div className="grid lg:grid-cols-5">
//                   <div className="col-span-4 pt-4 ">
//                     <div className="lg:-mt-20 mb-20">
//                       <div className="flex justify-center lg:justify-start ">
//                         <div className="flex space-x-1 items-center  curor-pointer float-center mt-5">
//                           <div className="text-xl text-gray-600 tracking-normal font-medium ">
//                             Financial Year :
//                           </div>
//                           <Dropdown
//                             options={options1}
//                             onChange={handleSelect}
//                             value={defaultOption1}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-col justify-center">
//                       <h1 className="text-xl lg:text-2xl font-bold text-center lg:text-start">
//                         IT Declaration is open now !
//                       </h1>

//                       <h6 className="text-lg font-semibold mt-3 text-center lg:text-start">
//                         Hurry! Declare your Investment to reduce the Taxable
//                         income and thereby decrease your income tax
//                       </h6>

//                       <div className="flex justify-center lg:justify-start">
//                         <div
//                           className="border-2 border-blue-900 items-center flex space-x-5 w-[330px] p-3 mt-12 cursor-pointer "
//                           onClick={itDecWindow}
//                         >
//                           <div className="ml-2 text-2xl text-blue-900">
//                             Declarative Investments
//                           </div>
//                           <div className="text-xl">
//                             <FaArrowRightLong />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <Proof_Of_Investment />
//       )}
//     </div>
//   );
// }

// export default IT_Declaration;

import React, { useState } from "react";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";
import "./IT_Declaration.css";
import Proof_Of_Investment from "./Proof_Of_Investment";
import { useStoreFinancialYear } from "./useFileStore";

function IT_Declaration() {
  const { setSubmitFinancialYear } = useStoreFinancialYear();
  const navigate = useNavigate();
  const [restrict, setRestrict, remove] = useLocalStorage("restrict", "false");
  const [value, setValue] = useState("one");

  const options1 = [
    "Select Year",
    "2024-2025",
    "2025-2026",
    "2026-2027",
    "2027-2028",
  ];
  const defaultOption1 = options1[0];

  const handleSelect = (selectedOption) => {
    setSubmitFinancialYear(`${selectedOption.value}`);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const itDecWindow = () => {
    navigate("/declaration-dashboard");
  };

  const proofInvestWindow = () => {
    navigate("/dispProofOfInvestment");
  };

  return (
    <div className="p-4">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab
            value="one"
            label={
              <Typography
                style={{
                  fontWeight: "bolder",
                  textTransform: "none",
                }}
              >
                IT Declaration
              </Typography>
            }
          />
          <Tab
            value="two"
            label={
              <Typography
                style={{
                  fontWeight: "bolder",
                  textTransform: "none",
                }}
              >
                Proof of Investments
              </Typography>
            }
          />
        </Tabs>
      </Box>

      <div className="border-b-[2px] border-gray-300 mt-2"></div>

      {value === "one" ? (
        <div className="">
          <div className="flex  justify-center">
            <div className="grid lg:grid-cols-2 mt-20 ">
              <div className="col-span-1">
                <div className="flex justify-center">
                  <img
                    className="h-64 w-[340px]  rounded-xl mt-20"
                    src="./src/assets/IT Savings.jpg"
                  />
                </div>
              </div>

              <div className="col-span-1">
                <div className="grid lg:grid-cols-5">
                  <div className="col-span-4 pt-4 ">
                    <div className="lg:-mt-20 mb-20">
                      <div className="flex justify-center lg:justify-start ">
                        <div className="flex space-x-1 items-center  curor-pointer float-center mt-5">
                          <div className="text-xl text-gray-600 tracking-normal font-medium ">
                            Financial Year :
                          </div>
                          <Dropdown
                            options={options1}
                            onChange={handleSelect}
                            value={defaultOption1}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h1 className="text-xl lg:text-2xl font-bold text-center lg:text-start">
                        IT Declaration is open now !
                      </h1>

                      <h6 className="text-lg font-semibold mt-3 text-center lg:text-start">
                        Hurry! Declare your Investment to reduce the Taxable
                        income and thereby decrease your income tax
                      </h6>

                      <div className="flex justify-center lg:justify-start">
                        <div
                          className="border-2 border-blue-900 items-center flex space-x-5 w-[330px] p-3 mt-12 cursor-pointer "
                          onClick={itDecWindow}
                        >
                          <div className="ml-2 text-2xl text-blue-900">
                            Declarative Investments
                          </div>
                          <div className="text-xl">
                            <FaArrowRightLong />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Proof_Of_Investment />
      )}
    </div>
  );
}

export default IT_Declaration;
