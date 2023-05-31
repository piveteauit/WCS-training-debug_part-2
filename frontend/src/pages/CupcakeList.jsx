import Cupcake from "@components/Cupcake";
import { useEffect, useState } from "react";

export default function CupcakeList() {
  const [cupcakes, setCupcakes] = useState([]);
  // Step 1: get all cupcakes

  useEffect(() => {
    fetch("http://localhost:4000/cupcakes").then(async (result) =>
      setCupcakes(await result.json())
    );
  }, []);

  console.warn(cupcakes);
  // Step 3: get all accessories

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        <li className="cupcake-item">
          <Cupcake />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}
