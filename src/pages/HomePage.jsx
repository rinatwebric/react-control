import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Добро пожаловать в Магазин техники!</h1>
      <Link to="/catalog">Перейти в каталог</Link>
    </div>
  );
}