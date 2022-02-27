const axios = require("axios");

class SaveDealsAsDemand {
	async run(deals) {
		let createdDemands = [];

		await Promise.all(
			deals.map(async (deal) => {
				const client = deal.item.organization.name;
				const code = deal.item.id;
				const description = deal.item.title;
				const value = deal.item.value;

				const demandData = `<?xml version="1.0" encoding="UTF-8"?>
                    <pedido>
                        <cliente>
                            <nome>${client}</nome>
                            <tipoPessoa>J</tipoPessoa>
                        </cliente>
                        <itens>
                            <item>
                                <codigo>${code}</codigo>
                                <descricao>${description}</descricao>
                                <vlr_unit>${value}</vlr_unit>
                            </item>
                        </itens>
                    </pedido>`;

				const createdDemand = await axios
					.post(
						`${process.env.BLING_API_URL}pedido/json`,
						{},
						{
							headers: {
								"Content-Type": "text/xml",
							},
							params: {
								apikey: process.env.BLING_API_KEY,
								xml: demandData,
							},
						}
					)
					.catch((error) => {
						throw new Error(error);
					});

				if (createdDemand.data.retorno.erros)
					throw new Error(createdDemand.data.retorno.erros[0].erro.msg);

				createdDemands.push(createdDemand.data.retorno.pedidos[0].pedido);
			})
		);

		return createdDemands;
	}
}

module.exports = SaveDealsAsDemand;
