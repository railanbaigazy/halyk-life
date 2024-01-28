import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <Link href="/med" className="mr-16">Clinic Worker Platform</Link>
            <Link href="/admin">Halyk Life Admin Platform</Link>
        </div>
    </div>
  );
}
