import { Checkbox, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Proof_Of_Investment from "./Proof_Of_Investment";
import Service from "./Service";
import { useFileStore, useStoreFinancialYear } from "./useFileStore";

function DeclarationSummary() {
  const { submitFinancialYear, setSubmitFinancialYear } =
    useStoreFinancialYear();

  const empId = 2;
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const handleChanges = (event) => {
    setChecked(event.target.checked);
  };

  const { regime } = useFileStore();
  console.log(regime);

  console.log(checked, "checked");

  const [value, setValue] = useState("one");

  const options1 = [
    "2024-2025",
    "2025-2026",
    "2026-2027",
    "2027-2028",
    "2028-2029",
    "2029-2030",
  ];
  const index = options1.indexOf(submitFinancialYear);
  const defaultOption1 = options1[index];

  const handleSelect = (selectedOption) => {
    setSubmitFinancialYear(`${selectedOption.value}`);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const itDecWindow = () => {
    navigate("/disp");
  };

  const [open, setOpen] = useState(false);

  const handleITDecUpdate = () => {
    navigate("/declaration-update", { state: { data: "oldvalue" } });
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

  const [info, setInfo] = useState([]);

  // const fetchInfo = () => {
  //   axios
  //     .get(
  //       `http://localhost:8080/it-declaration-info/get/${empId}/${submitFinancialYear}`
  //     )
  //     .then((res) => {
  //       setInfo(res?.data?.data);
  //     });
  // };

  const fetchInfo = () => {
    Service.fetchITDeclarationInfoBasedOnEmpIdAndFinancialYear(
      empId,
      submitFinancialYear
    ).then((res) => {
      setInfo(res?.data?.data);
    });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const [master, setMaster] = useState([]);

  // const fetchMaster = () => {
  //   axios
  //     .get("http://localhost:8080/it-declaration-master/get-all")
  //     .then((res) => {
  //       setMaster(res?.data?.data);
  //     });
  // };

  const fetchMaster = () => {
    Service.fetchAllSectionName().then((res) => {
      setMaster(res?.data?.data);
    });
  };

  useEffect(() => {
    fetchMaster();
  }, []);

  const allSectionName = info.map((item1) => {
    const matchingItem = master.find(
      (item2) => Number(item2.itDecId) === Number(item1.itDecId)
    );
    return matchingItem ? { ...item1, ...matchingItem } : item1;
  });

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
                Financial Year :
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

                <div className="border-[1px] border-gray-400 rounded-md mt-5 shadow-xl">
                  <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
                    <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
                      Deduction under section 80 C
                    </h2>
                  </div>
                  <div className="grid grid-cols-12  p-5">
                    {allSectionName
                      ?.sort((a, b) => a.itDecId - b.itDecId)
                      ?.filter((section) =>
                        [1, 2, 4, 5, 9, 18, 19, 20, 21, 22, 23].includes(
                          section.itDecId
                        )
                      )
                      ?.map((section) => (
                        <div
                          className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
                          key={section.itDecId}
                        >
                          <div className="col-span-10 break-words whitespace-normal ">
                            <label className="font-medium text-gray-600 text-lg">
                              {section?.description}
                            </label>
                            {section.additionalInformation && (
                              <p className="text-gray-500 ">
                                {section.additionalInformation}
                              </p>
                            )}
                          </div>

                          <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                            <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                              INR
                            </div>
                            <input
                              type="number"
                              min="0"
                              className="w-[103px] px-2 text-gray-500 outline-none"
                              name="declarationAmount"
                              value={section?.declarationAmount || ""}
                              readOnly
                            />
                          </div>
                        </div>
                      ))}
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
                <div className="grid grid-cols-12  p-5">
                  {allSectionName
                    ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
                    ?.filter((section) =>
                      [7, 8, 10, 11, 15, 16, 17].includes(section.itDecId)
                    )
                    ?.map((section) => (
                      <div
                        className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
                        key={section.itDecId}
                      >
                        <div className="col-span-10 break-words whitespace-normal ">
                          <label className="font-medium text-gray-600 text-lg">
                            {section?.description}
                          </label>
                          {section.additionalInformation && (
                            <p className="text-gray-500 ">
                              {section.additionalInformation}
                            </p>
                          )}
                        </div>

                        <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                          <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                            INR
                          </div>
                          <input
                            type="number"
                            className="w-[103px] px-2 text-gray-500 outline-none"
                            name="declarationAmount"
                            min="0"
                            value={section?.declarationAmount || ""}
                            readOnly
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="border-[1px] border-gray-400  rounded-md mt-5 shadow-xl">
                <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
                  <h2 className="text-2xl font-semibold ml-4">
                    Section 80E/10/Housing Loan
                  </h2>
                  <img
                    className="h-12 w-12 ml-[75px] mt-5 mb-3"
                    src="./src/assets/images icon.png"
                  />
                </div>

                <div className="grid grid-cols-12  p-5">
                  {allSectionName
                    ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
                    ?.filter((section) =>
                      [12, 13, 14].includes(section.itDecId)
                    )
                    ?.map((section) => (
                      <div
                        className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
                        key={section.itDecId}
                      >
                        <div className="col-span-10 break-words whitespace-normal ">
                          <label className="font-medium text-gray-600 text-lg">
                            {section?.description}
                          </label>
                          {section.additionalInformation && (
                            <p className="text-gray-500 ">
                              {section.additionalInformation}
                            </p>
                          )}
                        </div>

                        <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                          <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                            INR
                          </div>
                          <input
                            type="number"
                            className="w-[103px] px-2 text-gray-500 outline-none"
                            name="declarationAmount"
                            min="0"
                            value={section?.declarationAmount || ""}
                            readOnly
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="col-span-9 lg:col-span-2 border-b-[1px] border-l-[1px] border-r-[1px] md:border-t-[0px] border-t-[1px] border-gray-400 md:h-[500px] h-[400px] shadow-2xl">
              <div>
                <h2 className="font-semibold text-lg ml-6 mt-5">
                  Declaration Status
                </h2>

                <div className="flex justify-center">
                  <div className="bg-green-500 font-semibold w-1/2 text-center text-lg mt-5 p-2 cursor-not-allowed">
                    DECLARED
                  </div>
                </div>

                <h2 className="mt-5 text-gray-500 font-semibold lg:text-lg text-lg md:text-2xl pl-4 md:ml-20 lg:ml-2">
                  You have submitted IT Declaration as per the {regime}
                </h2>

                <div className="flex justify-center">
                  <div
                    className="bg-blue-500 font-semibold  text-center  text-xl mt-5 w-[230px]   p-2 text-white cursor-pointer"
                    onClick={() => setOpen(true)}
                  >
                    Edit Declaration
                  </div>
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
                    Declaration? You can revise your declaration while the
                    window is open.
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

                <h2 className="space-x-10 text-center mt-7">
                  {checked ? (
                    <button
                      className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2"
                      onClick={handleITDecUpdate}
                    >
                      Revise
                    </button>
                  ) : (
                    <button
                      disabled
                      className="text-blue-800 font-medium tracking-wide border-[1px] border-blue-800 px-4 py-2 opacity-50 cursor-not-allowed"
                    >
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
