import Link from "next/link";

export function StudentInfo() {
    return (
        <div>
            <label className="mr-2.5">Guanmeng Du</label>
            <Link
                className="underline text-blue-500"
                target="_blank"
                href="https://github.com/derek-du-forever/cprg306-assignments.git"
            >
                Goto My Github
            </Link>
        </div>
    );
}
