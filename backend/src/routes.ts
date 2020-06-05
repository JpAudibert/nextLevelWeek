import express from "express";

const routes = express.Router();

import ItemsController from "./app/controllers/ItemsController";
import PointsController from "./app/controllers/PointsController";

routes.get("/items", ItemsController.index);

routes.get("/points/", PointsController.index);
routes.get("/points/:id", PointsController.show);
routes.post("/points", PointsController.create);

export default routes;
