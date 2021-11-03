const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please add a name"],
		trim: true,
		maxLength: [40, "Title cannot be more than 40 characters"],
		minLength: [5, "Title needs at least 5 characters"],
	},
	image: {
		type: String,
		required: [true, "Please add an image"],
		trim: true,
		maxLength: [200, "url cannot be more than 200 characters"],
		minLength: [7, "Image cannot be less than 7 characters"],
	},
	alt: {
		type: String,
		required: [true, "Please add an alt"],
		trim: true,
		maxLength: [50, "url cannot be more than 200 characters"],
		minLength: [3, "alt cannot be less than 7 characters"],
	},
	label: {
		type: String,
		required: [true, "Please add an label"],
		trim: true,
		maxLength: [50, "url cannot be more than 200 characters"],
		minLength: [3, "label cannot be less than 7 characters"],
	},
	page: {
		type: String,
		required: [true, "Please add an an href"],
		trim: true,
		maxLength: [200, "href cannot be more than 200 characters"],
	},
	price: {
		type: Number,
		required: [true, "Please add an price"],
		trim: true,
		maxLength: [20, "price cannot be more than 20 characters"],
	},
	size: {
		type: [String],
		trim: true,
		enum: ["small", "medium", "large"],
		maxLength: [10, "size cannot be more than 10 characters"],
		lowercase: true,
	},
	flavors: {
		type: [String],
		required: [true, "please enter flavor options"],
		trim: true,
		maxLength: [200, "flavors cannot be more than 200 characters"],
	},
	addIns: {
		type: [String],
		trim: true,
		maxLength: [200, "add-ins cannot be more than 200 characters"],
	},
	sweeteners: {
		type: [String],
		trim: true,
		maxLength: [200, "add-ins cannot be more than 200 characters"],
	},
	date: { type: Date, default: Date.now },
});

const Drink = mongoose.model("Drink", drinkSchema);

async function createDrink() {
	const drink = new Drink({
		name: "Cafe Americano",
		image:
			"https://images.pexels.com/photos/544113/pexels-photo-544113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		alt: "hot coffee",
		label: "Hot Coffees",
		page: "/hot-coffees",
		price: 2.99,
		size: ["small", "medium", "large"],
		flavors: [
			"caramel",
			"cinnamon dolce",
			"mocha",
			"vanilla",
			"sugar Free Vanilla",
		],
		addIns: [
			"milk",
			"skim milk",
			"lowfat milk",
			"oat milk",
			"almond milk",
			"cream",
		],
		sweeteners: ["sugar", "splenda", "stevia", "honey"],
	});
	try {
		const result = await drink.save();
		console.log(result);
	} catch (ex) {
		for (field in ex.errors) console.log(ex.errors[field].message);
	}
}

// module.exports = mongoose.models.Drink || mongoose.model("Drink", DrinkSchema);
