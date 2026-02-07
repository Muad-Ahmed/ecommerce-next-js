export async function getAllCategories(): Promise<string[]> {
  const defaultCategories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  // this complexe code to ensure that it will appear in vercel,
  try {
    const categoryRes = await fetch(
      "https://fakestoreapi.com/products/categories",
      {
        next: { revalidate: 3600 },
      },
    );

    if (!categoryRes.ok) return defaultCategories;

    const data = await categoryRes.json();
    return Array.isArray(data) ? data : defaultCategories;
  } catch (error) {
    console.error("Fetch error:", error);
    return defaultCategories;
  }
}

export async function getAllProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Failed to fetch products");
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch products error:", error);
    return [];
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
