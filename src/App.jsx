import { useState } from "react";

import "./App.css";
import ShoesStore from "./component/ShoesStore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center font-bold text-red-500 text-3xl">
        Shoes Shop
      </h1>
      <ShoesStore />
    </>
  );
}

export default App;
