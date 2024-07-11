import {  Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Section3 from "./Layout/Section3";

import Section5 from "./Layout/Section 5";
import Section4 from "./Layout/Section 4";
import Section1 from "./Layout/Section1";
import Section2 from "./Layout/Section2";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </Suspense>
    </div>
  );
}

export default App;
