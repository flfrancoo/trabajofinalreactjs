import { Link } from "react-router-dom";

export default function Item({ producto }) {
  return (
    <div className="item-card">
      <img src={producto.img} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <Link to={`/item/${producto.id}`}>Ver detalle</Link>
    </div>
  );
}