"use client";

import useSWR from "swr";
import Head from "next/head";

const fetcher = url => fetch(url).then(res => res.json());

export default function BlogPage() {
  const { data, error } = useSWR("/api/medium", fetcher);
  console.log(data?.items);
  return (
    <>
      <Head>
        <title>Blog | Reazul Alavhi</title>
      </Head>

      <section className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Blog & Articles
          </h1>

          {error && (
            <p className="text-red-500 text-center">Failed to load posts.</p>
          )}

          {!data && !error && (
            <p className="text-center text-gray-400">Loading...</p>
          )}

          {data?.items && data.items.length > 0 ? (
            <ul className="space-y-8">
              {data.items.map((post) => (
                <li
                  key={post.link}
                  className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-semibold text-indigo-400 hover:underline"
                  >
                    {post.title}
                  </a>

                  <p className="text-sm text-gray-500 mt-1">
                    {post.pubDate
                      ? new Date(post.pubDate).toLocaleDateString()
                      : "Unknown date"}{" "}
                    — By {post.creator || "Unknown"}
                  </p>

                  <p className="text-gray-300 mt-4">
                    {post["content:encodedSnippet"]
                      ? post["content:encodedSnippet"].slice(0, 300) + "..."
                      : "No preview available."}
                  </p>

                  <div className="mt-3">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-pink-400 hover:underline"
                    >
                      Read full article →
                    </a>
                  </div>
                </li>
              ))}
            </ul>

          ) : (
            !error && <p className="text-center text-gray-400">No posts found.</p>
          )}
        </div>
      </section>
    </>
  );
}
