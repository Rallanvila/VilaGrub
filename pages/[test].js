import { useRouter } from "next/dist/client/router";

export default function Test() {
	const router = useRouter();
	const { test } = router.query;
	return (
		<h1 style={{ margin: "2rem 0", padding: "0 2rem" }}>
			What you entered in the route will be displayed here:
			<span
				style={{
					padding: "1rem",
					marginLeft: "1rem",
					border: "2px solid red",
					borderRadius: "5px",
				}}
			>
				{test}
			</span>
		</h1>
	);
}
