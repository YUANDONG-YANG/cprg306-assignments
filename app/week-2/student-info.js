import Link from "next/link";
import "./student-info.css"; // import custom styles

export default function StudentInfo() {
  return (
    <div>
      <p>Auth: Yang Yuandong</p>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/YUANDONG-YANG/cprg306-assignments"
          className="github-link"
        >
          cprg306-assignments
        </Link>
      </p>
    </div>
  );
}
