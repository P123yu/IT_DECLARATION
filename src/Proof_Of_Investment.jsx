import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useStoreFinancialYear } from "./useFileStore";

function Proof_Of_Investment() {
  const navigate = useNavigate();

  const options1 = [
    "Select Year",
    "2024-2025",
    "2025-2026",
    "2026-2027",
    "2027-2028",
    "2028-2029",
    "2029-2030",
  ];
  const defaultOption1 = options1[0];

  const { submitFinancialYear, setSubmitFinancialYear } =
    useStoreFinancialYear();

  const handleSelect = (selectedOption) => {
    setSubmitFinancialYear(`${selectedOption.value}`);
  };

  const proofInvestWindow = () => {
    if (
      submitFinancialYear.length != 0 &&
      !isNaN(submitFinancialYear?.split("-")?.[0])
    ) {
      navigate("/display-proof-of-investment");
    } else {
      Swal.fire("Please choose a financial year");
    }
  };

  return (
    <div className="">
      <div className="flex  justify-center">
        <div className="grid lg:grid-cols-2 mt-20 ">
          <div className="col-span-1">
            <div className="flex justify-center">
              <img
                className="h-64 w-[340px]  rounded-xl mt-20"
                src="./src/assets/proof.png"
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
                    Proof of investment is open now !
                  </h1>

                  <h6 className="text-lg font-semibold mt-3 text-center lg:text-start">
                    Submit the proofs for the Investment you had declared in the
                    IT declaration for the current financial year
                  </h6>

                  <div className="flex justify-center lg:justify-start">
                    <div
                      className="border-2 border-blue-900 items-center flex space-x-5 w-[250px] p-3 mt-12 cursor-pointer "
                      onClick={proofInvestWindow}
                    >
                      <div className="ml-2 text-2xl text-blue-900">
                        Submit Proofs
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
  );
}

export default Proof_Of_Investment;
