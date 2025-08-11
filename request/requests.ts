export async function getAllCategories() {
  const categoryRes = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  return categoryRes.json();
}
