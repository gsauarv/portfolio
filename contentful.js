const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

const fetchEntries = async () => {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.log(`Error fetching entries: ${entries.message}`);
};

export default { fetchEntries };
