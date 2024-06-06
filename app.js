// app.js
import express from "express"

import usersController from "./src/controllers/users_controller.js"
import dashboardsController from "./src/controllers/dashboards_controller.js"
import service from "./src/services/myService.js"

const app = express();
const port = normalizePort(process.env.PORT || 8080);

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

app.set('port', port);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});


function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
