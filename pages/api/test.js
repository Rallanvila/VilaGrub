import Header from "../../components/header/Header";
import dbConnect from "../../startup/dbConnect";

dbConnect();

export default async (req, res) => {
	// res.send("Hello world");
	res.json({ test: "test" });
};
