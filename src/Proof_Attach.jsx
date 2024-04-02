import { Box, Modal } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiComment } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { ImAttachment, ImCancelCircle } from "react-icons/im";
import { TbCircleCheckFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Attachment from "./Attachment";
import useFileStore from "./Zustand";

function Proof_Attach() {
  const navigate = useNavigate();

  const { regime } = useFileStore();

  const files = useFileStore((state) => state.files);
  console.log(files);

  const [open, setOpen] = useState(false);
  console.log("hello open");

  const [message, setMessage] = useState(false);
  const handleMessage = () => {
    window.scrollTo(0, 0);
    setMessage(true);
  };

  const handleProofOfInvestmentScreenBack = () => {
    navigate("/");
  };

  const [openCommentIndex, setOpenCommentIndex] = useState(null);

  const [openAttachIndex, setOpenAttachIndex] = useState(null);

  const [indexInfo, setIndexInfo] = useState(0);
  const handleCommentClick = (index) => {
    console.log(index, "index");
    console.log(openCommentIndex, "openCommentIndex");
    setOpenCommentIndex(openCommentIndex === index ? null : index);
  };

  console.log(openCommentIndex, "openCommentIndex1");

  const handleAttachClick = (index) => {
    setIndexInfo(index);
    console.log(index, "index...");
    console.log(openCommentIndex, "openCommentIndex...");
    setOpenAttachIndex(openAttachIndex === index ? null : index);
  };

  useEffect(() => {
    console.log("called");
    useFileStore.getState().clearAllFiles();
  }, [indexInfo]);

  // useEffect(() => {
  //   setOpenAttachIndex(null);
  // }, [openAttachIndex]);

  // Function to remove a file
  // const handleRemoveFile = (index) => {
  //   useFileStore.getState().removeFile(index);
  // };

  console.log(openCommentIndex, "openCommentIndex1");

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

  // actual

  // const [actual80c, setActual80c] = useState("");
  // const handleChangeActualInsert80c = (e) => {
  //   const { name, value } = e.target;
  //   setActual80c({ ...actual80c, [name]: value });
  // };

  // console.log(actual80c, ".....");

  // const handleActualInsert80c = () => {
  //   let newActual80c = { ...actual80c, empId: 1 };
  //   console.log(newActual80c, "newActual80c");
  //   axios
  //     .post("http://localhost:8080/api80c/actualIns", newActual80c)
  //     .then((res) => console.log("inserted"));
  // };

  //

  const [actual80c, setActual80c] = useState("");
  const [actual80d, setActual80d] = useState("");
  const [actual80e, setActual80e] = useState("");

  useEffect(() => {
    handleDisplayActual80c();
    handleDisplayActual80d();
    handleDisplayActual80e();
  }, []);

  const handleDisplayActual80c = () => {
    axios.get("http://localhost:8080/api80c/actualGet/1").then((res) => {
      setActual80c(res.data);
    });
  };

  const handleDisplayActual80d = () => {
    axios.get("http://localhost:8080/api80d/actualGet/1").then((res) => {
      setActual80d(res.data);
    });
  };

  const handleDisplayActual80e = () => {
    axios.get("http://localhost:8080/api80e/actualGet/1").then((res) => {
      setActual80e(res.data);
    });
  };
  const handleNavigateProof = () => {
    navigate("/proof_of_investment_update");
  };

  const [toggle, setToggle] = useState(false);
  const openComment = () => {
    setToggle(!toggle);
  };

  const handleSubmitButton = () => {
    navigate("/proof_of_investment_edit");
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

    // const handleSubmit = () => {
    //   const formData = new FormData();
    //   for (let i = 0; i < files.length; i++) {
    //     formData.append("files", files[i].file); // Append the file data, not the file object itself
    //   }

    //   console.log(formData);

    //   axios
    //     .post("http://localhost:8080/files/upload", formData)
    //     .then((res) => console.log("inserted"))
    //     .catch((error) => console.error("Error inserting:", error));
    // };
  };

  return (
    <div className="px-4">
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

          <div className="border-[1px] border-gray-400 mt-0 pl-5">
            <div className="flex space-x-[400px] text-md font-semibold bg-gray-100 pt-2 pb-4">
              <div>Particulars</div>
              <div className="flex space-x-10 items-center ">
                <h2>Declared Amount</h2>
                <h2>Actual Amount</h2>
                <h2>Proofs</h2>
                <h2>Comments</h2>
              </div>
            </div>

            <h1 className="text-lg font-semibold text-gray-700 mt-4">
              Deduction under section 80 C
            </h1>

            <div>
              <div>
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6 my-2">
                    <h2 className="ml-5  font-semibold text-gray-700">
                      Contribution to Pension Fund
                      <span className="text-gray-500">
                        (Max. Rs. 1,50,000 /-)
                      </span>
                    </h2>
                  </div>
                  <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
                    {netData80C.cpf}
                  </div>
                  <div className="col-span-2">
                    <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          //name="cpf"
                          // onChange={handleChangeActualInsert80c}
                          value={actual80c.cpf}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-blue-800">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(0)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] -mt-[40px] ">
                    {openAttachIndex === 0 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(0)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] -mt-[40px] ">
                    {openCommentIndex === 0 && (
                      <textarea
                        placeholder="Write your comment1..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                  <div className="col-span-6 my-2">
                    <h2 className="ml-5  font-semibold text-gray-700">
                      Life Insurance Premium
                    </h2>
                  </div>
                  <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
                    {netData80C.lip}
                  </div>
                  <div className="col-span-2">
                    <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          //name="lip"
                          // onChange={handleChangeActualInsert80c}
                          value={actual80c.lip}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-blue-800">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(1)}
                    />
                  </div>

                  <div className="absolute ml-[1000px] -mt-[20px] ">
                    {openAttachIndex === 1 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(1)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] -mt-[20px] ">
                    {openCommentIndex === 1 && (
                      <textarea
                        placeholder="Write your comment2..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                  <div className="col-span-6 my-2">
                    <h2 className="ml-5  font-semibold text-gray-700">
                      Public Provident Fund
                    </h2>
                  </div>
                  <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
                    {netData80C.ppf}
                  </div>
                  <div className="col-span-2">
                    <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          //name="ppf"
                          // onChange={handleChangeActualInsert80c}
                          value={actual80c.ppf}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-blue-800">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(2)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[0px] ">
                    {openAttachIndex === 2 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(2)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[0px] ">
                    {openCommentIndex === 2 && (
                      <textarea
                        placeholder="Write your comment3..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                  <div className="col-span-6 my-2">
                    <h2 className="ml-5  font-semibold text-gray-700">ULIP</h2>
                  </div>
                  <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
                    {netData80C.ulip}
                  </div>
                  <div className="col-span-2">
                    <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          //name="ulip"
                          // onChange={handleChangeActualInsert80c}
                          value={actual80c.ulip}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-blue-800">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(3)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[40px] ">
                    {openAttachIndex === 3 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(3)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[40px] ">
                    {openCommentIndex === 3 && (
                      <textarea
                        placeholder="Write your comment4..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                  <div className="col-span-6 my-2">
                    <h2 className="ml-5  font-semibold text-gray-700">
                      VIII Issue of NSC
                    </h2>
                  </div>
                  <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
                    {netData80C.ion}
                  </div>
                  <div className="col-span-2">
                    <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          //name="ion"
                          // onChange={handleChangeActualInsert80c}
                          value={actual80c.ion}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-blue-800">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(4)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[80px] ">
                    {openAttachIndex === 4 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(4)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[80px] ">
                    {openCommentIndex === 4 && (
                      <textarea
                        placeholder="Write your comment5..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                  <div className="col-span-6 my-2">
                    <h2 className="ml-5 font-semibold text-gray-700">
                      National Savings Scheme
                    </h2>
                  </div>
                  <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
                    {netData80C.nss}
                  </div>
                  <div className="col-span-2">
                    <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          // name="nss"
                          // onChange={handleChangeActualInsert80c}
                          value={actual80c.nss}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-blue-800">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(5)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[120px] ">
                    {openAttachIndex === 5 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(5)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[120px] ">
                    {openCommentIndex === 5 && (
                      <textarea
                        placeholder="Write your comment6..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                  <div className="col-span-6 my-2">
                    <h2 className="ml-5  font-semibold text-gray-700">
                      Repayment of housing Loan Principle{" "}
                      <span className="text-gray-500">
                        (Max. Rs. 1,50,000 /-)
                      </span>
                    </h2>
                  </div>
                  <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
                    {netData80C.hlp}
                  </div>
                  <div className="col-span-2">
                    <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1 ">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          //name="hlp"
                          // onChange={handleChangeActualInsert80c}
                          value={actual80c.hlp}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-blue-800">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(6)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openAttachIndex === 6 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(6)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openCommentIndex === 6 && (
                      <textarea
                        placeholder="Write your comment7..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                  <div className="col-span-6 my-2">
                    <h2 className="ml-5  font-semibold text-gray-700">
                      Fixed Deposit Savings for 5 years
                    </h2>
                  </div>
                  <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
                    {netData80C.fds}
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          // // name="fds"
                          // onChange={handleChangeActualInsert80c}
                          value={actual80c.fds}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-blue-800">
                    <ImAttachment />
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(7)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[200px] ">
                    {openCommentIndex === 7 && (
                      <textarea
                        placeholder="Write your comment8..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                  <div className="col-span-6 my-2">
                    <h2 className="ml-5  font-semibold text-gray-700">
                      Equity Linked Savings Scheme
                      <span className="text-gray-500">
                        (Max. Rs. 1,50,000 /-)
                      </span>
                    </h2>
                  </div>
                  <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
                    {netData80C.lss}
                  </div>
                  <div className="col-span-2">
                    <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          //name="lss"
                          // onChange={handleChangeActualInsert80c}
                          value={actual80c.lss}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-blue-800">
                    <ImAttachment />
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(8)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[240px] ">
                    {openCommentIndex === 8 && (
                      <textarea
                        placeholder="Write your comment9..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                  <div className="col-span-6 my-2">
                    <h2 className="ml-5  font-semibold text-gray-700">
                      Children's Education Expenses
                      <span className="text-gray-500">
                        (Max. Rs. 1,50,000 /-)
                      </span>{" "}
                      <br></br>
                      Restricted to Two Children{" "}
                    </h2>
                  </div>
                  <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
                    {netData80C.cee}
                  </div>
                  <div className="col-span-2">
                    <div className="mt-0 flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          // name="cee"
                          // onChange={handleChangeActualInsert80c}
                          value={actual80c.cee}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-blue-800">
                    <ImAttachment />
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(9)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[280px] ">
                    {openCommentIndex === 9 && (
                      <textarea
                        placeholder="Write your comment10..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                  <div className="col-span-6">
                    <h2 className="ml-5  font-semibold text-gray-700">
                      Deposite in Sukanya Samriddhi Scheme
                    </h2>
                  </div>
                  <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
                    {netData80C.fds}
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          // name="dsss"
                          // onChange={handleChangeActualInsert80c}
                          value={actual80c.dsss}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-blue-800">
                    <ImAttachment />
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(10)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[320px] ">
                    {openCommentIndex === 10 && (
                      <textarea
                        placeholder="Write your comment11..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

                <h2 className="text-lg font-semibold text-gray-700 mt-4">
                  Deduction under section 80 CCD
                </h2>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6 ml-5">
                    <h2 className=" text-gray-600 font-medium">
                      National Pension Scheme{" "}
                      <span className="text-gray-500">
                        (Max. Rs. 50,000 /-)
                      </span>
                    </h2>
                  </div>

                  <div className="col-span-2 text-gray-500 font-medium text-lg ml-5">
                    <h2 className="my-2">{netData80D.nps}</h2>
                  </div>

                  <div className="col-span-2">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          value={actual80d.nps}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 text-blue-800">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(11)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openAttachIndex === 11 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(11)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openCommentIndex === 11 && (
                      <textarea
                        placeholder="Write your comment11..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

                <h2 className="text-lg font-semibold text-gray-700 mt-4">
                  Deduction under section 80 D - Medicliam Policy (Excluding
                  Through CMS)
                </h2>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6 ml-5">
                    <h2 className="my-2 text-lg font-semibold ">
                      Premium for Mediclaim policy for Self & ChildSpouse
                      <span className="text-gray-500">
                        (Maximum exemption Rs. 25,000 /-)
                      </span>
                    </h2>
                  </div>

                  <div className="col-span-2 text-gray-500 font-medium text-lg ml-5">
                    <h2 className="">{netData80D.mpsc}</h2>
                  </div>

                  <div className="col-span-2">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          value={actual80d.mpsc}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 text-blue-800">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(12)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openAttachIndex === 12 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(12)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openCommentIndex === 12 && (
                      <textarea
                        placeholder="Write your comment12..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>

                  <div className="col-span-6 ml-5">
                    <h2 className="my-2 text-lg font-semibold ">
                      Premium for Mediclaim policy for Parents{" "}
                      <span className="text-gray-500">
                        (Parent's age less than 60 years)
                      </span>
                    </h2>
                  </div>

                  <div className="col-span-2 text-gray-500 font-medium text-lg ml-5">
                    <h2 className="">{netData80D.mpp}</h2>
                  </div>

                  <div className="col-span-2">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          value={actual80d.mpp}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 text-blue-800">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(13)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openAttachIndex === 13 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(13)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openCommentIndex === 13 && (
                      <textarea
                        placeholder="Write your comment13..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>

                  <div className="col-span-6 ml-5">
                    <h2 className="my-2 text-lg font-semibold ">
                      Premium for Mediclaim policy for Parents
                      <span className="text-gray-500 text-md font-semibold ">
                        (Parent's age less than 60 years (Senior Citizen))
                      </span>
                    </h2>
                  </div>

                  <div className="col-span-2 text-gray-500 font-medium text-lg ml-5">
                    <h2 className="">{netData80D.mppsc}</h2>
                  </div>

                  <div className="col-span-2">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          value={actual80d.mppsc}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 text-blue-800">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(14)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openAttachIndex === 14 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(14)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openCommentIndex === 14 && (
                      <textarea
                        placeholder="Write your comment14..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6">
                    <h2 className="text-lg font-semibold text-gray-700 mt-4">
                      Deduction in respect of maintainance including medical
                      treatment of handicapped dependent who is a person with
                      disability
                    </h2>
                    <div className="ml-5 font-semibold text-gray-700 text-md">
                      <h2 className="">
                        Maxiumum exemption is 1,25,000 /- for dependent with
                        disability more than 80% and 70,000 /- for dependent
                        with disability less than 80% and more than 40%
                      </h2>
                    </div>
                  </div>

                  <div className="col-span-2 mt-10 ml-5 text-gray-500 font-medium text-lg">
                    {netData80D.mth}
                  </div>

                  <div className="col-span-2 mt-12">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          value={actual80d.mth}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 text-blue-800 mt-12">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(15)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openAttachIndex === 15 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800 mt-12">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(15)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openCommentIndex === 15 && (
                      <textarea
                        placeholder="Write your comment15..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6">
                    <h2 className="text-lg text-gray-800 py-3 font-medium">
                      Deduction in respect of medical treatment for cases
                      covered under rule 11DD (1) of IT rules , 1962 [Sec.80DDB]
                      max Rs. 40,000 /-
                    </h2>
                    <div className="font-semibold text-gray-700 ">
                      <h2 className="ml-5">National Savings Scheme</h2>
                    </div>
                  </div>

                  <div className="col-span-2 py-4 ml-5 text-gray-500 font-medium text-lg">
                    {netData80D.mtc}
                  </div>

                  <div className="col-span-2 mt-10">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          value={actual80d.mtc}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 text-blue-800 mt-12">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(16)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openAttachIndex === 16 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800 mt-12">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(16)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openCommentIndex === 16 && (
                      <textarea
                        placeholder="Write your comment16..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6">
                    <h2 className="text-lg text-gray-800 py-3 font-medium">
                      Deduction in respect of Totally Blind Physically
                      handicapped or mentally retarded person [Sec. 80U] max Rs.
                      75,000 /-
                    </h2>
                    <div className="font-semibold text-gray-700">
                      <h2 className="ml-5">
                        Yes / No (if yes please enclose the certificate){" "}
                      </h2>
                    </div>
                  </div>

                  <div className="col-span-2 py-4 ml-5 text-gray-500 font-medium text-lg">
                    {netData80D.tbpm}
                  </div>

                  <div className="col-span-2 mt-12">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          value={actual80d.tbpm}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-blue-800 mt-12">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(17)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openAttachIndex === 17 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800 mt-12">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(17)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openCommentIndex === 17 && (
                      <textarea
                        placeholder="Write your comment13..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6">
                    <h2 className="text-lg text-gray-800 pt-3 font-medium">
                      Deduction in respect of repayment of Loan "Only interest
                      on Loan" Taken for Higher Eduction [Sec. 80E]
                    </h2>
                  </div>

                  <div className="col-span-2 mt-10 ml-5 text-gray-500 font-medium text-lg">
                    {netData80E.loan}
                  </div>

                  <div className="col-span-2 mt-10">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          value={actual80e.loan}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 text-blue-800 mt-10">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(18)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openAttachIndex === 18 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800 mt-10">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(18)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openCommentIndex === 18 && (
                      <textarea
                        placeholder="Write your comment18..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6">
                    <h2 className="text-lg text-gray-800 pt-3 font-medium">
                      House Rent Exemption unser Section 10 (13A) <br></br>
                    </h2>
                    <div className="font-semibold text-gray-700 ">
                      <h2 className="ml-5">Rent payable per month</h2>
                    </div>
                  </div>

                  <div className="col-span-2 mt-10 ml-5 text-gray-500 font-medium text-lg">
                    {netData80E.rent}
                  </div>

                  <div className="col-span-2 mt-10">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          value={actual80e.rent}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 text-blue-800 mt-10">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(19)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openAttachIndex === 19 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800 mt-10">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(19)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openCommentIndex === 19 && (
                      <textarea
                        placeholder="Write your comment19..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[840px]"></div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6">
                    <h2 className="text-lg text-gray-800 py-3 font-medium">
                      Interest paid on housingloan from approved Financial
                      Institution
                    </h2>
                  </div>

                  <div className="col-span-2 mt-5 ml-5 text-gray-500 font-medium text-lg">
                    {netData80E.housingLoan}
                  </div>

                  <div className="col-span-2 mt-5">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          value={actual80e.housingLoan}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 text-blue-800 mt-5">
                    <ImAttachment
                      className="cursor-pointer"
                      onClick={() => handleAttachClick(20)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px] ">
                    {openAttachIndex === 20 && <Attachment />}
                  </div>
                  <div className="col-span-1 text-2xl text-blue-800 mt-5">
                    <BiComment
                      className="cursor-pointer"
                      onClick={() => handleCommentClick(20)}
                    />
                  </div>
                  <div className="absolute ml-[1000px] mt-[160px]">
                    {openCommentIndex === 20 && (
                      <textarea
                        placeholder="Write your comment20..."
                        rows={4}
                        cols={38}
                        className="border-[1px] border-black outline-none"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-20 items-center ml-[1000px] mt-10 pb-10">
        <button
          className="py-[10px] px-5 bg-blue-700 text-white  font-semibold"
          onClick={() => {
            // handleActualInsert80c();
            handleNavigateProof();
            // handleActualInsert80d();
            // handleActualInsert80e();
            //"/proofsAndComments"
            setOpen(true);
            // handleSubmit();
            handleMessage();
          }}
        >
          Submit
        </button>
      </div>

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

export default Proof_Attach;

/*
import React, { useState } from "react";

function A() {
  const [openCommentIndex, setOpenCommentIndex] = useState(null);

  const handleCommentClick = (index) => {
    console.log(index, "index");
    console.log(openCommentIndex, "openCommentIndex");
    setOpenCommentIndex(openCommentIndex === index ? null : index);
  };

  console.log(openCommentIndex, "openCommentIndex1");

  return (
    <div>
      <div>
        <span onClick={() => handleCommentClick(0)}>Comment Icon</span>
        {openCommentIndex === 0 && (
          <textarea placeholder="Write your comment1..." rows={4} cols={50} />
        )}
      </div>
      <div>
        <span onClick={() => handleCommentClick(1)}>Comment Icon</span>
        {openCommentIndex === 1 && (
          <textarea placeholder="Write your comment2..." rows={4} cols={50} />
        )}
      </div>
      <div>
        <span onClick={() => handleCommentClick(2)}>Comment Icon</span>
        {openCommentIndex === 2 && (
          <textarea placeholder="Write your comment3..." rows={4} cols={50} />
        )}
      </div>
      <div>
        <span onClick={() => handleCommentClick(3)}>Comment Icon</span>
        {openCommentIndex === 3 && (
          <textarea placeholder="Write your comment4..." rows={4} cols={50} />
        )}
      </div>
      <div>
        <span onClick={() => handleCommentClick(4)}>Comment Icon</span>
        {openCommentIndex === 4 && (
          <textarea placeholder="Write your comment5..." rows={4} cols={50} />
        )}
      </div>
    </div>
  );
}

export default A;

*/
