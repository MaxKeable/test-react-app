import express from "express";
import dotenv from "dotenv";
import path from "path";
import { Request, Response } from "express";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../../client/build")));

if (process.env.NODE_ENV === "production") {

  app.get("*", (req: Request, res: Response) => {

    res.sendFile(path.join(__dirname, "../../client/build/index.html"));

  });

}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


export default app;