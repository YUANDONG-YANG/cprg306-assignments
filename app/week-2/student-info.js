import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Your Name: Yang Yuandong</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/YUANDONG-YANG/cprg306-assignments">
          cprg306-assignments
        </Link>
      </p>
    </div>
  );
}
