import db from '@/prisma/database';

export async function getProductDetails(ids) {
  // Example for a SQL DB; adjust for your setup
  // ids is an array of product IDs
  const placeholders = ids.map(() => '?').join(',');
  const rows = await db.query(
    `SELECT id, sku, name, price FROM products WHERE id IN (${placeholders})`,
    ids
  );
  return rows;
}