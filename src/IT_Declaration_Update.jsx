import { Box, Modal } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function IT_Declaration_Update() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [totalSection80c, setTotalSection80c] = useState("");
  const [totalSection80d, setTotalSection80d] = useState("");
  const [totalSection80e, setTotalSection80e] = useState("");
  const [sumSection80C, setSumSection80C] = useState("");
  const [sumSection80D, setSumSection80D] = useState("");
  const [sumSection80E, setSumSection80E] = useState("");
  const [totalDataSection80C, settotalDataSection80C] = useState("");
  const [totalDataSection80D, settotalDataSection80D] = useState("");
  const [totalDataSection80E, settotalDataSection80E] = useState("");

  const handlePreview = () => {
    navigate("/preview");
  };

  useEffect(() => {
    getTotalSection80C();
    getTotalSection80D();
    getTotalSection80E();
  }, []);

  //---------------------------------------------------------------------------------------------------------------------

  const getTotalSection80C = () => {
    var totalSumSection80C = 0;
    axios
      .get("http://localhost:8080/Section80C/getTotalSumSection80c/1")
      .then((res) => setTotalSection80c(res.data));

    axios
      .get("http://localhost:8080/Section80C/getByempIdSec80c/1")
      .then((res) => {
        settotalDataSection80C(res.data);

        const { empId, flag, ...remainObj } = res.data;

        for (let i in remainObj) {
          totalSumSection80C += res.data[i];
        }
        setSumSection80C(totalSumSection80C);
      });
  };

  const handleChangeIT_DeclarationSection80C = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    settotalDataSection80C({ ...totalDataSection80C, [key]: value });
  };

  const handleSubmitSection80C = () => {
    let totalSumSection80C = 0;

    const { empId, flag, ...remainObj } = totalDataSection80C;
    for (let i in remainObj) {
      totalSumSection80C = Number(totalDataSection80C[i]) + totalSumSection80C;
    }
    setSumSection80C(totalSumSection80C);
    const infoSection80CCopy = { ...totalDataSection80C, empId: 1, flag: 1 };
    axios
      .post("http://localhost:8080/Section80C/postSec80C", infoSection80CCopy)
      .then((response) => {
        axios
          .get("http://localhost:8080/Section80C/getByempIdSec80c/1")
          .then((response) => {
            settotalDataSection80C(response.data);
          });
      });
  };

  //--------------------------------------------------------------------------------------------------------------------------

  const getTotalSection80D = () => {
    var totalSumSection80D = 0;
    axios
      .get("http://localhost:8080/Section80D/getTotalSumSection80d/1")
      .then((res) => setTotalSection80d(res.data));

    axios
      .get("http://localhost:8080/Section80D/getByempIdSec80d/1")
      .then((res) => {
        settotalDataSection80D(res.data);
        const { empId, flag, ...remainObj } = res.data;
        for (let i in remainObj) {
          // totalSumSection80D=Number(totalDataSection80D[i])+totalSumSection80D
          totalSumSection80D += res.data[i];
        }
        setSumSection80D(totalSumSection80D);
      });
  };

  const handleChangeIT_DeclarationSection80D = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    settotalDataSection80D({ ...totalDataSection80D, [key]: value });
  };

  const handleSubmitSection80D = () => {
    let totalSumSection80D = 0;
    const { empId, flag, ...remainObj } = totalDataSection80D;
    for (let i in remainObj) {
      totalSumSection80D = Number(totalDataSection80D[i]) + totalSumSection80D;
    }
    setSumSection80D(totalSumSection80D);
    const infoSection80DCopy = { ...totalDataSection80D, empId: 1, flag: 1 };
    axios
      .post("http://localhost:8080/Section80D/postSec80d", infoSection80DCopy)
      .then((response) => {
        axios
          .get("http://localhost:8080/Section80D/getByempIdSec80d/1")
          .then((response) => {
            settotalDataSection80D(response.data);
          });
      });
  };

  //-------------------------------------------------------------------------------------------------------------------------

  const getTotalSection80E = () => {
    var totalSumSection80E = 0;
    axios
      .get("http://localhost:8080/Section80E/getTotalSumSection80e/1")
      .then((res) => setTotalSection80e(res.data));

    axios
      .get("http://localhost:8080/Section80E/getByempIdSec80e/1")
      .then((res) => {
        settotalDataSection80E(res.data);
        const { empId, flag, ...remainObj } = res.data;
        for (let i in remainObj) {
          totalSumSection80E += remainObj[i];
        }
        setSumSection80E(totalSumSection80E);
      });
  };

  const handleChangeIT_DeclarationSection80E = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    settotalDataSection80E({ ...totalDataSection80E, [key]: value });
  };

  const handleSubmitSection80E = () => {
    let totalSumSection80E = 0;
    const { empId, flag, ...remainObj } = totalDataSection80E;
    for (let i in remainObj) {
      totalSumSection80E = Number(totalDataSection80E[i]) + totalSumSection80E;
    }
    setSumSection80E(totalSumSection80E);
    const infoSection80ECopy = { ...totalDataSection80E, empId: 1, flag: 1 };
    console.log(infoSection80ECopy, "}}}");
    axios
      .post("http://localhost:8080/Section80E/postSec80e", infoSection80ECopy)
      .then((response) => {
        axios
          .get("http://localhost:8080/Section80E/getByempIdSec80e/1")
          .then((response) => {
            settotalDataSection80E(response.data);
          });
      });
  };

  const navigate = useNavigate();

  const handleITDecScreenBack = () => {
    navigate("/");
  };

  const handleSelectRegime = () => {
    navigate("/selectRegime");
  };

  const handleClose = () => {
    setOpen(false);
    Swal.fire({
      title: "Submitted!",
      icon: "success",
    });
  };

  const handleClose1 = () => {
    setOpen1(false);
    Swal.fire({
      title: "Submitted!",
      icon: "success",
    });
  };

  const handleClose2 = () => {
    setOpen2(false);
    Swal.fire({
      title: "Submitted!",
      icon: "success",
    });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 25,
    maxHeight: "90vh", // Set the maximum height for the modal
    overflowY: "auto",
    "@media (max-width: 768px)": {
      width: "90%", // Adjusted width for screens below the 'md' breakpoint
    },
  };
  // clear for section 80C ------------------------------------------------------------------------------------------------

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleClearSection80C = () => {
    const obj = {
      cpf: "",
      lip: "",
      ppf: "",
      ulip: "",
      ion: "",
      nss: "",
      hlp: "",
      fds: "",
      lss: "",
      cee: "",
      dsss: "",
      empId: "1",
      flag: "1",
    };
    let totalSumSection80C = 0;
    axios
      .post("http://localhost:8080/Section80C/postSec80C", obj)
      .then((res) => {
        axios
          .get("http://localhost:8080/Section80C/getByempIdSec80c/1")
          .then((res) => {
            settotalDataSection80C(res.data);
            const { empId, flag, ...remainObjClear } = res.data;

            // console.log()
            for (let i in remainObjClear) {
              totalSumSection80C += Number(remainObjClear[i]);
            }
            setSumSection80C(totalSumSection80C);
            handleCloseModal();
            setTimeout(() => {
              handleOpenModal();
            }, 0);
          });
      });
  };

  // clear for section 80D ------------------------------------------------------------------------------------------------
  const handleOpenModal1 = () => {
    setOpen1(true);
  };

  const handleCloseModal1 = () => {
    setOpen1(false);
  };

  const handleClearSection80D = () => {
    const obj = {
      nps: "",
      mpsc: "",
      mpp: "",
      mppsc: "",
      mth: "",
      mtc: "",
      tbpm: "",
      empId: "1",
      flag: "1",
    };
    let totalSumSection80D = 0;
    axios
      .post("http://localhost:8080/Section80D/postSec80d", obj)
      .then((res) => {
        axios
          .get("http://localhost:8080/Section80D/getByempIdSec80d/1")
          .then((res) => {
            settotalDataSection80D(res.data);
            const { empId, flag, ...remainObjClear } = res.data;

            // console.log()
            for (let i in remainObjClear) {
              totalSumSection80D += Number(remainObjClear[i]);
            }
            setSumSection80D(totalSumSection80D);
            handleCloseModal1();
            setTimeout(() => {
              handleOpenModal1();
            }, 0);
          });
      });
  };

  // clear for section 80E ------------------------------------------------------------------------------------------------
  const handleOpenModal2 = () => {
    setOpen2(true);
  };

  const handleCloseModal2 = () => {
    setOpen2(false);
  };

  const handleClearSection80E = () => {
    const obj = {
      loan: " ",
      rent: " ",
      housingLoan: " ",
      empId: "1",
      flag: "1",
    };
    let totalSumSection80E = 0;
    axios
      .post("http://localhost:8080/Section80E/postSec80e", obj)
      .then((res) => {
        axios
          .get("http://localhost:8080/Section80E/getByempIdSec80e/1")
          .then((res) => {
            settotalDataSection80E(res.data);
            const { empId, flag, ...remainObjClear } = res.data;
            for (let i in remainObjClear) {
              totalSumSection80E += Number(remainObjClear[i]);
            }
            setSumSection80E(totalSumSection80E);
            handleCloseModal2();
            setTimeout(() => {
              handleOpenModal2();
            }, 0);
          });
      });
  };

  return (
    <div className="mt-6">
      <div className="flex space-x-10 items-center px-4">
        <div className="text-gray-400 text-xl ml-4 cursor-pointer">
          <FaArrowLeft onClick={handleITDecScreenBack} />
        </div>
        <div className="text-gray-700 font-semibold text-2xl">
          IT Declaration
        </div>
      </div>

      <div className="border-b-[2px] border-gray-300 mt-1 px-4"></div>

      <div className="mt-8">
        <div className="border-2 border-gray-500 flex items-center  space-x-5 py-1 w-[320px]  lg:ml-[500px] md:ml-[300px] ml-[50px]">
          <div className="ml-3 lg:text-2xl md:text-3xl text-2xl">
            <HiOutlineInformationCircle />
          </div>
          <div className="font-medium text-gray-500 text-xl">
            Declaration window is open
          </div>
        </div>

        <div className="text-center text-gray-500 text-lg lg:text-lg md:text-2xl mt-3 font-normal">
          Enter your planned investment declarations here and choose the desired
          regime in the following page
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-3 gap-28 md:gap-8 lg:gap-28 px-32 lg:px-32 md:px-10">
            <div className="md:col-span-1 col-span-3 md:-ml-0 -ml-16">
              <div className="border-[2px] border-gray-300 shadow-xl">
                <h2 className="text-gray-700 text-lg md:text-xl lg:text-lg text-center font-medium py-1 md:py-[18px] lg:py-1">
                  Section 80 C
                </h2>
                <div className="border-b-[2px] border-gray-300"></div>
                <img
                  className="h-32 w-32 lg:h-32 lg:w-32 md:h-52 md:w-52 ml-[75px] md:ml-[12px] lg:ml-[75px] mt-5 mb-8 "
                  src="./src/assets/savings 2.png"
                />
                <div className="flex space-x-5 items-center ml-12 md:ml-2 lg:ml-12">
                  <h2 className="text-center font-semibold text-gray-500 text-xl">
                    Declared Amount
                  </h2>
                  {totalSection80c.flag == 1 ? (
                    <BsPencil
                      className="lg:text-2xl md:text-3xl text-2xl  text-blue-600 cursor-pointer"
                      onClick={() => setOpen(true)}
                    />
                  ) : (
                    ""
                  )}
                </div>

                <h2 className="text-lg text-center text-blue-500 font-semibold  mb-10 cursor-pointer md:text-2xl lg:text-xl ">
                  INR {sumSection80C}
                </h2>
              </div>
            </div>

            <div className="md:col-span-1 col-span-3 md:-ml-0 -ml-16 -mt-20 md:-mt-0 lg:-mt-0">
              <div className="border-[2px] border-gray-300 shadow-xl">
                <h2 className="text-gray-700 text-lg md:text-xl lg:text-lg text-center font-medium py-1">
                  Section 80D/80DD/80DDB/80U
                </h2>
                <div className="border-b-[2px] border-gray-300"></div>
                <img
                  className="h-32 w-32 lg:h-32 lg:w-32 md:h-52 md:w-52 ml-[75px] md:ml-[12px] lg:ml-[75px] mt-5 mb-8 "
                  src="./src/assets/Medical.jpg"
                />
                <div className="flex space-x-5 items-center ml-12 md:ml-2 lg:ml-12">
                  <h2 className="text-center font-semibold text-gray-500 text-xl">
                    Declared Amount
                  </h2>
                  {totalSection80d.flag == 1 ? (
                    <BsPencil
                      className="lg:text-2xl md:text-3xl text-2xl  text-blue-600 cursor-pointer"
                      onClick={() => setOpen1(true)}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <h2 className="text-lg text-center text-blue-500 font-semibold  mb-10 cursor-pointer md:text-2xl lg:text-xl ">
                  INR {sumSection80D}
                </h2>
              </div>
            </div>

            <div className="md:col-span-1 col-span-3 md:-ml-0 -ml-16 -mt-20 md:-mt-0 lg:-mt-0">
              <div className="border-[2px] border-gray-300 shadow-xl">
                <h2 className="text-gray-700 text-lg md:text-xl lg:text-lg text-center font-medium py-1 ">
                  Section 80E/10/Housing Loan
                </h2>
                <div className="border-b-[2px] border-gray-300"></div>
                <img
                  className="h-32 w-32 lg:h-32 lg:w-32 md:h-52 md:w-52 ml-[75px] md:ml-[12px] lg:ml-[75px] mt-5 mb-8 "
                  src="./src/assets/images icon.png"
                />
                <div className="flex space-x-5 items-center ml-12 md:ml-2 lg:ml-12">
                  <h2 className="text-center font-semibold text-gray-500 text-xl">
                    Declared Amount
                  </h2>
                  {totalSection80e.flag === 1 ? (
                    <BsPencil
                      className="lg:text-2xl md:text-3xl text-2xl  text-blue-600 cursor-pointer"
                      onClick={() => setOpen2(true)}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <h2 className="text-lg text-center text-blue-500 font-semibold  mb-10 cursor-pointer md:text-2xl lg:text-xl ">
                  INR {sumSection80E}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pb-14">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-9 md:col-span-8 col-span-7">
              <div className="md:py-10  py-2 border-[1px] border-gray-500 md:text-xl text-md">
                <div className="flex md:space-x-5 space-x-1 items-center md:ml-[200px] lg:ml-[700px] ml-[2px] text-gray-500 font-semibold">
                  <div className="text-2xl">
                    <HiOutlineInformationCircle />
                  </div>
                  <div>Click Next to choose Regime </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 md:col-span-4 col-span-5">
              <div className="md:py-8 py-1 border-b-[1px] border-t-[1px] border-r-[1px] border-gray-500 flex md:space-x-6 space-x-1 md:pl-12 pl-1">
                <div className="bg-blue-800 md:p-2 cursor-pointer">
                  <h2
                    className="text-white text-xl px-1"
                    onClick={handlePreview}
                  >
                    Preview
                  </h2>
                </div>
                <div
                  className="border-2 border-blue-700 flex items-center space-x-2 text-xl text-blue-700 cursor-pointer"
                  onClick={handleSelectRegime}
                >
                  <div className="md:ml-5 ml-1">Next</div>
                  <div className="md:ml-4 ml-1">
                    <FaArrowRight className="md:mr-4 mr-1 text-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={style} className="">
            <div className="grid grid-cols-3">
              <div className="col-span-1 mt-4 ml-10">
                <div className="font-semibold text-2xl font-gray-700 ml-12 text-gray-600">
                  Section 80C
                </div>
              </div>
              <div className="col-span-1 "></div>

              <div className="col-span-1  mt-4 ">
                <div
                  onClick={() => setOpen(false)}
                  style={{ cursor: "pointer", fontSize: "30px" }}
                >
                  <ImCancelCircle className="md:ml-[350px] mr-[90px] text-gray-600 md:text-3xl text-4xl" />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 120,
                    alignItems: "center",
                    marginTop: "80px",
                  }}
                ></div>
              </div>
            </div>

            <div className="border-[1px] border-gray-400 flex space-x-7 -mt-10">
              <div className="ml-32 my-2">
                <h2 className="mb-2 font-medium font-gray-400">
                  Total Declared Amount in
                </h2>
                <h2 className="text-xl font-gray-700 font-medium">
                  INR {sumSection80C || 0}{" "}
                </h2>
              </div>

              <div className="md:border-r-[1px] md:border-gray-600 "></div>
            </div>

            <div className="mt-6">
              <label className="font-semibold text-xl ml-8">
                Deduction under section 80 C
              </label>
              <div className="grid grid-cols-2">
                <div className="md:col-span-1 col-span-2">
                  <div className="ml-12 mt-5">
                    <label className="font-medium text-gray-900">
                      Contribution to Pension Fund{" "}
                      <span className="font-medium text-gray-500">
                        (Max. Rs. 1,50,000 /-)
                      </span>
                    </label>
                    <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                        INR
                      </div>
                      <div className="bg-blue-700 ml-3">
                        <input
                          type="text"
                          className="w-[180px] outline-none "
                          name="cpf"
                          onChange={handleChangeIT_DeclarationSection80C}
                          value={totalDataSection80C.cpf}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="ml-12 mt-5">
                    <label className="font-medium text-gray-900">
                      Life Insurance Premium
                    </label>
                    <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                        INR
                      </div>
                      <div className="bg-blue-700 ml-3">
                        <input
                          type="text"
                          className="w-[180px] outline-none"
                          name="lip"
                          onChange={handleChangeIT_DeclarationSection80C}
                          value={totalDataSection80C.lip}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="ml-12 mt-5">
                    <label className="font-medium text-gray-900">
                      Public Provident Fund
                    </label>
                    <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                        INR
                      </div>
                      <div className="bg-blue-700 ml-3">
                        <input
                          type="text"
                          className="w-[180px] outline-none"
                          name="ppf"
                          onChange={handleChangeIT_DeclarationSection80C}
                          value={totalDataSection80C.ppf}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="ml-12 mt-5">
                    <label className="font-medium text-gray-900">ULIP</label>
                    <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                        INR
                      </div>
                      <div className="bg-blue-700 ml-3">
                        <input
                          type="text"
                          className="w-[180px] outline-none"
                          name="ulip"
                          onChange={handleChangeIT_DeclarationSection80C}
                          value={totalDataSection80C.ulip}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="ml-12 mt-5">
                    <label className="font-medium text-gray-900">
                      VIII Issue of NSC
                    </label>
                    <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                        INR
                      </div>
                      <div className="bg-blue-700 ml-3">
                        <input
                          type="text"
                          className="w-[180px] outline-none"
                          name="ion"
                          onChange={handleChangeIT_DeclarationSection80C}
                          value={totalDataSection80C.ion}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="ml-12 mt-5">
                    <label className="font-medium text-gray-900">
                      National Saving Scheme
                    </label>
                    <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                        INR
                      </div>
                      <div className="bg-blue-700 ml-3">
                        <input
                          type="text"
                          className="w-[180px] outline-none"
                          name="nss"
                          onChange={handleChangeIT_DeclarationSection80C}
                          value={totalDataSection80C.nss}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1 col-span-2">
                  <div className="ml-12 mt-5">
                    <label className="font-medium text-gray-900 pr-4">
                      Repayment of housing Loan Principal{" "}
                      <span className="font-medium text-gray-500">
                        (Max. Rs. 1,50,000 /-)
                      </span>
                    </label>
                    <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                        INR
                      </div>
                      <div className="bg-blue-700 ml-3">
                        <input
                          type="text"
                          className="w-[180px] outline-none"
                          name="hlp"
                          onChange={handleChangeIT_DeclarationSection80C}
                          value={totalDataSection80C.hlp}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="ml-12 mt-5">
                    <label className="font-medium text-gray-900">
                      Fixed Deposit Savings for 5 Years
                    </label>
                    <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                        INR
                      </div>
                      <div className="bg-blue-700 ml-3">
                        <input
                          type="text"
                          className="w-[180px] outline-none"
                          name="fds"
                          onChange={handleChangeIT_DeclarationSection80C}
                          value={totalDataSection80C.fds}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="ml-12 mt-5">
                    <label className="font-medium text-gray-900">
                      Equity Linked Savings Scheme{" "}
                      <span className="font-medium text-gray-500">
                        (Max. Rs. 1,50,000 /-)
                      </span>
                    </label>
                    <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                        INR
                      </div>
                      <div className="bg-blue-700 ml-3">
                        <input
                          type="text"
                          className="w-[180px] outline-none"
                          name="lss"
                          onChange={handleChangeIT_DeclarationSection80C}
                          value={totalDataSection80C.lss}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="ml-12 mt-5">
                    <label className="font-medium text-gray-900">
                      Children's Eduction Expenses Restricted to Two Children{" "}
                      <br></br>
                      <span className="font-medium text-gray-500">
                        (Max. Rs. 1,50,000 /-)
                      </span>
                    </label>
                    <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                        INR
                      </div>
                      <div className="bg-blue-700 ml-3">
                        <input
                          type="text"
                          className="w-[180px] outline-none"
                          name="cee"
                          onChange={handleChangeIT_DeclarationSection80C}
                          value={totalDataSection80C.cee}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="ml-12 mt-5">
                    <label className="font-medium text-gray-900">
                      Deposite in Sukanya Samriddhi Scheme
                    </label>
                    <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                        INR
                      </div>
                      <div className="bg-blue-700 ml-3">
                        <input
                          type="text"
                          className="w-[180px] outline-none"
                          name="dsss"
                          onChange={handleChangeIT_DeclarationSection80C}
                          value={totalDataSection80C.dsss}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-16 md:ml-[500px] ml-[80px] space-x-10 pb-10">
              <div>
                <button
                  className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
                  onClick={() => {
                    handleSubmitSection80C();
                    handleClose();
                  }}
                >
                  Update
                </button>
              </div>

              <div>
                <button
                  className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700"
                  onClick={handleClearSection80C}
                >
                  Clear
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>

      <div className="">
        <Modal open={open1} onClose={() => setOpen1(false)}>
          <Box sx={style} className="">
            <div className="grid grid-cols-3">
              <div className="col-span-1 mt-4 ml-10">
                <div className="font-semibold text-2xl font-gray-700 ml-12 text-gray-600">
                  Section 80D/80DD/80DDB/80U
                </div>
              </div>
              <div className="col-span-1 "></div>

              <div className="col-span-1  mt-4 ">
                <div
                  onClick={() => setOpen1(false)}
                  style={{ cursor: "pointer", fontSize: "30px" }}
                >
                  <ImCancelCircle className="md:ml-[350px] mr-[90px] text-gray-600 md:text-3xl text-4xl" />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 120,
                    alignItems: "center",
                    marginTop: "80px",
                  }}
                ></div>
              </div>
            </div>

            <div className="border-[1px] border-gray-400 flex space-x-7 -mt-10 mb-5">
              <div className="ml-32 my-2">
                <h2 className="mb-2 font-medium font-gray-400">
                  Total Declared Amount in
                </h2>
                <h2 className="text-xl font-gray-700 font-medium">
                  INR {sumSection80D || 0}
                </h2>
              </div>

              <div className="md:border-r-[1px] md:border-gray-600 bg-blue-900"></div>
            </div>

            <div className="pr-2">
              <div className="font-semibold text-xl ml-8">
                Deduction under section 80 CCD
              </div>

              <div className="ml-10 mt-5 mb-8">
                <div className="font-medium text-gray-900">
                  National Pension Scheme{" "}
                  <span className="font-medium text-gray-500">
                    (Max. Rs. 50,000 /-)
                  </span>
                </div>
                <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                  <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                    INR
                  </div>
                  <div className="bg-blue-700 ml-3">
                    <input
                      type="text"
                      className="w-[180px] outline-none"
                      name="nps"
                      onChange={handleChangeIT_DeclarationSection80D}
                      value={totalDataSection80D.nps}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
                Deduction under section 80 D - Mediclaim Policy (Excluding
                Through CMS)
              </div>

              <div className="ml-10 mt-5">
                <label className="font-medium text-gray-900">
                  Premium for Mediclaim Policy for Self, Spouse & Child{" "}
                  <span className="font-medium text-gray-500">
                    (Maximum excemption Rs. 25,000 /-)
                  </span>
                </label>
                <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                  <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                    INR
                  </div>
                  <div className="bg-blue-700 ml-3">
                    <input
                      type="text"
                      className="w-[180px] outline-none"
                      name="mpsc"
                      onChange={handleChangeIT_DeclarationSection80D}
                      value={totalDataSection80D.mpsc}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="ml-10 mt-5">
                <label className="font-medium text-gray-900">
                  Premium for Mediclaim Policy for Parents{" "}
                  <span className="font-medium text-gray-500">
                    (Parent's age less than 60 years)
                  </span>
                </label>
                <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                  <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                    INR
                  </div>
                  <div className="bg-blue-700 ml-3">
                    <input
                      type="text"
                      className="w-[180px] outline-none"
                      name="mpp"
                      onChange={handleChangeIT_DeclarationSection80D}
                      value={totalDataSection80D.mpp}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="ml-10 mt-5 mb-8">
                <label className="font-medium text-gray-900">
                  Premium for Mediclaim Policy for Parents{" "}
                  <span className="font-medium text-gray-500">
                    (Parent's age less than 60 years (Senior Citizen))
                  </span>
                </label>
                <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                  <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                    INR
                  </div>
                  <div className="bg-blue-700 ml-3">
                    <input
                      type="text"
                      className="w-[180px] outline-none"
                      name="mppsc"
                      onChange={handleChangeIT_DeclarationSection80D}
                      value={totalDataSection80D.mppsc}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
                Deduction in respect of maintainance including medical treatment
                of handicapped dependent who is a person with disability{" "}
              </div>

              <div className="ml-10 mt-5 mb-8">
                <label className="font-medium text-gray-900">
                  Maximum excemption is 1,25,000 /- for dependent with
                  disability Deduction in respect of maintainance including
                  medical treatment of handicapped dependent who is a person
                  with disability less than 80% and more than 40%
                </label>
                <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                  <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                    INR
                  </div>
                  <div className="bg-blue-700 ml-3">
                    <input
                      type="text"
                      className="w-[180px] outline-none"
                      name="mth"
                      onChange={handleChangeIT_DeclarationSection80D}
                      value={totalDataSection80D.mth}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
                Deduction in respect of medical treatment for cases covered
                under rule 11DD (1) of IT rules,1962 [Sec.80DDB] max Rs. 40000/-{" "}
              </div>

              <div className="ml-10 mt-5 mb-8">
                <label className="font-medium text-gray-900">
                  National Savings Scheme
                </label>
                <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                  <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                    INR
                  </div>
                  <div className="bg-blue-700 ml-3">
                    <input
                      type="text"
                      className="w-[180px] outline-none"
                      name="mtc"
                      onChange={handleChangeIT_DeclarationSection80D}
                      value={totalDataSection80D.mtc}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
                Deduction in respect of Totally Blind physically or mentally
                retard person [Sec.80U] max Rs. 75000 /-
              </div>

              <div className="ml-10 mt-5 mb-8">
                <label className="font-medium text-gray-900">
                  YES/NO (if yes please enclose the certificate){" "}
                </label>
                <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                  <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                    INR
                  </div>
                  <div className="bg-blue-700 ml-3">
                    <input
                      type="text"
                      className="w-[180px] outline-none"
                      name="tbpm"
                      onChange={handleChangeIT_DeclarationSection80D}
                      value={totalDataSection80D.tbpm}
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-16 md:ml-[500px] ml-[80px] space-x-10 pb-10">
              <div>
                <button
                  className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
                  onClick={() => {
                    handleSubmitSection80D();
                    handleClose1();
                  }}
                >
                  Update
                </button>
              </div>

              <div>
                <button
                  className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700"
                  onClick={handleClearSection80D}
                >
                  Clear
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>

      <div className="">
        <Modal open={open2} onClose={() => setOpen2(false)}>
          <Box sx={style} className="">
            <div className="items-center md:space-x-[340px] space-x-20 flex mt-10 p-4">
              <div className="font-semibold text-2xl font-gray-700 md:ml-12 ml-4 text-gray-600">
                Section 80E/10/HousingLoan
              </div>
              <div
                onClick={() => setOpen2(false)}
                style={{ cursor: "pointer", fontSize: "30px" }}
              >
                <ImCancelCircle className="md:ml-[350px] -ml-[30px] text-gray-600 md:text-xl text-4xl" />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 120,
                alignItems: "center",
                marginTop: "80px",
              }}
            ></div>

            <div className="border-[1px] border-gray-400 flex space-x-7 -mt-10 mb-5">
              <div className="ml-32 my-2">
                <h2 className="mb-2 font-medium font-gray-400">
                  Total Declared Amount in
                </h2>
                <h2 className="text-xl font-gray-700 font-medium">
                  INR {sumSection80E || 0}
                </h2>
              </div>
              <div className="md:border-r-[1px] md:border-gray-600 bg-blue-900"></div>
            </div>

            <div className="pr-2">
              <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
                Deduction in respect of repayment of Loan "Only Interest on
                Loan" Taken for Higher Education [Sec.80E]
              </div>

              <div className="ml-10 mt-5 mb-8">
                <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                  <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                    INR
                  </div>
                  <div className="bg-blue-700 ml-3">
                    <input
                      type="text"
                      className="w-[180px] outline-none"
                      name="loan"
                      onChange={handleChangeIT_DeclarationSection80E}
                      value={totalDataSection80E.loan}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
                House Rent Exemption Under Section 10 (13A)
              </div>

              <div className="ml-10 mt-5 mb-8">
                <label className="font-medium text-gray-900">
                  {" "}
                  <span className="font-medium text-gray-500">
                    Rent Payable per month
                  </span>
                </label>
                <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                  <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                    INR
                  </div>
                  <div className="bg-blue-700 ml-3">
                    <input
                      type="text"
                      className="w-[180px] outline-none"
                      name="rent"
                      onChange={handleChangeIT_DeclarationSection80E}
                      value={totalDataSection80E.rent}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="font-semibold text-xl md:ml-8 md:pl-0 pl-8">
                Interest paid on housing Loan from approved Financial
                Institution
              </div>

              <div className="ml-10 mt-5 mb-8">
                <div className="mt-3 flex items-center border-[1px] border-gray-600 w-[250px] rounded-sm p-1 font-medium text-gray-600">
                  <div className="text-gray-600 border-r-[1px] border-gray-600 w-20 text-center px-2">
                    INR
                  </div>
                  <div className="bg-blue-700 ml-3">
                    <input
                      type="text"
                      className="w-[180px] outline-none"
                      name="housingLoan"
                      onChange={handleChangeIT_DeclarationSection80E}
                      value={totalDataSection80E.housingLoan}
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:mt-16  md:ml-[500px] ml-[80px] space-x-10 pb-10">
              <div>
                <button
                  className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
                  onClick={() => {
                    handleSubmitSection80E();
                    handleClose2();
                  }}
                >
                  Update
                </button>
              </div>

              <div>
                <button
                  className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700"
                  onClick={handleClearSection80E}
                >
                  Clear
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default IT_Declaration_Update;
