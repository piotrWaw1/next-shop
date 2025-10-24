import { boolean, decimal, integer, jsonb, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { InferSelectModel } from "drizzle-orm";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: varchar({ length: 255 }),
  lastName: varchar({ length: 255 }),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  admin: boolean().default(false).notNull(),
});
export type User = InferSelectModel<typeof usersTable>;

export const productsTable = pgTable("products", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  categoryId: integer("category_id").notNull().references(() => productsCategoryTable.id, { onDelete: "restrict" }),
  amount: integer("amount"),
  warranty: integer("warranty"),
  sold: integer("sold").notNull().default(0),
  specifications: jsonb("specifications"),
})
export type Product = InferSelectModel<typeof productsTable>;

export const productsImageTable = pgTable("products_images", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").notNull()
    .references(() => productsTable.id, { onDelete: "cascade" }),
  url: text("url").notNull(),
  order: integer('order').notNull().default(0),
})

export const productsCategoryTable = pgTable("products_categories", {
  id: serial("id").primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
})
export type Category = InferSelectModel<typeof productsCategoryTable>;

export const cartsTable = pgTable("carts", {
  id: serial("id").primaryKey(),
  userId: integer().notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  productId: integer().notNull().references(() => productsTable.id, { onDelete: "cascade" }),
  amount: integer().default(1).notNull(),
})
export type Cart = InferSelectModel<typeof cartsTable>;