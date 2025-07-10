"use client";

import useSWR from "swr";
import Head from "next/head";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlogPage() {
  const { data, error } = useSWR("/api/medium", fetcher);

  return (
    <>
      <Head>
        <title>Blog | Reazul Alavhi</title>
      </Head>

      <section className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Blog & Articles
          </h1>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-center">⚠️ Failed to load posts.</p>
          )}

          {/* Loading Spinner */}
          {!data && !error && (
            <div className="flex flex-col items-center justify-center mt-12">
              <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-400">Loading posts...</p>
            </div>
          )}

          {/* Blog Posts */}
          {data?.items && data.items.length > 0 ? (
            <ul className="space-y-10">
              {data.items.map((post) => (
                <li
                  key={post.link}
                  className="bg-zinc-800/80 backdrop-blur-md p-6 rounded-xl border border-zinc-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:border-purple-900"
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

                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {post["content:encodedSnippet"]
                      ? post["content:encodedSnippet"].slice(0, 300) + "..."
                      : "No preview available."}
                  </p>

                  <div className="mt-4">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-pink-400 hover:text-pink-300 transition"
                    >
                      Read full article →
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            data && (
              <div className="text-center mt-12 text-gray-400">
                <p className="text-lg">🚫 No blog posts found at the moment.</p>
                <p className="text-sm mt-1">Please check back later.</p>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
