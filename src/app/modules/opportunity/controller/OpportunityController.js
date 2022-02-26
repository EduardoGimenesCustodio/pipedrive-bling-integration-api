const Opportunity = require("../model/Opportunity");

class OpportunityController {
	async create(req, res) {
		const date = new Date(req.body.date);

		const dataToCreate = {
			date,
			value: req.body.value,
		};

		const data = await Opportunity.create(dataToCreate);

		return res.json(data);
	}

	async findAll(req, res) {
		const data = await Opportunity.find({});

		return res.json(data);
	}
}

module.exports = new OpportunityController();
