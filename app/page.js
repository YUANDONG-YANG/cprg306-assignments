import Link from "next/link";
import "./home.css"; // import custom styles

export default function Home() {
<<<<<<< HEAD
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
=======
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8 space-y-4">
            <h1 className="bg-amber-100 text-4xl font-bold mb-4 p-4 rounded">
                CPRG 306: Web Development 2 - Assignments
            </h1>

            <Link
                href="/week-2"
                className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
            >
                <p>Go to Week-2 page</p>
            </Link>
            <Link
                href="/week-3"
                className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
            >
                <p>Go to Week-3 page</p>
            </Link>
            <Link
                href="/week-4"
                className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
            >
                <p>Go to Week-4 page</p>
            </Link>
            <Link
                href="/week-5"
                className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
            >
                <p>Go to Week-5 page</p>
            </Link>
            <Link
                href="/week-6"
                className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
            >
                <p>Go to Week-6 page</p>
            </Link>
            <Link
                href="/week-7"
                className="bg-green-100  text-green-600 hover:underline text-lg font-bold"
            >
                <p>Go to Week-6 page</p>
            </Link>
        </main>
    );
>>>>>>> 8c65a64 (Add Week 7 assignment - Shopping List App with state management)
}
