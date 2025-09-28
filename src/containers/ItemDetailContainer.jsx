import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import { CartContext } from "../context/CartContext";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  // Producto de ejemplo
  const [producto] = useState({
    id,
    nombre: "Producto " + id,
    precio: 2000,
    stock: 5,
    img: "https://via.placeholder.com/150",
    quantity: 1
  });

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAdded(true);
  };

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.img} alt={producto.nombre} />
      <p>Precio: ${producto.precio}</p>
      {!added && <ItemCount stock={producto.stock} initial={1} onAdd={handleAdd} />}
      {added && <p>Producto agregado al carrito ✅</p>}
    </div>
  );
}
