const axios = require("axios");

class GetWonDeals {
	async run() {
		const wonDeals = await axios
			.get(`${process.env.PIPEDRIVE_API_URL}deals/search`, {
				params: {
					api_token: process.env.PIPEDRIVE_API_KEY,
					term: "Negócio",
					status: "won",
				},
			})
			.catch((error) => {
				throw new Error(error);
			});

		return wonDeals.data.data.items;
	}
}

module.exports = GetWonDeals;
