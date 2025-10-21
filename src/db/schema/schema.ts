import { boolean, doublePrecision, integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { InferSelectModel } from "drizzle-orm";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar({ length: 255 }),
  lastName: varchar({ length: 255 }),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  admin: boolean().default(false).notNull(),
});
export type User = InferSelectModel<typeof usersTable>;

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  price: doublePrecision().notNull(),
  category: integer().notNull().references(() => productsCategoryTable.id, { onDelete: "cascade" }),
  amount: integer(),
  warranty: integer(),
  sold: integer().notNull().default(0),
})
export type Product = InferSelectModel<typeof productsTable>;

export const productsImageTable = pgTable("products_images", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  productId: integer("product_id").notNull()
    .references(() => productsTable.id, { onDelete: "cascade" }),
  url: varchar({ length: 500 }).notNull(),
})

export const productsCategoryTable = pgTable("products_categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
})
export type Category = InferSelectModel<typeof productsCategoryTable>;

export const cartsTable = pgTable("carts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  productId: integer().notNull().references(() => productsTable.id, { onDelete: "cascade" }),
  amount: integer().default(1).notNull(),
})
export type Cart = InferSelectModel<typeof cartsTable>;