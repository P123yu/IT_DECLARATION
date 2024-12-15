import React, { useEffect, useState } from "react";
import "react-dropdown/style.css";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Service from "./Service";
import useFileStore, { useStoreFinancialYear } from "./useFileStore";

function IT_Declaration_Preview() {
  const empId = 2;
  const { submitFinancialYear } = useStoreFinancialYear();
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const handleChanges = (event) => {
    setChecked(event.target.checked);
  };

  const { regime } = useFileStore();
  console.log(regime);

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
      <div className="border-b-[2px] border-gray-300 mt-2"></div>

      <div>
        <div className="flex justify-center mt-5">
          <div className="border-[2px] border-gray-500 flex items-center  space-x-5 py-1 lg:w-[325px] md:w-[370px]">
            <div className="ml-3 md:text-2xl text-3xl">
              <HiOutlineInformationCircle />
            </div>
            <div className="font-medium text-gray-500 text-xl">
              Declaration window is open
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-3 mb-3">Declaration Summary</h2>

        <div className="grid grid-cols-12 border-t-[1px] border-gray-400 gap-5">
          <div className="col-span-12">
            <div className="flex justify-between px-5 font-semibold text-xl mt-3 bg-blue-100 py-3 ">
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
                  ?.filter((section) => [12, 13, 14].includes(section.itDecId))
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
        </div>
      </div>
    </div>
  );
}

export default IT_Declaration_Preview;
