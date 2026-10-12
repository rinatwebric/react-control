import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFavorites, toggleFavorite } from "../utils/storage";

export function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (product) => {
    const updated = toggleFavorite(product);
    setFavorites(updated);
  };

  if (favorites.length === 0) return <h2>Список избранного пуст</h2>;

  return (
    <div>
      <h1>Избранные товары</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px" }}>
        {favorites.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            <img src={product.thumbnail} alt={product.title} width="100%" height="150" style={{ objectFit: "cover" }} />
            <h3>{product.title}</h3>
            <p>Цена: ${product.price}</p>
            <Link to={`/product/${product.id}`}>Подробнее</Link>
            <button onClick={() => handleRemove(product)} style={{ marginLeft: "10px" }}>❌ Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
}