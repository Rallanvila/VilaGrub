module.exports = {
	reactStrictMode: true,
	target: "serverless",
	images: {
		domains: ["images.pexels.com"],
	},
	env: {
		MONGO_URI:
			"mongodb+srv://avila:av11221@cluster0.2kofx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	},
};
