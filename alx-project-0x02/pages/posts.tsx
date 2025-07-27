import Head from "next/head";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-purple-100">
        <h1 className="text-4xl font-bold text-purple-800">
          Posts Page (Coming Soon)
        </h1>
      </main>
    </>
  );
}
