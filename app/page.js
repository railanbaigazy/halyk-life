'use client'

import {useRouter} from "next/navigation"

export default function Home() {
    const isMed = true
    const router = useRouter()

    if (isMed) {
        router.push("/med")
    } else {
        router.push("/admin")
    }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>HALYK</h1>
    </div>
  );
}
