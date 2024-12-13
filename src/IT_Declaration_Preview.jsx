import React, { useEffect, useState } from "react";
import "react-dropdown/style.css";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import Service from "./Service";

function IT_Declaration_Preview() {
  const employeeId = 2;
  const [checked, setChecked] = useState(false);

  const handleChanges = (event) => {
    setChecked(event.target.checked);
  };

  console.log(checked, "checked");

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);

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
    Service.getSection80CByEmpId(employeeId).then((res) => {
      setNetData80C(res?.data?.data || "");
    });
  };

  console.warn(netData80C, "netData80C+++++++++++++++===");

  const getTotalSection80D = () => {
    Service.getSection80DByEmpId(employeeId).then((res) => {
      setNetData80D(res?.data?.data || "");
    });
  };

  const getTotalSection80E = () => {
    Service.getSection80EByEmpId(employeeId).then((res) => {
      setNetData80E(res?.data?.data || "");
    });
  };

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="md:flex space-x-32 items-center mt-6 ">
            <div className="border-[2px] border-gray-500 flex items-center  space-x-5 py-1 w-[325px]  ">
              <div className="ml-3 md:text-2xl text-3xl">
                <HiOutlineInformationCircle />
              </div>
              <div className="font-medium text-gray-500 text-xl">
                Declaration window is open
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-3 mb-3 ml-10">Preview</h2>

        <div className="grid grid-cols-9 border-t-[1px] border-gray-400 gap-5 p-6">
          <div className="md:col-span-9 col-span-9">
            <div className="flex items-center md:space-x-[900px] space-x-20  font-semibold text-xl mt-3 bg-blue-100 py-3 ">
              <div className="ml-5">Particulars</div>

              <div className="">Declared Amount</div>
            </div>

            <div className="border-[1px] border-gray-400 rounded-md mt-5 shadow-xl">
              <div className="flex space-x-7 items-center border-b-[1px] border-gray-400">
                <h2 className="text-2xl font-semibold ml-4 ">Section 80 C</h2>
                <img
                  className="h-12 w-12 ml-[75px] mt-5 mb-3"
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
                        treatment of handicapped dependent who is a person with
                        disability{" "}
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
                        Deduction in respect of repayment of Loan "Only interest
                        on Loan" Taken for Higher Eduction [Sec. 80E]
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
        </div>
      </div>
    </div>
  );
}

export default IT_Declaration_Preview;
