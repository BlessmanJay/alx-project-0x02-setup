import Head from "next/head";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="flex flex-col items-center gap-6 py-10 bg-green-100 min-h-screen">
        <h1 className="text-4xl font-bold text-green-800">
          Welcome to the Home Page
        </h1>
        <Card
          title="Introduction"
          content="This is a reusable card component built with TypeScript and Tailwind CSS."
        />
        <Card
          title="Modularity"
          content="You can pass different props to render unique content in each card."
        />
        <Card
          title="Scalability"
          content="This pattern helps build scalable UIs with clean component structure."
        />
      </main>
    </>
  );
}
