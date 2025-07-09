import Parser from "rss-parser";

const parser = new Parser();

export async function GET() {
  try {
    // Replace this URL with your actual Medium RSS feed URL
    const feed = await parser.parseURL("https://medium.com/feed/@@reazul.alavhi");

    return new Response(JSON.stringify(feed), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch Medium feed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
