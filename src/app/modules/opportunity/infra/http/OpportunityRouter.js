const express = require("express");
const OpportunityController = require("../../controller/OpportunityController");

const opportunityRouter = express.Router();

opportunityRouter.get("/", OpportunityController.findAll);

opportunityRouter.post("/", OpportunityController.create);

opportunityRouter.get("/get-won-deals", OpportunityController.getWonDeals);

opportunityRouter.post(
	"/save-deals-as-demand",
	OpportunityController.saveDealsAsDemand
);

opportunityRouter.get(
	"/get-won-deals-and-save-as-demand",
	OpportunityController.getWonDealsAndSaveAsDemand
);

opportunityRouter.get("/get-all-demands", OpportunityController.getAllDemands);

opportunityRouter.get(
	"/get-all-demands-save-as-opportunity",
	OpportunityController.saveDemandsAsOpportunity
);

module.exports = opportunityRouter;
