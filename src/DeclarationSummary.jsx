import { Checkbox, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import Proof_Of_Investment from "./Proof_Of_Investment";
import useFileStore from "./Zustand";

function DeclarationSummary() {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const handleChanges = (event) => {
    setChecked(event.target.checked);
  };

  const { regime } = useFileStore();
  console.log(regime);

  console.log(checked, "checked");

  const [value, setValue] = useState("one");

  const options1 = ["2024-2025", "2024", "2025"];
  const defaultOption1 = options1[0];

  const handleSelect = (selectedOption) => {
    console.log(`Selected option: ${selectedOption.value}`);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const itDecWindow = () => {
    navigate("/disp");
  };

  const [open, setOpen] = useState(false);

  const handleITDecUpdate = () => {
    navigate("/declarationUpdate", { state: { data: "oldvalue" } });
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
      height: 420, // Adjusted width for screens below the 'md' breakpoint
    },
  };

  const [netData80C, setNetData80C] = useState("");
  const [netData80D, setNetData80D] = useState("");
  const [netData80E, setNetData80E] = useState("");

  useEffect(() => {
    getTotalSection80C();
    getTotalSection80D();
    getTotalSection80E();
  }, []);

  const getTotalSection80C = () => {
    axios
      .get("http://localhost:8080/Section80C/getByempIdSec80c/1")
      .then((res) => {
        setNetData80C(res.data);
      });
  };

  const getTotalSection80D = () => {
    axios
      .get("http://localhost:8080/Section80D/getByempIdSec80d/1")
      .then((res) => {
        setNetData80D(res.data);
      });
  };

  const getTotalSection80E = () => {
    axios
      .get("http://localhost:8080/Section80E/getByempIdSec80e/1")
      .then((res) => {
        setNetData80E(res.data);
      });
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
                  textTransform: "none", // Set text-transform to none
                  fontSize: 18,
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
                  fontSize: 18, // Set text-transform to none
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
        <div>
          <div className="md:flex lg:space-x-52 space-x-32 md:space-x-10 items-center mt-6 ">
            <div className="border-[2px] border-gray-500 flex items-center  space-x-5 py-1 lg:w-[325px] md:w-[370px] ml-[20px] lg:ml-[330px] md:ml-[40px]">
              <div className="ml-3 md:text-2xl text-3xl">
                <HiOutlineInformationCircle />
              </div>
              <div className="font-medium text-gray-500 text-xl">
                Declaration window is open
              </div>
            </div>

            <div className="flex space-x-3 items-center md:mt-0 mt-7">
              <div className="text-xl text-gray-600 tracking-normal font-medium md:ml-0 -ml-24 lg:-ml-24  ">
                Financial Year :{" "}
              </div>
              <Dropdown
                options={options1}
                onChange={handleSelect}
                value={defaultOption1}
                placeholder="Select an option"
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-3 mb-3">
            Declaration Summary
          </h2>

          <div className="grid grid-cols-9 border-t-[1px] border-gray-400 gap-5">
            <div className="lg:col-span-7 col-span-9">
              <div className="flex items-center lg:space-x-[710px] md:space-x-[500px] space-x-20 ml-5 font-semibold text-xl mt-3 bg-blue-100 py-3 ">
                <div className="ml-5">Particulars</div>

                <div className="">Declared Amount</div>
              </div>

              <div className="border-[1px] border-gray-400 rounded-md mt-5 shadow-xl">
                <div className="flex md:space-x-7 space-x-32 items-center border-b-[1px] border-gray-400">
                  <h2 className="text-2xl font-semibold ml-4 ">Section 80 C</h2>
                  <img
                    className="h-12 w-12 md:ml-[75px] ml-96 mt-5 mb-3"
                    src="./src/assets/savings 2.png"
                  />
                </div>
                <div>
                  <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
                    Deduction under section 80 C
                  </h2>
                  <div className="">
                    <div className="grid grid-cols-11 md:gap-0 gap-10">
                      <div className="md:col-span-9  col-span-8">
                        <div className="ml-12 font-semibold text-gray-700">
                          <h2 className="my-2">
                            Contribution to Pension Fund{" "}
                            <span className="text-gray-500">
                              (Max. Rs. 1,50,000 /-)
                            </span>
                          </h2>
                          <h2 className="my-2">Life Insurance Premium</h2>
                          <h2 className="my-2">Public Provident Fund</h2>
                          <h2 className="my-2">ULIP</h2>
                          <h2 className="my-2">VIII Issue of NSC</h2>
                          <h2 className="my-2">National Savings Scheme</h2>
                          <h2 className="my-2">
                            Repayment of housing Loan Principle{" "}
                            <span className="text-gray-500">
                              (Max. Rs. 1,50,000 /-)
                            </span>
                          </h2>
                          <h2 className="my-2">
                            Fixed Deposit Savings for 5 years
                          </h2>
                          <h2 className="my-2">
                            Equity Linked Savings Scheme{" "}
                            <span className="text-gray-500">
                              (Max. Rs. 1,50,000 /-)
                            </span>
                          </h2>
                          <h2 className="my-2">
                            Children's Education Expenses{" "}
                            <span className="text-gray-500">
                              (Max. Rs. 1,50,000 /-)
                            </span>{" "}
                            Restricted to Two Children{" "}
                          </h2>
                          <h2 className="my-2 mb-10">
                            Deposite in Sukanya Samriddhi Scheme
                          </h2>
                        </div>
                      </div>

                      <div className="col-span-2 text-gray-700 font-medium text-lg">
                        <h2 className="my-[5px]">{netData80C.cpf}</h2>
                        <h2 className="my-[5px]">{netData80C.lip}</h2>
                        <h2 className="my-[5px]">{netData80C.ppf}</h2>
                        <h2 className="my-[5px]">{netData80C.ulip}</h2>
                        <h2 className="my-[5px]">{netData80C.ion}</h2>
                        <h2 className="my-[5px]">{netData80C.nss}</h2>
                        <h2 className="my-[5px]">{netData80C.hlp}</h2>
                        <h2 className="my-[5px]">{netData80C.fds}</h2>
                        <h2 className="my-[5px]">{netData80C.lss}</h2>
                        <h2 className="my-[5px]">{netData80C.cee}</h2>
                        <h2 className="my-[5px]">{netData80C.dsss}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-[1px] border-gray-400 rounded-md mt-5 shadow-xl">
                <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
                  <h2 className="text-2xl font-semibold ml-4">
                    Section 80D/80DD/80DDB/80U
                  </h2>
                  <img
                    className="h-12 w-12 ml-[75px] mt-5 mb-3"
                    src="./src/assets/Medical.jpg"
                  />
                </div>
                <div>
                  <div className="border-b-[1px] border-gray-400">
                    <h2 className="ml-7 text-lg text-gray-800 py-3 font-medium">
                      Deduction under section 80 CCD
                    </h2>
                    <div className="grid grid-cols-11 md:gap-0 gap-5">
                      <div className="col-span-9 ">
                        <div className="ml-12 font-semibold text-gray-700">
                          <h2 className=" text-gray-600 font-medium my-2">
                            National Pension Scheme{" "}
                            <span className="text-gray-500">
                              (Max. Rs. 50,000 /-)
                            </span>
                          </h2>
                        </div>
                      </div>

                      <div className="col-span-2 text-gray-700 font-medium text-lg">
                        <h2 className="my-2">{netData80D.nps}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="border-b-[1px] border-gray-400">
                    <h2 className="ml-7 text-lg text-gray-800 py-3 font-medium">
                      Deduction under section 80 D - Medicliam Policy (Excluding
                      Through CMS){" "}
                    </h2>
                    <div className="grid grid-cols-11 md:gap-0 gap-5">
                      <div className="col-span-9 ">
                        <div className="ml-12 font-semibold text-gray-700">
                          <h2 className="my-2">
                            Premium for Mediclaim policy for Self & ChildSpouse{" "}
                            <span className="text-gray-500">
                              {" "}
                              (Maximum exemption Rs. 25,000 /-)
                            </span>
                          </h2>
                          <h2 className="my-2">
                            Premium for Mediclaim policy for Parents{" "}
                            <span className="text-gray-500">
                              {" "}
                              (Parent's age less than 60 years)
                            </span>
                          </h2>
                          <h2 className="my-2">
                            Premium for Mediclaim policy for Parents{" "}
                            <span className="text-gray-500">
                              {" "}
                              (Parent's age less than 60 years (Senior Citizen))
                            </span>
                          </h2>
                        </div>
                      </div>

                      <div className="col-span-2 text-gray-700 font-medium text-lg">
                        <h2 className="my-2">{netData80D.mpsc}</h2>
                        <h2 className="my-2">{netData80D.mpp}</h2>
                        <h2 className="my-2">{netData80D.mppsc}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="border-b-[1px] border-gray-400">
                    <div className="grid grid-cols-11 md:gap-0 gap-5">
                      <div className="col-span-8">
                        <h2 className="ml-7 text-lg text-gray-800 py-3 font-medium">
                          Deduction in respect of maintainance including medical
                          treatment of handicapped dependent who is a person
                          with disability{" "}
                        </h2>

                        <div className="ml-12 font-semibold text-gray-700">
                          <h2 className="my-2">
                            Maxiumum exemption is 1,25,000 /- for dependent with
                            disability more than 80% and 70,000 /- for dependent
                            with disability less than 80% and more than 40%
                          </h2>
                        </div>
                      </div>

                      <div className="col-span-1"></div>

                      <div className="col-span-2 text-gray-700 font-medium text-lg">
                        <h2 className="mt-8">{netData80D.mth}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="border-b-[1px] border-gray-400">
                    <div className="grid grid-cols-11 md:gap-0 gap-5">
                      <div className="col-span-8 ">
                        <h2 className="ml-7 text-lg text-gray-800 py-3 font-medium">
                          Deduction in respect of medical treatment for cases
                          covered under rule 11DD (1) of IT rules , 1962
                          [Sec.80DDB] max Rs. 40,000 /-
                        </h2>

                        <div className="ml-12 font-semibold text-gray-700">
                          <h2 className="my-2">National Savings Scheme</h2>
                        </div>
                      </div>

                      <div className="col-span-1"></div>

                      <div className="col-span-2 text-gray-700 font-medium text-lg">
                        <h2 className="my-2">{netData80D.mtc}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <div className="grid grid-cols-11 md:gap-0 gap-5">
                      <div className="col-span-8 ">
                        <h2 className="ml-7 text-lg text-gray-800 py-3 font-medium">
                          Deduction in respect of Totally Blind Physically
                          handicapped or mentally retarded person [Sec. 80U] max
                          Rs. 75,000 /-
                        </h2>

                        <div className="ml-12 font-semibold text-gray-700">
                          <h2 className="my-2">
                            Yes / No (if yes please enclose the certificate){" "}
                          </h2>
                        </div>
                      </div>

                      <div className="col-span-1"></div>

                      <div className="col-span-2 text-gray-700 font-medium text-lg">
                        <h2 className="my-2">{netData80D.tbpm}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-[1px] border-gray-400 rounded-md mt-5 shadow-xl">
                <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
                  <h2 className="text-2xl font-semibold ml-4">
                    Section 80E/10/Housing Loan
                  </h2>
                  <img
                    className="h-12 w-12 ml-[75px] mt-5 mb-3"
                    src="./src/assets/images icon.png"
                  />
                </div>
                <div>
                  <div className="border-b-[1px] border-gray-400">
                    <div className="grid grid-cols-11">
                      <div className="col-span-8 ">
                        <h2 className="text-lg text-gray-800  font-medium ml-7 ">
                          Deduction in respect of repayment of Loan "Only
                          interest on Loan" Taken for Higher Eduction [Sec. 80E]
                        </h2>
                      </div>

                      <div className="col-span-1"></div>

                      <div className="col-span-2 text-gray-700 font-medium text-lg">
                        <h2 className="my-2">{netData80E.loan}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="border-b-[1px] border-gray-400">
                    <div className="grid grid-cols-11">
                      <div className="col-span-8 ">
                        <h2 className="text-lg text-gray-800  font-medium ml-7 mt-3">
                          House Rent Exemption unser Section 10 (13A) <br></br>
                          <h2 className="text-gray-500 ">
                            Rent payable per month
                          </h2>
                        </h2>
                      </div>

                      <div className="col-span-1"></div>

                      <div className="col-span-2 text-gray-700 font-medium text-lg">
                        <h2 className="my-2">{netData80E.rent}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <div className="grid grid-cols-11">
                      <div className="col-span-8 ">
                        <h2 className="text-lg text-gray-800 font-medium ml-7 mt-3">
                          Interest paid on housingloan from approved Financial
                          Institution
                        </h2>
                      </div>

                      <div className="col-span-1"></div>

                      <div className="col-span-2 text-gray-700 font-medium text-lg">
                        <h2 className="my-2">{netData80E.housingLoan}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-9 lg:col-span-2 border-b-[1px] border-l-[1px] border-r-[1px] md:border-t-[0px] border-t-[1px] border-gray-400 md:h-[500px] h-[400px] shadow-2xl">
              <div>
                <h2 className="font-semibold text-lg ml-6 mt-5">
                  Declaration Status
                </h2>

                <div className="bg-green-500 font-semibold w-1/2 text-center lg:ml-16 md:ml-52 ml-[85px] text-lg mt-5 p-2 cursor-not-allowed">
                  DECLARED
                </div>

                <h2 className="mt-5 text-gray-500 font-semibold lg:text-lg text-lg md:text-2xl pl-4 md:ml-20 lg:ml-2">
                  You have submitted IT Declaration as per the {regime}
                </h2>

                <div
                  className="bg-blue-500 font-semibold  text-center  text-xl mt-5 w-[230px] lg:ml-6 md:ml-[280px] ml-[65px] p-2 text-white cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  Edit Declaration
                </div>

                <h2 className="mt-5 text-gray-500 font-semibold lg:text-lg text-lg md:text-2xl pl-4 md:text-center">
                  You can still make a changes and resubmit for the review while
                  the window is still open{" "}
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
                    Are you sure you want to withdraw the already submitted IT
                    Declaration ? you can revise your declaration while the
                    window is Open
                  </h3>
                </div>

                <div className="flex space-x-4 items-center ml-12">
                  <Checkbox
                    checked={checked}
                    onChange={handleChanges}
                    size="large"
                  />
                  <h2 className="font-semibold text-gray-700 text-lg">
                    I agree
                  </h2>
                </div>

                <h2 sx={{ mt: 8 }} className="space-x-10 text-center mt-7">
                  {checked ? (
                    <button
                      className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2"
                      onClick={handleITDecUpdate}
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
      ) : (
        <Proof_Of_Investment />
      )}
    </div>
  );
}

export default DeclarationSummary;
