const Opportunity = require("../model/Opportunity");

class SaveDemandsAsOpportunity {
	async run(demands) {
		let demandsData = [];
		let demandsByDate = [];
		let opportunities = [];

		await Promise.all(
			demands.map(async (demand) => {
				let date = demand.split("<data>")[1];
				date = date.split("</data>")[0];

				let value = demand.split("<valorunidade>")[1];
				value = value.split("</valorunidade>")[0];
				value = Number(value);

				demandsData.push({ date, value });
			})
		);

		demandsByDate.push(demandsData[demandsData.length - 1]);
		demandsData.pop();

		demandsData.map(async (demandData) => {
			let dateAlreadyExists = false;

			demandsByDate.map(async (demandByDate) => {
				if (demandByDate.date === demandData.date) {
					dateAlreadyExists = true;

					demandByDate.value += demandData.value;
				}
			});

			if (!dateAlreadyExists) {
				demandsByDate.push(demandData);
			}
		});

		await Promise.all(
			demandsByDate.map(async (demandByDate) => {
				const opportunity = await Opportunity.create(demandByDate);
				opportunities.push(opportunity);
			})
		);

		return opportunities;
	}
}

module.exports = SaveDemandsAsOpportunity;
