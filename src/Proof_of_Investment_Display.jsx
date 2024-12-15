import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { TbCircleCheckFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Service from "./Service";
import { useFileStore, useStoreFinancialYear } from "./useFileStore";

function Proof_of_Investment_Display() {
  const empId = 2;
  const navigate = useNavigate();

  const { regime } = useFileStore();

  const { submitFinancialYear } = useStoreFinancialYear();

  const handleProofOfInvestmentScreenBack = () => {
    navigate("/");
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
  }, []);

  useEffect(() => {
    fetchProofOfinvestment();
  }, [proofSaveStatus]);

  // // Merge info, master, and proof data based on itDecId

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

  const handleChangeProofOfInvestment = (id, newRevisedAmount) => {
    setAllSectionName((prevAllSectionName) =>
      prevAllSectionName.map((item) =>
        item.itDecId === id
          ? { ...item, revisedAmount: newRevisedAmount }
          : item
      )
    );
  };

  console.log(allSectionName, "allSectionNames++++++===iiiiiiiiiiiii");

  useEffect(() => {
    getStatusForProofOfInvestmentFunction();
  }, []);

  const handleSaveProofOfInvestment = () => {
    setAllSectionDataProofOfInvestmentFunction();
  };

  // const setAllSectionDataProofOfInvestmentFunction = () => {
  //   axios
  //     .post("http://localhost:8080/proof-of-investment/add", allSectionName)
  //     .then((res) => {
  //       alert("saved");
  //       setStatusForProofOfInvestmentFunction();
  //     });
  // };

  console.log(allSectionName, "allSectionName^^^^^^^^^^^^^");

  const setAllSectionDataProofOfInvestmentFunction = () => {
    Service.postProofOfInvestment(allSectionName).then((res) => {
      alert("saved");
      setStatusForProofOfInvestmentFunction();
    });
  };

  // const setStatusForProofOfInvestmentFunction = () => {
  //   axios
  //     .get(
  //       `http://localhost:8080/proof-of-investment/set-status-proof/${empId}/${submitFinancialYear}/true`
  //     )
  //     .then((res) => {
  //       alert("status saved");
  //       navigate("/proof-of-investment-update");
  //       getStatusForProofOfInvestmentFunction();
  //     });
  // };

  const setStatusForProofOfInvestmentFunction = () => {
    Service.setStatusForProofOfInvestment(
      empId,
      submitFinancialYear,
      true
    ).then((res) => {
      alert("status saved");
      navigate("/proof-of-investment-update");
      getStatusForProofOfInvestmentFunction();
    });
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
  //       if (res?.data?.data === true) {
  //         setProofSaveStatus(res?.data?.data);
  //       }
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

  return (
    <div className="p-4">
      <div className="flex space-x-10 items-center px-4 mb-2 mt-7 ">
        <div className="text-gray-400 text-xl ml-4 cursor-pointer">
          <FaArrowLeft onClick={handleProofOfInvestmentScreenBack} />
        </div>
        <div className="text-gray-700 font-semibold text-xl ">
          Proof of Investments
        </div>
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
        <div className="col-span-12 lg:col-span-9 ">
          <div className="flex justify-between px-2 font-semibold mt-5 mb-5">
            <div className="text-xl ">Declaration Summary</div>
            <div className="text-gray-600 ml-10 text-xl">
              Financial Year:{" "}
              <span className="text-black">{submitFinancialYear}</span>
            </div>
          </div>

          <div className="border-[1px] border-gray-400 mt-0 pl-4">
            <div className="flex lg:space-x-[440px] text-xl font-semibold bg-gray-100 pt-2 pb-4">
              <div>Particulars</div>
              <div className="flex space-x-[40px] items-center ">
                <h2>Declared Amount</h2>
                <h2>Actual Amount</h2>
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
                  ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
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
                      <div className="col-span-7 break-words whitespace-normal ">
                        <label className="font-medium text-gray-600 text-lg">
                          {section?.description}
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

                      <div className="col-span-1"></div>

                      <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                        <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                          INR
                        </div>
                        <input
                          type="number"
                          min="0"
                          className="w-[92px] px-2 text-gray-500 outline-none"
                          name="revisedAmount"
                          value={section?.revisedAmount}
                          onChange={(e) =>
                            handleChangeProofOfInvestment(
                              section.itDecId,
                              e.target.value
                            )
                          }
                        />
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
                  ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
                  ?.filter((section) =>
                    [7, 8, 10, 11, 15, 16, 17].includes(section.itDecId)
                  )
                  ?.map((section) => (
                    <div
                      className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
                      key={section.itDecId}
                    >
                      <div className="col-span-7 break-words whitespace-normal ">
                        <label className="font-medium text-gray-600 text-lg">
                          {section?.description}
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

                      <div className="col-span-1"></div>

                      <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                        <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                          INR
                        </div>
                        <input
                          type="number"
                          min="0"
                          className="w-[92px] px-2 text-gray-500 outline-none"
                          name="revisedAmount"
                          value={section?.revisedAmount}
                          onChange={(e) =>
                            handleChangeProofOfInvestment(
                              section.itDecId,
                              e.target.value
                            )
                          }
                        />
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
                  ?.sort((a, b) => a.itDecId - b.itDecId) // Sort by itDecId in ascending order
                  ?.filter((section) => [12, 13, 14].includes(section.itDecId))
                  ?.map((section) => (
                    <div
                      className="col-span-12 grid grid-cols-12 items-center gap-x-4 border-b border-gray-300 py-2"
                      key={section.itDecId}
                    >
                      <div className="col-span-7 break-words whitespace-normal ">
                        <label className="font-medium text-gray-600 text-lg">
                          {section?.description}
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

                      <div className="col-span-1"></div>

                      <div className="col-span-2 flex font-semibold items-center border-[1px] border-gray-600 rounded-sm">
                        <div className="text-gray-600 px-2 py-1 border-r border-gray-600">
                          INR
                        </div>
                        <input
                          type="number"
                          min="0"
                          className="w-[92px] px-2 text-gray-500 outline-none"
                          name="revisedAmount"
                          value={section?.revisedAmount}
                          onChange={(e) =>
                            handleChangeProofOfInvestment(
                              section.itDecId,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {!proofSaveStatus ? (
        <div className="flex space-x-20 items-center ml-32 lg:ml-[1000px] mt-10 pb-10">
          <button
            className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
            onClick={() => {
              handleSaveProofOfInvestment();
            }}
          >
            Save
          </button>

          <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
            Cancel
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Proof_of_Investment_Display;
