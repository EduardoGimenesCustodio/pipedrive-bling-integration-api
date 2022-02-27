const axios = require("axios");

class GetAllDemands {
	async run() {
		const xml = await axios
			.get(`${process.env.BLING_API_URL}pedidos`, {
				headers: {
					"Content-Type": "text/xml",
				},
				params: {
					apikey: process.env.BLING_API_KEY,
				},
			})
			.catch((error) => {
				throw new Error(error);
			});

		let allDemands = xml.data.split("<pedidos>")[1];
		allDemands = allDemands.split("</pedidos>")[0];

		const demands = allDemands.split("</pedido>");
		demands.pop();

		return demands;
	}
}

module.exports = GetAllDemands;
