const FAVORITES_KEY = "app_favorites";
const RECENT_KEY = "app_recent";

export const getFavorites = () => JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];

export const toggleFavorite = (product) => {
  const favorites = getFavorites();
  const exists = favorites.some((item) => item.id === product.id);
  const updated = exists
    ? favorites.filter((item) => item.id !== product.id)
    : [...favorites, product];
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  return updated;
};

export const getRecent = () => JSON.parse(localStorage.getItem(RECENT_KEY)) || [];

export const addToRecent = (product) => {
  const recent = getRecent().filter((item) => item.id !== product.id);
  const updated = [product, ...recent].slice(0, 10);
  localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
};