import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for navigation
import { useLocalStorage } from "react-use";

function Proof_Of_Investment() {
  const navigate = useNavigate();
  const [restrict, setRestrict, remove] = useLocalStorage("restrict", "false");
  const [selectedOption, setSelectedOption] = useState("2024-2025");

  const options1 = ["2024-2025", "2024", "2025"];

  const handleSelect = (selectedOption) => {
    console.log(`Selected option: ${selectedOption.value}`);
    setSelectedOption(selectedOption.value);
  };

  const proofInvestWindow = () => {
    navigate("/dispProofOfInvestment");
  };

  return (
    <div>
      <div className="mt-8 md:ml-[250px] lg:ml-[500px] ml-[40px] flex items-center space-x-1 cursor-pointer">
        <div className="text-xl text-gray-600 tracking-normal font-medium -mt-1">
          Financial Year :
        </div>
        <Dropdown
          options={options1}
          onChange={handleSelect}
          value={selectedOption}
          disabled={restrict === true}
        />
      </div>

      <div className="mt-20 grid grid-cols-2 -ml-32">
        <div className="lg:col-span-1 col-span-2">
          <div className="grid grid-cols-2">
            <div className="md:col-span-1"></div>
            <div className="md:col-span-1 col-span-2">
              <img
                className="md:h-64 md:w-full h-52 w-[340px] lg:ml-0 ml-4 md:-ml-52"
                src="./src/assets/IT Savings.jpg"
                alt="IT Savings"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 col-span-2 md:ml-[40px] px-10">
          <div className="grid grid-cols-5">
            <div className="lg:col-span-5 col-span-5 pt-4">
              <h1 className="text-2xl font-bold md:ml-28 lg:ml-0 ml-0">
                Proof of investment is {restrict ? "close" : "open"} now !
              </h1>
              <h6 className="text-lg md:text-2xl lg:text-lg font-semibold mt-3 md:max-lg:text-center">
                Submit the proofs for the Investment you had declared in the IT
                declaration for the current financial year
              </h6>

              {restrict ? (
                ""
              ) : (
                <>
                  <div
                    className="border-2 border-blue-900 flex items-center space-x-5 w-[230px] p-3 mt-12 cursor-pointer md:max-lg:ml-[100px]"
                    onClick={proofInvestWindow}
                  >
                    <div className="ml-2 text-2xl text-blue-900">
                      Submit Proofs
                    </div>
                    <div className="text-xl">
                      <FaArrowRight />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proof_Of_Investment;
