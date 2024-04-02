import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeclarationSummary from "./DeclarationSummary";
import IT_Declaration from "./IT_Declaration";
import IT_Declaration_Display from "./IT_Declaration_Display";
import IT_Declaration_Preview from "./IT_Declaration_Preview";
import IT_Declaration_Update from "./IT_Declaration_Update";
import Proof_Attach from "./Proof_Attach";
import Proof_Of_Investment_Update from "./Proof_Of_Investment_Update";
import Proof_of_Investment_Display from "./Proof_of_Investment_Display";
import Select_Regime from "./Select_Regime";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IT_Declaration />}></Route>
          <Route path="/disp" element={<IT_Declaration_Display />}></Route>
          <Route path="/selectRegime" element={<Select_Regime />}></Route>
          <Route
            path="/declarationSummary"
            element={<DeclarationSummary />}
          ></Route>
          <Route
            path="/declarationUpdate"
            element={<IT_Declaration_Update />}
          ></Route>
          <Route path="/preview" element={<IT_Declaration_Preview />}></Route>

          {/* <Route
            path="/proofOfInvestmentMain"
            element={<Proof_of_Investment_Display />}
          ></Route> */}
          <Route
            path="/dispProofOfInvestment"
            element={<Proof_of_Investment_Display />}
          ></Route>

          <Route
            path="/proof_of_investment_update"
            element={<Proof_Attach />}
          ></Route>

          <Route
            path="/proof_of_investment_edit"
            element={<Proof_Of_Investment_Update />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
