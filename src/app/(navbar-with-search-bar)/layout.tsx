import { Navbar } from "@/components/navbars/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar searchBar={true}/>
      <main className="flex justify-center">
        <div className="container mt-6 mb-8">
          {children}
        </div>
      </main>
    </>
  )
}