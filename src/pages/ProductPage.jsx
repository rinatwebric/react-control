import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { addToRecent, getFavorites, toggleFavorite } from "../utils/storage";

export function ProductPage() {
  const product = useLoaderData();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (product) {
      addToRecent(product);
      const favorites = getFavorites();
      setIsFav(favorites.some((item) => item.id === product.id));
    }
  }, [product]);

  const handleToggleFav = () => {
    const updated = toggleFavorite(product);
    setIsFav(updated.some((item) => item.id === product.id));
  };

  return (
    <div>
      <Link to="/catalog">← Назад в каталог</Link>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} width="300" />
      <p><strong>Бренд:</strong> {product.brand}</p>
      <p><strong>Категория:</strong> {product.category}</p>
      <p><strong>Описание:</strong> {product.description}</p>
      <p><strong>Цена:</strong> ${product.price}</p>
      <p><strong>Рейтинг:</strong> ⭐ {product.rating}</p>
      <button onClick={handleToggleFav} style={{ padding: "8px 16px", marginTop: "10px" }}>
        {isFav ? "❤️ В избранном" : "🤍 Добавить в избранное"}
      </button>
    </div>
  );
}