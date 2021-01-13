const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export type QAType = {
  question: string;
  answer: string;
};

const client = require(`contentful`).createClient({
  space,
  accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries();
  if (!entries.items) console.log(`Error getting Entries.`);

  return entries.items;
}

export default { fetchEntries };
