import type { Metadata } from "next";
import Link from "next/link";
import DesignGallery from "@/components/DesignGallery";
import Contact from "@/components/Contact";
export const metadata: Metadata = {
  title: "Creative Work",
  description:
    "Posters, brochures, and promotional design work by Afiq Haikal.",
};
export default function DesignsPage() {
  return (
    <>
      <section className="container page-intro">
        <Link href="/" className="text-link">
          ← Back to home
        </Link>
        <span className="eyebrow">Creative work</span>
        <h1>The visual side.</h1>
        <p>
          Posters, brochures, and branded communications created for training
          programmes, campaigns, and corporate events.
        </p>
      </section>
      <section className="container projects-index">
        <DesignGallery />
      </section>
      <Contact />
    </>
  );
}
