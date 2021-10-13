import dbConnect from "../../startup/dbConnect";

dbConnect();
export default function (req, res) {
	res.json({ name: "Allan", lastName: "Vila", age: "34" });
}
