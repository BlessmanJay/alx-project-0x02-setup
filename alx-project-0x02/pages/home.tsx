import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-green-100">
        <h1 className="text-4xl font-bold text-green-800">
          Welcome to the Home Page
        </h1>
      </main>
    </>
  );
}
