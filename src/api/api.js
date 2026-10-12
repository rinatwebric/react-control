export async function getProducts({ request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const sortBy = url.searchParams.get("sortBy") || "title";
  const order = url.searchParams.get("order") || "asc";

  let fetchUrl = `https://dummyjson.com/products`;

  if (search) {
    fetchUrl = `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`;
  } else {
    fetchUrl += `?limit=9&skip=0&sortBy=${sortBy}&order=${order}`;
  }

  const res = await fetch(fetchUrl);
  if (!res.ok) throw new Response("Не удалось загрузить товары", { status: res.status });
  return res.json();
}

export async function getProductById({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  if (!res.ok) throw new Response("Товар не найден", { status: 404 });
  return res.json();
}