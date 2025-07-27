import Head from "next/head";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { useEffect, useState } from "react";
import { PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await response.json();
      const formattedPosts: PostProps[] = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
        id: post.id,
      }));
      setPosts(formattedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">
          Latest Posts
        </h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </>
  );
}
