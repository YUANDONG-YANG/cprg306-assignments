import Link from "next/link";
import "./home.css"; // import custom styles

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        {/* Add a clear instruction for the user */}
        Click here to open:{" "}
        <Link href="/week-2" className="week2-link">
          Week 2 Assignment
        </Link>
      </p>
      <p>Author: Yang Yuandong</p>
    </main>
  );
}
