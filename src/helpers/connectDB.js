import mongoose from "mongoose";

const {MONGO_URL} = process.env;

let cached = global.mongoose;

if (!cached) {
  cached = { conn: null, promise: null };
  global.mongoose = cached;
}

async function connect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongo) => {
      return mongo;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connect;