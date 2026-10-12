import { Outlet, NavLink, useNavigation } from "react-router-dom";

export function MainLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <header style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/catalog">Каталог</NavLink>
        <NavLink to="/favorites">Избранное</NavLink>
        <NavLink to="/recent">Недавно просмотренные</NavLink>
      </header>

      {isLoading && (
        <div style={{ background: "#fff3cd", padding: "10px", marginBottom: "15px" }}>
          Загрузка данных...
        </div>
      )}

      <main>
        <Outlet />
      </main>
    </div>
  );
}