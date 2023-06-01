import { LoginUser } from "@components";
import { httpService } from "@services";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    httpService.getAll("users").then(setUsers);
  }, []);

  return <section className="home">{users.map(LoginUser)}</section>;
}
