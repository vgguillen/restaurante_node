import { config } from "dotenv";
config();

export default {
  dbUser: "sa" || "",
  dbPassword: "sql123" || "",
  dbServer: "localhost" || "",
  dbDatabase: "Restaurante" || "",
  port: 3000
};
