import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Section3 from "./Layout/Section3";

import Section5 from "./Layout/Section 5";
import Section4 from "./Layout/Section 4";

const Section1 = lazy(() => import("./Layout/Section1/index"));
const Section2 = lazy(() => import("./Layout/Section2/index"));

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
