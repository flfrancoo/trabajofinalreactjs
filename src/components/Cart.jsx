import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  if (cart.length === 0) return <h2>Carrito vacío</h2>;

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.nombre} x {item.quantity} - ${item.precio * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <CheckoutForm />
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
}