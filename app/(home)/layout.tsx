import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default async function HomeLayout({ children } : { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer  />
    </div>
  );
}