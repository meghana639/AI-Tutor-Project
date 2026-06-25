import express from "express";
import cors from "cors";

import dashboardRoutes from "./routes/dashboard.routes";
import evaluationsRoutes from "./routes/evaluations.routes";
import studentsRoutes from "./routes/students.routes";
import resourcesRoutes from "./routes/resources.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/evaluations", evaluationsRoutes);
app.use("/api/students", studentsRoutes);
app.use("/api/resources", resourcesRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});