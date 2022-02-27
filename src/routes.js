const express = require("express");
const opportunityRouter = require("./app/modules/opportunity/infra/http/OpportunityRouter");

const routes = express.Router();

routes.get("/", async (req, res) => {
	res.send();
});

routes.use("/opportunity", opportunityRouter);

module.exports = routes;
