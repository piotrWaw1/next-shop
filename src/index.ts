import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
// import { sql } from "drizzle-orm";
// import { eq } from 'drizzle-orm';
import { productsCategoryTable, productsImageTable, productsTable, usersTable } from './db/schema/schema';
import { sql } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  // const user: typeof usersTable.$inferInsert = {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   email: 'john@example.com',
  //   password: "XDDD123"
  // };

  const products: typeof productsTable.$inferInsert[] = [
    {
      "title": "Wireless Bluetooth Headphones",
      "description": "Premium noise-cancelling headphones with 30-hour battery life",
      "price": 129.99,
      "category": 1
    },
    {
      "title": "Smartphone Case - Protective",
      "description": "Durable shockproof case with screen protector included",
      "price": 24.99,
      "category": 1
    },
    {
      "title": "Organic Cotton T-Shirt",
      "description": "100% organic cotton crew neck t-shirt, available in multiple colors",
      "price": 29.95,
      "category": 2
    },
    {
      "title": "Stainless Steel Water Bottle",
      "description": "Double-wall insulated bottle keeps drinks hot/cold for 24 hours",
      "price": 34.99,
      "category": 3
    },
    {
      "title": "Professional Chef's Knife",
      "description": "8-inch high-carbon steel knife with ergonomic handle",
      "price": 89.99,
      "category": 4
    },
    {
      "title": "Yoga Mat Premium",
      "description": "Eco-friendly non-slip mat with carrying strap",
      "price": 45.50,
      "category": 5
    },
    {
      "title": "Wireless Charging Pad",
      "description": "Fast charging compatible with Qi-enabled devices",
      "price": 19.99,
      "category": 1
    },
    {
      "title": "Denim Jacket Classic",
      "description": "Vintage-style denim jacket with comfortable fit",
      "price": 59.99,
      "category": 2
    },
    {
      "title": "Desk Organizer Set",
      "description": "Minimalist desk organizer with pen holder and document trays",
      "price": 27.95,
      "category": 3
    },
    {
      "title": "Non-Stick Cookware Set",
      "description": "10-piece ceramic non-stick cookware set with utensils",
      "price": 149.99,
      "category": 4
    },
    {
      "title": "Resistance Band Set",
      "description": "5-piece set with varying resistance levels for full-body workout",
      "price": 22.99,
      "category": 5
    },
    {
      "title": "Portable Power Bank",
      "description": "20000mAh capacity with fast charging technology",
      "price": 39.99,
      "category": 1
    },
    {
      "title": "Leather Wallet Genuine",
      "description": "Handcrafted genuine leather wallet with multiple card slots",
      "price": 49.95,
      "category": 2
    },
    {
      "title": "LED Desk Lamp",
      "description": "Adjustable lamp with 5 brightness levels and USB charging port",
      "price": 35.99,
      "category": 3
    },
    {
      "title": "Electric Coffee Grinder",
      "description": "Stainless steel blades with multiple grind settings",
      "price": 42.50,
      "category": 4
    },
    {
      "title": "Running Shoes Lightweight",
      "description": "Breathable mesh running shoes with cushioned insoles",
      "price": 79.99,
      "category": 5
    },
    {
      "title": "Bluetooth Speaker Portable",
      "description": "Waterproof speaker with 12-hour playtime",
      "price": 69.95,
      "category": 1
    },
    {
      "title": "Winter Beanie Wool",
      "description": "Warm acrylic wool blend beanie for cold weather",
      "price": 19.99,
      "category": 2
    },
    {
      "title": "Wall Clock Modern",
      "description": "Silent sweep movement clock with minimalist design",
      "price": 28.75,
      "category": 3
    },
    {
      "title": "Air Fryer Digital",
      "description": "4.2L capacity with digital display and preset cooking programs",
      "price": 119.99,
      "category": 4
    },
    {
      "title": "Yoga Block Set",
      "description": "2 high-density foam blocks for yoga and exercise",
      "price": 18.50,
      "category": 5
    },
    {
      "title": "USB-C Hub Adapter",
      "description": "7-in-1 hub with HDMI, USB, and SD card ports",
      "price": 45.99,
      "category": 1
    },
    {
      "title": "Canvas Backpack",
      "description": "Water-resistant backpack with laptop compartment",
      "price": 54.95,
      "category": 2
    },
    {
      "title": "Scented Candles Set",
      "description": "3-pack of soy wax candles with natural fragrances",
      "price": 32.99,
      "category": 3
    },
    {
      "title": "Stand Mixer Professional",
      "description": "5-quart capacity with multiple speed settings",
      "price": 199.99,
      "category": 4
    },
    {
      "title": "Fitness Tracker Watch",
      "description": "Heart rate monitor with step counter and sleep tracking",
      "price": 89.95,
      "category": 5
    },
    {
      "title": "Gaming Mouse RGB",
      "description": "Programmable buttons with customizable RGB lighting",
      "price": 59.99,
      "category": 1
    },
    {
      "title": "Silk Scarf Printed",
      "description": "100% silk scarf with elegant floral pattern",
      "price": 65.00,
      "category": 2
    },
    {
      "title": "Photo Frame Digital",
      "description": "10-inch digital frame with Wi-Fi connectivity",
      "price": 89.99,
      "category": 3
    },
    {
      "title": "Food Processor Compact",
      "description": "3-cup capacity with multiple blade attachments",
      "price": 75.50,
      "category": 4
    },
    {
      "title": "Jump Rope Professional",
      "description": "Adjustable length with ball bearings for smooth rotation",
      "price": 15.99,
      "category": 5
    },
    {
      "title": "Webcam HD 1080p",
      "description": "Built-in microphone with automatic light correction",
      "price": 49.95,
      "category": 1
    },
    {
      "title": "Leather Belt Genuine",
      "description": "Full-grain leather belt with classic buckle",
      "price": 38.99,
      "category": 2
    },
    {
      "title": "Throw Pillow Cover",
      "description": "Decorative cover with hidden zipper closure",
      "price": 22.50,
      "category": 3
    },
    {
      "title": "Cast Iron Skillet",
      "description": "Pre-seasoned 10-inch skillet for even heat distribution",
      "price": 39.99,
      "category": 4
    },
    {
      "title": "Exercise Mat Thick",
      "description": "1/2-inch thick mat for comfort during floor exercises",
      "price": 34.95,
      "category": 5
    },
    {
      "title": "Noise Cancelling Earbuds",
      "description": "True wireless earbuds with charging case",
      "price": 129.99,
      "category": 1
    },
    {
      "title": "Wool Socks Pack",
      "description": "3-pack of merino wool socks for all seasons",
      "price": 27.99,
      "category": 2
    },
    {
      "title": "Desk Plant Artificial",
      "description": "Realistic artificial succulent in decorative pot",
      "price": 19.95,
      "category": 3
    },
    {
      "title": "Electric Kettle Glass",
      "description": "1.7L capacity with blue LED illumination",
      "price": 45.99,
      "category": 4
    },
    {
      "title": "Dumbbell Set Adjustable",
      "description": "5-25lb adjustable dumbbells with quick-change mechanism",
      "price": 149.99,
      "category": 5
    },
    {
      "title": "Tablet Stand Adjustable",
      "description": "Aluminum stand with multiple viewing angles",
      "price": 29.99,
      "category": 1
    },
    {
      "title": "Cashmere Sweater",
      "description": "Luxurious 100% cashmere crew neck sweater",
      "price": 189.00,
      "category": 2
    },
    {
      "title": "Bookshelf Wooden",
      "description": "5-tier storage shelf with rustic finish",
      "price": 89.95,
      "category": 3
    },
    {
      "title": "Blender High-Speed",
      "description": "1500W professional blender for smoothies and soups",
      "price": 129.99,
      "category": 4
    },
    {
      "title": "Yoga Strap Cotton",
      "description": "6-foot cotton strap for flexibility training",
      "price": 12.99,
      "category": 5
    },
    {
      "title": "Smart Watch Series",
      "description": "Fitness tracking with GPS and notification alerts",
      "price": 199.99,
      "category": 1
    },
    {
      "title": "Leather Gloves",
      "description": "Soft leather gloves with touchscreen compatibility",
      "price": 42.50,
      "category": 2
    },
    {
      "title": "Desk Calendar 2024",
      "description": "Weekly planner with inspirational quotes",
      "price": 18.99,
      "category": 3
    },
    {
      "title": "Toaster 4-Slice",
      "description": "Stainless steel toaster with bagel and defrost settings",
      "price": 59.95,
      "category": 4
    },
    {
      "title": "Foam Roller",
      "description": "High-density foam for muscle recovery",
      "price": 24.99,
      "category": 5
    },
    {
      "title": "External SSD 1TB",
      "description": "Portable solid state drive with USB-C connectivity",
      "price": 129.99,
      "category": 1
    },
    {
      "title": "Summer Dress Floral",
      "description": "Lightweight cotton dress with elastic waist",
      "price": 45.99,
      "category": 2
    },
    {
      "title": "Wall Art Canvas",
      "description": "Modern abstract print on stretched canvas",
      "price": 67.50,
      "category": 3
    },
    {
      "title": "Rice Cooker Digital",
      "description": "8-cup capacity with keep-warm function",
      "price": 79.99,
      "category": 4
    },
    {
      "title": "Swimming Goggles",
      "description": "Anti-fog goggles with UV protection",
      "price": 28.95,
      "category": 5
    },
    {
      "title": "Mechanical Keyboard",
      "description": "RGB backlit keyboard with cherry MX switches",
      "price": 89.99,
      "category": 1
    },
    {
      "title": "Winter Scarf Cashmere",
      "description": "Luxurious cashmere blend scarf in various colors",
      "price": 75.00,
      "category": 2
    },
    {
      "title": "Table Lamp Modern",
      "description": "LED lamp with dimmable touch control",
      "price": 54.99,
      "category": 3
    },
    {
      "title": "Slow Cooker Large",
      "description": "6-quart capacity with programmable timer",
      "price": 69.95,
      "category": 4
    },
    {
      "title": "Yoga Towel Non-Slip",
      "description": "Microfiber towel with gripper dots for hot yoga",
      "price": 32.99,
      "category": 5
    },
    {
      "title": "Wireless Mouse Ergonomic",
      "description": "Comfortable design with silent clicking",
      "price": 39.99,
      "category": 1
    },
    {
      "title": "Baseball Cap Classic",
      "description": "Adjustable cotton cap with curved brim",
      "price": 24.95,
      "category": 2
    },
    {
      "title": "Coaster Set Marble",
      "description": "Set of 6 natural marble coasters with holders",
      "price": 29.99,
      "category": 3
    },
    {
      "title": "Pressure Cooker Electric",
      "description": "8-in-1 multi-cooker with safety features",
      "price": 139.99,
      "category": 4
    },
    {
      "title": "Water Bottle with Straw",
      "description": "32oz insulated bottle with leak-proof straw lid",
      "price": 34.95,
      "category": 5
    },
    {
      "title": "Monitor Stand Riser",
      "description": "Wooden stand with storage compartment",
      "price": 45.99,
      "category": 1
    },
    {
      "title": "Silk Pajama Set",
      "description": "Luxurious silk pajamas with piping detail",
      "price": 98.00,
      "category": 2
    },
    {
      "title": "Vase Ceramic Modern",
      "description": "Handcrafted ceramic vase with minimalist design",
      "price": 42.50,
      "category": 3
    },
    {
      "title": "Espresso Machine Compact",
      "description": "15-bar pressure system with milk frother",
      "price": 199.99,
      "category": 4
    },
    {
      "title": "Resistance Bands Tube",
      "description": "Set of 5 latex resistance tubes with handles",
      "price": 26.99,
      "category": 5
    },
    {
      "title": "Laptop Sleeve Neoprene",
      "description": "Water-resistant sleeve with extra padding",
      "price": 32.99,
      "category": 1
    },
    {
      "title": "Knit Beanie Striped",
      "description": "Colorful striped beanie made from acrylic yarn",
      "price": 18.95,
      "category": 2
    },
    {
      "title": "Picture Frame Set",
      "description": "3-piece set of wooden frames in different sizes",
      "price": 37.99,
      "category": 3
    },
    {
      "title": "Cutting Board Bamboo",
      "description": "Set of 3 eco-friendly bamboo cutting boards",
      "price": 34.50,
      "category": 4
    },
    {
      "title": "Yoga Socks Grip",
      "description": "Non-slip yoga socks with individual toe slots",
      "price": 19.99,
      "category": 5
    },
    {
      "title": "USB Flash Drive 128GB",
      "description": "High-speed USB 3.0 flash drive with keychain",
      "price": 24.99,
      "category": 1
    },
    {
      "title": "Linen Shirt Casual",
      "description": "Breathable linen shirt with button-down collar",
      "price": 65.99,
      "category": 2
    },
    {
      "title": "Wall Mirror Round",
      "description": "24-inch round mirror with wooden frame",
      "price": 79.95,
      "category": 3
    },
    {
      "title": "Food Scale Digital",
      "description": "Precision scale with LCD display and tare function",
      "price": 28.99,
      "category": 4
    },
    {
      "title": "Pilates Ring",
      "description": "Flexible resistance ring for toning exercises",
      "price": 22.50,
      "category": 5
    },
    {
      "title": "Cable Management Box",
      "description": "Organizer box with cord ports and removable lid",
      "price": 29.99,
      "category": 1
    },
    {
      "title": "Wool Blend Coat",
      "description": "Classic trench coat with water-resistant finish",
      "price": 189.99,
      "category": 2
    },
    {
      "title": "Essential Oil Diffuser",
      "description": "Ultrasonic diffuser with color changing LED lights",
      "price": 39.95,
      "category": 3
    },
    {
      "title": "Knife Sharpener Manual",
      "description": "Diamond abrasives for sharpening all types of knives",
      "price": 45.99,
      "category": 4
    },
    {
      "title": "Gym Bag Large",
      "description": "Water-resistant bag with separate shoe compartment",
      "price": 49.99,
      "category": 5
    },
    {
      "title": "Phone Grip Stand",
      "description": "Pop socket with collapsible stand function",
      "price": 15.99,
      "category": 1
    },
    {
      "title": "Cashmere Scarf",
      "description": "Ultra-soft cashmere scarf in solid colors",
      "price": 89.00,
      "category": 2
    },
    {
      "title": "Desk Organizer Bamboo",
      "description": "Sustainable bamboo organizer with multiple compartments",
      "price": 34.99,
      "category": 3
    },
    {
      "title": "Mixing Bowl Set",
      "description": "5-piece stainless steel mixing bowls with lids",
      "price": 52.95,
      "category": 4
    },
    {
      "title": "Jump Rope Speed",
      "description": "Weighted handles for speed training and cardio",
      "price": 21.99,
      "category": 5
    },
    {
      "title": "Laptop Cooling Pad",
      "description": "USB-powered pad with adjustable angle",
      "price": 38.99,
      "category": 1
    },
    {
      "title": "Cotton Polo Shirt",
      "description": "Classic polo shirt with embroidered logo",
      "price": 39.95,
      "category": 2
    },
    {
      "title": "Throw Blanket Soft",
      "description": "Plush microfiber blanket in various colors",
      "price": 45.99,
      "category": 3
    },
    {
      "title": "Measuring Cup Set",
      "description": "Nested measuring cups with easy-read markings",
      "price": 19.99,
      "category": 4
    },
    {
      "title": "Yoga Wheel",
      "description": "Foam wheel for back stretching and flexibility",
      "price": 34.50,
      "category": 5
    },
    {
      "title": "Wireless Earbuds Sport",
      "description": "Sweat-resistant earbuds with secure fit",
      "price": 79.99,
      "category": 1
    },
    {
      "title": "Leather Ankle Boots",
      "description": "Comfortable boots with cushioned insoles",
      "price": 129.95,
      "category": 2
    },
    {
      "title": "Desk Plant Live",
      "description": "Low-maintenance succulent in decorative pot",
      "price": 24.99,
      "category": 3
    },
    {
      "title": "Salad Spinner",
      "description": "Large capacity spinner with easy pump mechanism",
      "price": 32.99,
      "category": 4
    },
    {
      "title": "Resistance Loop Bands",
      "description": "Set of 5 latex bands for lower body workouts",
      "price": 18.95,
      "category": 5
    },
    {
      "title": "Phone Case Wallet",
      "description": "Case with card slots and magnetic closure",
      "price": 34.99,
      "category": 1
    },
    {
      "title": "Wool Blend Sweater",
      "description": "Warm sweater with ribbed cuffs and hem",
      "price": 67.50,
      "category": 2
    },
    {
      "title": "Wall Shelf Floating",
      "description": "Set of 2 floating shelves for modern decor",
      "price": 59.99,
      "category": 3
    },
    {
      "title": "Dutch Oven Enameled",
      "description": "6-quart cast iron pot with even heat distribution",
      "price": 149.99,
      "category": 4
    },
    {
      "title": "Yoga Mat Bag",
      "description": "Carrying bag with shoulder strap and pocket",
      "price": 22.99,
      "category": 5
    }
  ]

  const categories = [
    {
      "title": "Electronics",
      "description": "Devices and gadgets for entertainment, communication, and home life."
    },
    {
      "title": "Clothing",
      "description": "Apparel, footwear, and accessories for men, women, and children."
    },
    {
      "title": "Home Decor",
      "description": "Items to furnish, accessorize, and personalize your living space."
    },
    {
      "title": "Kitchen & Cooking",
      "description": "Appliances, tools, and utensils for food preparation and dining."
    },
    {
      "title": "Sports & Fitness",
      "description": "Equipment and apparel for athletic activities, exercise, and outdoor adventures."
    }
  ]
  // await db.insert(usersTable).values(user);

  // fill categories table
  // for (const category of categories) {
  //   await db.insert(productsCategoryTable).values(category);
  // }
  // console.log("Categories done!")

  // fill products table
  // for (const product of products) {
  //   await db.insert(productsTable).values(product);
  // }
  // console.log("Products done!")

  // const existingCategories = await db.select().from(productsCategoryTable);
  // console.log('Existing categories:', existingCategories);

  // const users = await db.select().from(usersTable);
  // console.log('Getting all users from the database: ', users)

  // clear tables
  // await db.delete(usersTable)
  // await db.delete(productsTable)
  // await db.delete(productsImageTable)
  // await db.delete(productsCategoryTable)

  // delete tables
  // const delete1 = await db.execute(sql`DROP TABLE IF EXISTS products CASCADE;`)
  // const delete2 = await db.execute(sql`DROP TABLE IF EXISTS users CASCADE;`)
  // const delete3 = await db.execute(sql`DROP TABLE IF EXISTS products_images CASCADE;`)
  // const delete4 = await db.execute(sql`DROP TABLE IF EXISTS products_categories CASCADE;`)
  // console.log(delete1)
  // console.log(delete2)
  // console.log(delete3)
  // console.log(delete4)

  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  // await db
  //   .update(usersTable)
  //   .set({
  //     age: 31,
  //   })
  //   .where(eq(usersTable.email, user.email));
  // console.log('User info updated!')

  // await db.delete(usersTable).where(eq(usersTable.email, user.email));
  // console.log('User deleted!')
}

main().then();


//  npx tsx src/index.ts