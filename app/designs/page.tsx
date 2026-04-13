"use client";

import { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Link from "next/link";

const designs = [
  {
    title: "Training Promotion Poster",
    category: "Poster Design",
    image: "/designs/poster-1.png",
  },
  {
    title: "Training Promotion Poster",
    category: "Poster Design",
    image: "/designs/poster-2.png",
  },
  {
    title: "Training Promotion Poster",
    category: "Poster Design",
    image: "/designs/poster-3.png",
  },
  {
    title: "Training Promotion Poster",
    category: "Poster Design",
    image: "/designs/poster-4.png",
  },
  {
    title: "Corporate Programme Brochure",
    category: "Brochure Design",
    image: "/designs/brochure-1.png",
  },
  {
    title: "Course Information Brochure",
    category: "Brochure Design",
    image: "/designs/brochure-2.png",
  },
];

export default function DesignsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#F8F9FB] bg-[linear-gradient(to_right,rgba(17,24,39,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.06)_1px,transparent_1px)] bg-[size:32px_32px] text-[#111827]">
      <NavBar />

      <section className="mx-auto max-w-7xl px-6 pt-40 pb-10">
        <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C6A96B]">
            Creative Works
            </p>

            <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Poster, brochure and design showcase.
            </h1>

            <Link
            href="/"
            className="inline-flex items-center rounded-full bg-[#C6A96B] px-6 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-[#b89655] hover:shadow-md"
            >
            ← Back to Home
            </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {designs.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(item.image)}
                className="block w-full text-left"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[320px] w-full cursor-pointer object-cover transition duration-300 hover:scale-105 hover:brightness-90"
                />
              </button>

              <div className="p-5">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#C6A96B]">
                  {item.category}
                </p>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-4xl font-light text-white"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Full Design"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </main>
  );
}