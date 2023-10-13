import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hdx5fmx.mongodb.net/auth-demo?retryWrites=true&w=majority`
  );

  return client;
};
