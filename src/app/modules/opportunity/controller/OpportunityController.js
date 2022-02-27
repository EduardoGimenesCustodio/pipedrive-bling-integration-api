const Opportunity = require("../model/Opportunity");
const GetAllDemands = require("../services/GetAllDemands");
const GetWonDeals = require("../services/GetWonDeals");
const SaveDealsAsDemand = require("../services/SaveDealsAsDemand");

class OpportunityController {
	async create(req, res) {
		try {
			const date = new Date(req.body.date);

			const dataToCreate = {
				date,
				value: req.body.value,
			};

			const data = await Opportunity.create(dataToCreate);

			return res.status(201).json(data);
		} catch (error) {
			return res.status(error.status || 500).json({ error: error.message });
		}
	}

	async findAll(req, res) {
		try {
			const data = await Opportunity.find({});

			return res.status(200).json(data);
		} catch (error) {
			return res.status(error.status || 500).json({ error: error.message });
		}
	}

	async getWonDeals(req, res) {
		try {
			const getWonDeals = new GetWonDeals();
			const wonDeals = await getWonDeals.run();

			return res.status(200).json(wonDeals);
		} catch (error) {
			return res.status(error.status || 500).json({ error: error.message });
		}
	}

	async saveDealsAsDemand(req, res) {
		try {
			const deals = req.body.deals;

			const saveDealsAsDemand = new SaveDealsAsDemand();
			const createdDemands = await saveDealsAsDemand.run(deals);

			return res.status(201).json({ createdDemands });
		} catch (error) {
			return res.status(error.status || 500).json({ error: error.message });
		}
	}

	async getWonDealsAndSaveAsDemand(req, res) {
		try {
			const getWonDeals = new GetWonDeals();
			const wonDeals = await getWonDeals.run();

			const saveDealsAsDemand = new SaveDealsAsDemand();
			const createdDemands = await saveDealsAsDemand.run(wonDeals);

			return res.status(201).json({ createdDemands });
		} catch (error) {
			return res.status(error.status || 500).json({ error: error.message });
		}
	}

	async getAllDemands(req, res) {
		try {
			const getAllDemands = new GetAllDemands();
			const demands = await getAllDemands.run();

			return res.status(200).json({ demands });
		} catch (error) {
			return res.status(error.status || 500).json({ error: error.message });
		}
	}
}

module.exports = new OpportunityController();
