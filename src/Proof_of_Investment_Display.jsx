import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { TbCircleCheckFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Service from "./Service";
import useFileStore from "./Zustand";

function Proof_of_Investment_Display() {
  const navigate = useNavigate();

  const { regime } = useFileStore();

  const handleProofOfInvestmentScreenBack = () => {
    navigate("/");
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
    Service.getSection80CByEmpId().then((res) => {
      setNetData80C(res.data);
    });
  };

  const getTotalSection80D = () => {
    Service.getSection80DByEmpId().then((res) => {
      setNetData80D(res.data);
    });
  };

  const getTotalSection80E = () => {
    Service.getSection80EByEmpId().then((res) => {
      setNetData80E(res.data);
    });
  };

  // actual

  const [actual80c, setActual80c] = useState("");
  const [actual80d, setActual80d] = useState("");
  const [actual80e, setActual80e] = useState("");

  const handleChangeActualInsert80c = (e) => {
    const { name, value } = e.target;
    setActual80c({ ...actual80c, [name]: value });
  };

  const handleActualInsert80c = () => {
    let newActual80c = { ...actual80c, empId: 1 };
    Service.postSection80CActualValue(newActual80c).then((res) =>
      console.log("inserted")
    );
  };

  useEffect(() => {
    Service.getSection80CActualValue().then((res) => {
      setActual80c(res.data);
    });
  }, []);

  const handleChangeActualInsert80d = (e) => {
    const { name, value } = e.target;
    setActual80d({ ...actual80d, [name]: value });
  };

  useEffect(() => {
    Service.getSection80DActualValue().then((res) => {
      setActual80d(res.data);
    });
  }, []);

  useEffect(() => {
    Service.getSection80EActualValue().then((res) => {
      setActual80e(res.data);
    });
  }, []);

  const handleActualInsert80d = () => {
    let newActual80d = { ...actual80d, empId: 1 };
    Service.postSection80DActualValue(newActual80d).then((res) =>
      console.log("inserted")
    );
  };

  const handleChangeActualInsert80e = (e) => {
    const { name, value } = e.target;
    setActual80e({ ...actual80e, [name]: value });
  };

  const handleActualInsert80e = () => {
    let newActual80e = { ...actual80e, empId: 1 };
    Service.postSection80EActualValue(newActual80e).then((res) =>
      console.log("inserted")
    );
  };

  const handleNavigateProof = () => {
    navigate("/proof_of_investment_update");
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
        <div className="col-span-9 ">
          <div className="flex justify-between px-2 font-semibold mt-5 mb-5">
            <div className="text-xl ">Declaration Summary</div>
            <div className="text-gray-600 ml-10 text-xl">
              Financial Year: <span className="text-black">2024-2025</span>
            </div>
          </div>

          <div className="border-[1px] border-gray-400 mt-0 pl-4">
            <div className="flex space-x-[520px] text-xl font-semibold bg-gray-100 pt-2 pb-4">
              <div>Particulars</div>
              <div className="flex space-x-10 items-center ">
                <h2>Declared Amount</h2>
                <h2>Actual Amount</h2>
              </div>
            </div>

            <h1 className="text-lg font-semibold text-gray-700 mt-4">
              Deduction under section 80 C
            </h1>

            <div>
              <div>
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-8">
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
                          name="cpf"
                          onChange={handleChangeActualInsert80c}
                          value={actual80c.cpf}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8">
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
                          name="lip"
                          onChange={handleChangeActualInsert80c}
                          value={actual80c.lip}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8">
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
                          name="ppf"
                          onChange={handleChangeActualInsert80c}
                          value={actual80c.ppf}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8">
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
                          name="ulip"
                          onChange={handleChangeActualInsert80c}
                          value={actual80c.ulip}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8">
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
                          name="ion"
                          onChange={handleChangeActualInsert80c}
                          value={actual80c.ion}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8">
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
                          name="nss"
                          onChange={handleChangeActualInsert80c}
                          value={actual80c.nss}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8">
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
                          name="hlp"
                          onChange={handleChangeActualInsert80c}
                          value={actual80c.hlp}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8">
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
                          name="fds"
                          onChange={handleChangeActualInsert80c}
                          value={actual80c.fds}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8">
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
                          name="lss"
                          onChange={handleChangeActualInsert80c}
                          value={actual80c.lss}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8">
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
                          name="cee"
                          onChange={handleChangeActualInsert80c}
                          value={actual80c.cee}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8">
                    <h2 className="ml-5  font-semibold text-gray-700">
                      Deposite in Sukanya Samriddhi Scheme
                    </h2>
                  </div>

                  <div className="col-span-2 ml-5 text-gray-500 font-medium text-lg">
                    {netData80C.dsss}
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
                          name="dsss"
                          onChange={handleChangeActualInsert80c}
                          value={actual80c.dsss}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[940px]"></div>

                <h2 className="text-lg font-semibold text-gray-700 mt-4">
                  Deduction under section 80 CCD
                </h2>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-8 ml-5">
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
                          name="nps"
                          onChange={handleChangeActualInsert80d}
                          value={actual80d.nps}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[940px]"></div>

                <h2 className="text-lg font-semibold text-gray-700 mt-4">
                  Deduction under section 80 D - Medicliam Policy (Excluding
                  Through CMS)
                </h2>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-8 ml-5">
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
                          name="mpsc"
                          onChange={handleChangeActualInsert80d}
                          value={actual80d.mpsc}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8 ml-5">
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
                          name="mpp"
                          onChange={handleChangeActualInsert80d}
                          value={actual80d.mpp}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-8 ml-5">
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
                          name="mppsc"
                          onChange={handleChangeActualInsert80d}
                          value={actual80d.mppsc}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[940px]"></div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-8">
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

                  <div className="col-span-2 py-4 ml-5 text-gray-500 font-medium text-lg">
                    {netData80D.mth}
                  </div>

                  <div className="col-span-2 py-4">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          name="mth"
                          onChange={handleChangeActualInsert80d}
                          value={actual80d.mth}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[940px]"></div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-8">
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

                  <div className="col-span-2 py-4">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          name="mtc"
                          onChange={handleChangeActualInsert80d}
                          value={actual80d.mtc}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[940px]"></div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-8">
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

                  <div className="col-span-2 py-4">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          name="tbpm"
                          onChange={handleChangeActualInsert80d}
                          value={actual80d.tbpm}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[940px]"></div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-8">
                    <h2 className="text-lg text-gray-800 pt-3 font-medium">
                      Deduction in respect of repayment of Loan "Only interest
                      on Loan" Taken for Higher Eduction [Sec. 80E]
                    </h2>
                  </div>

                  <div className="col-span-2 pt-4 ml-5 text-gray-500 font-medium text-lg">
                    {netData80E.loan}
                  </div>

                  <div className="col-span-2 pt-4">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          name="loan"
                          onChange={handleChangeActualInsert80e}
                          value={actual80e.loan}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[940px]"></div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-8">
                    <h2 className="text-lg text-gray-800 pt-3 font-medium">
                      House Rent Exemption unser Section 10 (13A) <br></br>
                    </h2>
                    <div className="font-semibold text-gray-700 ">
                      <h2 className="ml-5">Rent payable per month</h2>
                    </div>
                  </div>

                  <div className="col-span-2 pt-4 ml-5 text-gray-500 font-medium text-lg">
                    {netData80E.rent}
                  </div>

                  <div className="col-span-2 pt-4">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          name="rent"
                          onChange={handleChangeActualInsert80e}
                          value={actual80e.rent}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-b-[1px] bg-gray-400 mt-5 w-[940px]"></div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-8">
                    <h2 className="text-lg text-gray-800 py-3 font-medium">
                      Interest paid on housingloan from approved Financial
                      Institution
                    </h2>
                  </div>

                  <div className="col-span-2 py-3 ml-5 text-gray-500 font-medium text-lg">
                    {netData80E.housingLoan}
                  </div>

                  <div className="col-span-2 py-3">
                    <div className="flex items-center border-[1px] border-gray-400 w-[120px] rounded-sm  font-medium text-gray-600">
                      <div className="text-gray-600 border-r-[1px] border-gray-400 w-10 text-center px-2">
                        INR
                      </div>
                      <div className="ml-1">
                        <input
                          type="text"
                          className="w-[70px] outline-none"
                          name="housingLoan"
                          onChange={handleChangeActualInsert80e}
                          value={actual80e.housingLoan}
                        ></input>
                      </div>
                    </div>
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
            handleActualInsert80c();
            handleNavigateProof();
            handleActualInsert80d();
            handleActualInsert80e();
          }}
        >
          Save
        </button>

        <button className="py-2 px-5 text-gray-700 font-semibold border-[1px] border-gray-700">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Proof_of_Investment_Display;
