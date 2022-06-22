import { Position, Rectangle, Sorse, Square } from "sorse";

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
	// For some reason this just draws two red squares with a blue border, it's the right size though??????????
	// confused unga bunga
	component: () => {
		return (
			<>
				<Rectangle width={800} height={600} color={"green"}>
					<Square
						sideLength={100}
						color={"red"}
						border={{
							width: 20,
							color: "blue",
						}}
						pos={new Position(100, 100)}
					/>
				</Rectangle>
			</>
		);
	},
});
