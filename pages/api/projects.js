const { Client } = require("@notionhq/client");

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

async function getProjects(req, res) {
  const myPage = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
    sorts: [{ property: "Created At", direction: "descending" }],
  });

  // return res.send(myPage);

  return res.send(
    myPage.results.map((item) => {
      const { properties, id } = item;
      const data = {
        id: id,
        title: properties["Title"].title[0].text.content,
        link: properties["Live Link"]?.url,
        image: properties["Preview"]?.files[0]?.file.url,
        tech: properties["Technologies"]?.multi_select,
        note: properties["note"]?.rich_text[0]?.plain_text,
      };
      return data;
    })
  );
}

export default function handler(req, res) {
  if (req.method === "GET") {
    getProjects(req, res);
  } else {
    res.json({ msg: "Not available" });
  }
}
