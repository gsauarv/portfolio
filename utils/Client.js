import { createClient } from "contentful";
// contentful environment variables
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

// contentful client

const client = createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchProject() {
  const currentProject = await client.getEntries({
    content_type: "currentProject",
  });
  if (currentProject.items) {
    return currentProject.items;
  }
}

export async function fetchBlog() {
  const recentBlogs = await client.getEntries({ content_type: "blogs" });
  if (recentBlogs.items) {
    return recentBlogs.items;
  }
}

export default { fetchProject, fetchBlog };
