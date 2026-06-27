import "dotenv/config";
import express from "express";
import cors from "cors";

import dashboardRoutes from "./routes/dashboard.routes";
import evaluationsRoutes from "./routes/evaluations.routes";
import studentsRoutes from "./routes/students.routes";
import resourcesRoutes from "./routes/resources.routes";
import tutorRoutes from "./routes/tutor.routes";
import evaluationRoutes from "./routes/evaluations.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/evaluations", evaluationsRoutes);
app.use("/api/students", studentsRoutes);
app.use("/api/resources", resourcesRoutes);
app.use("/api/tutors", tutorRoutes);
app.use("/api/evaluations", evaluationRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});