import { NewsletterSignup } from "@/components/newsletter-signup";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full">
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
}