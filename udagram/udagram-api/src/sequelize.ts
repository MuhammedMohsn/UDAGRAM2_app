import { Sequelize } from "sequelize-typescript";
export const sequelize=new Sequelize(
  'postgres://postgres:yugiohpower1@database-1.cq0aeufcfpy2.us-east-1.rds.amazonaws.com:5432/postgres'
);