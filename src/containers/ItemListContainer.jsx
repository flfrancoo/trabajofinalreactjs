import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    // Productos de ejemplo
    const productosEjemplo = [
      { id: "1", nombre: "Remera Hombre", precio: 2500, stock: 10, img: "https://via.placeholder.com/150", categoria: "hombre", quantity: 1 },
      { id: "2", nombre: "Remera Mujer", precio: 2400, stock: 5, img: "https://via.placeholder.com/150", categoria: "mujer", quantity: 1 },
      { id: "3", nombre: "Pantalón Hombre", precio: 3500, stock: 7, img: "https://via.placeholder.com/150", categoria: "hombre", quantity: 1 }
    ];

    if (categoriaId) {
      setProductos(productosEjemplo.filter(p => p.categoria === categoriaId));
    } else {
      setProductos(productosEjemplo);
    }
  }, [categoriaId]);

  return <ItemList productos={productos} />;
}
