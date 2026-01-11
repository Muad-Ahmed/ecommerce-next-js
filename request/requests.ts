export async function getAllCategories() {
  const categoryRes = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  if (!categoryRes.ok) {
        return []; 
    }
  return categoryRes.json();
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
    `https://fakestoreapi.com/products/${id}`
  );
  if (!singleProductRes.ok) {
        return []; 
    }
  return singleProductRes.json();
}

export async function getProductByCategory(category: string) {
  const productByCategoryRes = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  if (!productByCategoryRes.ok) {
        return []; 
    }
  return productByCategoryRes.json();
}
