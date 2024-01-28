import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>HALYK</h1>
        <Link href="/med">Clinic Worker Platform</Link>
        <Link href="/admin">Halyk Life Admin Platform</Link>
    </div>
  );
}
