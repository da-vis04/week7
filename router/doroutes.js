const express = require("express");

const router = express.Router();
const controller = require("../controller/todocontroller");
router
  .get("/", controller.getList)
  .get("/:id", controller.getList)
  .post("/", controller.CreateList)
  .put("/:id", controller.UpdateList)
  .delete("/:id", controller.deleteList);
module.exports = router;
