import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container page-intro not-found">
      <span className="eyebrow">404</span>
      <h1>Not here, unfortunately.</h1>
      <p>
        This page may have moved. There’s plenty of work to explore back home.
      </p>
      <Link href="/" className="button button-dark">
        Back to home ↗
      </Link>
    </section>
  );
}
