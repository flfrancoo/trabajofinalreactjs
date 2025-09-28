import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CheckoutForm() {
  const { cart, clearCart } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [ordenId, setOrdenId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulamos creación de orden
    setOrdenId("ORD-" + Math.floor(Math.random() * 10000));
    clearCart();
  };

  if (ordenId) return <h3>Compra realizada ✅ Tu ID de orden es: {ordenId}</h3>;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit">Finalizar compra</button>
    </form>
  );
}