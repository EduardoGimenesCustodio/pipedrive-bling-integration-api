const express = require("express");
const OpportunityController = require("../../controller/OpportunityController");

const opportunityRouter = express.Router();

opportunityRouter.get("/", OpportunityController.findAll);

opportunityRouter.post("/", OpportunityController.create);

module.exports = opportunityRouter;
