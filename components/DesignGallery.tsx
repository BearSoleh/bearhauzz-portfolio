"use client";
import Image from "next/image";
import { useRef, useState } from "react";
const designs = [
  {
    title: "Training programme · 01",
    category: "Poster design",
    file: "poster-1",
  },
  {
    title: "Training programme · 02",
    category: "Poster design",
    file: "poster-2",
  },
  {
    title: "Training programme · 03",
    category: "Poster design",
    file: "poster-3",
  },
  {
    title: "Training programme · 04",
    category: "Poster design",
    file: "poster-4",
  },
  {
    title: "Corporate programme brochure",
    category: "Brochure design",
    file: "brochure-1",
  },
  {
    title: "Course information brochure",
    category: "Brochure design",
    file: "brochure-2",
  },
];
export default function DesignGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const opener = useRef<HTMLButtonElement | null>(null);
  function close() {
    dialog.current?.close();
  }
  function restore() {
    opener.current?.focus();
  }
  function open(index: number, button: HTMLButtonElement) {
    setSelected(index);
    opener.current = button;
    dialog.current?.showModal();
  }
  return (
    <>
      <div className="design-grid">
        {designs.map((item, i) => (
          <article className="design-card" key={item.file}>
            <button
              aria-label={`Enlarge ${item.title}`}
              onClick={(e) => open(i, e.currentTarget)}
            >
              <div className="design-image">
                <Image
                  src={`/designs/${item.file}.webp`}
                  alt={item.title}
                  fill
                  sizes="(max-width:700px) 90vw, 360px"
                />
              </div>
              <span className="design-open" aria-hidden="true">
                ↗
              </span>
            </button>
            <div className="design-copy">
              <span className="eyebrow">{item.category}</span>
              <h2>{item.title}</h2>
            </div>
          </article>
        ))}
      </div>
      <dialog
        className="design-dialog"
        ref={dialog}
        aria-labelledby="design-title"
        onClose={restore}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="dialog-shell">
          <div className="dialog-bar">
            <h2 id="design-title">{designs[selected].title}</h2>
            <button autoFocus aria-label="Close image" onClick={close}>
              ×
            </button>
          </div>
          <div className="dialog-image">
            <Image
              src={`/designs/${designs[selected].file}.webp`}
              alt={designs[selected].title}
              width={1500}
              height={2000}
            />
          </div>
          <div className="dialog-controls">
            <button
              onClick={() =>
                setSelected((selected + designs.length - 1) % designs.length)
              }
              aria-label="Previous design"
            >
              ← Previous
            </button>
            <span>
              {selected + 1} / {designs.length}
            </span>
            <button
              onClick={() => setSelected((selected + 1) % designs.length)}
              aria-label="Next design"
            >
              Next →
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
