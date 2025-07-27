import Head from "next/head";
import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type CardProps } from "@/interfaces";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([
    {
      title: "Introduction",
      content: "Reusable Card component with Tailwind.",
    },
    { title: "Modularity", content: "Props allow for flexible rendering." },
  ]);

  const handleAddPost = (newPost: CardProps) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className="flex flex-col items-center gap-6 py-10 bg-green-100 min-h-screen">
        <h1 className="text-4xl font-bold text-green-800">
          Welcome to the Home Page
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add New Post
        </button>

        {showModal && (
          <PostModal
            onClose={() => setShowModal(false)}
            onSubmit={handleAddPost}
          />
        )}

        {posts.map((post, idx) => (
          <Card key={idx} title={post.title} content={post.content} />
        ))}
      </main>
    </>
  );
}
