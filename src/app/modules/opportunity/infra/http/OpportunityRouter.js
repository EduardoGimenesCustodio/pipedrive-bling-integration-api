const express = require("express");
const OpportunityController = require("../../controller/OpportunityController");

const opportunityRouter = express.Router();

opportunityRouter.get("/", OpportunityController.findAll);

opportunityRouter.post("/", OpportunityController.create);

opportunityRouter.get("/get-won-deals", OpportunityController.getWonDeals);

opportunityRouter.get(
	"/save-deals-as-demand",
	OpportunityController.saveDealsAsDemand
);

opportunityRouter.get(
	"/get-won-deals-and-save-as-demand",
	OpportunityController.getWonDealsAndSaveAsDemand
);

opportunityRouter.get("/get-all-demands", OpportunityController.getAllDemands);

module.exports = opportunityRouter;
