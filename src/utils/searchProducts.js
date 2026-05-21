/**
 * Filter products by search query (name or category, case-insensitive).
 */
export function filterProductsBySearch(productList, query) {
  if (!query || !String(query).trim()) {
    return productList;
  }

  const q = String(query).trim().toLowerCase();

  return productList.filter(
    (product) =>
      product.name.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q)
  );
}
