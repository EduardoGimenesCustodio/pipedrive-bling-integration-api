const Opportunity = require("../model/Opportunity");
const GetWonDeals = require("../services/GetWonDeals");

class OpportunityController {
	async create(req, res) {
		try {
			const date = new Date(req.body.date);

			const dataToCreate = {
				date,
				value: req.body.value,
			};

			const data = await Opportunity.create(dataToCreate);

			return res.json(data);
		} catch (error) {
			return res.status(error.status || 500).json({ error: error.message });
		}
	}

	async findAll(req, res) {
		try {
			const data = await Opportunity.find({});

			return res.json(data);
		} catch (error) {
			return res.status(error.status || 500).json({ error: error.message });
		}
	}

	async getWonDealsAndSaveAsDemand(req, res) {
		try {
			const getWonDeals = new GetWonDeals();
			const wonDeals = await getWonDeals.run();

			return res.status(201).json(wonDeals);
		} catch (error) {
			return res.status(error.status || 500).json({ error: error.message });
		}
	}
}

module.exports = new OpportunityController();
