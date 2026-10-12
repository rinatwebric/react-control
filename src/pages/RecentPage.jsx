import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecent } from "../utils/storage";

export function RecentPage() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    setRecent(getRecent());
  }, []);

  if (recent.length === 0) return <h2>Вы ещё не просматривали товары</h2>;

  return (
    <div>
      <h1>Недавно просмотренные</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px" }}>
        {recent.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            <img src={product.thumbnail} alt={product.title} width="100%" height="150" style={{ objectFit: "cover" }} />
            <h3>{product.title}</h3>
            <p>Цена: ${product.price}</p>
            <Link to={`/product/${product.id}`}>Подробнее</Link>
          </div>
        ))}
      </div>
    </div>
  );
}