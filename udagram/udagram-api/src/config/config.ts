import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  awsRegion: process.env.AWS_REGION,
  awsMediaBucket: process.env.AWS_BUCKET,
  port:process.env.PORT,
  portDB:process.env.PORT_DB,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  accessKeyId : process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY
};
