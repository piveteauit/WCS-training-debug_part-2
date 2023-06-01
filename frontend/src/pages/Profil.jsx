import { storageService } from "@services";
import { useState } from "react";

export default function Profil() {
  const user = storageService.getItem("user");
  const [formValues, setFormValues] = useState(user);

  console.log(setFormValues);

  const {
    email,
    city,
    name: { firstname, lastname },
    username,
  } = formValues;

  return (
    <div className="profil">
      <form>
        {/* <label>Username</label> */}
        <input type="text" value={username} />

        {/* <label>Email</label> */}
        <input type="email" value={email} />

        {/* <label>City</label> */}
        <input type="text" value={city} />

        {/* <label>Firstname</label> */}
        <input type="text" value={firstname} />

        {/* <label>Firstname</label> */}
        <input type="text" value={firstname} />

        {/* <label>Lastname</label> */}
        <input type="text" value={lastname} />
      </form>
    </div>
  );
}
