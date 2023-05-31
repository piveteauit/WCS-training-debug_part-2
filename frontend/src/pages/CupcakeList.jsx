import Cupcake from "@components/Cupcake";
import { useEffect, useState } from "react";

export default function CupcakeList() {
  const [cupcakes, setCupcakes] = useState();
  const [accessories, setAccessories] = useState([]);
  const [filterAccessory, setFilterAccessory] = useState("");
  // Step 1: get all cupcakes

  useEffect(() => {
    fetch("http://localhost:4000/cupcakes").then(async (result) =>
      setCupcakes(await result.json())
    );
    fetch("http://localhost:4000/accessories").then(async (result) =>
      setAccessories(await result.json())
    );
  }, []);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => setFilterAccessory(e.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={`accessory_${accessory.id}`} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcakes.map((cupake) =>
          filterAccessory && filterAccessory !== cupake.accessory_id ? null : (
            <li key={`Cupcake_${cupake.id}`} className="cupcake-item">
              <Cupcake cupcake={cupake} />
            </li>
          )
        )}
        {/* end of block */}
      </ul>
    </>
  );
}
