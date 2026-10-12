import { useLoaderData, useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFavorites, toggleFavorite } from "../utils/storage";

export function CatalogPage() {
  const { products } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [favorites, setFavorites] = useState([]);

  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "title";
  const order = searchParams.get("order") || "asc";

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleSearch = (e) => {
    setSearchParams({ search: e.target.value, sortBy, order });
  };

  const handleSort = (e) => {
    setSearchParams({ search, sortBy: e.target.value, order });
  };

  const handleToggleFav = (product) => {
    const updated = toggleFavorite(product);
    setFavorites(updated);
  };

  return (
    <div>
      <h1>Каталог товаров</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={handleSearch}
        />
        <select value={sortBy} onChange={handleSort}>
          <option value="title">По названию</option>
          <option value="price">По цене</option>
          <option value="rating">По рейтингу</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px" }}>
        {products?.map((product) => {
          const isFav = favorites.some((item) => item.id === product.id);
          return (
            <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
              <img src={product.thumbnail} alt={product.title} width="100%" height="150" style={{ objectFit: "cover" }} />
              <h3>{product.title}</h3>
              <p>Цена: ${product.price}</p>
              <p>Рейтинг: ⭐ {product.rating}</p>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Link to={`/product/${product.id}`}>Подробнее</Link>
                <button onClick={() => handleToggleFav(product)}>
                  {isFav ? "❤️ В избранном" : "🤍 В избранное"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}