import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiComment } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { ImAttachment, ImCancelCircle } from "react-icons/im";
import { TbCircleCheckFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Attachment from "./Attachment";
import Service from "./Service";
import { useFileStore, useStore, useStoreFinancialYear } from "./useFileStore";

function Proof_Attach() {
  const empId = 2;
  const navigate = useNavigate();

  const { setSubmitFileStatus } = useStore();
  const { submitFinancialYear } = useStoreFinancialYear();
  const globalITDECID = useFileStore((state) => state.itDecId);

  const { regime } = useFileStore();

  const files = useFileStore((state) => state.files);

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState(false);

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

  // Fetch master data
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

  // Fetch proof data
  // const fetchProofOfinvestment = () => {
  //   axios
  //     .get(
  //       `http://localhost:8080/proof-of-investment/get-all-proof/${empId}/${submitFinancialYear}`
  //     )
  //     .then((res) => {
  //       setProof(res?.data?.data);
  //     });
  // };

  const fetchProofOfinvestment = () => {
    Service.fetchProofOfInvestmentBasedOnEmpIdAndFinancialYear(
      empId,
      submitFinancialYear
    ).then((res) => {
      setProof(res?.data?.data);
    });
  };

  useEffect(() => {
    fetchProofOfinvestment();
  }, [proofSaveStatus]);

  //  Merge info, master, and proof data based on itDecId

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

  // const setAllSectionDataProofOfInvestmentFunction = () => {
  //   axios
  //     .post("http://localhost:8080/proof-of-investment/add", allSectionName)
  //     .then((res) => {
  //       alert("saved");
  //     });
  // };

  const setAllSectionDataProofOfInvestmentFunction = () => {
    Service.postProofOfInvestment(allSectionName).then((res) => {
      alert("saved");
    });
  };

  // const setStatusForProofOfInvestmentFunction = () => {
  //   axios
  //     .get(
  //       `http://localhost:8080/proof-of-investment/set-status-proof/${empId}/${submitFinancialYear}`
  //     )
  //     .then((res) => {
  //       alert("status saved");
  //     });
  // };

  const setStatusForProofOfInvestmentFunction = () => {
    Service.setStatusForProofOfInvestment(empId, submitFinancialYear).then(
      (res) => {
        alert("status saved");
      }
    );
  };

  // useEffect(() => {
  //   navigate("/proof-of-investment-update");
  // }, [proofSaveStatus === true]);

  // const getStatusForProofOfInvestmentFunction = () => {
  //   axios
  //     .get(
  //       `http://localhost:8080/proof-of-investment/get-status-proof/${empId}/${submitFinancialYear}`
  //     )
  //     .then((res) => {
  //       setProofSaveStatus(res?.data?.data);
  //     });
  // };

  const getStatusForProofOfInvestmentFunction = () => {
    Service.getStatusForProofOfInvestmentFunction(
      empId,
      submitFinancialYear
    ).then((res) => {
      if (res?.data?.data === true) {
        setProofSaveStatus(res?.data?.data);
      }
    });
  };

  const [allDataProofOfInvestment, setAllDataProofOfInvestment] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:8080/proof-of-investment/get-all-proof/${empId}/${submitFinancialYear}`
  //     )
  //     .then((res) => {
  //       setAllDataProofOfInvestment(res.data);
  //     });
  // }, []);

  useEffect(() => {
    Service.fetchProofOfInvestmentBasedOnEmpIdAndFinancialYear(
      empId,
      submitFinancialYear
    ).then((res) => {
      setAllDataProofOfInvestment(res.data);
    });
  }, []);

  const [overAllData, setOverAllData] = useState([]);

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

  // const setSubmitStatusForProofOfInvestment = () => {
  //   axios
  //     .get(
  //       `http://localhost:8080/proof-of-investment/set-submit-status-proof/${empId}/${submitFinancialYear}/true`
  //     )
  //     .then((res) => {
  //       getSubmitStatusForProofOfInvestment();
  //       navigate("/proof-of-investment-edit");
  //     });
  // };

  const setSubmitStatusForProofOfInvestment = () => {
    Service.setSubmitStatusForProofOfInvestment(
      empId,
      submitFinancialYear,
      true
    ).then((res) => {
      getSubmitStatusForProofOfInvestment();
      navigate("/proof-of-investment-edit");
    });
  };

  const [proofOfInvestmentSubmitStatus, setProofOfInvestmentSubmitStatus] =
    useState(false);

  // const getSubmitStatusForProofOfInvestment = () => {
  //   axios
  //     .get(
  //       `http://localhost:8080/proof-of-investment/get-submit-status-proof/${empId}/${submitFinancialYear}`
  //     )
  //     .then((res) => {
  //       setProofOfInvestmentSubmitStatus(res?.data?.data);
  //       //navigate("/proof-of-investment-edit");
  //     });
  // };

  const getSubmitStatusForProofOfInvestment = () => {
    Service.getSubmitStatusForProofOfInvestmentFunction(
      empId,
      submitFinancialYear
    ).then((res) => {
      setProofOfInvestmentSubmitStatus(res?.data?.data);
      //navigate("/proof-of-investment-edit");
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

            <div className="grid grid-cols-12 p-5">
              {allSectionName
                ?.sort((a, b) => a.itDecId - b.itDecId)
                ?.filter((section) =>
                  [1, 2, 4, 5, 9, 18, 19, 20, 21, 22, 23].includes(
                    section.itDecId
                  )
                )
                ?.map((section) => {
                  // Count occurrences of the current section's itDecId in the globalITDECID array
                  const count = globalITDECID.filter(
                    (id) => id === section.itDecId
                  ).length;

                  return (
                    <div
                      className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
                      key={section.itDecId}
                    >
                      <div className="col-span-7 break-words whitespace-normal">
                        <label className="font-medium text-gray-600 text-lg">
                          {section.declarationName}
                        </label>
                        {section.additionalInformation && (
                          <p className="text-gray-500">
                            {section.additionalInformation}
                          </p>
                        )}
                      </div>
                      <h2 className="text-gray-500 font-semibold">
                        {section?.declarationAmount}
                      </h2>

                      <div className="div flex items-center space-x-2">
                        <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                          <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                            INR
                          </div>
                          <input
                            type="text"
                            className="w-[88px] px-2 text-gray-500 outline-none"
                            value={section?.revisedAmount || ""}
                            readOnly
                          />
                        </div>

                        {/* Display the count of files uploaded for the current row */}
                        <h2 className="col-span-1 text-gray-700 font-semibold">
                          {count}
                        </h2>
                      </div>

                      <div className="col-span-1"></div>

                      <div className="col-span-1 text-blue-800 ml-5">
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
                            ? "ml-[460px] lg:ml-[1080px] -mt-[40px]"
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
                            ? "lg:ml-[1120px] -mt-[40px]"
                            : ""
                        }`}
                      >
                        {openCommentIndex === section.itDecId && (
                          <textarea
                            placeholder="Write your comment..."
                            rows={4}
                            cols={25}
                            className="border-[1px] border-black outline-none"
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
              <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
                Section 80D/80DD/80DDB/80U
              </h2>
            </div>
            <div className="grid grid-cols-12  p-5">
              {allSectionName
                ?.sort((a, b) => a.itDecId - b.itDecId)
                ?.filter((section) =>
                  [7, 8, 10, 11, 15, 16, 17].includes(section.itDecId)
                )
                ?.map((section) => {
                  // Count occurrences of the current section's itDecId in the globalITDECID array
                  const count = globalITDECID.filter(
                    (id) => id === section.itDecId
                  ).length;

                  return (
                    <div
                      className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
                      key={section.itDecId}
                    >
                      <div className="col-span-7 break-words whitespace-normal">
                        <label className="font-medium text-gray-600 text-lg">
                          {section.declarationName}
                        </label>
                        {section.additionalInformation && (
                          <p className="text-gray-500">
                            {section.additionalInformation}
                          </p>
                        )}
                      </div>
                      <h2 className="text-gray-500 font-semibold">
                        {section?.declarationAmount}
                      </h2>

                      <div className="div flex items-center space-x-2">
                        <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                          <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                            INR
                          </div>
                          <input
                            type="text"
                            className="w-[88px] px-2 text-gray-500 outline-none"
                            value={section?.revisedAmount || ""}
                            readOnly
                          />
                        </div>

                        {/* Display the count of files uploaded for the current row */}
                        <h2 className="col-span-1 text-gray-700 font-semibold">
                          {count}
                        </h2>
                      </div>

                      <div className="col-span-1"></div>

                      <div className="col-span-1 text-blue-800 ml-5">
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
                            ? "ml-[460px] lg:ml-[1080px] -mt-[40px]"
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
                            ? "lg:ml-[1120px] -mt-[40px]"
                            : ""
                        }`}
                      >
                        {openCommentIndex === section.itDecId && (
                          <textarea
                            placeholder="Write your comment..."
                            rows={4}
                            cols={25}
                            className="border-[1px] border-black outline-none"
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
              <h2 className="text-lg text-gray-800 py-5 font-medium ml-7">
                Section 80E/10/Housing Loan
              </h2>
            </div>
            <div className="grid grid-cols-12  p-5">
              {allSectionName
                ?.sort((a, b) => a.itDecId - b.itDecId)
                ?.filter((section) => [12, 13, 14].includes(section.itDecId))
                ?.map((section) => {
                  // Count occurrences of the current section's itDecId in the globalITDECID array
                  const count = globalITDECID.filter(
                    (id) => id === section.itDecId
                  ).length;

                  return (
                    <div
                      className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
                      key={section.itDecId}
                    >
                      <div className="col-span-7 break-words whitespace-normal">
                        <label className="font-medium text-gray-600 text-lg">
                          {section.declarationName}
                        </label>
                        {section.additionalInformation && (
                          <p className="text-gray-500">
                            {section.additionalInformation}
                          </p>
                        )}
                      </div>
                      <h2 className="text-gray-500 font-semibold">
                        {section?.declarationAmount}
                      </h2>

                      <div className="div flex items-center space-x-2">
                        <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                          <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                            INR
                          </div>
                          <input
                            type="text"
                            className="w-[88px] px-2 text-gray-500 outline-none"
                            value={section?.revisedAmount || ""}
                            readOnly
                          />
                        </div>

                        {/* Display the count of files uploaded for the current row */}
                        <h2 className="col-span-1 text-gray-700 font-semibold">
                          {count}
                        </h2>
                      </div>

                      <div className="col-span-1"></div>

                      <div className="col-span-1 text-blue-800 ml-5">
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
                            ? "ml-[460px] lg:ml-[1080px] -mt-[40px]"
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
                            ? "lg:ml-[1120px] -mt-[40px]"
                            : ""
                        }`}
                      >
                        {openCommentIndex === section.itDecId && (
                          <textarea
                            placeholder="Write your comment..."
                            rows={4}
                            cols={25}
                            className="border-[1px] border-black outline-none"
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
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
