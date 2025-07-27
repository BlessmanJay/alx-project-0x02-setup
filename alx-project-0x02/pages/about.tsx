import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-yellow-100">
        <h1 className="text-4xl font-bold text-yellow-800">
          About This Project
        </h1>
      </main>
    </>
  );
}
