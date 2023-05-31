import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Cupcake from "@components/Cupcake";

export default function CupcakeDetails() {
  const [cupake, setCupcake] = useState(null);
  const { cupcakeId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/cupcakes/${cupcakeId}`).then(async (result) =>
      setCupcake(await result.json())
    );
  }, [cupcakeId]);

  if (!cupake) return null;

  return <Cupcake cupcake={cupake} />;
}
