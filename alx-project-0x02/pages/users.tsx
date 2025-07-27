import React from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">
          User List
        </h1>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </main>
    </>
  );
}

// Static generation
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
