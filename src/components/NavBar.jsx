import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>Ropa Urbana</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categoria/hombre">Hombres</Link></li>
        <li><Link to="/categoria/mujer">Mujeres</Link></li>
        <li><Link to="/cart"><CartWidget /></Link></li>
      </ul>
    </nav>
  );
}