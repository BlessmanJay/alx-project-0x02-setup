import Head from "next/head";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <main className="flex flex-col items-center justify-center gap-4 min-h-screen bg-yellow-100">
        <h1 className="text-4xl font-bold text-yellow-800 mb-6">
          About This Project
        </h1>

        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </main>
    </>
  );
}
