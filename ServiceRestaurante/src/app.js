import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config";

import platosRoutes from "./routes/platos.routes";

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
app.use("/api", platosRoutes);

export default app;
