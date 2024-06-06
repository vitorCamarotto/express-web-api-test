// app.js
const express = require("express");

const usersController = require("./src/controllers/users_controller");
const dashboardsController = require("./src/controllers/dashboards_controller")
const service = require("./src/services/myService")

const app = express();
const port = 8080;

app.get("/api", async (req, res) => {
  try {
    const data = await service.fetchData(/* arguments if needed */);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.use("/api/users", usersController);
app.use("/api/dashboards", dashboardsController);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
