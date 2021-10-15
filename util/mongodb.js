const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url =
	"mongodb://avila:$avila:av11221@$[hostlist]/sample_analytics?authSource=admin";

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, client) {
	assert.equal(null, err);
	client.close();
});
