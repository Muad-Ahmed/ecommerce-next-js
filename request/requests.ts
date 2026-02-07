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
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      },
    );

    if (!categoryRes.ok) {
      console.warn(
        `API returned status ${categoryRes.status}, using fallbacks.`,
      );
      return defaultCategories;
    }

    const data = await categoryRes.json();

    if (Array.isArray(data) && data.length > 0) {
      return data;
    }

    return defaultCategories;
  } catch (error) {
    console.error("Vercel Fetch Error:", error);
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
