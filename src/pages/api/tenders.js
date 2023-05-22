import getCategory from "@/helpers/getCategory";
import queryDB from "@/mongoose/queryDB";
import connect from "@/helpers/connectDB";


export default async function handler(req, res) {
  const { category, page = 1, onlyShowActive = false } = req.query;
  await connect();
  try {
    const catArray = getCategory(category).codes;
    if (catArray === null) {
      return res.status(404).json({ error: "Category not found" });
    }

    const response = await queryDB(catArray, page, onlyShowActive);

    res.setHeader('Cache-Control', 'public, max-age=360');

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}