import { Sorse, Text } from "sorse";

Sorse.init({
	name: "beans",
	canvas: {
		nativeSize: {
			width: 800,
			height: 600,
		},
	},
	author: "Wave",
	version: "1",
	component: (
		<>
			<Text text="Pee" color={"red"} />
		</>
	),
});
