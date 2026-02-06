export async function getAllCategories() {
  // Define fallback categories in case the external API fails
  const defaultCategories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  try {
    const categoryRes = await fetch(
      "https://fakestoreapi.com/products/categories",
      {
        // Revalidate the data every hour (ISR)
        next: { revalidate: 3600 },
      },
    );

    // If the response is not successful, return fallback data
    if (!categoryRes.ok) {
      console.warn("API response error, returning default categories.");
      return defaultCategories;
    }

    const data = await categoryRes.json();

    // Ensure data is not empty before returning
    if (!data || data.length === 0) {
      return defaultCategories;
    }

    return data;
  } catch (error) {
    // Handle network errors or connectivity issues
    console.error("Network error during category fetch:", error);
    return defaultCategories;
  }
}

export async function getAllProducts() {
  const productsRes = await fetch("https://fakestoreapi.com/products");
  if (!productsRes.ok) {
    return [];
  }
  return productsRes.json();
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
