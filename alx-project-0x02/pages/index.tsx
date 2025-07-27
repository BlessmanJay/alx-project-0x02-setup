import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | ALX Project</title>
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to ALX Project 2 with Next.js, TypeScript & Tailwind!
        </h1>
      </main>
    </>
  );
}
