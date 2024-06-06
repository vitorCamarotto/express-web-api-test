import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const dashboards = [
    {
      title: 'hiya'
    },
    {
      title: 'hoia'
    }
  ]

  res.json(dashboards);
});

export default router
