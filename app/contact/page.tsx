import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactHero from "./components/contact-hero";
import ContactMethods from "./components/contact-methods";
import ContactForm from "./components/contact-form";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-500">
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      
      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}