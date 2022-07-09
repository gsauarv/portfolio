const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchBlogs() {
  const entries = await client.getEntries({
    content_type: "blogPost",
  });
  if (entries.items) return entries.items;
}

export async function fetchProject() {
  const entries = await client.getEntries({
    content_type: "project",
  });
  if (entries.items) return entries.items;
}

export default { fetchBlogs, fetchProject };
