import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose;

const TenderSchema = new Schema({
  classificationIDs: Array,
  date: String,
  deliveryAddresses: Array,
  description: String,
  endDate: String,
  fullDate: String,
  id: String,
  ocid: String,
  parties: Array,
  source: String,
  submissionMethod: Object,
  tag: Array,
  tenderId: String,
  tenderStatus: String,  
  timestampRetrieved: String,
  title: String,
  value: Object,
});

TenderSchema.plugin(mongoosePaginate);

let TenderModel;

try {
  TenderModel = mongoose.model("Tenders", TenderSchema);
} catch (e) {
  if (e.name === 'OverwriteModelError') {
    TenderModel = mongoose.model("Tenders");
  }
}
export default TenderModel;