export async function getAllCategories() {
  const defaultCategories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  try {
    const categoryRes = await fetch(
      "https://fakestoreapi.com/products/categories",
    );

    if (!categoryRes.ok) {
      return defaultCategories;
    }

    return await categoryRes.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return defaultCategories;
  }
}
export async function getSingleProduct(id: string) {
  const singleProductRes = await fetch(
    `https://fakestoreapi.com/products/${id}`,
  );
  if (!singleProductRes.ok) {
    return [];
  }
  return singleProductRes.json();
}

export async function getProductByCategory(category: string) {
  const productByCategoryRes = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  if (!productByCategoryRes.ok) {
    return [];
  }
  return productByCategoryRes.json();
}
