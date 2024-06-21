'use server'

import { redirect } from "next/dist/server/api-utils";

export default async function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-slate-100">
      Loading
    </main>
  );
}
