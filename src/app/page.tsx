import { Navbar } from "@/app/ui/Navbar";
import { Product } from "@/app/ui/Product";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
        <Navbar/>
        <main className="container">
          <Product/>
        </main>
    </div>
  );
}
