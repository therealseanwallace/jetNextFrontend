import TenderModel from "../mongoose/schemasModels.js";
import connectDB from "@/helpers/connectDB";

const queryDB = async (categories, page, onlyShowActive) => {
  await connectDB();
  let pageToUse = page;
  if (!pageToUse) {
    pageToUse = 0;
  }

  try {
    const options = {
      page: pageToUse,
      limit: 20,
      sort: { fullDate: -1 },
    };
    let query;
    if (onlyShowActive === true) {
      query = {
        classificationIDs: {
          $in: categories,
        },
        tenderStatus: "active",
      };
      
    } else {
      query = {
        classificationIDs: {
          $in: categories,
        },
      };
    }
    const response = TenderModel.paginate(query, options, (err, result) => {
      if (err) {
        console.error("queryDB! - error: ", err);
        return [];
      }
      return result;
    });
    return response;
  } catch (error) {
    return [];
  }
};

export default queryDB;
