import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink className="primary-btn btn" to="/">
          Home
        </NavLink>
        <NavLink className="primary-btn btn" to="/profil">
          🧁 My cupcakes
        </NavLink>
      </div>
    </nav>
  );
}
