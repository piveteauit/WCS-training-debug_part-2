import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Cupcake from "@components/Cupcake";

export default function CupcakeDetails() {
  const [cupake, setCupcake] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/cupcakes/${id}`).then(async (result) =>
      setCupcake(await result.json())
    );
  }, [id]);

  if (!cupake) return null;

  console.log(cupake, id);

  return <Cupcake cupcake={cupake} />;
}
