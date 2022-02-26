const mongoose = require("mongoose");

const OpportunitySchema = new mongoose.Schema(
	{
		date: {
			type: Date,
			required: true,
		},
		value: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Opportunity", OpportunitySchema);
