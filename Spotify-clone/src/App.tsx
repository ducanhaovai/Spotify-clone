import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Section3 from "./Layout/Section3";
const Section1 = lazy(() => import("./Layout/Section1/index"));
const Section2 = lazy(() => import("./Layout/Section2/index"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Section1 />
        <Section2 />
        <Section3 />
      </Suspense>
    </div>
  );
}

export default App;
